'use client';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';
import { CursorBlinker } from './CursolBlinker';

type AnimatedTextProps = {
  text: string; // The text to be animated.
  delay: number;
};

export const TextTypeWrapper = ({ text, delay }: AnimatedTextProps) => {
  const count = useMotionValue(0);

  // `rounded` is a transformed motion value of `count`, rounding it to the nearest whole number.
  const rounded = useTransform(count, latest => Math.round(latest));

  // `displayText` is a transformed motion value of `rounded`, slicing the text to the current count.
  const displayText = useTransform(rounded, latest => text.slice(0, latest));

  // `animationCompleted` is a state variable to keep track of whether the animation has completed.
  const [animationCompleted, setAnimationCompleted] = useState(false);
  useEffect(() => {
    const controls = animate(count, text.length, {
      type: 'tween',
      duration: 2,
      delay,
      ease: 'linear',
      onUpdate: latest => {
        if (latest === text.length) {
          setAnimationCompleted(true);
        }
      },
    });
    return controls.stop;
  }, []);
  return (
    <div className={animationCompleted ? 'animation-completed' : ''}>
      <motion.span>{displayText}</motion.span>
      <CursorBlinker delay={delay}/>
    </div>
  );
};
