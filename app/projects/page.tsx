import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { projects } from "@/lib/data/projects"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | Lifewood AI Data Solutions",
  description: "Real-world case studies across automotive, healthcare, finance, and technology sectors.",
}

export default function ProjectsPage() {
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
              Our work
            </span>
            <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[var(--lw-dark)] sm:text-4xl lg:text-[2.65rem]">
              Projects that drive real impact
            </h1>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
              Real-world case studies across automotive, healthcare, finance, and technology sectors.
              Every project demonstrates our commitment to quality, scale, and measurable outcomes
              that directly advance our clients{"'"} AI capabilities.
            </p>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
              We partner with Fortune 500 enterprises, innovative startups, and government agencies
              to deliver data solutions that transform raw information into competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Full project details */}
      <section className="bg-[var(--lw-sea-salt)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="overflow-hidden rounded-[1.5rem] border border-[var(--lw-green)]/15 bg-[var(--lw-white)] p-8 shadow-[0_4px_24px_rgba(19,48,32,0.04)] lg:p-10"
              >
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--lw-green)]/10">
                    <project.icon size={22} className="text-[var(--lw-green)]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-[var(--lw-saffron)]">
                      {project.industry}
                    </span>
                    <h2 className="text-lg font-semibold text-[var(--lw-dark)]">{project.title}</h2>
                  </div>
                </div>

                <div className="my-5 h-px bg-[var(--lw-dark)]/[0.04]" />

                <p className="text-[0.92rem] leading-[1.75] text-[var(--lw-dark)]/55">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stats.map((stat) => (
                    <span
                      key={stat}
                      className="rounded-full bg-[var(--lw-green)]/[0.04] px-3.5 py-1.5 text-[0.75rem] font-semibold text-[var(--lw-green)]"
                    >
                      {stat}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-[0.84rem] font-semibold text-[var(--lw-green)] transition-colors hover:text-[var(--lw-saffron)]"
                >
                  Discuss a similar project
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-[var(--lw-white)] py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-[var(--lw-dark)] sm:text-3xl">
            Have a similar challenge?
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
            Whether you need to train a computer vision model, build an NLP pipeline, or create
            multilingual datasets at scale, our team is ready to deliver. Tell us about your
            project and we will show you how Lifewood can help.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--lw-green)] px-7 py-3.5 text-[0.88rem] font-semibold text-white shadow-[0_4px_20px_rgba(4,98,65,0.25)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(4,98,65,0.35)] active:scale-[0.97]"
            >
              Start a conversation
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
