import { motion } from "framer-motion";
import { Code2, ShoppingCart, Workflow, Search } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Desarrollo Web",
    desc: "Páginas profesionales, rápidas y adaptadas a cualquier dispositivo.",
  },
  {
    icon: ShoppingCart,
    title: "Tiendas Virtuales",
    desc: "Ecommerce con catálogo, stock, pagos y panel administrativo.",
  },
  {
    icon: Workflow,
    title: "Automatizaciones",
    desc: "Integraciones con WhatsApp, IA, formularios y procesos internos.",
  },
  {
    icon: Search,
    title: "SEO",
    desc: "Estructura, velocidad y contenido preparados para posicionar en Google.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-[10px] uppercase tracking-[.22em] text-primary sm:text-xs">
            Qué hacemos
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:mt-4 sm:text-5xl">
            Soluciones digitales para{" "}
            <span className="text-gradient">hacer crecer tu negocio.</span>
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-2xl border border-border bg-white p-4 hover-glow sm:rounded-3xl sm:p-7"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-12 sm:w-12 sm:rounded-2xl">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <h3 className="mt-3 text-sm font-semibold leading-5 sm:mt-5 sm:text-xl">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-[11px] leading-[1.55] text-muted-foreground sm:mt-2 sm:text-sm sm:leading-6">
                  {service.desc}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
