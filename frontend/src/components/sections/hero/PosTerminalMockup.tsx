import { menuCategories, menuItems } from "../../../data/posMenu";
import { posOrderLines, TAX_RATE } from "../../../data/posOrder";
import { cn } from "../../../lib/cn";

const ACTIVE_CATEGORY = "burgers";

export function PosTerminalMockup() {
  const subtotal = posOrderLines.reduce((sum, line) => sum + line.qty * line.price, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  return (
    <div className="w-full">
      <div className="rounded-2xl border-[6px] border-ink bg-ink shadow-2xl shadow-ink/20">
        <div className="overflow-hidden rounded-lg bg-white">
          <div className="border-b border-ink/8 px-4 py-2.5">
            <span className="text-xs font-bold tracking-wide text-ink">VORTIX POS</span>
          </div>

          <div className="flex">
            <div className="hidden w-20 shrink-0 flex-col gap-1 border-r border-ink/8 p-2 sm:flex">
              {menuCategories.map((category) => (
                <span
                  key={category.id}
                  className={cn(
                    "rounded-md px-2 py-1.5 text-[10px] font-medium",
                    category.id === ACTIVE_CATEGORY ? "bg-brand text-white" : "text-ink/60",
                  )}
                >
                  {category.label}
                </span>
              ))}
            </div>

            <div className="grid flex-1 grid-cols-2 gap-2 p-3">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="rounded-lg border border-ink/8 p-2">
                    <span
                      className={cn(
                        "flex h-8 w-8 items-center justify-center rounded-md",
                        item.tint,
                      )}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <p className="mt-1.5 truncate text-[10px] font-semibold text-ink">
                      {item.name}
                    </p>
                    <p className="text-[10px] text-slate-400">AED {item.price.toFixed(2)}</p>
                  </div>
                );
              })}
            </div>

            <div className="hidden w-36 shrink-0 flex-col border-l border-ink/8 p-3 md:flex">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-ink">Table 12</span>
                <span className="rounded-full bg-brand-light px-1.5 py-0.5 text-[9px] font-semibold text-brand">
                  Dine-in
                </span>
              </div>
              <div className="mt-2 flex flex-1 flex-col gap-1.5">
                {posOrderLines.map((line) => (
                  <div key={line.id} className="flex items-center justify-between text-[10px]">
                    <span className="text-ink/70">
                      {line.qty} × {line.name}
                    </span>
                    <span className="text-ink/70">AED {(line.qty * line.price).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="mt-2 space-y-1 border-t border-ink/8 pt-2 text-[10px] text-ink/60">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>AED {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (5%)</span>
                  <span>AED {tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs font-bold text-ink">
                  <span>Total</span>
                  <span>AED {total.toFixed(2)}</span>
                </div>
              </div>
              <span className="mt-2 block rounded-lg bg-brand py-1.5 text-center text-[10px] font-semibold text-white">
                Pay AED {total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto h-3 w-16 rounded-b-lg bg-ink/80" aria-hidden="true" />
      <div className="mx-auto h-1.5 w-28 rounded-full bg-ink/60" aria-hidden="true" />
    </div>
  );
}
