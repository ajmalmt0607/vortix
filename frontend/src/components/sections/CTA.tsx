import { ArrowUpRight } from "lucide-react";
import { Container } from "../ui/Container";

export function CTA() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-navy-950 px-6 py-16 text-center shadow-2xl shadow-ink/10 sm:px-12 sm:py-20">
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-brand/25 to-transparent blur-2xl"
            aria-hidden="true"
          />

          <div className="relative flex flex-col items-center gap-6">
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to run your restaurant smarter?
            </h2>
            <p className="max-w-xl text-lg text-white/60">
              Bring operations, data and AI together in one platform.
            </p>
            <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-brand px-7 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-90"
              >
                Request a Demo
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#platform"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-medium text-white transition-colors hover:border-white/30 hover:bg-white/10"
              >
                Explore the Platform
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
