"use client";
import { motion } from "framer-motion";

export default function TextFadeAnimWrapper({
  children,
}: {
  children: string;
}) {
  function shuffle(array: string[]) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const splitText = children.split("");

  const textAnimate = splitText.map((text, index) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: index * 0.05 }}
        key={index}
      >
        {text}
      </motion.div>
    );
  });
  return <div className="flex justify-center">{textAnimate}</div>;
}
