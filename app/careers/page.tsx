"use client"

import { useState, useRef } from "react"
import { ArrowRight, ArrowUpRight, CheckCircle2, AlertCircle, Upload, X } from "lucide-react"
import Link from "next/link"
import { benefits } from "@/lib/data/careers"

interface FormErrors {
  fullName?: string
  email?: string
  phone?: string
  position?: string
  experience?: string
  resume?: string
}

const positions = [
  "Data Annotator",
  "Senior Data Annotator",
  "Project Manager",
  "Quality Assurance Specialist",
  "AI/ML Engineer",
  "Software Engineer",
  "Business Development Manager",
  "Operations Manager",
  "Other",
]

const experienceLevels = [
  "Fresh Graduate / Entry Level",
  "1-3 Years",
  "3-5 Years",
  "5-10 Years",
  "10+ Years",
]

export default function CareersPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    coverLetter: "",
  })
  const [resume, setResume] = useState<File | null>(null)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [serverMessage, setServerMessage] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const validate = (): boolean => {
    const e: FormErrors = {}
    if (!form.fullName.trim() || form.fullName.trim().length < 2) e.fullName = "Full name is required."
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "A valid email is required."
    if (!form.phone.trim() || form.phone.trim().length < 7) e.phone = "A valid phone number is required."
    if (!form.position) e.position = "Please select a position."
    if (!form.experience) e.experience = "Please select your experience level."
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus("submitting")
    setErrors({})

    try {
      const fd = new FormData()
      fd.append("fullName", form.fullName)
      fd.append("email", form.email)
      fd.append("phone", form.phone)
      fd.append("position", form.position)
      fd.append("experience", form.experience)
      fd.append("coverLetter", form.coverLetter)
      if (resume) fd.append("resume", resume)

      const res = await fetch("/api/apply", { method: "POST", body: fd })
      const data = await res.json()

      if (data.success) {
        setStatus("success")
        setServerMessage(data.message)
        setForm({ fullName: "", email: "", phone: "", position: "", experience: "", coverLetter: "" })
        setResume(null)
      } else {
        setStatus("error")
        if (data.errors) setErrors(data.errors)
        setServerMessage(data.message || "Validation failed. Please check your inputs.")
      }
    } catch {
      setStatus("error")
      setServerMessage("Network error. Please try again later.")
    }
  }

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => { const next = { ...prev }; delete next[field as keyof FormErrors]; return next })
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setResume(file)
      if (errors.resume) {
        setErrors((prev) => { const next = { ...prev }; delete next.resume; return next })
      }
    }
  }

  const inputClass = (field: keyof FormErrors) =>
    `w-full rounded-xl border bg-[var(--lw-sea-salt)] px-4 py-3 text-[0.88rem] text-[var(--lw-dark)] placeholder:text-[var(--lw-dark)]/25 outline-none transition-colors focus:border-[var(--lw-green)]/30 focus:ring-2 focus:ring-[var(--lw-green)]/10 ${
      errors[field] ? "border-red-300" : "border-[var(--lw-dark)]/[0.06]"
    }`

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
              We are always looking for passionate, talented people who share our vision
              of leveraging AI to transform communities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Why work at Lifewood + Benefits */}
      <section className="bg-[var(--lw-sea-salt)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="text-2xl font-bold text-[var(--lw-dark)] lg:text-3xl">
                Why work at Lifewood?
              </h2>
              <p className="mt-5 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
                At Lifewood, you will be part of a global team that is passionate about using
                technology to make a real difference. We offer competitive compensation,
                meaningful work, and the opportunity to grow your career across multiple
                countries and disciplines.
              </p>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
                Our teams work on projects that directly impact how the world uses AI -- from
                training autonomous vehicle perception systems to building healthcare
                diagnostic tools. Every data point you help process contributes to
                safer roads, better medical outcomes, and smarter technology for everyone.
              </p>
              <div className="mt-8">
                <a
                  href="#apply"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--lw-green)] px-7 py-3.5 text-[0.88rem] font-semibold text-white shadow-[0_4px_20px_rgba(4,98,65,0.25)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(4,98,65,0.35)] active:scale-[0.97]"
                >
                  Apply now
                  <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

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

      {/* Apply Now Form */}
      <section id="apply" className="scroll-mt-24 bg-[var(--lw-paper)] py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center rounded-[1.5rem] border border-[var(--lw-green)]/15 bg-[var(--lw-white)] p-12 text-center shadow-[0_4px_24px_rgba(19,48,32,0.04)]">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--lw-green)]/10">
                <CheckCircle2 size={32} className="text-[var(--lw-green)]" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-[var(--lw-dark)]">Application submitted</h3>
              <p className="mt-3 max-w-sm text-[0.92rem] leading-relaxed text-[var(--lw-dark)]/50">
                {serverMessage}
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--lw-green)] px-6 py-3 text-[0.88rem] font-semibold text-white transition-all hover:shadow-[0_8px_24px_rgba(4,98,65,0.2)]"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="overflow-hidden rounded-[1.5rem] border border-[var(--lw-dark)]/[0.04] bg-[var(--lw-white)] p-8 shadow-[0_4px_24px_rgba(19,48,32,0.04)] lg:p-10"
              noValidate
            >
              <h2 className="text-2xl font-bold text-[var(--lw-dark)]">Apply now</h2>
              <p className="mt-2 text-[0.88rem] text-[var(--lw-dark)]/45">
                Fill in your details below and upload your resume. We will review your application and get back to you.
              </p>

              {status === "error" && serverMessage && (
                <div className="mt-5 flex items-center gap-3 rounded-xl bg-red-50 px-4 py-3 text-[0.84rem] text-red-600">
                  <AlertCircle size={16} />
                  {serverMessage}
                </div>
              )}

              <div className="mt-8 flex flex-col gap-5">
                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="apply-name" className="mb-1.5 block text-[0.82rem] font-semibold text-[var(--lw-dark)]">
                      Full name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="apply-name"
                      type="text"
                      value={form.fullName}
                      onChange={(e) => handleChange("fullName", e.target.value)}
                      placeholder="Your full name"
                      className={inputClass("fullName")}
                    />
                    {errors.fullName && <p className="mt-1 text-[0.78rem] text-red-500">{errors.fullName}</p>}
                  </div>
                  <div>
                    <label htmlFor="apply-email" className="mb-1.5 block text-[0.82rem] font-semibold text-[var(--lw-dark)]">
                      Email address <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="apply-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="you@email.com"
                      className={inputClass("email")}
                    />
                    {errors.email && <p className="mt-1 text-[0.78rem] text-red-500">{errors.email}</p>}
                  </div>
                </div>

                {/* Phone + Position */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="apply-phone" className="mb-1.5 block text-[0.82rem] font-semibold text-[var(--lw-dark)]">
                      Phone number <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="apply-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+60 12-345 6789"
                      className={inputClass("phone")}
                    />
                    {errors.phone && <p className="mt-1 text-[0.78rem] text-red-500">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="apply-position" className="mb-1.5 block text-[0.82rem] font-semibold text-[var(--lw-dark)]">
                      Position <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="apply-position"
                      value={form.position}
                      onChange={(e) => handleChange("position", e.target.value)}
                      className={inputClass("position")}
                    >
                      <option value="">Select a position</option>
                      {positions.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                    {errors.position && <p className="mt-1 text-[0.78rem] text-red-500">{errors.position}</p>}
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <label htmlFor="apply-experience" className="mb-1.5 block text-[0.82rem] font-semibold text-[var(--lw-dark)]">
                    Experience level <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="apply-experience"
                    value={form.experience}
                    onChange={(e) => handleChange("experience", e.target.value)}
                    className={inputClass("experience")}
                  >
                    <option value="">Select experience level</option>
                    {experienceLevels.map((l) => (
                      <option key={l} value={l}>{l}</option>
                    ))}
                  </select>
                  {errors.experience && <p className="mt-1 text-[0.78rem] text-red-500">{errors.experience}</p>}
                </div>

                {/* Resume upload */}
                <div>
                  <label className="mb-1.5 block text-[0.82rem] font-semibold text-[var(--lw-dark)]">
                    Resume <span className="text-[var(--lw-dark)]/30 font-normal">(PDF or Word, max 5MB)</span>
                  </label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                    aria-label="Upload resume"
                  />
                  {resume ? (
                    <div className="flex items-center gap-3 rounded-xl border border-[var(--lw-green)]/15 bg-[var(--lw-green)]/[0.02] px-4 py-3">
                      <Upload size={16} className="text-[var(--lw-green)]" />
                      <span className="flex-1 truncate text-[0.84rem] font-medium text-[var(--lw-dark)]">
                        {resume.name}
                      </span>
                      <span className="text-[0.75rem] text-[var(--lw-dark)]/35">
                        {(resume.size / 1024).toFixed(0)} KB
                      </span>
                      <button
                        type="button"
                        onClick={() => { setResume(null); if (fileInputRef.current) fileInputRef.current.value = "" }}
                        className="rounded-full p-1 text-[var(--lw-dark)]/30 hover:bg-[var(--lw-dark)]/[0.04] hover:text-[var(--lw-dark)]/60"
                        aria-label="Remove file"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className={`flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed px-4 py-6 text-[0.84rem] font-medium transition-colors hover:border-[var(--lw-green)]/20 hover:bg-[var(--lw-green)]/[0.02] ${
                        errors.resume ? "border-red-300 text-red-500" : "border-[var(--lw-dark)]/[0.08] text-[var(--lw-dark)]/40"
                      }`}
                    >
                      <Upload size={16} />
                      Click to upload your resume
                    </button>
                  )}
                  {errors.resume && <p className="mt-1 text-[0.78rem] text-red-500">{errors.resume}</p>}
                </div>

                {/* Cover letter */}
                <div>
                  <label htmlFor="apply-cover" className="mb-1.5 block text-[0.82rem] font-semibold text-[var(--lw-dark)]">
                    Cover letter <span className="text-[var(--lw-dark)]/30 font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="apply-cover"
                    rows={4}
                    value={form.coverLetter}
                    onChange={(e) => handleChange("coverLetter", e.target.value)}
                    placeholder="Tell us why you would be a great fit for Lifewood..."
                    className="w-full resize-none rounded-xl border border-[var(--lw-dark)]/[0.06] bg-[var(--lw-sea-salt)] px-4 py-3 text-[0.88rem] text-[var(--lw-dark)] placeholder:text-[var(--lw-dark)]/25 outline-none transition-colors focus:border-[var(--lw-green)]/30 focus:ring-2 focus:ring-[var(--lw-green)]/10"
                  />
                </div>

                {/* Submit */}
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--lw-green)] px-7 py-3.5 text-[0.88rem] font-semibold text-white shadow-[0_4px_20px_rgba(4,98,65,0.25)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(4,98,65,0.35)] active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Submitting..." : "Submit application"}
                    <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}
