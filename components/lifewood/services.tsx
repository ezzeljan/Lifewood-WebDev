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
          {services.map((service, i) => {
            const isOpen = expandedIndex === i
            return (
              <div
                key={service.title}
                className={`group relative overflow-hidden rounded-[1.5rem] border transition-all duration-500 ease-[timing-function:cubic-bezier(0.32,0.72,0,1)] ${isOpen
                    ? "border-[var(--lw-green)]/15 bg-[var(--lw-white)] shadow-[0_20px_60px_rgba(19,48,32,0.08)]"
                    : "border-[var(--lw-dark)]/[0.03] bg-[var(--lw-sea-salt)] hover:border-[var(--lw-green)]/10 hover:shadow-[0_8px_32px_rgba(19,48,32,0.04)]"
                  }`}
              >
                {/* Clickable header area */}
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-start justify-between p-8 text-left lg:p-10"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <div
                        className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-colors duration-300 ${isOpen ? "bg-[var(--lw-green)]/10" : "bg-[var(--lw-green)]/[0.05]"
                          }`}
                      >
                        <service.icon size={22} className="text-[var(--lw-green)]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[var(--lw-dark)]">{service.title}</h3>
                        <p className="mt-1 text-[0.88rem] text-[var(--lw-dark)]/45">{service.summary}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`ml-4 mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen
                        ? "border-[var(--lw-green)]/20 bg-[var(--lw-green)]/[0.06] rotate-180"
                        : "border-[var(--lw-dark)]/[0.06] bg-transparent"
                      }`}
                  >
                    <ChevronDown size={16} className={`transition-colors ${isOpen ? "text-[var(--lw-green)]" : "text-[var(--lw-dark)]/30"}`} />
                  </div>
                </button>

                {/* Expandable content */}
                <div
                  className={`grid transition-all duration-500 ease-[timing-function:cubic-bezier(0.32,0.72,0,1)] ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-8 pb-8 lg:px-10 lg:pb-10">
                      {/* Divider */}
                      <div className="mb-6 h-px bg-[var(--lw-dark)]/[0.04]" />

                      <p className="text-[0.92rem] leading-[1.75] text-[var(--lw-dark)]/55">
                        {service.description}
                      </p>

                      {/* Feature tags */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="rounded-full bg-[var(--lw-green)]/[0.04] px-3.5 py-1.5 text-[0.75rem] font-medium text-[var(--lw-green)]"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <a
                        href="#contact"
                        className="mt-6 inline-flex items-center gap-1.5 text-[0.84rem] font-semibold text-[var(--lw-green)] transition-colors hover:text-[var(--lw-saffron)]"
                      >
                        Learn more
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
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
