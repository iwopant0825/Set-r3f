/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/tv.glb -o src/Tv.jsx 
Author: Warkarma (https://sketchfab.com/warkarma)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/2010-flat-screen-tv-7d46ca5855b0496dbb289cbe7366c850
Title: 2010 Flat screen TV
*/

import React, { useRef } from 'react'
import { Environment, useGLTF } from '@react-three/drei'

export function Tv(props) {
  const { nodes, materials } = useGLTF('/tv.glb')
  return (
    <>
    <Environment preset='city'/>
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.572}>
        <mesh castShadow geometry={nodes.defaultMaterial.geometry} material={materials['01___Default']} rotation={[Math.PI / 2, 0, 0]} />
      </group>
    </group>    
    </>

  )
}

useGLTF.preload('/tv.glb')