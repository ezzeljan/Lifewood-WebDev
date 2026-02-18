import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { pillars } from "@/lib/data/about"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Lifewood AI Data Solutions",
  description: "Learn about Lifewood's vision, mission, and the pillars that drive our global AI data solutions.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Page header */}
      <section className="bg-[var(--lw-white)] pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[0.84rem] font-medium text-[var(--lw-dark)]/40 transition-colors hover:text-[var(--lw-green)]"
          >
            <ArrowRight size={14} className="rotate-180" />
            Back to home
          </Link>

          <div className="mt-6 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--lw-saffron)]">
              Who we are
            </span>
            <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[var(--lw-dark)] sm:text-4xl lg:text-[2.65rem]">
              More than a data company
            </h1>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
              Lifewood processes data, delivers at speed, and produces projects in
              multiple languages for some of the world{"'"}s largest organizations.
              We are a bridge between ASEAN and China, and by extension, the rest of the world.
            </p>
          </div>
        </div>
      </section>

      {/* Full about content */}
      <section className="bg-[var(--lw-sea-salt)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Image + text row */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative overflow-hidden rounded-[1.5rem]">
              <Image
                src="/about-bridge.jpg"
                alt="Lifewood global headquarters connecting East and West"
                width={640}
                height={440}
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 rounded-[1.5rem] ring-1 ring-inset ring-[var(--lw-dark)]/[0.04]" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--lw-dark)] lg:text-3xl">Our story</h2>
              <p className="mt-5 text-[1.05rem] leading-[1.75] text-[var(--lw-dark)]/60">
                At our core, we define and communicate our identity to global teams,
                clients, investors, and stakeholders across the world. Lifewood is a
                bridge between ASEAN and China, and by extension, the rest of the world.
              </p>
              <p className="mt-5 text-[1.05rem] leading-[1.75] text-[var(--lw-dark)]/60">
                We are a builder of harmony, trust, and cooperation across borders,
                cultures, and business practices. With headquarters in Malaysia,
                Lifewood is ideally situated to support the country{"'"}s role as a
                super-bridge connecting China with other nations, leveraging advanced
                technologies like AI, GPT, and Gemini to bring diverse people and
                interests together.
              </p>
              <p className="mt-5 text-[1.05rem] leading-[1.75] text-[var(--lw-dark)]/60">
                Our commitment to excellence has made us the trusted partner of
                leading global enterprises across automotive, healthcare, finance,
                and technology sectors.
              </p>
              <p className="mt-5 text-[1.05rem] leading-[1.75] text-[var(--lw-dark)]/60">
                Since our founding, we have grown from a small team in Kuala Lumpur to a
                global operation with offices across six countries. We have processed billions
                of data points, supported hundreds of AI models, and empowered thousands of
                people across Southeast Asia with meaningful employment and skills development.
              </p>
            </div>
          </div>

          {/* Pillar cards */}
          <div className="mt-20">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--lw-saffron)]">
                Our pillars
              </span>
              <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[var(--lw-dark)] sm:text-4xl">
                What drives us forward
              </h2>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-[1.25rem] bg-[var(--lw-green)] p-7 text-left shadow-[0_16px_48px_rgba(4,98,65,0.2)]"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-[0.75rem] bg-white/15">
                    <pillar.icon size={22} className="text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[1.05rem] font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-[0.84rem] leading-relaxed text-white/70">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="mt-20 grid items-stretch gap-5 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-[var(--lw-green)] p-9 lg:p-12">
              <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-[var(--lw-saffron)]/[0.06] blur-3xl" />
              <span className="relative text-xs font-semibold uppercase tracking-[0.2em] text-[var(--lw-saffron)]">Our vision</span>
              <p className="relative mt-5 text-xl font-medium leading-[1.6] text-white/90 lg:text-[1.35rem]">
                To be the global champion in AI data solutions, igniting a culture
                of innovation and sustainability that enriches lives and transforms
                communities worldwide.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[var(--lw-green)]/[0.06] bg-[var(--lw-white)] p-9 lg:p-12">
              <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[var(--lw-green)]/[0.03] blur-3xl" />
              <span className="relative text-xs font-semibold uppercase tracking-[0.2em] text-[var(--lw-saffron)]">Our mission</span>
              <p className="relative mt-5 text-xl font-medium leading-[1.6] text-[var(--lw-dark)]/65 lg:text-[1.35rem]">
                To develop and deploy cutting-edge AI technologies that solve
                real-world problems, empower communities, and advance sustainable
                practices across sectors.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <h3 className="text-xl font-bold text-[var(--lw-dark)]">
              Want to learn more about Lifewood?
            </h3>
            <p className="mt-3 mx-auto max-w-md text-[0.92rem] text-[var(--lw-dark)]/50">
              {"We'd love to tell you more about our team, our technology, and our vision for the future of AI."}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--lw-green)] px-7 py-3.5 text-[0.88rem] font-semibold text-white shadow-[0_4px_20px_rgba(4,98,65,0.25)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(4,98,65,0.35)] active:scale-[0.97]"
              >
                Get in touch
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/careers"
                className="group inline-flex items-center gap-2 rounded-full border border-[var(--lw-dark)]/10 bg-[var(--lw-white)] px-7 py-3.5 text-[0.88rem] font-semibold text-[var(--lw-dark)] transition-all duration-300 hover:border-[var(--lw-green)]/20 hover:bg-[var(--lw-green)]/[0.03] active:scale-[0.97]"
              >
                Join our team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
