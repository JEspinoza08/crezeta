import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import caseEvent from "@/assets/case-event.jpg";
import caseDental from "@/assets/case-dental.jpg";
import caseRealEstate from "@/assets/case-realestate.jpg";
import caseEcom from "@/assets/case-ecommerce.jpg";
import caseLuxury from "@/assets/case-luxury.jpg";
import caseRestaurant from "@/assets/case-restaurant.jpg";

const projects = [
  { title: "Eventos", category: "Organización de Eventos", img: caseEvent, tags: ["Branding", "Web", "SEO"] },
  { title: "Dental", category: "Clínica Dental", img: caseDental, tags: ["Branding", "Web"] },
  { title: "Inmobiliaria", category: "Inmobiliaria", img: caseRealEstate, tags: ["Web", "Growth"] },
  { title: "E-Commerce", category: "Ecommerce", img: caseEcom, tags: ["UI/UX", "SEO", "Analytics"] },
  { title: "Blog Premium", category: "Marca Premium", img: caseLuxury, tags: ["Identity", "Web"] },
  { title: "Restaurante", category: "Restaurante", img: caseRestaurant, tags: ["Branding", "Redes"] },
];

export function Portfolio() {
  return (
    <section id="portafolio" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-primary-glow">04 — Proyectos destacados</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              Casos digitales premium para <span className="text-gradient">distintas industrias</span>.
            </h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            Empieza tu proyecto <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              href="#contact"
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
              className="group relative rounded-3xl overflow-hidden border border-border bg-surface hover-glow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 bg-gradient-to-t from-black/80 via-black/45 to-transparent">
                <div className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-white/80 font-semibold">
  {p.category}
</div>
                <div className="mt-1 flex items-center justify-between gap-4">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white drop-shadow-lg">
  {p.title}
</h3>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/85 backdrop-blur border border-white/40 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-foreground font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
