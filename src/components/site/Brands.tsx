import padelshopLogo from "@/assets/brands/padelshop.png";
import marciaLogo from "@/assets/brands/marciavidal.png";
import cositasLogo from "@/assets/brands/cositaslindas.png";
import ezdLogo from "@/assets/brands/ezd.png";

const brands = [
  {
    name: "PadelShop Perú",
    logo: padelshopLogo,
    url: "https://padelshop.pe/",
  },
  {
    name: "Marcia Vidal",
    logo: marciaLogo,
  },
  {
    name: "Cositas Lindas",
    logo: cositasLogo,
  },
  {
    name: "EZD Cipreses",
    logo: ezdLogo
  },
];

export function Brands() {
  return (
    <section
      aria-label="Clientes y proyectos"
      className="border-y border-border/60 bg-white py-12 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <p className="mx-auto max-w-xs text-center text-[10px] font-semibold uppercase leading-5 tracking-[0.24em] text-muted-foreground sm:max-w-none sm:text-xs sm:tracking-[0.28em]">
          Proyectos y marcas que confiaron en nosotros
        </p>

        <div className="mx-auto mt-7 grid max-w-2xl grid-cols-2 gap-3 sm:mt-10 sm:gap-5 lg:max-w-5xl lg:grid-cols-4">
          {brands.map((brand) => {
            const cardClass =
              "group relative flex h-20 items-center justify-center overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-white to-slate-50 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg sm:h-24 sm:rounded-3xl sm:p-6";

            const content = (
              <>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <img
                  src={brand.logo}
                  alt={brand.name}
                  loading="lazy"
                  className="relative max-h-9 max-w-[82%] object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-12"
                />
              </>
            );

            return brand.url ? (
              <a
                key={brand.name}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar ${brand.name}`}
                className={cardClass}
              >
                {content}
              </a>
            ) : (
              <div key={brand.name} className={cardClass} aria-label={brand.name}>
                {content}
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-sm text-center text-xs leading-5 text-muted-foreground sm:mt-10 sm:max-w-none sm:text-sm">
          Más de{" "}
          <span className="font-semibold text-primary">15 proyectos digitales</span>{" "}
          desarrollados para empresas, emprendimientos y organizaciones.
        </p>
      </div>
    </section>
  );
}
