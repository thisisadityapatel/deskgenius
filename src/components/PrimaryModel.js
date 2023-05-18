import React from 'react'
import { useState, useEffect, useRef, useMemo } from 'react'
import { Canvas, useFrame, useLoader, raycaster, axesHelper} from '@react-three/fiber'
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