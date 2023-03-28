import { FC, forwardRef, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as SimpleShader from "../SimpleShader/SimpleShader";
// import { ToonShader } from "../ToonShader/ToonShader";
import { GhibliShader } from "../GhibliShader/GhibliShader";
import { Color, Vector3 } from 'three';

export const Trees: FC<any> = forwardRef((props, ref) => {
    const { nodes }: any = useGLTF('/trees.glb');
    // const uniforms: any = useMemo(() => {
    //     return {
    //         ...ToonShader.uniforms,
    //         uBaseColor: { value: new Color('#49897C') },
    //         uAmbientLightColor: { value: new Color('#050505') },
    //         uDirLightColor: { value: new Color('white') },
    //         uDirLightPos: { value: new Vector3(15, 15, 15) },
    //         uLineColor1: { value: new Color('#808080') },
    //         uLineColor2: { value: new Color('black') }
    //     }
    // }, [])
    const uniforms: any = useMemo(() => {
        return {
            colorMap: {
                value: [
                    new Color('#427062').convertLinearToSRGB(),
                    new Color('#33594e').convertLinearToSRGB(),
                    new Color('#234549').convertLinearToSRGB(),
                    new Color('#1e363f').convertLinearToSRGB(),
                ]
            },
            brightnessThreholds: {
                value: [
                    0.9,
                    0.45,
                    0.001
                ],
            },
            lightPosition: {
                value: new Vector3(15, 15, 15),
            }
        }
    }, [])
    // const toneMap = useMemo(() => {
    //     const format = RedFormat;
    //     const colors = new Uint8Array(4)
    //     for(let c = 0; c <= colors.length; c++) {
    //         colors[c] = (c / colors.length) * 256;
    //     }
    //     const grandientMap = new DataTexture(colors, colors.length, 1, format);
    //     grandientMap.needsUpdate = true;
    //     return grandientMap;
    // }, []);
    return (
        <group
            { ...props }
            dispose={null}
            ref={ref}
        >
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.Foliage.geometry}
                position={[0.33, -0.5, -0.68]}
            >
                <shaderMaterial 
                    attach={"material"} 
                    // { ...SimpleShader }
                    { ...GhibliShader }
                    uniforms={uniforms}
                />
            </mesh>
        </group>
    )
})