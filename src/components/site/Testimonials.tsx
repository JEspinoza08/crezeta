import { Quote } from "lucide-react";

const items = [
  {
    quote:
      "CreZeta reconstruyó nuestra identidad y nuestra web en semanas. Las reservas crecieron en el primer trimestre y la marca finalmente se siente como nosotros.",
    name: "Andrea M.",
    role: "Founder, Lumière Events",
  },
  {
    quote:
      "Atención boutique con calidad profesional. Su trabajo SEO nos ayudó a posicionarnos en la primera página para términos clave.",
    name: "Daniel R.",
    role: "CEO, Vertex Dental",
  },
  {
    quote:
      "Piensan como socios, no como proveedores. Estrategia, branding y tecnología bajo un mismo enfoque.",
    name: "Camila S.",
    role: "Director, Aurea Realty",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-32 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-primary-glow">07 — Testimonios</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
            Confianza de fundadores que cuidan <span className="text-gradient">cada detalle</span>.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <figure
              key={i}
              className="glass rounded-3xl p-8 hover-glow flex flex-col justify-between min-h-[280px]"
            >
              <Quote className="h-7 w-7 text-primary-glow" />
              <blockquote className="mt-6 text-base leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border/60">
                <div className="font-display font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
