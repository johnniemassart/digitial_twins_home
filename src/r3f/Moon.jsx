import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useTexture,
  Stars,
  Environment,
  ContactShadows,
  PerspectiveCamera,
} from "@react-three/drei";

const MoonSphere = ({ position, size }) => {
  const texture = useTexture("../src/assets/moonmap1k.jpg");
  return (
    <mesh position={position}>
      <ambientLight intensity={1} />
      <directionalLight />
      <Environment preset="night" />
      <sphereGeometry args={[size, 32, 32]} />
      <meshPhongMaterial map={texture} displacementScale={0.2} />
    </mesh>
  );
};

const Moon = () => {
  return (
    <Canvas>
      <Suspense>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5}
          enableZoom={false}
          enablePan={false}
          mouseButtons={false}
        />
        <Stars count={500} />
        <MoonSphere position={[0, 0, 0]} size={1.25} />
      </Suspense>
    </Canvas>
  );
};

export default Moon;
