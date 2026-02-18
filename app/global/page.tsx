import { MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import { regions } from "@/lib/data/global"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Global Presence | Lifewood AI Data Solutions",
  description: "Operations spanning Malaysia, Singapore, China, Bangladesh, Southeast Asia, and worldwide delivery.",
}

export default function GlobalPage() {
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
              Worldwide reach
            </span>
            <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[var(--lw-dark)] sm:text-4xl lg:text-[2.65rem]">
              Offices across the East and West
            </h1>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
              Operations spanning Southeast Asia, China, and beyond -- delivering AI data solutions around the clock.
            </p>
          </div>
        </div>
      </section>

      {/* Full region details */}
      <section className="bg-[var(--lw-sea-salt)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((region) => (
              <div
                key={region.name}
                className={`relative overflow-hidden rounded-[1.25rem] p-7 ${
                  region.highlight
                    ? "bg-[var(--lw-green)] shadow-[0_16px_48px_rgba(4,98,65,0.2)]"
                    : "border border-[var(--lw-dark)]/[0.03] bg-[var(--lw-white)] shadow-[0_4px_24px_rgba(19,48,32,0.04)]"
                }`}
              >
                {region.highlight && (
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[var(--lw-saffron)]/[0.1] blur-2xl" />
                )}

                <div className="relative flex items-center gap-2 mb-3">
                  <MapPin size={15} className="text-[var(--lw-saffron)]" strokeWidth={2} />
                  <span
                    className={`text-[0.68rem] font-semibold uppercase tracking-[0.15em] ${
                      region.highlight ? "text-white/50" : "text-[var(--lw-dark)]/35"
                    }`}
                  >
                    {region.role}
                  </span>
                </div>

                <h2
                  className={`relative text-xl font-bold ${
                    region.highlight ? "text-white" : "text-[var(--lw-dark)]"
                  }`}
                >
                  {region.name}
                </h2>

                <p
                  className={`relative mt-2.5 text-[0.88rem] leading-relaxed ${
                    region.highlight ? "text-white/65" : "text-[var(--lw-dark)]/45"
                  }`}
                >
                  {region.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
