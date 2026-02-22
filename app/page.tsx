"use client"

import { Navbar } from "@/components/lifewood/navbar"
import { Hero } from "@/components/lifewood/hero"
import { Services } from "@/components/lifewood/services"

import { Statistics } from "@/components/lifewood/statistics"
import { ESG } from "@/components/lifewood/esg"
import { GlobalPresence } from "@/components/lifewood/global-presence"
import { Testimonials } from "@/components/lifewood/testimonials"

import { Footer } from "@/components/lifewood/footer"
import { AnimatedSection } from "@/components/lifewood/animated-section"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />

      <AnimatedSection>
        <Services />
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



      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>



      <Footer />
    </main>
  )
}
