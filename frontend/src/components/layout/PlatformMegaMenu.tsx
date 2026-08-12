import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { modules } from "../../data/modules";
import { Container } from "../ui/Container";

export function PlatformMegaMenu() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="absolute inset-x-0 top-full border-b border-ink/8 bg-white shadow-2xl shadow-ink/10"
    >
      <Container>
        <div className="grid grid-cols-1 gap-x-8 gap-y-1 py-8 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <a
                key={module.id}
                href="#platform"
                className="group flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-brand-light/60"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-light transition-colors group-hover:bg-white">
                  <Icon className="h-5 w-5 text-brand" strokeWidth={2} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">{module.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    {module.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-ink/8 py-5">
          <p className="text-sm text-slate-500">
            One connected platform for every part of your restaurant.
          </p>
          <a
            href="#platform"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
          >
            Explore the full platform
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </motion.div>
  );
}
