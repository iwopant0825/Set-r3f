import {
  PointMaterial,
  OrbitControls,
  useGLTF,
  Stars,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as random from "maath/random/dist/maath-random.esm";

function App() {
  return (
    <>
      <Canvas>
        <OrbitControls enablePan={false} minDistance={3} maxDistance={11} />
        <ambientLight intensity={1} />
        <directionalLight intensity={5} position={[1, 1, 1]} />
        <Model />
        <Starss />
        <color attach={"background"} args={["#0f011c"]} />
      </Canvas>
    </>
  );
}

const Starss = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 20 })
  );

  return (
    <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
      <Stars positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#eaff00"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Stars>
    </group>
  );
};

function Model() {
  const model = useGLTF("/earth.glb");
  return (
    <>
      <primitive rotation={[0.6, -1.7, 0]} object={model.scene} scale={0.25} />
    </>
  );
}

export default App;
