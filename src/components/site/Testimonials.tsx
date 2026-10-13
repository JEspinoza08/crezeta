const testimonials = [
  {
    quote:
      "El resultado superó nuestras expectativas. Ahora contamos con una tienda virtual moderna, rápida y fácil de administrar, lo que nos permitió ofrecer una mejor experiencia de compra a nuestros clientes.",
    name: "PadelShop Perú",
  },
  {
    quote:
      "Necesitábamos una plataforma profesional para mostrar nuestro trabajo y gestionar nuestro contenido audiovisual. El proceso fue ordenado, la comunicación excelente y el resultado quedó exactamente como lo imaginábamos.",
    name: "Marcia Vidal",
  },
  {
    quote:
      "Nuestra tienda ahora transmite mucha más confianza y profesionalismo. Los clientes encuentran fácilmente nuestros productos desde cualquier dispositivo y la navegación es mucho más agradable.",
    name: "Cositas Lindas",
  },
];
export function Testimonials() {
  return (
    <section className="bg-surface/55 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[.22em] text-primary">Confianza</span>
          <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
            Lo que logramos con nuestros <span className="text-gradient">clientes.</span>
          </h2>
        </div>
        <div className="mt-12 -mr-6 flex snap-x snap-mandatory gap-5 overflow-x-auto pr-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mr-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pr-0 lg:pb-0">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="w-[86vw] max-w-[340px] shrink-0 snap-start rounded-3xl border border-border bg-white p-7 lg:w-auto lg:max-w-none lg:shrink">
              <div className="text-primary">★★★★★</div>
              <p className="mt-5 text-lg leading-8">“{t.quote}”</p>
              <footer className="mt-6 text-sm font-semibold text-muted-foreground">{t.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
