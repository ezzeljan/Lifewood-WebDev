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

export function ESG() {
  return (
    <section id="esg" className="bg-[var(--lw-paper)] py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left: text + image */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--lw-saffron)]">
              ESG commitment
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[var(--lw-dark)] sm:text-4xl lg:text-[2.65rem]">
              Technology that empowers people and the planet
            </h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
              At Lifewood, ESG is not a checkbox but a core principle woven into
              every aspect of our operations.
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
              <Link
                href="/transformation"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--lw-green)] px-6 py-3 text-[0.88rem] font-semibold text-white transition-all duration-300 hover:shadow-[0_8px_24px_rgba(4,98,65,0.2)] active:scale-[0.97]"
              >
                Learn about our impact
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right: stat cards -- summary only */}
          <div className="grid gap-4 sm:grid-cols-2">
            {esgData.map((item) => (
              <div
                key={item.label}
                className="group rounded-[1.25rem] bg-[var(--lw-white)] p-7 text-left shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(19,48,32,0.07)]"
              >
                <div
                  className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--lw-green)]/[0.05] transition-colors duration-300 group-hover:bg-[var(--lw-green)]/[0.09]"
                >
                  <item.icon size={20} className="text-[var(--lw-green)]" strokeWidth={1.5} />
                </div>
                <div className="text-[1.75rem] font-bold leading-tight text-[var(--lw-green)]">
                  <CountUp end={item.stat} suffix={item.suffix} customDisplay={item.customDisplay} />
                </div>
                <div className="mt-1.5 text-[0.84rem] font-semibold text-[var(--lw-dark)]">
                  {item.label}
                </div>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-[var(--lw-dark)]/45">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
