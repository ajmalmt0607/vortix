import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../../../lib/cn";
import type { ModuleItem } from "../../../types/modules";

interface ModuleCardProps {
  module: ModuleItem;
}

const DRAW_EASE = [0.16, 1, 0.3, 1] as const;

export function ModuleCard({ module }: ModuleCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const reduceMotion = Boolean(useReducedMotion());
  const Icon = module.icon;

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{ y: isHovered ? -3 : 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "flex h-full flex-col rounded-2xl border border-ink/8 bg-white p-6 transition-shadow duration-300 sm:p-7",
        isHovered ? "shadow-lg shadow-ink/10" : "shadow-sm shadow-ink/3",
      )}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-light">
        <Icon className="h-5 w-5 text-brand" strokeWidth={2} aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg font-bold text-ink">{module.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">{module.description}</p>

      <div className="relative mt-auto h-px w-full pt-6">
        <motion.span
          initial={false}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.45, ease: DRAW_EASE }}
          style={{ transformOrigin: "left center" }}
          className="absolute bottom-0 left-0 h-px w-full bg-brand"
        />
      </div>
    </motion.div>
  );
}
