import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LifecycleWorkflow from "@/components/LifecycleWorkflow";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Activities from "@/components/Activities";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <LifecycleWorkflow />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Activities />
      </main>
      <Footer />
    </>
  );
}
