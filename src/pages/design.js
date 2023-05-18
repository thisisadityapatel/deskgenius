import React from 'react'
import Header from '@/components/Header';
import {useState } from 'react'
import { Canvas, useFrame, raycaster} from '@react-three/fiber'
import { useGLTF, OrbitControls, Stats} from '@react-three/drei'
import ThreeModel from '@/components/ThreeModel'
import PrimaryModel from '@/components/PrimaryModel';
import secondarymodels from '_data/modelcoord.json';

const Design = (props) => {
    const [cameraInitialPosition, resetCamera] = useState([0, 2, 5]);
    return(
        <Canvas dpr={[1,2]} shadows camera={{fov: 75, position: cameraInitialPosition}} style={{position: "absolute"}}>
            <ambientLight intensity={2} />
            <color attach="background" args={["black"]} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}/>
            <pointLight position={[-10, -10, -10]}/>
            <PrimaryModel rotation={[0, 0, 0]} position={[ 0, 0, 0]} scale={1} modelLocation={"/desks/desk1.glb"}/>
            <ThreeModel rotation={[0, -Math.PI/2, 0]} position={[0, 1.42, 0.6]} scale={0.06} modelLocation={"/keyboards/keyboard1.glb"}/>
            <ThreeModel rotation={[0, Math.PI/2, 0]} position={[0, 1.30, -0.1]} scale={0.06} modelLocation={"/monitors/monitor1.glb"}/>
            <ThreeModel rotation={[0, Math.PI, 0]} position={[0.7, 1.42, 0.56]} scale={0.07} modelLocation={"/mouses/mouse1.glb"}/>
            <OrbitControls/>
            <gridHelper args={[20, 20, 0xff0000, 'teal']}/>
            <color attach="background" args={["black"]} />
            <Stats />
        </Canvas>
    );
}

export default Design