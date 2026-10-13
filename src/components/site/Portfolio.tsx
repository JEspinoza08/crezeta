import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
} from "lucide-react";

import { projects } from "@/data/projects";

const WHATSAPP_NUMBER = "51995772022";

const getWhatsappLink = (title: string, category: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola CreZeta 👋

Vi el proyecto ${title} (${category}) y quisiera desarrollar una solución similar para mi negocio. ¿Podemos conversar?`,
  )}`;

export function Portfolio() {
  return (
    <section
      id="portafolio"
      aria-labelledby="portfolio-title"
      className="relative py-28 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-primary-glow">
              Proyectos realizados
            </span>

            <h2
              id="portfolio-title"
              className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
            >
              Desarrollo web y ecommerce con{" "}
              <span className="text-gradient">resultados reales</span>.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Conoce el reto, la solución y las funcionalidades desarrolladas
              en cada uno de nuestros proyectos.
            </p>
          </div>

          <a
            href={getWhatsappLink(
              "un proyecto personalizado",
              "desarrollo web",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Cotiza tu proyecto
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 -mr-6 flex snap-x snap-mandatory gap-5 overflow-x-auto pr-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mr-0 md:grid md:grid-cols-2 md:overflow-visible md:pr-0 md:pb-0 lg:grid-cols-3">
          {projects.map((project, i) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.5,
                  delay: (i % 3) * 0.07,
                }}
                className="group flex h-full w-[86vw] max-w-[340px] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-sm hover-glow md:w-auto md:max-w-none md:shrink"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.img}
                    alt={`Proyecto web ${project.title} desarrollado por CreZeta`}
                    loading="lazy"
                    width="800"
                    height="500"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

                  <span className="absolute left-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/90 text-primary shadow-lg backdrop-blur">
                    <Icon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </span>

                  <div className="absolute bottom-4 left-5 text-xs font-semibold uppercase tracking-[.16em] text-white">
                    {project.category}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                    {project.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[11px] font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <a
                      href={`/proyectos/${project.slug}`}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      Ver proyecto
                      <BookOpen className="h-4 w-4" />
                    </a>

                    <a
                      href={getWhatsappLink(
                        project.title,
                        project.category,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-primary px-4 py-2.5 text-sm font-medium text-white"
                    >
                      Cotizar
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}