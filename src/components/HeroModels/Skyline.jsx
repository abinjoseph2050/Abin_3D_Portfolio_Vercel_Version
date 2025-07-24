import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Skyline(props) {
  const { nodes, materials } = useGLTF('/models/skyline_r34.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Material} />
        <mesh geometry={nodes.Object_4.geometry} material={materials['Material.009']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Object_6.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Object_7.geometry} material={materials['Material.011']} />
        <mesh geometry={nodes.Object_8.geometry} material={materials['Material.032']} />
        <mesh geometry={nodes.Object_9.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Object_10.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Object_11.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Object_12.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Object_13.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Object_14.geometry} material={materials['Material.012']} />
        <mesh geometry={nodes.Object_15.geometry} material={materials['Material.013']} />
        <mesh geometry={nodes.Object_16.geometry} material={materials['Material.015']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/skyline_r34.glb')
