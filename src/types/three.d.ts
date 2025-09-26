import { Object3DNode, MaterialNode } from '@react-three/fiber';
import { BufferGeometry, Material, Mesh } from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: Object3DNode<Mesh, typeof Mesh>;
      planeGeometry: Object3DNode<BufferGeometry, typeof BufferGeometry>;
      shaderMaterial: MaterialNode<Material, typeof Material>;
    }
  }
}