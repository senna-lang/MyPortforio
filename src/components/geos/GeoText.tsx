"use client";

import { Text3D } from "@react-three/drei";
import { Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import { useWindowSize } from "../../common/utils/useWindowSize";

type Position = [number, number, number];

interface TextProps {
  position: Position;
  text: string;
  fontSize: number;
}

export const Rig = ({ v = new Vector3() }) => {
  return useFrame((state) => {
    state.camera.position.lerp(
      v.set(state.mouse.x / 6, state.mouse.y / 6, 10),
      0.1,
    );
  });
};

export const Texts = (props: TextProps) => {
  return (
    <Text3D {...props} font="/fonts/Roboto_Bold.json" letterSpacing={0.02}>
      {props.text}
      <meshBasicMaterial wireframe />
    </Text3D>
  );
};

const GeoText = () => {
  const [width] = useWindowSize();
  return (
    <>
      <Rig />
      <Texts
        position={[-5, -0.8, width >= 768 ? 1 : -4.5]}
        text={"Sena Inomata"}
        fontSize={1.2}
      />
      <Texts
        position={[-5, -2.2, width >= 768 ? 1 : -4.5]}
        text={"Portfolio"}
        fontSize={1.2}
      />
      {/* <Text3D font='/fonts/Roboto_Bold.json'>OK</Text3D> */}
    </>
  );
};

export default GeoText;
