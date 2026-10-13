import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  [
    "¿Cuánto cuesta una página web?",
    "El precio depende del alcance, funcionalidades y tipo de proyecto. Preparamos una propuesta personalizada según las necesidades del negocio.",
  ],
  [
    "¿Cuánto demora el desarrollo?",
    "Una web corporativa puede tomar entre 1 y 2 semanas. Un ecommerce o plataforma personalizada requiere una evaluación previa.",
  ],
  [
    "¿La página aparecerá en Google?",
    "Sí. Trabajamos estructura técnica, velocidad, contenido, metadatos y herramientas de indexación para que Google pueda encontrarla correctamente.",
  ],
  [
    "¿Incluyen dominio, hosting y soporte?",
    "Podemos encargarnos del dominio, despliegue, configuración y mantenimiento para que tengas todo centralizado.",
  ],
];

export function SEOContent() {
  const [open, setOpen] = useState(0);
  return (
    <section id="preguntas" className="py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[.22em] text-primary">
            Preguntas frecuentes
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
            Antes de empezar tu <span className="text-gradient">proyecto.</span>
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map(([q, a], i) => (
            <article key={q} className="overflow-hidden rounded-2xl border border-border bg-white">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold"
                aria-expanded={open === i}
              >
                {q}
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <p className="px-6 pb-6 text-sm leading-7 text-muted-foreground">{a}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
