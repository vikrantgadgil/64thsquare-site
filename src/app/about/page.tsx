import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";

const approach = [
  {
    title: "Operator experience",
    description:
      "Decades of senior technology leadership across complex enterprise environments. We have held the roles we advise on — and understand the realities of leading technology organizations.",
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
      "No product affiliations, no vendor bias, no agenda beyond helping clients succeed. We provide honest, direct assessments and recommendations — even when the message is difficult.",
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
              64thSquare was founded on a straightforward premise: organizations
              facing complex technology decisions deserve access to senior,
              experienced leadership — without the overhead of a permanent
              executive hire.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We work with leadership teams, boards, and investors who need
              practical, direct technology guidance. Our engagements range from
              fractional CIO and CISO roles to targeted advisory on
              transformation, cybersecurity, cloud strategy, and program
              recovery.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              The work is grounded in real operating experience — not advisory
              theory. We have led the organizations, managed the budgets, built
              the teams, and delivered the programs. That experience shapes
              every recommendation we make.
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

          <div className="grid gap-8 sm:grid-cols-2">
            {approach.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border/40 bg-card p-8 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 h-px w-10 bg-gold" />
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
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
