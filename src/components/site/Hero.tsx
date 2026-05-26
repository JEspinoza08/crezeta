import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "50+", label: "Proyectos realizados" },
  { value: "2+", label: "Marcas Impulsadas" },
  { value: "100%", label: "Experiencias optimizadas para SEO" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Hero image with dark overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover opacity-75"
        />
        <div
  className="absolute inset-0"
  style={{
    background: `
      linear-gradient(90deg, 
        rgba(255,255,255,0.98) 0%, 
        rgba(255,255,255,0.92) 36%, 
        rgba(255,255,255,0.38) 55%, 
        rgba(20,15,35,0.38) 72%, 
        rgba(20,15,35,0.58) 100%
      )
    `,
  }}
/>
        <div className="absolute inset-0 ring-grid opacity-40" />
      </div>

      {/* Floating blobs */}
      <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-primary/30 blur-[120px] floaty" />
      <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-primary-glow/20 blur-[140px] floaty" style={{ animationDelay: "2s" }} />

      <div className="relative mx-auto max-w-7xl px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl rounded-[32px] bg-white/18 backdrop-blur-md border border-white/30 p-8 shadow-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse" />
            Estudio de Branding y Crecimiento Digital
          </span>

          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight text-foreground">
            Creamos Marcas <br />
            Con <span className="text-gradient">Presencia Digital</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Combinamos branding, experiencias web y estrategias de crecimiento para ayudar a los negocios a destacar, escalar y convertir digitalmente.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover-glow"
            >
              Ver Proyectos <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-7 py-3.5 text-sm font-medium text-foreground hover:border-primary/50 hover:bg-surface transition-colors"
            >
              <Play className="h-4 w-4" /> Hablemos
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-px bg-border/60 rounded-2xl overflow-hidden bg-white/85 backdrop-blur-xl shadow-xl max-w-3xl border border-black/5"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-white/70 px-6 py-7">
              <div className="font-display text-4xl font-semibold text-gradient">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
