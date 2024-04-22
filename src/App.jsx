import { Environment, MeshPortalMaterial, OrbitControls, RoundedBox, Sky, Text, useTexture } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import * as THREE from 'three'
import { Model } from "./model"

function App() {
  return (
    <>
      <Canvas>
        <RoundedBox args={[2,3,0.1]} >
          <MeshPortalMaterial side={THREE.DoubleSide}>
            <Model scale={0.0024}/>
            <Back/>
          </MeshPortalMaterial>
        </RoundedBox>
      </Canvas>
    </>
  )
}

function Back(){
  const map = useTexture("/back.jpg")
  return(
    <>
      <ambientLight intensity={1}/>
      <Environment preset="sunset"/>
      <OrbitControls/>
      <mesh>
        <sphereGeometry args={[5,64,64]}/>
        <meshStandardMaterial map={map} side={THREE.BackSide}/>
      </mesh>
    </>
  )
}

export default App
