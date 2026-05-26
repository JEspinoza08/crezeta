import { Check } from "lucide-react";

const reasons = [
  "Entrega rápida sin comprometer calidad",
  "Estrategia personalizada por marca",
  "Desarrollo pensado en SEO desde el primer día",
  "Branding moderno y distintivo",
  "Webs rápidas, accesibles y optimizadas",
  "Diseño enfocado en conversión",
  "Comunicación directa, sin intermediarios",
  "Experiencia boutique de inicio a fin",
];

export function WhyUs() {
  return (
    <section className="relative py-32 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-primary-glow">03 — Por qué CreZeta</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
            Un estudio boutique con <span className="text-gradient">mentalidad startup</span>.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg max-w-lg">
            Somos un equipo compacto a propósito. Cada proyecto recibe atención estratégica, ejecución cuidada y una comunicación realmente cercana.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 gap-3">
          {reasons.map((r) => (
            <li
              key={r}
              className="flex items-start gap-3 rounded-xl border border-border bg-surface/60 px-4 py-4 hover-glow"
            >
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span className="text-sm">{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
