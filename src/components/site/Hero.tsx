import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MessageCircle,
  Rocket,
  Smartphone,
  Search,
} from "lucide-react";

import heroBg from "@/assets/hero-bg.jpg";
import heroMobile from "@/assets/hero-mobile.png";

const whatsapp =
  "https://wa.me/51995772022?text=" +
  encodeURIComponent(
    "Hola CreZeta 👋 Quiero cotizar una página web para mi negocio.",
  );

const metrics = [
  {
    value: "+15",
    label: "Proyectos digitales",
    icon: Rocket,
  },
  {
    value: "100%",
    label: "Diseño responsive",
    icon: Smartphone,
  },
  {
    value: "SEO",
    label: "Desde el desarrollo",
    icon: Search,
  },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden pb-8 pt-24 sm:min-h-[92vh] sm:pb-16 sm:pt-28"
    >
      <div className="absolute inset-0 -z-10 bg-[#070a16]">
        <picture>
          <source media="(max-width: 639px)" srcSet={heroMobile} />

          <img
            src={heroBg}
            alt="Agencia de desarrollo web CreZeta en Perú"
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
          />
        </picture>
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-[23rem] sm:max-w-2xl lg:max-w-3xl"
        >
          <span className="inline-flex rounded-full border border-white/20 bg-black/25 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-violet-200 backdrop-blur-md sm:px-4 sm:text-xs sm:tracking-[0.18em]">
            Desarrollo web · Ecommerce · SEO
          </span>

          <h1 className="mt-5 font-display text-[2.45rem] font-semibold leading-[1.02] tracking-tight text-white sm:mt-6 sm:text-6xl lg:text-7xl">
            Creamos páginas web que{" "}
            <span className="bg-gradient-to-r from-violet-300 via-purple-400 to-violet-500 bg-clip-text text-transparent">
              generan clientes.
            </span>
          </h1>

          <p className="mt-5 max-w-[21rem] text-[0.95rem] leading-6 text-slate-300 sm:mt-6 sm:max-w-2xl sm:text-xl sm:leading-relaxed">
            Diseñamos sitios, tiendas virtuales y plataformas rápidas, modernas
            y listas para posicionarse en Google.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-9 sm:flex sm:flex-wrap">
            <a
              href="#portafolio"
              className="inline-flex min-h-[3.5rem] items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-4 py-3 text-center text-sm font-semibold leading-5 text-white shadow-lg shadow-violet-950/30 transition hover:-translate-y-0.5 hover:shadow-xl sm:min-h-0 sm:rounded-full sm:px-7 sm:py-3.5"
            >
              <span>Ver proyectos</span>
              <ArrowUpRight className="h-4 w-4 shrink-0" />
            </a>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[3.5rem] items-center justify-center gap-2 rounded-2xl border border-white/25 bg-black/35 px-4 py-3 text-center text-sm font-semibold leading-5 text-white backdrop-blur-md transition hover:border-white/45 hover:bg-white/15 sm:min-h-0 sm:rounded-full sm:px-7 sm:py-3.5"
            >
              <MessageCircle className="h-4 w-4 shrink-0" />
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>

          <div className="mt-7 overflow-hidden rounded-2xl border border-white/15 bg-black/30 backdrop-blur-md sm:mt-12 sm:max-w-2xl sm:rounded-3xl">
            <div className="grid grid-cols-3 divide-x divide-white/10">
              {metrics.map(({ value, label, icon: Icon }) => (
                <div
                  key={value}
                  className="flex min-h-[5.6rem] flex-col items-center justify-center px-2 py-3 text-center sm:min-h-0 sm:flex-row sm:justify-start sm:gap-3 sm:px-5 sm:py-4 sm:text-left"
                >
                  <span className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/15 text-violet-300 sm:mb-0 sm:h-9 sm:w-9">
                    <Icon className="h-4 w-4" />
                  </span>

                  <span>
                    <strong className="block text-sm font-semibold text-white sm:text-base">
                      {value}
                    </strong>

                    <span className="mt-0.5 block text-[9px] leading-3 text-slate-300 sm:text-xs sm:leading-4">
                      {label}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}