import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { CredibilityStrip } from "@/components/credibility-strip";
import { CTASection } from "@/components/cta-section";
import Image from "next/image";

const services = [
  {
    title: "Fractional CIO Advisory",
    description:
      "Senior CIO-level technology leadership on a flexible, part-time basis. Ideal for organizations that need experienced technology direction without a full-time executive commitment.",
  },
  {
    title: "Fractional CISO Advisory",
    description:
      "Cybersecurity leadership and risk management guidance. Build security programs, improve maturity, and meet compliance requirements with practical, business-aligned approaches.",
  },
  {
    title: "Technology Transformation",
    description:
      "End-to-end transformation planning and execution support. From strategy through delivery, with a focus on outcomes, governance, and organizational alignment.",
  },
  {
    title: "Program Recovery & Execution",
    description:
      "Restoring momentum to troubled technology programs. Rapid assessment, stabilization, and disciplined execution to bring initiatives back on track.",
  },
  {
    title: "Cybersecurity & Compliance",
    description:
      "Risk assessment, compliance readiness, and security program development. Practical approaches to reducing exposure without unnecessary complexity or tool sprawl.",
  },
  {
    title: "AI-Enabled Transformation",
    description:
      "Practical advisory for identifying and implementing AI-enabled use cases that improve productivity, decision-making, risk management, and business execution.",
  },
];

const whereWeHelp = [
  "You need senior technology leadership but not a permanent executive hire.",
  "A critical program is late, unclear, or losing executive confidence.",
  "Cybersecurity risk is visible, but priorities and ownership are unclear.",
  "Cloud, infrastructure, or application modernization needs stronger direction.",
  "A technology operating model needs restructuring for scale.",
  "Compliance, audit, or governance readiness demands experienced oversight.",
  "An acquisition or divestiture requires technology due diligence.",
  "The board or investors need an independent technology assessment.",
];

const experience = [
  "Senior technology leadership across complex enterprise environments",
  "Cybersecurity, infrastructure, cloud, and transformation leadership",
  "Experience with regulated and operationally intensive businesses",
  "Large program recovery and execution discipline",
  "Practical operator experience, not just advisory theory",
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-ivory pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24">
        {/* Subtle radial glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-1/2 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-teal/10 blur-[100px]"
        />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-6 lg:flex-row lg:gap-16">
          {/* Left: text */}
          <div className="flex-1 text-center lg:text-left">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-teal">
              Technology Advisory
            </p>
            <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl md:text-5xl lg:text-5xl">
              Strategy. Security.{" "}
              <span className="text-teal">Execution.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate sm:text-lg lg:mx-0">
              64thSquare provides fractional CIO, CISO, and technology
              transformation advisory services for organizations that need
              experienced technology leadership without adding permanent
              executive headcount.
            </p>

            {/* Supporting line */}
            <p className="mx-auto mt-5 max-w-xl text-sm font-medium text-blue-gray lg:mx-0">
              Fractional CIO/CISO &middot; Program Recovery &middot;
              Cybersecurity &middot; AI-Enabled Transformation
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button asChild size="lg">
                <a
                  href="mailto:contact@64thsquare.com?subject=64thSquare%20Consulting%20Inquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule a conversation
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
              >
                <Link href="/services">View services</Link>
              </Button>
            </div>
          </div>

          {/* Right: hero graphic */}
          <div className="hidden flex-shrink-0 lg:flex lg:items-center">
            <div className="rounded-xl border border-border/40 bg-card p-3 shadow-sm">
              <Image
                src="/hero-square-graphic.png"
                alt="Abstract technology advisory network graphic for 64thSquare"
                width={420}
                height={420}
                className="h-auto w-full max-w-[380px] xl:max-w-[420px] rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Credibility Strip ── */}
      <CredibilityStrip />

      {/* ── What We Do ── */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <SectionHeading
            eyebrow="What we do"
            title="Clarity, structure, and execution discipline"
            description="64thSquare helps organizations bring clarity, structure, and execution discipline to complex technology work. We bridge the gap between strategy and delivery — providing the senior judgment, practical experience, and focused leadership that technology initiatives require."
          />
        </div>
      </section>

      {/* ── Services ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <SectionHeading
            eyebrow="Services"
            title="Advisory and leadership when you need it"
            description="Engagement models designed for organizations that need experienced technology direction — without adding permanent executive headcount."
            className="mb-16"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Where We Help ── */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="When to engage"
                title="Situations where 64thSquare helps"
                description="Organizations engage 64thSquare when they need experienced judgment, rapid assessment, or hands-on leadership for critical technology work."
                align="left"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/advisory-wheel.png"
                alt="64thSquare technology advisory hub and spoke diagram"
                width={500}
                height={500}
                className="h-auto w-full max-w-[500px] rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Founder ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="grid items-start gap-12 lg:grid-cols-5">
            {/* Left: heading + bio */}
            <div className="lg:col-span-3">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-teal">
                Founder
              </p>
              <h2 className="text-balance text-2xl font-bold leading-tight tracking-tight text-navy sm:text-3xl">
                Led by Vikrant &ldquo;Vik&rdquo; Gadgil
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate">
                <p>
                  64thSquare Advisory is led by Vikrant &ldquo;Vik&rdquo; Gadgil, a senior
                  technology executive and advisor with more than 30 years of
                  experience across CIO, CISO, enterprise transformation,
                  cybersecurity, ERP, cloud, analytics, and program governance
                  roles.
                </p>
                <p>
                  Vik has led technology organizations in regulated utilities,
                  manufacturing, logistics, eCommerce, healthcare, and consulting
                  environments. He has advised executive teams and boards,
                  delivered large-scale SAP and technology transformations, built
                  cybersecurity and governance programs, and helped recover
                  complex technology initiatives.
                </p>
                <p>
                  He holds CISSP, CISM, PMP, and ITIL Foundation certifications,
                  with an MBA from the Indian Institute of Management Calcutta and
                  an Electrical Engineering degree from NIT Nagpur.
                </p>
              </div>
            </div>

            {/* Right: credential highlights */}
            <div className="rounded-xl border border-border/40 bg-ivory p-6 shadow-sm lg:col-span-2 lg:mt-14">
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-teal">
                Credential highlights
              </h3>
              <ul className="space-y-3">
                {[
                  "30+ years in senior technology leadership",
                  "CIO and CISO experience",
                  "CISSP &middot; CISM &middot; PMP &middot; ITIL Foundation",
                  "SAP, cybersecurity, AI governance, cloud, analytics, and enterprise transformation",
                  "Board, executive, and program-level advisory",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-slate"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why 64thSquare ── */}
      <section className="border-y border-border/40 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <SectionHeading
            eyebrow="Why 64thSquare"
            title="Senior operator experience applied to advisory work"
            description="64thSquare brings senior operator experience to advisory work. The approach is practical, direct, and outcome-oriented. The focus is not on producing large strategy decks. The focus is helping leaders make decisions, align teams, reduce risk, and move important work forward."
            className="mb-16"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {experience.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-border/40 bg-ivory p-6 shadow-sm transition-all hover:shadow-md sm:p-8"
              >
                <div className="mb-4 h-px w-10 bg-teal" />
                <p className="text-sm leading-relaxed text-slate">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <CTASection variant="dark" />
    </>
  );
}
