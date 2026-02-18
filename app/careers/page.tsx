import { ArrowRight, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { benefits } from "@/lib/data/careers"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers | Lifewood AI Data Solutions",
  description: "Join the team building the future of AI. Explore career opportunities at Lifewood.",
}

export default function CareersPage() {
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
              Careers
            </span>
            <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[var(--lw-dark)] sm:text-4xl lg:text-[2.65rem]">
              Join the team building the future of AI
            </h1>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
              We are always looking for passionate, talented people who share
              our vision of leveraging AI to transform communities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Full careers content */}
      <section className="bg-[var(--lw-sea-salt)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
            {/* Left: CTA */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--lw-dark)] lg:text-3xl">
                Why work at Lifewood?
              </h2>
              <p className="mt-5 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
                At Lifewood, you will be part of a global team that is passionate
                about using technology to make a real difference. We offer
                competitive compensation, meaningful work, and the opportunity
                to grow your career across multiple countries and disciplines.
              </p>
              <div className="mt-8">
                <a
                  href="mailto:careers@lifewood.com"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--lw-green)] px-7 py-3.5 text-[0.88rem] font-semibold text-white shadow-[0_4px_20px_rgba(4,98,65,0.25)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(4,98,65,0.35)] active:scale-[0.97]"
                >
                  Apply now
                  <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* Right: Benefit cards fully expanded */}
            <div className="grid gap-4">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="flex items-start gap-5 rounded-[1.25rem] border border-[var(--lw-green)]/15 bg-[var(--lw-white)] p-7 shadow-[0_4px_24px_rgba(19,48,32,0.04)]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--lw-green)]/10">
                    <b.icon size={20} className="text-[var(--lw-green)]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[1.02rem] font-semibold text-[var(--lw-dark)]">{b.title}</h3>
                    <p className="mt-1.5 text-[0.88rem] leading-relaxed text-[var(--lw-dark)]/60">
                      {b.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
