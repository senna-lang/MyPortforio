'use client';
import { motion } from 'framer-motion';

export default function ScaleUpWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <motion.div whileHover={{ scale: 1.5 }}>{children}</motion.div>;
}
