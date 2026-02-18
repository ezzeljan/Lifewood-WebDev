import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { pillars } from "@/lib/data/about"

export function About() {
  return (
    <section id="about" className="bg-[var(--lw-sea-salt)] py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--lw-saffron)]">
            Who we are
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[var(--lw-dark)] sm:text-4xl lg:text-[2.65rem]">
            More than a data company
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
            Lifewood processes data, delivers at speed, and produces projects in
            multiple languages for some of the world&apos;s largest organizations.
          </p>
        </div>

        {/* Image + text row */}
        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
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
            <p className="text-[1.05rem] leading-[1.75] text-[var(--lw-dark)]/60">
              At our core, we define and communicate our identity to global teams,
              clients, investors, and stakeholders across the world. Lifewood is a
              bridge between ASEAN and China, and by extension, the rest of the world.
            </p>

            <div className="mt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-[0.88rem] font-semibold text-[var(--lw-green)] transition-colors hover:text-[var(--lw-saffron)]"
              >
                Read more about us
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        {/* Pillar cards -- summary only */}
        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group rounded-[1.25rem] bg-[var(--lw-white)] p-7 text-left shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(19,48,32,0.07)]"
            >
              <div
                className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-[0.75rem] bg-[var(--lw-green)]/[0.05] transition-colors duration-300 group-hover:bg-[var(--lw-green)]/[0.09]"
              >
                <pillar.icon
                  size={22}
                  className="text-[var(--lw-green)]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-[1.05rem] font-semibold text-[var(--lw-dark)]">
                {pillar.title}
              </h3>
              <p className="mt-2 text-[0.84rem] leading-relaxed text-[var(--lw-dark)]/45">
                {pillar.summary}
              </p>
            </div>
          ))}
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
      </div>
    </section>
  )
}
