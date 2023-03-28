import { FC, useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Trees } from "../Trees/Trees"

// interface BoxProp {
//     position: [
//         number,
//         number,
//         number
//     ]
// }

// const Box: FC<BoxProp> = props => {
//     const mesh = useRef<any>();
//     const [hovered, setHovered] = useState<boolean>(false);
//     const [active, setActive] = useState<boolean>(false);
//     useFrame((state, delta) => {
//         mesh.current.rotation.x += delta
//     })

//     return (
//         <mesh 
//             { ...props } 
//             ref={mesh} 
//             scale={active ? 1.5 : 1}
//             castShadow
//             onClick={(event) => setActive(!active)}
//             onPointerOver={event => setHovered(true)}
//             onPointerOut={event => setHovered(false)}
//         >
//             <boxGeometry args={[1, 1, 1]} />
//             <meshStandardMaterial color={hovered ? "hotpink" : 'orange'} />
//         </mesh>
//     )
// }

export const Scene = () => {
    const refTrees = useRef<any>(null);
    useFrame(() => {
        const { current: group } = refTrees
        if(group) {
            group.rotation.x = group.rotation.y += 0.01;
        }
    })
  return (
    <>
        <ambientLight intensity={0.1} />
        <directionalLight
            color={'white'}
            position={[15, 15, 15]} 
            castShadow 
            shadow-mapSize-width={2048} 
            shadow-mapSize-height={2048} 
        />
        {/* <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} /> */}
        <Trees ref={refTrees} />
    </>
  )
}
