const brands = [
  "Marcia Vidal - marciavidal.com",
  "Cositas Lindas - cositaslindas.pe",
];

export function Brands() {
  const row = [...brands, ...brands];
  return (
    <section className="relative py-16 border-y border-border/60 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 mb-8 flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Marcas con las que trabajamos
        </p>
        <p className="hidden sm:block text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Experiencias digitales seleccionadas
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex w-max marquee gap-12 px-6">
          {row.map((b, i) => (
            <div
              key={i}
              className="flex items-center gap-3 whitespace-nowrap font-display text-3xl sm:text-4xl font-semibold text-muted-foreground/70 hover:text-foreground transition-colors"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
