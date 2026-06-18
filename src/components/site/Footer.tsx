import logoMark from "@/assets/crezeta-mark.png";
import { ArrowUp } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "@/components/site/SocialIcons";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#inicio" className="flex items-center gap-2.5">
              <img src={logoMark} alt="CreZeta" className="h-10 w-10 rounded-lg" />
              <span className="font-display font-semibold text-xl">
                Cre<span className="text-gradient">Zeta</span>
              </span>
            </a>
            <p className="mt-4 text-muted-foreground max-w-xs">
              Estudio de branding y crecimiento digital para marcas ambiciosas.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-1 md:justify-self-center">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Estudio</div>
              <ul className="space-y-2 text-sm">
                {["Servicios", "Portafolio", "Proceso", "Nosotros"].map((l) => (
                  <li key={l}><a href={`#${l.toLowerCase()}`} className="text-foreground/80 hover:text-foreground transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Contacto</div>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:hello@crezeta.com" className="text-foreground/80 hover:text-foreground transition-colors">crezetabg@gmail.com</a></li>
                <li><a href="#contacto" className="text-foreground/80 hover:text-foreground transition-colors">WhatsApp</a></li>
                <li><a href="#contacto" className="text-foreground/80 hover:text-foreground transition-colors">Agendar llamada</a></li>
              </ul>
            </div>
          </div>

          <div className="md:justify-self-end md:text-right">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Inicio</div>
            <div className="flex md:justify-end items-center gap-2">
              <a href="#inicio" className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-gradient-primary text-primary-foreground hover-glow">
                <ArrowUp className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border/60 flex flex-col sm:flex-row gap-3 sm:items-center justify-between text-sm text-muted-foreground">
          <p>Creamos presencia digital con propósito.</p>
          <p>© {new Date().getFullYear()} CreZeta · Branding & Growth</p>
        </div>
      </div>
    </footer>
  );
}
