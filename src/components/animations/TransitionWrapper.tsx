"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

export default function TransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathName}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 3,
          },
        }} 
        exit={{ opacity: 0 }} 
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
