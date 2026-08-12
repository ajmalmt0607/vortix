import { Logo } from "../ui/Logo";
import { Container } from "../ui/Container";
import { footerColumns } from "../../data/footerColumns";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-white">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div className="col-span-2 flex flex-col gap-4 sm:col-span-3 lg:col-span-1">
            <Logo />
            <p className="text-sm text-slate-500">AI Restaurant Operating System</p>
            <p className="text-sm font-semibold text-ink">Abu Dhabi, UAE</p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.id} className="flex flex-col gap-4">
              <p className="text-sm font-bold text-ink">{column.title}</p>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 transition-colors hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink/8 pt-8 sm:flex-row">
          <p className="text-sm text-slate-400">© {currentYear} VORTIX. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#contact" className="text-sm text-slate-500 transition-colors hover:text-ink">
              Contact
            </a>
            <a href="#privacy" className="text-sm text-slate-500 transition-colors hover:text-ink">
              Privacy
            </a>
            <a href="#terms" className="text-sm text-slate-500 transition-colors hover:text-ink">
              Terms
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
