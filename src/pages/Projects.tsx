import { useEffect } from "react";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { projects } from "@/data/projects";

const WHATSAPP_NUMBER = "51995772022";
const getWhatsappLink = (title: string, category: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola CreZeta 👋\n\nVi el proyecto ${title} (${category}) y quisiera desarrollar una solución similar para mi negocio. ¿Podemos conversar?`)}`;

export function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const previousDescription = description?.getAttribute("content") ?? "";
    const previousCanonical = canonical?.href ?? "";
    document.title = "Proyectos de desarrollo web y ecommerce | CreZeta";
    description?.setAttribute("content", "Conoce los proyectos de desarrollo web, ecommerce y plataformas digitales creados por CreZeta para negocios en Perú.");
    if (canonical) canonical.href = "https://www.crezeta.pe/proyectos";
    return () => {
      document.title = previousTitle;
      description?.setAttribute("content", previousDescription);
      if (canonical) canonical.href = previousCanonical;
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <main>
        <section className="relative overflow-hidden pb-16 pt-36 sm:pb-20 sm:pt-44">
          <div className="absolute inset-0 -z-10 bg-hero" />
          <div className="absolute inset-0 -z-10 ring-grid opacity-30" />
          <div className="mx-auto max-w-7xl px-6 text-center">
            <span className="text-xs font-semibold uppercase tracking-[.24em] text-primary">Proyectos CreZeta</span>
            <h1 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Proyectos digitales que <span className="text-gradient">generan resultados.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Explora algunos de los sitios web, ecommerce y plataformas que hemos desarrollado. Conoce el reto, la solución y las funcionalidades detrás de cada proyecto.
            </p>
          </div>
        </section>

        <section className="pb-24 pt-8 sm:pb-32 sm:pt-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => {
                const Icon = project.icon;
                return (
                  <article key={project.slug} className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]">
                    <a href={`/proyectos/${project.slug}`} className="relative block aspect-[16/10] overflow-hidden">
                      <img src={project.img} alt={`Proyecto ${project.title} desarrollado por CreZeta`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <span className="absolute left-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/95 text-primary shadow-lg"><Icon className="h-5 w-5" /></span>
                      <span className="absolute bottom-5 left-5 text-xs font-semibold uppercase tracking-[.16em] text-white">{project.category}</span>
                    </a>
                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <h2 className="font-display text-2xl font-semibold">{project.title}</h2>
                      <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{project.summary}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((technology) => <span key={technology} className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[11px] font-medium text-primary">{technology}</span>)}
                      </div>
                      <div className="mt-7 flex gap-3">
                        <a href={`/proyectos/${project.slug}`} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border px-4 py-3 text-sm font-medium transition hover:border-primary/40 hover:text-primary">Ver proyecto <BookOpen className="h-4 w-4" /></a>
                        <a href={getWhatsappLink(project.title, project.category)} target="_blank" rel="noopener noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-primary px-4 py-3 text-sm font-semibold text-white">Cotizar <ArrowUpRight className="h-4 w-4" /></a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
