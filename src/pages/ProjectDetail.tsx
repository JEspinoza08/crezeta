import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Project } from "@/data/projects";

const WHATSAPP_NUMBER = "51995772022";

export function ProjectDetail({ project }: { project: Project }) {
  useEffect(() => {
  window.scrollTo(0, 0);

  const previousTitle = document.title;

  const description = document.querySelector(
    'meta[name="description"]',
  );

  const canonical = document.querySelector(
    'link[rel="canonical"]',
  ) as HTMLLinkElement | null;

  const previousDescription =
    description?.getAttribute("content") ?? "";

  const previousCanonical = canonical?.href ?? "";

  document.title =
    `${project.title} | Proyecto desarrollado por CreZeta`;

  description?.setAttribute(
    "content",
    `${project.summary} Conoce el caso de estudio desarrollado por CreZeta en Perú.`,
  );

  if (canonical) {
    canonical.href =
      `https://www.crezeta.pe/proyectos/${project.slug}`;
  }

  return () => {
    document.title = previousTitle;

    description?.setAttribute(
      "content",
      previousDescription,
    );

    if (canonical) {
      canonical.href = previousCanonical;
    }
  };
}, [project]);

  const whatsapp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola CreZeta 👋 Vi el proyecto ${project.title} y quisiera desarrollar una solución similar para mi negocio.`)}`;

  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <main>
        <section className="relative overflow-hidden pb-20 pt-36 sm:pb-28 sm:pt-40">
          <div className="absolute inset-0 -z-10 bg-hero" />
          <div className="absolute inset-0 -z-10 ring-grid opacity-30" />
          <div className="mx-auto max-w-7xl px-6">
            <a
              href="/proyectos"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" /> Volver a proyectos
            </a>
            <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[.22em] text-primary">
                  {project.category}
                </span>
                <h1 className="mt-5 font-display text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                  {project.title}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  {project.summary}
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-white hover-glow"
                  >
                    <MessageCircle className="h-4 w-4" /> Quiero un proyecto similar
                  </a>
                </div>
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-white p-3 shadow-[var(--shadow-elevated)]">
                <img
                  src={project.img}
                  alt={`Vista del proyecto ${project.title} desarrollado por CreZeta`}
                  className="aspect-[16/11] w-full rounded-[1.4rem] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 lg:grid-cols-3">
              <article className="rounded-3xl border border-border bg-white p-7 shadow-sm lg:col-span-2 sm:p-10">
                <span className="text-xs font-semibold uppercase tracking-[.2em] text-primary">
                  El proyecto
                </span>
                <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
                  Una solución creada alrededor del negocio.
                </h2>
                <p className="mt-6 text-base leading-8 text-muted-foreground">
                  {project.description}
                </p>
              </article>
              <aside className="rounded-3xl bg-foreground p-7 text-white sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[.2em] text-white/55">
                  Servicios realizados
                </p>
                <ul className="mt-6 grid gap-4">
                  {project.services.map((service) => (
                    <li key={service} className="flex items-center gap-3 text-sm">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                        <Check className="h-4 w-4" />
                      </span>
                      {service}
                    </li>
                  ))}
                </ul>
              </aside>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <article className="rounded-3xl border border-border bg-white p-7 sm:p-10">
                <span className="text-xs font-semibold uppercase tracking-[.2em] text-primary">
                  El reto
                </span>
                <h2 className="mt-4 font-display text-3xl font-semibold">
                  ¿Qué necesitaba el cliente?
                </h2>
                <p className="mt-5 leading-8 text-muted-foreground">{project.challenge}</p>
              </article>
              <article className="rounded-3xl border border-primary/15 bg-primary/5 p-7 sm:p-10">
                <span className="text-xs font-semibold uppercase tracking-[.2em] text-primary">
                  La solución
                </span>
                <h2 className="mt-4 font-display text-3xl font-semibold">¿Qué construimos?</h2>
                <p className="mt-5 leading-8 text-muted-foreground">{project.solution}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[.2em] text-primary">
                  Resultado
                </span>
                <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                  Una plataforma lista para crecer.
                </h2>
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-medium text-primary"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.results.map((result, index) => (
                  <div key={result} className="rounded-3xl border border-border bg-background p-6">
                    <span className="font-display text-3xl font-semibold text-primary">
                      0{index + 1}
                    </span>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <span className="text-xs font-semibold uppercase tracking-[.22em] text-primary">
              Trabajemos juntos
            </span>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight sm:text-6xl">
              ¿Necesitas una solución como esta?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Cuéntanos qué quieres construir y te ayudaremos a convertirlo en una plataforma
              rápida, profesional y preparada para crecer.
            </p>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-white hover-glow"
            >
              Conversar por WhatsApp <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
