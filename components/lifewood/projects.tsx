"use client"

import { ArrowRight, Car, HeartPulse, Landmark, Smartphone, ChevronDown } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    icon: Car,
    industry: "Automotive",
    title: "Autonomous vehicle training",
    summary: "Labeled 12M+ images for self-driving perception models.",
    description:
      "We partnered with a leading automotive OEM to label over 12 million images for self-driving perception models. Our team of 200+ annotators delivered pixel-perfect semantic segmentation, 3D bounding boxes, and lane markings across diverse driving conditions -- achieving 99.2% accuracy with a 3-week turnaround.",
    stats: ["12M+ images", "99.2% accuracy", "200+ annotators"],
  },
  {
    icon: HeartPulse,
    industry: "Healthcare",
    title: "Medical imaging AI",
    summary: "Annotated radiology scans for diagnostic AI systems.",
    description:
      "Supporting a global healthtech company, our medical annotation team labeled thousands of radiology scans (CT, MRI, X-ray) with expert-verified annotations. This enabled the development of diagnostic AI that can detect early-stage anomalies with clinical-grade precision, now deployed in 15+ hospitals across Asia.",
    stats: ["50K+ scans", "Clinical-grade QA", "15+ hospitals"],
  },
  {
    icon: Landmark,
    industry: "Finance",
    title: "NLP for financial compliance",
    summary: "Processed multilingual documents for regulatory analysis.",
    description:
      "We built a custom NLP training dataset for a Southeast Asian bank's compliance system. Our multilingual team processed financial documents across 8 languages, tagging entities, classifying risk factors, and flagging regulatory triggers -- reducing the bank's manual review workload by 70%.",
    stats: ["8 languages", "70% time saved", "500K documents"],
  },
  {
    icon: Smartphone,
    industry: "Technology",
    title: "Voice assistant training",
    summary: "Curated multilingual speech data for conversational AI.",
    description:
      "For a major tech platform, we curated 10,000+ hours of multilingual speech data across 12 Southeast Asian languages and dialects. Our team handled transcription, intent labeling, and sentiment tagging -- powering a voice assistant that serves over 50 million users daily.",
    stats: ["10K+ hours", "12 languages", "50M+ users"],
  },
]

export function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="projects" className="bg-[var(--lw-sea-salt)] py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--lw-saffron)]">
            Our work
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[var(--lw-dark)] sm:text-4xl lg:text-[2.65rem]">
            Projects that drive real impact
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
            Click any case study to see the full story.
          </p>
        </div>

        {/* Project cards */}
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {projects.map((project, i) => {
            const isOpen = expanded === i
            return (
              <div
                key={project.title}
                className={`group relative overflow-hidden rounded-[1.5rem] border transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  isOpen
                    ? "border-[var(--lw-green)]/15 bg-[var(--lw-white)] shadow-[0_20px_60px_rgba(19,48,32,0.08)]"
                    : "border-[var(--lw-dark)]/[0.03] bg-[var(--lw-white)] hover:border-[var(--lw-green)]/10 hover:shadow-[0_8px_32px_rgba(19,48,32,0.04)]"
                }`}
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : i)}
                  className="flex w-full items-start justify-between p-8 text-left lg:p-10"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <div className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-colors duration-300 ${
                        isOpen ? "bg-[var(--lw-green)]/10" : "bg-[var(--lw-green)]/[0.05]"
                      }`}>
                        <project.icon size={22} className="text-[var(--lw-green)]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-[var(--lw-saffron)]">
                          {project.industry}
                        </span>
                        <h3 className="text-lg font-semibold text-[var(--lw-dark)]">{project.title}</h3>
                      </div>
                    </div>
                    <p className="mt-3 text-[0.88rem] text-[var(--lw-dark)]/45">{project.summary}</p>
                  </div>
                  <div
                    className={`ml-4 mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-[var(--lw-green)]/20 bg-[var(--lw-green)]/[0.06] rotate-180"
                        : "border-[var(--lw-dark)]/[0.06]"
                    }`}
                  >
                    <ChevronDown size={16} className={isOpen ? "text-[var(--lw-green)]" : "text-[var(--lw-dark)]/30"} />
                  </div>
                </button>

                {/* Expandable detail */}
                <div
                  className={`grid transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-8 pb-8 lg:px-10 lg:pb-10">
                      <div className="mb-5 h-px bg-[var(--lw-dark)]/[0.04]" />
                      <p className="text-[0.92rem] leading-[1.75] text-[var(--lw-dark)]/55">
                        {project.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.stats.map((stat) => (
                          <span
                            key={stat}
                            className="rounded-full bg-[var(--lw-green)]/[0.04] px-3.5 py-1.5 text-[0.75rem] font-semibold text-[var(--lw-green)]"
                          >
                            {stat}
                          </span>
                        ))}
                      </div>
                      <a
                        href="#contact"
                        className="mt-5 inline-flex items-center gap-1.5 text-[0.84rem] font-semibold text-[var(--lw-green)] transition-colors hover:text-[var(--lw-saffron)]"
                      >
                        Discuss a similar project
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
