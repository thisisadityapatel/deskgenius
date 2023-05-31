import React, { useEffect, useState } from 'react'
import { Canvas, useFrame, raycaster} from '@react-three/fiber'
import { useGLTF, OrbitControls, Stats} from '@react-three/drei'
import ThreeModel from '@/components/ThreeModel'
import PrimaryModel from '@/components/PrimaryModel';
import secondarymodels from '_data/modelcoord.json';
import deskmodels from '_data/deskcoord.json';

const Design2 = ({maintable, othermodels, newOtherModels, cameraposition, tablebuffer, removeModel, removeOtherModel}) => {
    const [orbitControlFlag, setOrbitControlFlag] = useState(true);
    const [trackSelectedModels, setTrackSelectedModels] = useState(0);

    const incrementSelectedModels = () => {
        if(trackSelectedModels == 0){
            setOrbitControlFlag(false);
        }
        setTrackSelectedModels(trackSelectedModels + 1);
    }

    const decrementSelectedModels = () => {
        if(trackSelectedModels == 1){
            setOrbitControlFlag(true);
        }
        setTrackSelectedModels(trackSelectedModels - 1);
    }

    const enableOrbitControl = (input) => {
        setOrbitControlFlag(input);
    }

    return(
        <Canvas dpr={[1, 2]} shadows camera={{fov: 75, position: cameraposition}} style={{position: "absolute"}}>
            <ambientLight intensity={2} />
            <color attach="background" args={["black"]} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}/>
            <pointLight position={[-10, -10, -10]}/>
            <PrimaryModel rotation={[0, 0, 0]} 
                position={deskmodels[maintable].position} 
                scale={deskmodels[maintable].scale} 
                modelLocation={deskmodels[maintable].location}/>
            {
                othermodels.map((element) => {
                    let thiselement = secondarymodels[element.name];
                    let thisrotation = [Math.PI * thiselement.rotationx, Math.PI * thiselement.rotationy, Math.PI * thiselement.rotationz]; 
                    let thisposition = [thiselement.position[0], thiselement.position[1] + tablebuffer, thiselement.position[2]];
                    return <ThreeModel key={element.name + element.count} 
                        rotation={thisrotation} 
                        position={thisposition} 
                        scale={thiselement.scale} 
                        modelLocation={thiselement.location} 
                        removeModel={removeModel} 
                        elementModelName={element.name} 
                        elementModelCount={element.count} 
                        tablebuffer={tablebuffer} 
                        incrementSelectedModels={incrementSelectedModels}
                        decrementSelectedModels={decrementSelectedModels}/>
                })
            }
            {
                newOtherModels.map((element) => {
                    let thiselement = secondarymodels[element.name];
                    let thisrotation = [Math.PI * thiselement.rotationx, Math.PI * thiselement.rotationy, Math.PI * thiselement.rotationz]; 
                    let thisposition = [-1, thiselement.position[1] + tablebuffer, 0];
                    return <ThreeModel key={element.name + element.count} 
                        rotation={thisrotation} 
                        position={thisposition} 
                        scale={thiselement.scale} 
                        modelLocation={thiselement.location} 
                        removeModel={removeOtherModel} 
                        elementModelName={element.name} 
                        elementModelCount={element.count} 
                        tablebuffer={tablebuffer} 
                        incrementSelectedModels={incrementSelectedModels}
                        decrementSelectedModels={decrementSelectedModels}/>
                })
            }
            <OrbitControls enabled={orbitControlFlag}/>
            <gridHelper args={[20, 20, 0xff0000, 'teal']}/>
            <Stats />
        </Canvas>
    );
}

export default Design2
