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

          <div className="mt-6 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--lw-saffron)]">
              Our work
            </span>
            <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[var(--lw-dark)] sm:text-4xl lg:text-[2.65rem]">
              Projects that drive real impact
            </h1>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
              Real-world case studies across automotive, healthcare, finance, and technology.
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

                {/* Divider */}
                <div className="my-5 h-px bg-[var(--lw-dark)]/[0.04]" />

                <p className="text-[0.92rem] leading-[1.75] text-[var(--lw-dark)]/55">
                  {project.description}
                </p>

                {/* Stat badges */}
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

                <a
                  href="mailto:info@lifewood.com"
                  className="mt-5 inline-flex items-center gap-1.5 text-[0.84rem] font-semibold text-[var(--lw-green)] transition-colors hover:text-[var(--lw-saffron)]"
                >
                  Discuss a similar project
                  <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
