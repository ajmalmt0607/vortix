import { Container } from "../ui/Container";
import { CommandCenterPanel } from "./command-center/CommandCenterPanel";

export function CommandCenter() {
  return (
    <section id="command-center" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-center gap-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-light px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
            Command Center
          </span>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            One command center for your entire operation.
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-500">
            Live operational truth across every branch — revenue, cost, stock, people
            and AI recommendations in a single workspace.
          </p>
        </div>

        <div className="mt-14">
          <CommandCenterPanel />
        </div>
      </Container>
    </section>
  );
}
