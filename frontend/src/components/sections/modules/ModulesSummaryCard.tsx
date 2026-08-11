export function ModulesSummaryCard() {
  return (
    <div className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-ink/15 bg-slate-50/60 p-6 sm:p-7">
      <p className="text-2xl font-bold leading-tight text-ink">One POS.</p>
      <p className="text-2xl font-bold leading-tight text-brand">One operational data model.</p>
      <p className="mt-3 text-sm leading-relaxed text-slate-500">
        Every transaction connects restaurant operations — from sales and inventory to
        finance, customers and AI.
      </p>
    </div>
  );
}
