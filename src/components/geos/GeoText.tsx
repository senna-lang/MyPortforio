"use client";

import { Text } from "@react-three/drei";
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
    <Text {...props} font="/public/fonts/robots.txt" color={"white"} letterSpacing={0.02}>
      {props.text}
    </Text>
  );
};

const GeoText = () => {
  const [width] = useWindowSize();
  return (
    <>
      <Rig />
      <Texts
        position={[0, -0.8, width >= 768 ? 1 : -1.7]}
        text={"Sena Inomata"}
        fontSize={1.2}
      />
      <Texts
        position={[-1.4, -2.2, width >= 768 ? 1 : -1.7]}
        text={"Portfolio"}
        fontSize={1.2}
      />
    </>
  );
};

export default GeoText;
