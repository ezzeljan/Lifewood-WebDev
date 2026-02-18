import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { projects } from "@/lib/data/projects"

export function Projects() {
  return (
    <section id="projects" className="bg-[var(--lw-sea-salt)] py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--lw-saffron)]">
            Our work
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[var(--lw-dark)] sm:text-4xl lg:text-[2.65rem]">
            Projects that drive real impact
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
            Real-world case studies across automotive, healthcare, finance, and technology.
          </p>
        </div>

        {/* Project cards -- summary only */}
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-[1.5rem] border border-[var(--lw-dark)]/[0.03] bg-[var(--lw-white)] p-8 transition-all duration-500 hover:border-[var(--lw-green)]/10 hover:shadow-[0_8px_32px_rgba(19,48,32,0.04)] lg:p-10"
            >
              <div className="flex items-center gap-4">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--lw-green)]/[0.05] transition-colors duration-300 group-hover:bg-[var(--lw-green)]/10">
                  <project.icon size={22} className="text-[var(--lw-green)]" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-[var(--lw-saffron)]">
                    {project.industry}
                  </span>
                  <h3 className="text-lg font-semibold text-[var(--lw-dark)]">{project.title}</h3>
                </div>
              </div>
              <p className="mt-3 text-[0.88rem] text-[var(--lw-dark)]/45">{project.summary}</p>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-[0.92rem] font-semibold text-[var(--lw-green)] transition-colors hover:text-[var(--lw-saffron)]"
          >
            View all projects
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
