'use client';
import { motion } from 'framer-motion';

export default function FadeInWrapper({
  children,
  delay
}: {
  children: React.ReactNode;
  delay:number;

}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 ,delay}}
    >
      {children}
    </motion.div>
  );
}
