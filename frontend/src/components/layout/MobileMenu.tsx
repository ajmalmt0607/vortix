import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "../../data/navLinks";
import { Button } from "../ui/Button";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useLockBodyScroll(open);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="overflow-hidden border-b border-ink/10 bg-white lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-ink/80 transition-colors hover:bg-ink/[0.03] hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-3 border-t border-ink/10 pt-4">
              <a
                href="#login"
                onClick={onClose}
                className="px-3 py-2 text-center text-base font-medium text-ink/80"
              >
                Log in
              </a>
              <Button href="#demo" size="md" className="w-full" onClick={onClose}>
                Request a Demo
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
