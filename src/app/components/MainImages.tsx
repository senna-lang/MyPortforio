import { Image, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";

const Images = () => {
  const { width, height } = useThree((state) => state.viewport);
  return (
    <group>
      <Image url="/slider/VTS1.png" scale={[2, 1]} position={[1, 0, 1]} />
      <Image url="/slider/Notion1.jpg" scale={[2, 1]} position={[2, 0, 1]} />
      <Image
        url="/slider/Todo1.png"
        scale={[2, 1]}
        position={[0.3, -height, 2]}
      />
      <Image
        url="/slider/Ecapp1.png"
        scale={[2, 1]}
        position={[0.6, -height - 0.3, 3.2]}
      />
    </group>
  );
};

const MainImages = () => {
  return (
    <Canvas>
      <ScrollControls pages={2}>
        <Scroll>
          <Images />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
};

export default MainImages;
