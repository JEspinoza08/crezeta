import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";

export function About() {
  return (
    <section id="nosotros" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary-glow">06 — Nosotros</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              Un estudio digital boutique para <span className="text-gradient">marcas ambiciosas</span>.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              CreZeta nace de la combinación entre creatividad, tecnología y crecimiento digital. El nombre
              <span className="text-foreground"> "Zeta" </span> proviene de un legado familiar que representa ambición, evolución y visión a largo plazo.
            </p>
            <p className="mt-4 text-muted-foreground">
             Ayudamos a negocios a transformar su presencia digital en una experiencia de marca profesional y escalable. Servicio personalizado, calidad premium, soluciones modernas y crecimiento sostenible.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
              {[
                ["Personalizado", "Atención cercana y estratégica"],
                ["Premium", "Calidad visual y ejecución profesional"],
                ["Moderno", "Desarrollado con tecnologías actuales"],
                ["Escalable", "Preparado para crecer junto a tu marca"],
              ].map(([k, v]) => (
                <div key={k} className="glass rounded-xl p-4">
                  <div className="font-display text-lg font-semibold">{k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { name: "Fundador · Ingeniero de Crecimiento Digital", img: team2, role: "Ingeniería & SEO" },
              { name: "Fundador · Arquitecto de Experiencia de Marca", img: team1, role: "Identidad & Dirección" },
            ].map((m, i) => (
              <article
                key={i}
                className="group relative rounded-3xl overflow-hidden border border-border bg-surface hover-glow"
              >
                <div className="aspect-[4/5] sm:aspect-[4/5] overflow-hidden">
                  <img src={m.img} alt={m.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-black/80 via-black/45 to-transparent">
                  <div className="inline-flex rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1 text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-white font-semibold">
  {m.role}
</div>

<div className="mt-3 font-display text-base sm:text-lg font-bold leading-tight text-white drop-shadow-lg">
  {m.name}
</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
