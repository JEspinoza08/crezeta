import { motion } from "framer-motion";
import {
  Sparkles, Code2, Search, BarChart3, TrendingUp, Workflow, Layout, Share2,
} from "lucide-react";

const services = [
  { icon: Sparkles, title: "Identidad de Marca", desc: "Sistemas visuales e identidad verbal diseñados para generar reconocimiento y escalabilidad." },
  { icon: Code2, title: "Desarrollo Web Premium", desc: "Sitios rápidos, accesibles y optimizados para generar conversiones." },
  { icon: Search, title: "SEO y Posicionamiento", desc: "Arquitectura optimizada para SEO que genera crecimiento sostenible a largo plazo." },
  { icon: BarChart3, title: "Analítica y Medición", desc: "Dashboards claros y seguimiento de eventos para tomar mejores decisiones." },
  { icon: TrendingUp, title: "Optimización de Crecimiento", desc: "Optimización continua enfocada en crecimiento, conversión y retención." },
  { icon: Workflow, title: "Automatización Digital", desc: "Automatizaciones e integraciones que optimizan el tiempo de tu equipo." },
  { icon: Layout, title: "Estrategia UI/UX", desc: "Interfaces diseñadas en torno al comportamiento real de los usuarios." },
  { icon: Share2, title: "Diseño para Presencia Digital", desc: "Sistemas visuales consistentes alineados a tu marca para cada canal digital." },
];

export function Services() {
  return (
    <section id="servicios" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-primary-glow">02 — Servicios</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            Todo lo que tu marca necesita para <span className="text-gradient">crecer digitalmente</span>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Un estudio. Dos especialistas. Una solución completa: desde identidad visual hasta desarrollo, despliegue y optimización.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.06 }}
              className="group relative rounded-2xl border border-border bg-surface/60 p-6 hover-glow overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="relative">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-primary text-primary-foreground shadow-[0_0_30px_-5px_oklch(0.55_0.28_290/0.7)]">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Team roles */}
        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          {[
            {
              role: "Arquitecto de Experiencia de Marca",
              tags: ["Identidad Visual", "Sistemas de Branding", "Diseño para Redes", "Dirección Creativa"],
              desc: "Construye la esencia visual de cada marca — desde sistemas de logotipo hasta storytelling digital — manteniendo coherencia en cada punto de contacto.",
            },
            {
              role: "Ingeniero de Crecimiento Digital",
              tags: ["Desarrollo Web", "SEO", "Analítica", "Automatización", "Despliegue"],
              desc: "Desarrolla experiencias digitales rápidas, optimizadas e indexables, enfocadas en crecimiento, posicionamiento y conversión.",
            },
          ].map((t) => (
            <div key={t.role} className="glass rounded-3xl p-8 hover-glow">
              <span className="text-xs uppercase tracking-[0.25em] text-primary-glow">Especialista</span>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-semibold">{t.role}</h3>
              <p className="mt-3 text-muted-foreground">{t.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
