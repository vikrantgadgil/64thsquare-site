import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";

const approach = [
  {
    title: "Operator experience",
    description:
      "Decades of senior technology leadership across complex enterprise environments. We have held the roles we advise on, and understand the realities of leading technology organizations.",
  },
  {
    title: "Practical delivery",
    description:
      "The focus is on outcomes, not documents. We help leaders make decisions, align teams, reduce risk, and move important work forward. Strategy is valuable only when it leads to action.",
  },
  {
    title: "Executive communication",
    description:
      "Bridging the gap between technology and business leadership. We help translate complex technology decisions into clear, actionable choices for executives, boards, and stakeholders.",
  },
  {
    title: "Independent judgment",
    description:
      "No product affiliations, no vendor bias, no agenda beyond helping clients succeed. We provide honest, direct assessments and recommendations, even when the message is difficult.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-ivory/10 bg-navy">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <SectionHeading
            eyebrow="About"
            title="A boutique advisory practice built on senior operating experience"
            description="64thSquare LLC is led by a senior technology executive and advisor with experience across IT leadership, cybersecurity, infrastructure, cloud, enterprise systems, and large-scale transformation."
            className="text-ivory [&_h2]:text-ivory [&_p]:text-ivory/60"
          />
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Vik Gadgil founded 64thSquare after 30 years in senior technology
              leadership roles spanning regulated utilities, manufacturing,
              logistics, eCommerce, and healthcare. His operating experience
              includes serving as CIO at Chesapeake Utilities for ten years,
              where he led the organization through a full SAP S/4HANA
              implementation on the RISE platform, a program recognized with
              the SAP Mid-Sized Utilities Implementation Award, while
              maintaining a zero-incident cybersecurity record across his
              tenure.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Prior to Chesapeake, Vik held technology leadership roles at
              organizations including Procter & Gamble, Ecolab, and Vishay.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              As CIO and CISO at Chesapeake Utilities, Vik owned the cybersecurity program for a NERC CIP-regulated utility, building and maintaining compliance across NIST, ISO 27001, and PCI-DSS frameworks while sustaining a zero-incident security record throughout his tenure. He led the organizational response to two major industry-wide events: the SolarWinds supply chain compromise and the CrowdStrike global outage, both of which required rapid executive decision-making, vendor coordination, and board-level communication under pressure.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Vik holds an MBA from IIM Calcutta and a degree in Electrical
              Engineering from NIT Nagpur. He holds CISSP, CISM, and PMP
              certifications. 64thSquare was founded to make that caliber of
              operating experience accessible to organizations that need it, without the overhead of a permanent executive hire.
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="border-y border-border/40 bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <SectionHeading
            eyebrow="Approach"
            title="How we work"
            className="mb-16"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {approach.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border/40 bg-card p-8 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 h-1 w-10 rounded-full bg-teal" />
                <h3 className="text-lg font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection variant="dark" />
    </>
  );
}
