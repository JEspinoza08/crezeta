import { ArrowUpRight, CalendarCheck } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-border glass p-10 sm:p-16 text-center">
          <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-[40rem] rounded-full bg-primary/30 blur-[120px]" />
          <div className="relative">
            <span className="text-xs uppercase tracking-[0.25em] text-primary-glow">Construyamos juntos</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight max-w-3xl mx-auto">
              ¿Listo para elevar <span className="text-gradient">tu marca?</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
              Creemos una presencia digital que represente tu negocio y convierta.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover-glow"
              >
                <CalendarCheck className="h-4 w-4" /> Agendar una reunión
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-7 py-3.5 text-sm font-medium text-foreground hover:border-primary/50 transition-colors"
              >
                Ver Portafolio <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
