import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, CalendarCheck } from "lucide-react";
import logoMark from "@/assets/crezeta-mark.png";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#proceso", label: "Proceso" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "bg-background/70 backdrop-blur-md py-4 border-b border-border/40"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2.5 group">
          <img src={logoMark} alt="CreZeta" className="h-9 w-9 rounded-lg transition-transform group-hover:scale-110" />
          <span className="font-display font-semibold text-lg tracking-tight">
            Cre<span className="text-gradient">Zeta</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden lg:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium bg-gradient-primary text-primary-foreground hover-glow"
        >
          <CalendarCheck className="h-4 w-4" />
          Agendar una reunión
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden p-2 rounded-md text-foreground"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden glass-strong border-t border-border/40 mt-3">
          <ul className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium bg-gradient-primary text-primary-foreground"
            >
              <CalendarCheck className="h-4 w-4" /> Agendar una reunión
            </a>
          </ul>
        </div>
      )}
    </motion.header>
  );
}
