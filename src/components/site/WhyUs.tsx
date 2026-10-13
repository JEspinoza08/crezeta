const stats = [
  ["15+", "Proyectos"],
  ["6+", "Rubros"],
  ["100%", "Responsive"],
  ["SEO", "Incluido"],
];
export function WhyUs() {
  return (
    <section className="pb-24 sm:pb-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-border bg-white lg:grid-cols-4">
          {stats.map(([v, l]) => (
            <div
              key={l}
              className="border-b border-r border-border p-7 text-center last:border-r-0 lg:border-b-0"
            >
              <div className="font-display text-4xl font-semibold text-gradient">{v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
