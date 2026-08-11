import { Container } from "../ui/Container";
import { modules } from "../../data/modules";
import { ModuleCard } from "./modules/ModuleCard";
import { ModulesSummaryCard } from "./modules/ModulesSummaryCard";

export function Modules() {
  return (
    <section id="platform" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-center gap-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-light px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
            One connected platform
          </span>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Every restaurant operation. One intelligent system.
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-500">
            VORTIX connects the systems restaurants use every day and turns operational
            data into real-time decisions.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
          <ModulesSummaryCard />
        </div>
      </Container>
    </section>
  );
}
