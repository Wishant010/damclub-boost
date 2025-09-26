import { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

interface SilkShaderMeshProps {
  hue?: number;
  saturation?: number;
  brightness?: number;
  speed?: number;
}

const SilkShaderMesh = ({
  hue = 130, // Light green hue
  saturation = 0.6,
  brightness = 1.0,
  speed = 0.3
}: SilkShaderMeshProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { size, viewport } = useThree();

  const uniforms = useMemo(() => ({
    iTime: { value: 0 },
    iResolution: { value: new THREE.Vector3(size.width, size.height, 1) },
    iMouse: { value: new THREE.Vector4(0, 0, 0, 0) },
    hue: { value: hue },
    saturation: { value: saturation },
    brightness: { value: brightness },
    speed: { value: speed }
  }), [size.width, size.height, hue, saturation, brightness, speed]);

  // Add mouse move listener
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float iTime;
    uniform vec3 iResolution;
    uniform vec4 iMouse;
    uniform float hue;
    uniform float saturation;
    uniform float brightness;
    uniform float speed;
    varying vec2 vUv;

    float noise(vec2 p) {
      return smoothstep(-0.5, 0.9, sin((p.x - p.y) * 555.0) * sin(p.y * 1444.0)) - 0.4;
    }

    float fabric(vec2 p) {
      const mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
      float f = 0.4 * noise(p);
      f += 0.3 * noise(p = m * p);
      f += 0.2 * noise(p = m * p);
      return f + 0.1 * noise(m * p);
    }

    float silk(vec2 uv, float t) {
      // Add mouse influence to the pattern
      vec2 mouseInfluence = iMouse.xy * 0.1;
      uv += mouseInfluence * 0.05;

      float s = sin(5.0 * (uv.x + uv.y + cos(2.0 * uv.x + 5.0 * uv.y)) + sin(12.0 * (uv.x + uv.y)) - t);
      s = 0.7 + 0.3 * (s * s * 0.5 + s);
      s *= 0.9 + 0.6 * fabric(uv * min(iResolution.x, iResolution.y) * 0.0006);
      return s * 0.9 + 0.1;
    }

    float silkd(vec2 uv, float t) {
      float xy = uv.x + uv.y;
      float d = (5.0 * (1.0 - 2.0 * sin(2.0 * uv.x + 5.0 * uv.y)) + 12.0 * cos(12.0 * xy)) * cos(5.0 * (cos(2.0 * uv.x + 5.0 * uv.y) + xy) + sin(12.0 * xy) - t);
      return 0.005 * d * (sign(d) + 3.0);
    }

    vec3 hsl2rgb(vec3 hsl) {
      float h = hsl.x;
      float s = hsl.y;
      float l = hsl.z;

      float c = (1.0 - abs(2.0 * l - 1.0)) * s;
      float x = c * (1.0 - abs(mod(h / 60.0, 2.0) - 1.0));
      float m = l - c / 2.0;

      vec3 rgb;
      if (h < 60.0) rgb = vec3(c, x, 0.0);
      else if (h < 120.0) rgb = vec3(x, c, 0.0);
      else if (h < 180.0) rgb = vec3(0.0, c, x);
      else if (h < 240.0) rgb = vec3(0.0, x, c);
      else if (h < 300.0) rgb = vec3(x, 0.0, c);
      else rgb = vec3(c, 0.0, x);

      return rgb + m;
    }

    void main() {
      vec2 fragCoord = vUv * iResolution.xy;
      float mr = min(iResolution.x, iResolution.y);
      vec2 uv = fragCoord / mr;

      // Add mouse wave effect
      float mouseDistance = distance(vUv, vec2(0.5 + iMouse.x * 0.5, 0.5 - iMouse.y * 0.5));
      float mouseWave = sin(mouseDistance * 10.0 - iTime * 2.0) * 0.02;

      float t = iTime * speed;
      uv.y += 0.03 * sin(8.0 * uv.x - t) + mouseWave;

      float s = sqrt(silk(uv, t));
      float d = silkd(uv, t);

      // Create lighter base silk pattern
      vec3 c = vec3(s);
      c += 0.5 * vec3(1.0, 0.9, 0.7) * d; // Reduced intensity for lighter look
      c *= 1.0 - max(0.0, 0.6 * d); // Less darkening

      // Lighter inversion
      c = pow(c, 0.4 / vec3(0.6, 0.55, 0.5));
      c = 1.0 - c;

      // Apply lighter green tinting
      float lum = dot(c, vec3(0.299, 0.587, 0.114));

      // Create balanced green colors
      vec3 lightGreen = hsl2rgb(vec3(hue, saturation * 0.7, lum * 0.5 + 0.3)); // Balanced base
      vec3 brightGreen = hsl2rgb(vec3(hue + 10.0, saturation * 0.8, min(1.0, lum * brightness * 0.7 + 0.2)));

      // Mix for balanced appearance
      c = mix(lightGreen, brightGreen, c.r * 0.6);

      // Add subtle highlights
      vec3 highlight = hsl2rgb(vec3(hue + 30.0, saturation * 0.3, 0.75));
      c = mix(c, highlight, smoothstep(0.7, 0.95, lum) * 0.25);

      // Balanced brightness
      c = pow(c, vec3(0.95));
      c = c * 0.95; // Balanced overall brightness
      c = clamp(c, 0.0, 1.0);

      // Add subtle mouse glow
      float glowIntensity = 1.0 - smoothstep(0.0, 0.5, mouseDistance);
      c += vec3(0.1, 0.15, 0.05) * glowIntensity * 0.2;

      gl_FragColor = vec4(c, 1.0);
    }
  `;

  useFrame((state, delta) => {
    if (meshRef.current) {
      uniforms.iTime.value += delta;

      // Smooth mouse movement
      uniforms.iMouse.value.x += (mouseRef.current.x - uniforms.iMouse.value.x) * 0.1;
      uniforms.iMouse.value.y += (mouseRef.current.y - uniforms.iMouse.value.y) * 0.1;
      uniforms.iMouse.value.z = 1.0;
    }
  });

  // Scale the mesh to cover the viewport
  const scale = Math.max(viewport.width, viewport.height) * 1.1;

  return (
    <mesh ref={meshRef} scale={[scale, scale, 1]}>
      <planeGeometry args={[1, 1, 64, 64]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

interface SilkShaderProps {
  className?: string;
  hue?: number;
  saturation?: number;
  brightness?: number;
  speed?: number;
}

const SilkShader = ({
  className = '',
  hue = 130, // Light green
  saturation = 0.6,
  brightness = 1.0,
  speed = 0.3
}: SilkShaderProps) => {
  // Disable on mobile for performance
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  if (isMobile) {
    return (
      <div className={`absolute inset-0 ${className}`}>
        <div className="w-full h-full bg-gradient-to-br from-green-800 via-green-700 to-emerald-600"></div>
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 1], fov: 50 }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 0.9
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <color attach="background" args={['#2d7a2e']} />
        <SilkShaderMesh
          hue={hue}
          saturation={saturation}
          brightness={brightness}
          speed={speed}
        />
      </Canvas>
    </div>
  );
};

export default SilkShader;