"use client";

import { motion } from "framer-motion";
import { motionVariants } from "@/components/motion/MotionVariant";
import { ReactNode } from "react";

type MotionProps = {
  children: ReactNode;
  variant?: keyof typeof motionVariants;
  delay?: number;
  className?: string;
};

export default function Motion({
  children,
  variant = "fadeUp",
  delay = 0,
  className = "",
}: MotionProps) {
  return (
    <motion.div
      className={className}
      variants={motionVariants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
