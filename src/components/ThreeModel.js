import React from 'react'
import { useState, useEffect, useRef, useMemo } from 'react'
import { useGLTF, OrbitControls, TransformControls } from '@react-three/drei'

function useEventListener(eventName, handler, element = window) {
  const savedHandler = useRef();
  
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;
      const eventListener = (event) => savedHandler.current(event);
      element.addEventListener(eventName, eventListener);
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element]
  );
}

const ThreeModel = (props) => {
  let ref = useRef();
  const [selected, click] = useState(false)
  const { scene } = useGLTF(props.modelLocation);
  const copiedScene = useMemo(() => scene.clone(), [scene])
  const [coordinates, setCoordinates] = useState(props.position);
  const [rotation, setRotation] = useState(props.rotation);

  useEffect(() => {
    setCoordinates(props.position);
  }, [props.tablebuffer])

  useEventListener("keydown", (event) => {
    if(selected){
      switch (event.keyCode){
        //x-z plane co-ordination
        case 37:setCoordinates([coordinates[0]-0.04, coordinates[1], coordinates[2]]);break;
        case 39:setCoordinates([coordinates[0]+0.04, coordinates[1], coordinates[2]]);break;
        case 38:setCoordinates([coordinates[0], coordinates[1], coordinates[2]-0.04]);break;
        case 40:setCoordinates([coordinates[0], coordinates[1], coordinates[2]+0.04]);break;

        // y-axis  co-ordination
        case 87:setCoordinates([coordinates[0], coordinates[1]+0.04, coordinates[2]]);break;
        case 83:setCoordinates([coordinates[0], coordinates[1]-0.04, coordinates[2]]); break;

        //rotation co-ordination
        case 65:setRotation([rotation[0], rotation[1]-Math.PI/12, rotation[2]]); break;
        case 68:setRotation([rotation[0], rotation[1]+Math.PI/12, rotation[2]]);break;

        //removing the element
        case 88: props.removeModel(props.elementModelName, props.elementModelCount);
      }
    }
  });

  const handleClick = () => {
    props.enableOrbitControl(selected);
    click(!selected);
  }

  return (
    <group>
      <TransformControls ref={ref} position={coordinates} enabled={selected} onStart={()=>{console.log("Testig")}}>
        <primitive object={copiedScene} onClick={(event) => handleClick()} scale={selected?props.scale+(props.scale * 0.1):props.scale} rotation={rotation}/>
      </TransformControls>
    </group>
  )
}

export default ThreeModel

