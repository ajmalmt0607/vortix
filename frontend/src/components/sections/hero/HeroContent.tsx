import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../../ui/Button";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function HeroContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left"
    >
      <motion.div variants={itemVariants} className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
          V
        </span>
        <div className="text-left">
          <p className="text-sm font-bold tracking-[0.2em] text-ink">VORTIX</p>
          <p className="text-[11px] font-medium tracking-[0.15em] text-slate-400">
            AI RESTAURANT OPERATING SYSTEM
          </p>
        </div>
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[56px]"
      >
        The <span className="text-brand">AI operating system</span> for modern
        restaurants.
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="max-w-xl text-lg leading-relaxed text-slate-500"
      >
        POS, payments, ordering, inventory, procurement, finance and AI —
        connected in one intelligent restaurant operating system.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="flex flex-col items-center gap-4 sm:flex-row"
      >
        <Button href="#platform" size="lg">
          Explore VORTIX
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Button>
        <Button href="#platform-overview" variant="secondary" size="lg">
          See the platform
        </Button>
      </motion.div>

      <motion.p variants={itemVariants} className="text-sm text-slate-400">
        Built for restaurants that want to operate smarter.
      </motion.p>
    </motion.div>
  );
}
