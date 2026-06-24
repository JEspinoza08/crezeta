import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Brands } from "@/components/site/Brands";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Portfolio } from "@/components/site/Portfolio";
import { Process } from "@/components/site/Process";
import { About } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <Services />
        <WhyUs />
        <Portfolio />
        <Process />
        <About />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
