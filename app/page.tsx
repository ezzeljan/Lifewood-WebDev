"use client";

<<<<<<< Updated upstream
import { Hero } from "@/components/lifewood/hero"
import { About } from "@/components/lifewood/about"
import { Services } from "@/components/lifewood/services"
import { Projects } from "@/components/lifewood/projects"
import { Statistics } from "@/components/lifewood/statistics"
import { ESG } from "@/components/lifewood/esg"
import { GlobalPresence } from "@/components/lifewood/global-presence"
import { Testimonials } from "@/components/lifewood/testimonials"
import { Careers } from "@/components/lifewood/careers"
import { AnimatedSection } from "@/components/lifewood/animated-section"
=======
import { Navbar } from "@/components/lifewood/navbar";
import { Hero } from "@/components/lifewood/hero";
import { About } from "@/components/lifewood/about";
import { Services } from "@/components/lifewood/services";
import { Projects } from "@/components/lifewood/projects";
import { Statistics } from "@/components/lifewood/statistics";
import { ESG } from "@/components/lifewood/esg";
import { GlobalPresence } from "@/components/lifewood/global-presence";
import { Testimonials } from "@/components/lifewood/testimonials";
import { Careers } from "@/components/lifewood/careers";
import { Footer } from "@/components/lifewood/footer";
import { AnimatedSection } from "@/components/lifewood/animated-section";
>>>>>>> Stashed changes

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />

      <AnimatedSection>
        <Services />
      </AnimatedSection>

      <AnimatedSection delay={80}>
        <Projects />
      </AnimatedSection>

      <AnimatedSection>
        <Statistics />
      </AnimatedSection>

      <AnimatedSection delay={80}>
        <ESG />
      </AnimatedSection>

      <AnimatedSection>
        <GlobalPresence />
      </AnimatedSection>

      <AnimatedSection delay={80}>
        <About />
      </AnimatedSection>

      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>

      <AnimatedSection delay={80}>
        <Careers />
      </AnimatedSection>
    </main>
  );
}