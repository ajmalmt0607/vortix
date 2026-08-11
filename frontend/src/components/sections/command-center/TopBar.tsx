import { commandCenterWorkspace } from "../../../data/commandCenter";

export function TopBar() {
  return (
    <div className="flex flex-wrap items-center gap-3 border-b border-ink/8 px-6 py-4">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-brand text-xs font-bold text-white">
        V
      </span>
      <span className="text-sm font-bold tracking-[0.15em] text-ink">VORTIX</span>
      <span className="text-sm font-semibold text-ink">{commandCenterWorkspace.name}</span>
      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
        {commandCenterWorkspace.scope}
      </span>
      <span className="ml-auto flex items-center gap-1.5 text-xs font-medium text-slate-400">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
        {commandCenterWorkspace.syncedLabel}
      </span>
    </div>
  );
}
