import { useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Brands } from "@/components/site/Brands";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { Process } from "@/components/site/Process";
import { About } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { SEOContent } from "@/components/site/SEOContent";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { getProjectBySlug } from "@/data/projects";
import { ProjectDetail } from "@/pages/ProjectDetail";
import { NotFound } from "@/pages/NotFound";
import { WebsiteBuilder } from "@/pages/WebsiteBuilder";
import { Projects } from "@/pages/Projects";
import { Products } from "@/pages/Products";
import { ProductDetail } from "@/pages/ProductDetail";
import { Account } from "@/pages/Account";
import { AdminProducts } from "@/pages/AdminProducts";
import { Admin } from "@/pages/Admin";
import { Cart } from "@/pages/Cart";
import { FeaturedProducts } from "@/components/site/FeaturedProducts";

function HomePage() {
  useEffect(() => {
    if (["#nosotros", "#proceso"].includes(window.location.hash)) {
      window.location.replace("/nosotros" + window.location.hash);
      return;
    }
    const scrollToHashSection = () => {
      const sectionId = window.location.hash.replace("#", "");
      if (!sectionId) return;

      const section = document.getElementById(sectionId);
      if (!section) return;

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    // Espera a que la página principal y sus secciones terminen de renderizarse.
    const frameId = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(scrollToHashSection);
    });

    window.addEventListener("hashchange", scrollToHashSection);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("hashchange", scrollToHashSection);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <Services />
        <FeaturedProducts />
        <Portfolio />
        <Testimonials />
        <SEOContent />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function AboutPage() {
  useEffect(() => {
    if (window.location.hash === "#proceso")
      requestAnimationFrame(() => document.getElementById("proceso")?.scrollIntoView());
  }, []);
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <main className="pt-24">
        <About />
        <Process />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/") return <HomePage />;
  if (path === "/nosotros") return <AboutPage />;
  if (path === "/disena-tu-web") return <WebsiteBuilder />;
  if (path === "/proyectos") return <Projects />;
  if (path === "/productos") return <Products />;
  if (path === "/cuenta") return <Account />;
  if (path === "/carrito") return <Cart />;
  if (path === "/admin") return <Admin />;
  if (path === "/admin/productos") return <AdminProducts />;
  const productMatch = path.match(/^\/productos\/([^/]+)$/);
  if (productMatch) return <ProductDetail slug={decodeURIComponent(productMatch[1])} />;
  const match = path.match(/^\/proyectos\/([^/]+)$/);
  if (match) {
    const project = getProjectBySlug(decodeURIComponent(match[1]));
    return project ? <ProjectDetail project={project} /> : <NotFound />;
  }
  return <NotFound />;
}

export default App;
