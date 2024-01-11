import { useRef } from "react";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const Backdrop = () => {
  const shadowsRef = useRef(null);

  return (
    <AccumulativeShadows
      ref={shadowsRef}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      {/* Randomized Lights */}
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.8}
        ambient={0.5}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.4}
        ambient={0.6}
        position={[5, 5, 5]}
      />

      {/* Ambient Light */}
      {/*
        Ambient light provides a base level of illumination
        throughout the scene.
      */}
      <ambientLight intensity={0.8} />
    </AccumulativeShadows>
  );
};

export default Backdrop;
