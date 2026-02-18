"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Menu, X, ChevronDown, ArrowUpRight, LogIn } from "lucide-react"
import Image from "next/image";

/* ──────────────────────────── nav data ──────────────────────────── */
const navItems = [
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Data Annotation", href: "#services", desc: "Human-powered labeling across text, image, audio & video" },
      { label: "AI Training Data", href: "#services", desc: "Production-grade datasets for ML model development" },
      { label: "Data Processing", href: "#services", desc: "End-to-end pipeline management at scale" },
      { label: "Quality Assurance", href: "#services", desc: "Multi-tier QC with 98%+ accuracy" },
    ],
  },
  {
    label: "Projects",
    href: "#projects",
    children: [
      { label: "Case Studies", href: "#projects", desc: "See how we helped global enterprises" },
      { label: "Industries", href: "#projects", desc: "Automotive, healthcare, finance & more" },
      { label: "Technology Stack", href: "#projects", desc: "The tools and platforms we use" },
    ],
  },
  {
    label: "Transformation",
    href: "#esg",
    children: [
      { label: "ESG Commitment", href: "#esg", desc: "Our environmental & social impact" },
      { label: "Community Impact", href: "#esg", desc: "Empowering underrepresented communities" },
      { label: "Sustainability", href: "#esg", desc: "Carbon-neutral operations by 2030" },
    ],
  },
  {
    label: "Global Scale",
    href: "#global",
    children: [
      { label: "Malaysia (HQ)", href: "#global", desc: "Our global headquarters in Kuala Lumpur" },
      { label: "Singapore", href: "#global", desc: "Regional hub for Southeast Asia" },
      { label: "China", href: "#global", desc: "Technology center & partnerships" },
      { label: "Bangladesh", href: "#global", desc: "Inclusive operations center (Pottya)" },
    ],
  },
  {
    label: "Our Company",
    href: "#about",
    children: [
      { label: "About Us", href: "#about", desc: "Our story, vision & mission" },
      { label: "Leadership", href: "#about", desc: "Meet the team driving innovation" },
      { label: "Partners", href: "#about", desc: "Strategic alliances worldwide" },
    ],
  },
  { label: "Careers", href: "#careers" },
]

