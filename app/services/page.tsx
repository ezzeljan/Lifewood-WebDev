import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { services } from "@/lib/data/services"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | Lifewood AI Data Solutions",
  description: "Comprehensive AI data services including data annotation, AI training data, data processing, and quality assurance.",
}

export default function ServicesPage() {
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
              What we do
            </span>
            <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[var(--lw-dark)] sm:text-4xl lg:text-[2.65rem]">
              Comprehensive AI data services
            </h1>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
              From raw data to refined AI-ready datasets -- powering the next generation of machine learning.
            </p>
          </div>
        </div>
      </section>

      {/* Full service details */}
      <section className="bg-[var(--lw-sea-salt)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="overflow-hidden rounded-[1.5rem] border border-[var(--lw-green)]/15 bg-[var(--lw-white)] p-8 shadow-[0_4px_24px_rgba(19,48,32,0.04)] lg:p-10"
              >
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--lw-green)]/10">
                    <service.icon size={22} className="text-[var(--lw-green)]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-[var(--lw-dark)]">{service.title}</h2>
                    <p className="mt-1 text-[0.88rem] text-[var(--lw-dark)]/45">{service.summary}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-[var(--lw-dark)]/[0.04]" />

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
                  href="mailto:info@lifewood.com"
                  className="mt-6 inline-flex items-center gap-1.5 text-[0.84rem] font-semibold text-[var(--lw-green)] transition-colors hover:text-[var(--lw-saffron)]"
                >
                  Learn more
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
