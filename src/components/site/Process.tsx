import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Descubrimiento", desc: "Analizamos tu negocio, audiencia y presencia digital para identificar oportunidades y definir una dirección estratégica clara." },
  { n: "02", title: "Estrategia", desc: "Creamos una estrategia enfocada en branding, posicionamiento, experiencia de usuario y crecimiento digital." },
  { n: "03", title: "Branding", desc: "Diseñamos una identidad visual sólida y memorable alineada a los objetivos de tu marca." },
  { n: "04", title: "Desarrollo", desc: "Desarrollamos experiencias digitales rápidas, modernas y escalables optimizadas para rendimiento y SEO." },
  { n: "05", title: "Optimización", desc: "Optimizamos rendimiento, analítica, conversiones y visibilidad para maximizar resultados a largo plazo." },
  { n: "06", title: "Lanzamiento y Crecimiento", desc: "Luego del lanzamiento, seguimos potenciando y escalando tu presencia digital mediante mejoras estratégicas continuas." },
];

export function Process() {
  return (
    <section id="proceso" className="relative py-32 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-primary-glow">05 — Proceso</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            Un proceso de seis pasos desde la <span className="text-gradient">idea hasta el crecimiento</span>.
          </h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent lg:left-1/2" />
          <div className="space-y-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55 }}
                className={`relative grid lg:grid-cols-2 gap-6 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className={`pl-16 lg:pl-0 ${i % 2 ? "lg:pl-16" : "lg:pr-16 lg:text-right"}`}>
                  <div className="font-display text-7xl font-semibold text-gradient/70 opacity-60">{s.n}</div>
                  <h3 className="mt-2 font-display text-2xl sm:text-3xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground max-w-md lg:inline-block">{s.desc}</p>
                </div>
                <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-2 h-12 w-12 rounded-2xl bg-gradient-primary glow flex items-center justify-center text-primary-foreground font-display font-semibold">
                  {i + 1}
                </div>
                <div className="hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
