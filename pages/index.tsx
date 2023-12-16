import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";
import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contactme from "@/components/Contactme";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
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
    </Layout>  
  )
}
