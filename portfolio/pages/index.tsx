import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";
import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contactme from "@/components/Contactme";

export default function Home() {
  return (
    <div className="bg-background text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-basic">
      <Head>
        <title>Youlin Qu</title>
      </Head>
    
      <Header />
    
      <section id='hero' className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experiences" className="snap-center">
        <Experiences />
      </section>

      <section id="projects" className="snap-center">
        <Projects />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="contact" className="snap-start">
        <Contactme />
      </section>
    </div>
  )
}
