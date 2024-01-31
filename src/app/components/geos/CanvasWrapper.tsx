"use client";
import { Canvas } from "@react-three/fiber";

const CanvasWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Canvas camera={{ position: [0, 0, 600] }}>{children}</Canvas>;
};

export default CanvasWrapper;
