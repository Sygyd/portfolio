import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ArchitectureMatrix } from "@/components/ArchitectureMatrix";
import { SimulatorsSection } from "@/components/SimulatorsSection";
import { ContactFooter } from "@/components/ContactFooter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProjectsSection />
        <ArchitectureMatrix />
        <SimulatorsSection />
      </main>
      <ContactFooter />
    </div>
  );
}
