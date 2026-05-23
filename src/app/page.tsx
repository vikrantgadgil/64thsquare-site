import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { CredibilityStrip } from "@/components/credibility-strip";
import { CTASection } from "@/components/cta-section";
import Image from "next/image";

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
              Strategy.{" "}
              <span className="text-slate">Security.</span>{" "}
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
              Fractional CIO &middot; Cybersecurity Advisory &middot;
              Program Recovery &middot; AI-Enabled Transformation
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
                  Vik Gadgil is a senior technology executive and advisor with 30
                  years of operating experience across CIO, CISO, and enterprise
                  advisory roles. He spent nine years as CIO at Chesapeake
                  Utilities, where he led a multi-year SAP S/4HANA implementation
                  on the RISE platform — recognized with the SAP Mid-Sized
                  Utilities Implementation Award — and maintained a zero-incident
                  cybersecurity record throughout his tenure. He holds an MBA from
                  IIM Calcutta and certifications including CISSP, CISM, and PMP.
                  64thSquare brings that depth of operating experience directly to
                  client engagements.
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
                  "Nine years as CIO, Chesapeake Utilities",
                  "SAP S/4HANA RISE implementation",
                  "SAP Mid-Sized Utilities Implementation Award",
                  "Zero-incident cybersecurity record",
                  "CISSP &middot; CISM &middot; PMP",
                  "MBA, IIM Calcutta",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-slate"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <CTASection variant="dark" />
    </>
  );
}
