import { Filter } from "lucide-react";
import { cn } from "../../lib/cn";

interface LogoProps {
  tone?: "light" | "dark";
  className?: string;
}

export function Logo({ tone = "light", className }: LogoProps) {
  return (
    <a href="#top" className={cn("flex items-center gap-3", className)} aria-label="VORTIX home">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand">
        <Filter className="h-5 w-5 text-white" strokeWidth={2.5} aria-hidden="true" />
      </span>
      <span
        className={cn(
          "text-lg font-bold tracking-[0.15em]",
          tone === "dark" ? "text-white" : "text-ink",
        )}
      >
        VORTIX
      </span>
    </a>
  );
}
