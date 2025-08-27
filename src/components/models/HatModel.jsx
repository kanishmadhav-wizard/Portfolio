"use client";
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/hat-transformed.glb')

  const modelRef = useRef()
  
    useFrame((state, delta, xrFrame) => {
      console.log(state.clock)
      modelRef.current.position.y = -2+Math.sin(state.clock.elapsedTime*0.2);
    })

  return (
    <group {...props} dispose={null}
    ref={modelRef}
    position={[0,-2,0]}
    scale={[2.5,2.5,2.5]}
    rotation={[1.5,0,0]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials['head_diff_000_a_whi.001']}
          position={[0.006, 1.307, -0.233]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/hat-transformed.glb')