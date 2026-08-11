import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/cn";

interface FloatingCardProps {
  className?: string;
  entranceDelay?: number;
  floatDelay?: number;
  children: ReactNode;
}

export function FloatingCard({
  className,
  entranceDelay = 0,
  floatDelay = 0,
  children,
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: entranceDelay, ease: "easeOut" }}
      className={cn("absolute z-10", className)}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 5,
          delay: floatDelay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="rounded-2xl border border-ink/10 bg-white shadow-xl shadow-ink/10"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
