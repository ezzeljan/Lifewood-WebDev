"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navGroups = [
  {
    label: "Solutions",
    items: [
      { label: "Services", href: "/services" },
      { label: "Projects", href: "/projects" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "ESG & Transformation", href: "/transformation" },
      { label: "Global Presence", href: "/global" },
      { label: "Careers", href: "/careers" },
    ],
  },
]

const flatLinks = navGroups.flatMap((g) => g.items)

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const pathname = usePathname()
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", h, { passive: true })
    return () => window.removeEventListener("scroll", h)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
    setMobileExpanded(null)
  }, [pathname])

  const isGroupActive = (group: typeof navGroups[0]) =>
    group.items.some((item) => pathname === item.href)

  const handleMouseEnter = (label: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    setOpenDropdown(label)
  }

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
  }

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

        {/* Desktop links with dropdowns */}
        <div className="hidden items-center gap-1 lg:flex">
          {navGroups.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(group.label)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1 rounded-lg px-3.5 py-2 text-[0.82rem] font-medium transition-all duration-300 ${
                  isGroupActive(group)
                    ? "bg-[var(--lw-green)]/[0.06] text-[var(--lw-green)]"
                    : "text-[var(--lw-dark)]/60 hover:bg-[var(--lw-green)]/[0.03] hover:text-[var(--lw-dark)]"
                }`}
                onClick={() => setOpenDropdown(openDropdown === group.label ? null : group.label)}
                aria-expanded={openDropdown === group.label}
                aria-haspopup="true"
              >
                {group.label}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    openDropdown === group.label ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown */}
              <div
                className={`absolute left-0 top-full pt-1.5 transition-all duration-200 ${
                  openDropdown === group.label
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-1 opacity-0"
                }`}
              >
                <div className="min-w-[200px] overflow-hidden rounded-xl border border-[var(--lw-dark)]/[0.04] bg-[var(--lw-white)] py-1.5 shadow-[0_12px_40px_rgba(19,48,32,0.1)]">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center px-4 py-2.5 text-[0.84rem] font-medium transition-colors duration-200 ${
                        pathname === item.href
                          ? "bg-[var(--lw-green)]/[0.04] text-[var(--lw-green)]"
                          : "text-[var(--lw-dark)]/60 hover:bg-[var(--lw-green)]/[0.03] hover:text-[var(--lw-dark)]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Direct links */}
          <Link
            href="/contact"
            className={`rounded-lg px-3.5 py-2 text-[0.82rem] font-medium transition-all duration-300 ${
              pathname === "/contact"
                ? "bg-[var(--lw-green)]/[0.06] text-[var(--lw-green)]"
                : "text-[var(--lw-dark)]/60 hover:bg-[var(--lw-green)]/[0.03] hover:text-[var(--lw-dark)]"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Right actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/careers#apply"
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
          {/* Groups with accordion */}
          {navGroups.map((group) => (
            <div key={group.label} className="border-b border-[var(--lw-dark)]/[0.04]">
              <button
                onClick={() => setMobileExpanded(mobileExpanded === group.label ? null : group.label)}
                className={`flex w-full items-center justify-between py-4 text-[0.95rem] font-semibold ${
                  isGroupActive(group) ? "text-[var(--lw-green)]" : "text-[var(--lw-dark)]"
                }`}
                aria-expanded={mobileExpanded === group.label}
              >
                {group.label}
                <ChevronDown
                  size={16}
                  className={`text-[var(--lw-dark)]/30 transition-transform duration-200 ${
                    mobileExpanded === group.label ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileExpanded === group.label ? "max-h-60 pb-2" : "max-h-0"
                }`}
              >
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center py-2.5 pl-4 text-[0.88rem] ${
                      pathname === item.href
                        ? "font-semibold text-[var(--lw-green)]"
                        : "text-[var(--lw-dark)]/60"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Contact direct link */}
          <div className="border-b border-[var(--lw-dark)]/[0.04]">
            <Link
              href="/contact"
              className={`flex items-center py-4 text-[0.95rem] font-semibold ${
                pathname === "/contact" ? "text-[var(--lw-green)]" : "text-[var(--lw-dark)]"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile bottom actions */}
          <div className="mt-4 flex flex-col gap-3">
            <Link
              href="/careers#apply"
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