/* ──────────────────────────── component ──────────────────────────── */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)

  /* scroll listener */
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", h, { passive: true })
    return () => window.removeEventListener("scroll", h)
  }, [])

  /* lock body scroll */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  /* close dropdown when clicking outside */
  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(e.target as Node)) {
      setOpenDropdown(null)
    }
  }, [])

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [handleClickOutside])

  const toggleDropdown = (label: string) => {
    setOpenDropdown(prev => prev === label ? null : label)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "glass border-b border-[var(--lw-green)]/5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-[var(--lw-white)]/60 backdrop-blur-md"
      }`}
    >
      <nav ref={navRef} className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-10">
        {/* ── Logo ── */}
       <a href="#" className="group flex items-center shrink-0">
  <Image
    src="/logo.png"
    alt="Lifewood"
    width={140}
    height={40}
    className="transition-transform duration-300 group-hover:scale-105"
  />
</a>

        {/* ── Desktop links ── */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="relative">
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className={`inline-flex items-center gap-1 rounded-lg px-3.5 py-2 text-[0.82rem] font-medium transition-all duration-300 ${
                    openDropdown === item.label
                      ? "bg-[var(--lw-green)]/[0.06] text-[var(--lw-green)]"
                      : "text-[var(--lw-dark)]/60 hover:bg-[var(--lw-green)]/[0.03] hover:text-[var(--lw-dark)]"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-300 ${openDropdown === item.label ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown panel */}
                <div
                  className={`absolute left-1/2 top-full pt-2 -translate-x-1/2 transition-all duration-300 ${
                    openDropdown === item.label
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-2 opacity-0"
                  }`}
                >
                  <div className="w-[320px] overflow-hidden rounded-2xl border border-[var(--lw-dark)]/[0.04] bg-[var(--lw-white)] p-2 shadow-[0_16px_48px_rgba(19,48,32,0.1)]">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={() => setOpenDropdown(null)}
                        className="group/item flex flex-col rounded-xl px-4 py-3 transition-colors duration-200 hover:bg-[var(--lw-green)]/[0.04]"
                      >
                        <span className="text-[0.84rem] font-semibold text-[var(--lw-dark)] transition-colors group-hover/item:text-[var(--lw-green)]">
                          {child.label}
                        </span>
                        <span className="mt-0.5 text-[0.75rem] leading-snug text-[var(--lw-dark)]/40">
                          {child.desc}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="rounded-lg px-3.5 py-2 text-[0.82rem] font-medium text-[var(--lw-dark)]/60 transition-all duration-300 hover:bg-[var(--lw-green)]/[0.03] hover:text-[var(--lw-dark)]"
              >
                {item.label}
              </a>
            )
          )}
        </div>

        {/* ── Right actions ── */}
        <div className="hidden items-center gap-3 lg:flex">
         <a /*
            href="#admin"
            className="inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[0.82rem] font-medium text-[var(--lw-dark)]/50 transition-colors duration-300 hover:text-[var(--lw-dark)]" */
          >
           
           
          </a>
          <a 
            href="#apply"
            className="group inline-flex items-center gap-1.5 rounded-full bg-[var(--lw-green)] px-5 py-2.5 text-[0.82rem] font-semibold text-white shadow-[0_2px_8px_rgba(4,98,65,0.2)] transition-all duration-300 hover:shadow-[0_4px_16px_rgba(4,98,65,0.3)] hover:brightness-110" 
          >
            Apply Now
            <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* ── Mobile toggle ── */}
        <button
          onClick={() => { setMobileOpen(!mobileOpen); setMobileExpanded(null) }}
          className="relative z-50 rounded-xl p-2 text-[var(--lw-dark)] transition-colors lg:hidden active:bg-[var(--lw-green)]/[0.05]"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative h-5 w-5">
            <span className={`absolute left-0 block h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 ${mobileOpen ? "top-[9px] rotate-45" : "top-1"}`} />
            <span className={`absolute left-0 top-[9px] block h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : "opacity-100"}`} />
            <span className={`absolute left-0 block h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 ${mobileOpen ? "top-[9px] -rotate-45" : "top-[17px]"}`} />
          </div>
        </button>
      </nav>

      {/* ── Mobile overlay ── */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--lw-dark)]/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* ── Mobile drawer (iOS-style slide up sheet) ── */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 max-h-[85vh] overflow-y-auto rounded-t-[1.75rem] bg-[var(--lw-white)] shadow-[0_-8px_40px_rgba(0,0,0,0.1)] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] lg:hidden ${
          mobileOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Drag handle */}
        <div className="sticky top-0 z-10 flex justify-center bg-[var(--lw-white)] pt-3 pb-2">
          <div className="h-[5px] w-10 rounded-full bg-[var(--lw-dark)]/10" />
        </div>

        <div className="px-5 pb-8">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-[var(--lw-dark)]/[0.04] last:border-b-0">
              {item.children ? (
                <>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    className="flex w-full items-center justify-between py-4 text-[0.95rem] font-semibold text-[var(--lw-dark)]"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`text-[var(--lw-dark)]/30 transition-transform duration-300 ${
                        mobileExpanded === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-400 ease-out ${
                      mobileExpanded === item.label ? "grid-rows-[1fr] pb-3 opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-col gap-1 pl-1">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            onClick={() => { setMobileOpen(false); setMobileExpanded(null) }}
                            className="rounded-xl px-3 py-2.5 transition-colors active:bg-[var(--lw-green)]/[0.04]"
                          >
                            <div className="text-[0.88rem] font-medium text-[var(--lw-green)]">{child.label}</div>
                            <div className="mt-0.5 text-[0.75rem] text-[var(--lw-dark)]/40">{child.desc}</div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center py-4 text-[0.95rem] font-semibold text-[var(--lw-dark)]"
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}

          {/* Mobile bottom actions */}
          <div className="mt-4 flex flex-col gap-3">
            <a
              /*href="#admin"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-2xl border border-[var(--lw-dark)]/[0.06] py-3.5 text-[0.88rem] font-medium text-[var(--lw-dark)]/60 transition-colors active:bg-[var(--lw-green)]/[0.03]" */
            >
           
            </a>
            <a
              href="#apply"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-2xl bg-[var(--lw-green)] py-3.5 text-[0.88rem] font-semibold text-white transition-all active:brightness-95"
            >
              Apply Now
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
