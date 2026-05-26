import { useState } from "react";
import { Mail, MessageCircle, CalendarCheck, Send } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "@/components/site/SocialIcons";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contacto" className="relative py-32 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-primary-glow">08 — Contacto</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            Construyamos algo <span className="text-gradient">premium</span>.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg max-w-md">
            Cuéntanos sobre tu marca. Te responderemos en menos de 24 horas con los siguientes pasos.
          </p>

          <div className="mt-10 space-y-3">
            <a
              href="https://wa.me/+51995772022"
              className="flex items-center justify-between rounded-2xl border border-border bg-surface/60 px-5 py-4 hover-glow"
            >
              <span className="flex items-center gap-3">
                <span className="h-10 w-10 inline-flex items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <MessageCircle className="h-4 w-4" />
                </span>
                <span>
                  <div className="text-sm text-muted-foreground">WhatsApp</div>
                  <div className="font-medium">Escribenos al instante</div>
                </span>
              </span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Disponible</span>
            </a>

            <a
              href="mailto:informes@crezeta.com"
              className="flex items-center justify-between rounded-2xl border border-border bg-surface/60 px-5 py-4 hover-glow"
            >
              <span className="flex items-center gap-3">
                <span className="h-10 w-10 inline-flex items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <Mail className="h-4 w-4" />
                </span>
                <span>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium">informes@crezeta.com</div>
                </span>
              </span>
            </a>

            <a
              href="#"
              className="flex items-center justify-between rounded-2xl border border-border bg-surface/60 px-5 py-4 hover-glow"
            >
              <span className="flex items-center gap-3">
                <span className="h-10 w-10 inline-flex items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <CalendarCheck className="h-4 w-4" />
                </span>
                <span>
                  <div className="text-sm text-muted-foreground">Agenda una llamada de 30 minutos</div>
                  <div className="font-medium">Calendario · Sesión de descubrimiento</div>
                </span>
              </span>
            </a>

            <div className="flex items-center gap-3 pt-4">
              {[InstagramIcon, LinkedinIcon].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-border bg-surface/60 hover:border-primary/60 transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="glass rounded-3xl p-7 sm:p-9 h-fit"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Nombre</span>
              <input required type="text" className="mt-2 w-full rounded-xl bg-background/60 border border-border px-4 py-3 outline-none focus:border-primary/60 transition-colors" placeholder="Nombre completo" />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Email</span>
              <input required type="email" className="mt-2 w-full rounded-xl bg-background/60 border border-border px-4 py-3 outline-none focus:border-primary/60 transition-colors" placeholder="tu@marca.com" />
            </label>
          </div>
          <label className="block mt-4">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Empresa / Marca</span>
            <input type="text" className="mt-2 w-full rounded-xl bg-background/60 border border-border px-4 py-3 outline-none focus:border-primary/60 transition-colors" placeholder="Empresa / Marca" />
          </label>
          <label className="block mt-4">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Proyecto</span>
            <textarea required rows={5} className="mt-2 w-full rounded-xl bg-background/60 border border-border px-4 py-3 outline-none focus:border-primary/60 transition-colors resize-none" placeholder="Cuéntanos sobre tus objetivos" />
          </label>

          <button
            type="submit"
            className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover-glow"
          >
            {sent ? "Gracias — responderemos en menos de 24h" : <>Enviar mensaje <Send className="h-4 w-4" /></>}
          </button>
        </form>
      </div>
    </section>
  );
}
