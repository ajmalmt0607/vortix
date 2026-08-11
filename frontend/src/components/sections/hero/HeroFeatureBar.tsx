import { heroFeatureBar } from "../../../data/heroFeatureBar";

export function HeroFeatureBar() {
  return (
    <div className="grid grid-cols-1 gap-6 rounded-2xl border border-ink/8 bg-surface-muted/60 p-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
      {heroFeatureBar.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.id} className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-light">
              <Icon className="h-5 w-5 text-brand" strokeWidth={2} aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold text-ink">{item.title}</p>
              <p className="text-xs text-slate-500">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
