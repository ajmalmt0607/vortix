import { kitchenStatusCounts, kitchenTickets } from "../../../data/kitchenTickets";

export function KitchenTicketsCard() {
  return (
    <div className="w-full rounded-2xl border border-ink/10 bg-white p-4 shadow-xl shadow-ink/10">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
        <span className="text-xs font-bold text-ink">Kitchen</span>
      </div>

      <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1">
        {kitchenStatusCounts.map((status) => (
          <div key={status.id} className="flex items-center gap-1.5">
            <span className={`h-1.5 w-1.5 rounded-full ${status.dotColor}`} aria-hidden="true" />
            <span className="text-[10px] text-slate-500">
              {status.label} <span className="font-semibold text-ink">{status.count}</span>
            </span>
          </div>
        ))}
      </div>

      <div className="mt-3 flex flex-col gap-2">
        {kitchenTickets.map((ticket) => (
          <div key={ticket.id} className="rounded-lg border border-ink/8 p-2.5">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-bold text-ink">
                {ticket.ticketNumber} · {ticket.table}
              </span>
              <span className="whitespace-nowrap text-[10px] text-slate-400">
                {ticket.minutesAgo} min
              </span>
            </div>
            <p className="mt-0.5 text-[10px] text-slate-500">{ticket.items}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
