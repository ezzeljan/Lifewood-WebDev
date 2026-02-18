"use client"

import { useState, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Transformation", href: "/transformation" },
  { label: "Global Scale", href: "/global" },
  { label: "Our Company", href: "/about" },
  { label: "Careers", href: "/careers" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", h, { passive: true })
    return () => window.removeEventListener("scroll", h)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "glass border-b border-[var(--lw-green)]/5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-[var(--lw-white)]/60 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-10">
        {/* Logo */}
        <Link href="/" className="group flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="Lifewood"
            width={140}
            height={40}
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`rounded-lg px-3.5 py-2 text-[0.82rem] font-medium transition-all duration-300 ${
                pathname === item.href
                  ? "bg-[var(--lw-green)]/[0.06] text-[var(--lw-green)]"
                  : "text-[var(--lw-dark)]/60 hover:bg-[var(--lw-green)]/[0.03] hover:text-[var(--lw-dark)]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/careers"
            className="group inline-flex items-center gap-1.5 rounded-full bg-[var(--lw-green)] px-5 py-2.5 text-[0.82rem] font-semibold text-white shadow-[0_2px_8px_rgba(4,98,65,0.2)] transition-all duration-300 hover:shadow-[0_4px_16px_rgba(4,98,65,0.3)] hover:brightness-110"
          >
            Apply Now
            <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
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

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--lw-dark)]/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
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
              <Link
                href={item.href}
                className={`flex items-center py-4 text-[0.95rem] font-semibold ${
                  pathname === item.href
                    ? "text-[var(--lw-green)]"
                    : "text-[var(--lw-dark)]"
                }`}
              >
                {item.label}
              </Link>
            </div>
          ))}

          {/* Mobile bottom actions */}
          <div className="mt-4 flex flex-col gap-3">
            <Link
              href="/careers"
              className="flex items-center justify-center gap-2 rounded-2xl bg-[var(--lw-green)] py-3.5 text-[0.88rem] font-semibold text-white transition-all active:brightness-95"
            >
              Apply Now
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
