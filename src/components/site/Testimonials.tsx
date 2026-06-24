import { Quote } from "lucide-react";

const items = [
  {
    quote:
      "100% satisfecha con la atención y el trabajo realizado. Las páginas web que me entregó son totalmente funcionales, eficientes y cumplen con todas mis expectativas. Además, siempre está buscando mejoras y nuevas formas de optimizar sus proyectos. Sin duda, recomiendo su trabajo por su compromiso, responsabilidad y excelente servicio.",
    name: "Alexa Martinez",
    role: "Fundadora, Cositas Lindas Perú",
  },
  {
    quote:
      "Atención boutique con calidad profesional. Su trabajo SEO nos ayudó a posicionarnos en la primera página para términos clave.",
    name: "Marcia Vidal",
    role: "Fundadora, Marcia Vidal",
  },
  {
    quote:
      "Piensan como socios, no como proveedores. Estrategia, branding y tecnología bajo un mismo enfoque.",
    name: "EZD Cipreses",
    role: "Fundador, EZD Cipreses",
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
