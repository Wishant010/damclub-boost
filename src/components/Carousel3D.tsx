import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

interface Carousel3DProps {
  items?: string[];
  width?: number;
  height?: number;
  containerClass?: string;
}

const Carousel3D = ({
  items = [],
  width = 450,
  height = 600,
  containerClass = ""
}: Carousel3DProps) => {
  const carouselContainer = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentX = useRef(0);
  const sensitivity = 0.0025;
  const animationIdRef = useRef<number>();

  const sceneRef = useRef<THREE.Scene>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const rendererRef = useRef<CSS3DRenderer>();
  const carouselRef = useRef<THREE.Object3D>();
  const radius = 750;

  useEffect(() => {
    if (!carouselContainer.current) return;

    // Store container reference for cleanup
    const container = carouselContainer.current;

    // Setup scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Setup camera
    const camera = new THREE.PerspectiveCamera(50, 1, 1, 5000);
    camera.position.z = 550;
    camera.position.y = 70;
    cameraRef.current = camera;

    // Setup renderer
    const renderer = new CSS3DRenderer();
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    renderer.setSize(containerWidth, containerHeight);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create carousel
    const carousel = new THREE.Object3D();
    scene.add(carousel);
    carouselRef.current = carousel;

    // Add items
    items.forEach((image, index) => {
      const element = document.createElement('div');
      element.style.width = `${width}px`;
      element.style.height = `${height}px`;
      element.className = 'rounded-lg shadow-2xl';
      element.style.backgroundImage = `url(${image})`;
      element.style.backgroundSize = 'cover';
      element.style.backgroundPosition = 'center';

      const object = new CSS3DObject(element);
      const angle = (index / items.length) * Math.PI * 2;
      object.position.setFromSphericalCoords(radius, Math.PI / 2, angle);
      object.lookAt(carousel.position);

      carousel.add(object);
    });

    // Initial rotation
    carousel.rotation.x = THREE.MathUtils.degToRad(20);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      if (!isDragging.current && carouselRef.current) {
        carouselRef.current.rotation.y += 0.005;
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();

    // Resize handler
    const handleResize = () => {
      if (!carouselContainer.current || !cameraRef.current || !rendererRef.current) return;

      const width = carouselContainer.current.clientWidth;
      const height = carouselContainer.current.clientHeight;

      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      window.removeEventListener('resize', handleResize);
      
      // Use the stored container reference
      const renderer = rendererRef.current;
      
      if (container && renderer) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [items, width, height]);

  const onDragStart = (event: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    startX.current = 'touches' in event ? event.touches[0].clientX : event.clientX;
    currentX.current = startX.current;
  };

  const onDragEnd = () => {
    isDragging.current = false;
  };

  const handleDrag = (clientX: number) => {
    const deltaX = clientX - currentX.current;
    currentX.current = clientX;

    if (carouselRef.current) {
      carouselRef.current.rotation.y += -deltaX * sensitivity;
    }
  };

  const onMouseMove = (event: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleDrag(event.clientX);
  };

  const onTouchMove = (event: React.TouchEvent) => {
    if (!isDragging.current) return;
    event.preventDefault();
    handleDrag(event.touches[0].clientX);
  };

  return (
    <div
      ref={carouselContainer}
      className={`w-full h-[60vh] relative ${containerClass}`}
    >
      <div
        className="absolute top-[40%] translate-y-[-50%] left-0 w-full h-[80%] z-[100]"
        onMouseDown={onDragStart}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        onMouseMove={onMouseMove}
        onTouchStart={onDragStart}
        onTouchEnd={onDragEnd}
        onTouchMove={onTouchMove}
      />
    </div>
  );
};

export default Carousel3D;