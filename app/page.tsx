import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Events } from "@/components/Events";
import { Certifications } from "@/components/Certifications";
import { Footer } from "@/components/Footer";
import { FloatingCard } from "@/components/FloatingCard";

export default function Home() {
  return (
    <>
      <a href="#lenguajes" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent">
        Saltar al contenido
      </a>
      <Header />
      <FloatingCard />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Events />
        <Certifications />
      </main>
      <Footer />
    </>
  );
}
