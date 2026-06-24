import { useState } from "react";
import { Mail, MessageCircle, CalendarCheck, Send } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "@/components/site/SocialIcons";

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const nombre = formData.get("nombre") as string;
    const email = formData.get("email") as string;
    const empresa = formData.get("empresa") as string;
    const proyecto = formData.get("proyecto") as string;

    const mensaje = `
Hola, deseo información sobre sus servicios.

👤 Nombre: ${nombre}
📧 Email: ${email}
🏢 Empresa / Marca: ${empresa || "No indicado"}

📝 Proyecto:
${proyecto}
`;

    const whatsappUrl = `https://wa.me/51995772022?text=${encodeURIComponent(
      mensaje
    )}`;

    window.open(whatsappUrl, "_blank");

    setSent(true);
    form.reset();

    setTimeout(() => {
      setSent(false);
    }, 5000);
  };

  return (
    <section id="contacto" className="relative py-24 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-primary-glow">
            08 — Contacto
          </span>

          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            Construyamos algo{" "}
            <span className="text-gradient">premium</span>.
          </h2>

          <p className="mt-5 text-muted-foreground text-lg max-w-md">
            Cuéntanos sobre tu marca. Te responderemos en menos de 24 horas con
            los siguientes pasos.
          </p>

          <div className="mt-10 space-y-3">
            <a
              href="https://wa.me/51995772022"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-border bg-surface/60 px-5 py-4 hover-glow"
            >
              <span className="flex items-center gap-3">
                <span className="h-10 w-10 inline-flex items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <MessageCircle className="h-4 w-4" />
                </span>

                <span>
                  <div className="text-sm text-muted-foreground">
                    WhatsApp
                  </div>
                  <div className="font-medium">
                    Escríbenos al instante
                  </div>
                </span>
              </span>

              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Disponible
              </span>
            </a>

            <a
              href="mailto:crezetabg@gmail.com"
              className="flex items-center justify-between rounded-2xl border border-border bg-surface/60 px-5 py-4 hover-glow"
            >
              <span className="flex items-center gap-3">
                <span className="h-10 w-10 inline-flex items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <Mail className="h-4 w-4" />
                </span>

                <span>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium">
                    crezetabg@gmail.com
                  </div>
                </span>
              </span>
            </a>

            <a
  href="https://www.instagram.com/crezeta.pe/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-between rounded-2xl border border-border bg-surface/60 px-5 py-4 hover-glow"
>
  <span className="flex items-center gap-3">
    <span className="h-10 w-10 inline-flex items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
      <InstagramIcon className="h-4 w-4" />
    </span>

    <span>
      <div className="text-sm text-muted-foreground">Instagram</div>
      <div className="font-medium">@crezeta.pe</div>
    </span>
  </span>
</a>

<a
  href="https://www.linkedin.com/company/crezeta-branding-growth"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-between rounded-2xl border border-border bg-surface/60 px-5 py-4 hover-glow"
>
  <span className="flex items-center gap-3">
    <span className="h-10 w-10 inline-flex items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
      <LinkedinIcon className="h-4 w-4" />
    </span>

    <span>
      <div className="text-sm text-muted-foreground">LinkedIn</div>
      <div className="font-medium">CreZeta | Branding & Growth</div>
    </span>
  </span>
</a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass rounded-3xl p-7 sm:p-9 h-fit lg:translate-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Nombre
              </span>

              <input
                name="nombre"
                required
                type="text"
                placeholder="Nombre completo"
                className="mt-2 w-full rounded-xl bg-background/60 border border-border px-4 py-3 outline-none focus:border-primary/60 transition-colors"
              />
            </label>

            <label className="block">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Email
              </span>

              <input
                name="email"
                required
                type="email"
                placeholder="tu@marca.com"
                className="mt-2 w-full rounded-xl bg-background/60 border border-border px-4 py-3 outline-none focus:border-primary/60 transition-colors"
              />
            </label>
          </div>

          <label className="block mt-4">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Empresa / Marca
            </span>

            <input
              name="empresa"
              type="text"
              placeholder="Empresa / Marca"
              className="mt-2 w-full rounded-xl bg-background/60 border border-border px-4 py-3 outline-none focus:border-primary/60 transition-colors"
            />
          </label>

          <label className="block mt-4">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Proyecto
            </span>

            <textarea
              name="proyecto"
              required
              rows={5}
              placeholder="Cuéntanos sobre tus objetivos"
              className="mt-2 w-full rounded-xl bg-background/60 border border-border px-4 py-3 outline-none focus:border-primary/60 transition-colors resize-none"
            />
          </label>

          <button
            type="submit"
            className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover-glow"
          >
            {sent ? (
              "Gracias — responderemos en menos de 24h"
            ) : (
              <>
                Enviar mensaje
                <Send className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}