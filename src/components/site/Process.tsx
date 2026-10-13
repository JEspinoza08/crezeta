const steps = [
  ["01", "Nos cuentas tu idea"],
  ["02", "Diseñamos la solución"],
  ["03", "La desarrollamos"],
  ["04", "Publicamos tu web"],
  ["05", "Te acompañamos"],
];

export function Process() {
  return (
    <section id="proceso" className="bg-surface/55 py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-[10px] uppercase tracking-[.22em] text-primary sm:text-xs">
            Cómo trabajamos
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:mt-4 sm:text-5xl">
            Un proceso simple, claro y{" "}
            <span className="text-gradient">sin complicaciones.</span>
          </h2>
        </div>

        <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5">
          {steps.map(([n, title]) => (
            <div
              key={n}
              className="flex items-center gap-4 rounded-2xl border border-border bg-white px-4 py-4 sm:block sm:rounded-3xl sm:p-6"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary sm:h-auto sm:w-auto sm:justify-start sm:rounded-none sm:bg-transparent sm:text-sm">
                {n}
              </span>
              <h3 className="text-sm font-semibold sm:mt-8 sm:text-lg">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
