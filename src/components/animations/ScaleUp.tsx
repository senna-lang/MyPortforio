"use client";
import { motion } from "framer-motion";

type Props = {
  text: string;
};

export const ScaleUp = (props: Props) => {
  const { text } = props;
  return <motion.div whileHover={{ scale: 1.5 }}>{text}</motion.div>;
};
