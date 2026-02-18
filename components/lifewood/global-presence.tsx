import { MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import { regions } from "@/lib/data/global"

export function GlobalPresence() {
  return (
    <section id="global" className="bg-[var(--lw-white)] py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--lw-saffron)]">
            Worldwide reach
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[var(--lw-dark)] sm:text-4xl lg:text-[2.65rem]">
            Offices across the East and West
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
            Operations spanning Southeast Asia, China, and beyond.
          </p>
        </div>

        {/* Region cards -- summary only */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((region) => (
            <div
              key={region.name}
              className={`group relative overflow-hidden rounded-[1.25rem] p-7 text-left transition-all duration-500 ${
                region.highlight
                  ? "bg-[var(--lw-green)] shadow-[0_8px_24px_rgba(4,98,65,0.12)] hover:shadow-[0_12px_40px_rgba(4,98,65,0.18)]"
                  : "border border-[var(--lw-dark)]/[0.03] bg-[var(--lw-sea-salt)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(19,48,32,0.06)]"
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

              <h3
                className={`relative text-xl font-bold ${
                  region.highlight ? "text-white" : "text-[var(--lw-dark)]"
                }`}
              >
                {region.name}
              </h3>

              <p
                className={`relative mt-2.5 text-[0.88rem] leading-relaxed ${
                  region.highlight ? "text-white/65" : "text-[var(--lw-dark)]/45"
                }`}
              >
                {region.summary}
              </p>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-10 text-center">
          <Link
            href="/global"
            className="group inline-flex items-center gap-2 text-[0.92rem] font-semibold text-[var(--lw-green)] transition-colors hover:text-[var(--lw-saffron)]"
          >
            Explore our global presence
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
