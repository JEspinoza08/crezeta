import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import { WhyUs } from "@/components/site/WhyUs";

export function About() {
  return (
    <section id="nosotros" className="py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1fr_.9fr]">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[.22em] text-primary">Quiénes somos</span>
          <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">Un equipo pequeño con una visión <span className="text-gradient">grande.</span></h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">Somos una agencia peruana especializada en desarrollo web, branding, ecommerce, automatización y SEO. Diseñamos soluciones funcionales, modernas y pensadas para vender.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src={team1} alt="Equipo creativo de CreZeta" loading="lazy" className="aspect-[4/5] w-full rounded-3xl object-cover" />
          <img src={team2} alt="Equipo de desarrollo web de CreZeta" loading="lazy" className="mt-10 aspect-[4/5] w-full rounded-3xl object-cover" />
        </div>
      </div>
    </section>
  );
}
