export function ReceiptPrinterMockup() {
  return (
    <div className="hidden flex-col items-center lg:flex" aria-hidden="true">
      <div className="w-24 rounded-t-md bg-ink px-2 pb-1 pt-2 text-center">
        <span className="text-[8px] font-bold tracking-wide text-white">VORTIX</span>
      </div>
      <div className="h-10 w-20 rounded-b-lg bg-ink/90" />
      <div className="-mt-1 h-6 w-14 rounded-b-sm border border-ink/10 bg-white shadow-sm" />
    </div>
  );
}
