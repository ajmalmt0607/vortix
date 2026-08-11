import { commandCenterNav } from "../../../data/commandCenter";
import { cn } from "../../../lib/cn";

export function SidebarNav() {
  return (
    <nav
      aria-label="Command Center navigation"
      className="hidden w-44 shrink-0 flex-col gap-0.5 border-r border-ink/8 bg-slate-50/40 p-3 sm:flex"
    >
      {commandCenterNav.map((item, index) => {
        const Icon = item.icon;
        const active = index === 0;
        return (
          <span
            key={item.id}
            className={cn(
              "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium",
              active
                ? "border border-ink/8 bg-white text-brand shadow-sm shadow-ink/5"
                : "text-slate-500",
            )}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
            {item.label}
          </span>
        );
      })}
    </nav>
  );
}
