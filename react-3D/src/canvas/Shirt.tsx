import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import React from "react";
import { useSnapshot } from "valtio";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

import { state } from "../store";

export default function Shirt() {
  const snap = useSnapshot(state);

  const { nodes, materials } = useGLTF("/shirt_baked.glb") as {
    nodes: any;
    materials: any;
  }

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  return (
    <group>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      />
    </group>
  );
}
