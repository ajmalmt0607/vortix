import { heroHighlights } from "../../../data/heroHighlights";

export function HeroHighlights() {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-5">
      {heroHighlights.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.id} className="flex flex-col items-center gap-2 lg:items-start">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light">
              <Icon className="h-5 w-5 text-brand" strokeWidth={2} aria-hidden="true" />
            </span>
            <div className="text-center lg:text-left">
              <p className="text-sm font-bold text-ink">{item.title}</p>
              <p className="text-xs text-slate-500">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
