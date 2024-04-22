import { Environment, MeshPortalMaterial, OrbitControls, RoundedBox, Sky, Text, useGLTF, useTexture } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import * as THREE from 'three'
import { Model } from "./model"
import { Tv } from "./Tv"
import { Remote } from "./Remote"
import { Suspense, useEffect, useRef, useState } from "react"
import Loading from "./Loding"
import { Table } from "./table"

function App() {
  const table = useGLTF('/round_table.glb')
  const [on,setOn] = useState(false)
  console.log(on)
  return (
    <>
      <Suspense fallback={<Loading/>}>
        <Canvas gl={{antialias:true}} shadows>
          <color attach={'background'} args={['black']}/>
          <directionalLight shadow-mapSize={4096} intensity={1} castShadow position={[-1,2,1]}/>
          <OrbitControls enablePan={false} enableZoom={false}/>
          {on?<Screen/>:null}
          <Tv castShadow scale={3}/>
          <Remote castShadow onClick={()=>{setOn(!on)}} scale={0.07} position={[1,-1,2]}/>
          <Table scale={10} position={[0,-5,0]}/>
        </Canvas>        
      </Suspense>

    </>
  )
}

function Screen(){
  return(
    <>
      <RoundedBox position={[0,0.05,0.1]} args={[3.284,1.93,0.1]} >
        <MeshPortalMaterial side={THREE.DoubleSide}>
          <Model scale={0.0024}/>
          <Back/>
        </MeshPortalMaterial>   
      </RoundedBox>  
    </>
  )
}

function Back(){
  const map = useTexture("/back.jpg")
  return(
    <>
      <ambientLight intensity={1}/>
      <Environment preset="sunset"/>
      <mesh>
        <sphereGeometry args={[5,64,64]}/>
        <meshStandardMaterial map={map} side={THREE.BackSide}/>
      </mesh>
    </>
  )
}

export default App
