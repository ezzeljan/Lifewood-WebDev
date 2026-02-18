"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { esgData } from "@/lib/data/esg"

function CountUp({ end, suffix, customDisplay }: { end: number; suffix: string; customDisplay?: string }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started || customDisplay) return
    let current = 0
    const step = Math.max(1, Math.floor(end / 40))
    const interval = setInterval(() => {
      current += step
      if (current >= end) { setCount(end); clearInterval(interval) }
      else setCount(current)
    }, 30)
    return () => clearInterval(interval)
  }, [started, end, customDisplay])

  return (
    <span ref={ref} className="tabular-nums">
      {customDisplay ? customDisplay : `${count}${suffix}`}
    </span>
  )
}

export default function TransformationPage() {
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
              ESG commitment
            </span>
            <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[var(--lw-dark)] sm:text-4xl lg:text-[2.65rem]">
              Technology that empowers people and the planet
            </h1>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
              At Lifewood, ESG is not a checkbox but a core principle woven into
              every aspect of our operations.
            </p>
          </div>
        </div>
      </section>

      {/* Full ESG content */}
      <section className="bg-[var(--lw-paper)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
            {/* Left: text + image */}
            <div>
              <p className="text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
                From inclusive hiring practices in Bangladesh to sustainable
                technology deployment across Asia, we lead with purpose. Our ESG
                framework guides every strategic decision, ensuring that growth
                never comes at the expense of communities or the environment.
              </p>
              <p className="mt-5 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
                Our commitment extends beyond policy documents. Every team member
                at Lifewood is empowered to contribute to our sustainability goals,
                from energy-efficient practices in our offices to community outreach
                programs in the regions where we operate.
              </p>

              <div className="mt-8 overflow-hidden rounded-[1.25rem]">
                <Image
                  src="/esg-community.jpg"
                  alt="Lifewood diverse team working together in an inclusive office"
                  width={600}
                  height={360}
                  className="h-auto w-full object-cover"
                />
              </div>

              <div className="mt-8">
                <a
                  href="mailto:info@lifewood.com"
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--lw-green)] px-6 py-3 text-[0.88rem] font-semibold text-white transition-all duration-300 hover:shadow-[0_8px_24px_rgba(4,98,65,0.2)] active:scale-[0.97]"
                >
                  Partner with us
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right: fully expanded stat cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {esgData.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.25rem] bg-[var(--lw-green)] p-7 text-left shadow-[0_16px_48px_rgba(4,98,65,0.2)] sm:col-span-1"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                    <item.icon size={20} className="text-white" strokeWidth={1.5} />
                  </div>
                  <div className="text-[1.75rem] font-bold leading-tight text-white">
                    <CountUp end={item.stat} suffix={item.suffix} customDisplay={item.customDisplay} />
                  </div>
                  <div className="mt-1.5 text-[0.84rem] font-semibold text-white">
                    {item.label}
                  </div>
                  <p className="mt-2 text-[0.82rem] leading-relaxed text-white/70">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
