"use client";

import { OrbitControls, Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Computer from "./Computer";

const ContactExperience = () => {
  return (
    <>
      <Canvas
        style={{ width: "100%", height: "100%" }}
        shadows
        dpr={[1, 1.5]}  // Limit device pixel ratio for better performance
        frameloop="demand" // renders only when scene changes or user interacts
        camera={{ position: [0, 3, 7], fov: 45 }}
      >
        <ambientLight intensity={0.5} color="#fff4e6" />
        <directionalLight position={[5, 5, 3]} intensity={2.0} color="#ffd9b3" />
        <directionalLight
          position={[5, 9, 1]}
          castShadow
          intensity={1.5}
          color="#ffd9b3"
          shadow-mapSize-width={512}    // lowered shadow map size for perf
          shadow-mapSize-height={512}
        />
        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />

        <group scale={[1, 1, 1]}>
          <mesh
            receiveShadow
            position={[0, -1.5, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <planeGeometry args={[30, 30]} />
            <meshStandardMaterial color="#a46b2d" />
          </mesh>
        </group>

        <group scale={0.03} position={[0, -1.49, -2]} castShadow>
          <Computer />
        </group>
      </Canvas>

      {/* Drei Loader shows loading progress for the model */}
      <Loader />
    </>
  );
};

export default ContactExperience;