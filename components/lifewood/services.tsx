import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { services } from "@/lib/data/services"

export function Services() {
  return (
    <section id="services" className="bg-[var(--lw-white)] py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--lw-saffron)]">
            What we do
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[var(--lw-dark)] sm:text-4xl lg:text-[2.65rem]">
            Comprehensive AI data services
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
            From raw data to refined AI-ready datasets -- powering the next generation of machine learning.
          </p>
        </div>

        {/* Service cards -- summary only */}
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-[1.5rem] border border-[var(--lw-dark)]/[0.03] bg-[var(--lw-sea-salt)] p-8 transition-all duration-500 hover:border-[var(--lw-green)]/10 hover:shadow-[0_8px_32px_rgba(19,48,32,0.04)] lg:p-10"
            >
              <div className="flex items-center gap-4">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--lw-green)]/[0.05] transition-colors duration-300 group-hover:bg-[var(--lw-green)]/10">
                  <service.icon size={22} className="text-[var(--lw-green)]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--lw-dark)]">{service.title}</h3>
                  <p className="mt-1 text-[0.88rem] text-[var(--lw-dark)]/45">{service.summary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-[0.92rem] font-semibold text-[var(--lw-green)] transition-colors hover:text-[var(--lw-saffron)]"
          >
            View all services
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
