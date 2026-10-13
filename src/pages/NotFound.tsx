import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export function NotFound() {
  return <div><Navbar /><main className="flex min-h-[75vh] items-center justify-center px-6 pt-28 text-center"><div><span className="font-display text-7xl font-semibold text-gradient">404</span><h1 className="mt-4 font-display text-3xl font-semibold">Proyecto no encontrado</h1><p className="mt-3 text-muted-foreground">La página que buscas no existe o fue movida.</p><a href="/#portafolio" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-white"><ArrowLeft className="h-4 w-4" /> Ver proyectos</a></div></main><Footer /></div>;
}
