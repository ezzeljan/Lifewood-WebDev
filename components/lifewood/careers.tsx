import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { benefits } from "@/lib/data/careers"

export function Careers() {
  return (
    <section id="careers" className="bg-[var(--lw-white)] py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--lw-saffron)]">
              Careers
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[var(--lw-dark)] sm:text-4xl lg:text-[2.65rem]">
              Join the team building the future of AI
            </h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
              We are always looking for passionate, talented people who share
              our vision.
            </p>
            <div className="mt-8">
              <Link
                href="/careers"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--lw-green)] px-7 py-3.5 text-[0.88rem] font-semibold text-white transition-all duration-300 hover:shadow-[0_8px_24px_rgba(4,98,65,0.2)] active:scale-[0.97]"
              >
                View open positions
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Benefit cards -- summary only */}
          <div className="grid gap-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="group flex items-start gap-5 rounded-[1.25rem] border border-[var(--lw-dark)]/[0.03] bg-[var(--lw-sea-salt)] p-7 text-left transition-all duration-500 hover:border-[var(--lw-green)]/10 hover:shadow-[0_12px_40px_rgba(19,48,32,0.05)]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--lw-green)]/[0.05] transition-colors duration-300 group-hover:bg-[var(--lw-green)]/10">
                  <b.icon size={20} className="text-[var(--lw-green)]" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[1.02rem] font-semibold text-[var(--lw-dark)]">{b.title}</h3>
                  <p className="mt-1.5 text-[0.88rem] leading-relaxed text-[var(--lw-dark)]/45">
                    {b.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
