import React from 'react'
import { useGLTF, OrbitControls } from '@react-three/drei'

const PrimaryModel= (props) => {
  const { scene } = useGLTF(props.modelLocation);
  return (
    <group>
        <primitive object={scene} {...props}/>
    </group>
  )
}

export default PrimaryModel