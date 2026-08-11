import { CheckCircle2, Sandwich } from "lucide-react";

export function PhoneOrderMockup() {
  return (
    <div className="w-40 shrink-0 rounded-[1.75rem] border-[6px] border-ink bg-ink shadow-2xl shadow-ink/20">
      <div className="overflow-hidden rounded-[1.25rem] bg-white">
        <div className="border-b border-ink/8 px-3 py-2 text-center">
          <span className="text-[10px] font-bold text-ink">VORTIX Order</span>
        </div>
        <div className="flex flex-col items-center gap-2 p-3">
          <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
            <Sandwich className="h-6 w-6" aria-hidden="true" />
          </span>
          <div className="text-center">
            <p className="text-xs font-bold text-ink">Table 08</p>
            <p className="text-sm font-bold text-ink">AED 42.00</p>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-600">
            <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
            Payment received
          </span>
          <p className="text-[10px] text-slate-400">VISA •••• 4242</p>
        </div>
      </div>
    </div>
  );
}
