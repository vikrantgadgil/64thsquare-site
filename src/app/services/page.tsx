import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";

const services = [
  {
    title: "Fractional CIO Advisory",
    what: "Senior CIO-level technology leadership on a flexible, part-time or interim basis. We step in as your technology executive — providing direction, governance, team leadership, and strategic planning without the overhead of a full-time hire.",
    where: "Organizations that have outgrown basic IT support but are not ready for a full-time CIO. Companies navigating growth, transition, or leadership gaps. Boards and investors needing independent technology assessment.",
    outcomes: [
      "Clear technology strategy aligned to business objectives",
      "Improved IT governance and decision-making discipline",
      "Stronger vendor and technology portfolio management",
      "Executive-ready communication and board reporting",
    ],
  },
  {
    title: "Fractional CISO Advisory",
    what: "Cybersecurity leadership and risk management guidance delivered on a schedule that fits your organization. We help build, improve, or validate security programs — with a practical, business-aware approach that avoids unnecessary complexity.",
    where: "Organizations without dedicated security leadership. Companies responding to audit findings, compliance requirements, or security incidents. Firms preparing for regulatory examination or customer security reviews.",
    outcomes: [
      "Risk-prioritized security program aligned to business tolerance",
      "Improved security maturity without tool sprawl",
      "Compliance readiness for relevant frameworks and regulations",
      "Clear incident response and governance structures",
    ],
  },
  {
    title: "Technology Transformation",
    what: "End-to-end transformation planning and execution support. From assessing current state and defining target architecture through building roadmaps and guiding delivery — with a focus on outcomes, governance, and organizational readiness.",
    where: "Organizations undertaking significant technology change — cloud migration, ERP modernization, digital platform builds, or operating model redesign. Companies that need experienced direction to avoid common transformation pitfalls.",
    outcomes: [
      "Realistic, sequenced transformation roadmap",
      "Governance structures that maintain momentum",
      "Organizational change management integrated with delivery",
      "Measurable business outcomes at each stage",
    ],
  },
  {
    title: "Program Recovery & Execution",
    what: "Rapid assessment and intervention for technology programs that are off track. We diagnose root causes, stabilize the situation, and establish the discipline needed to deliver. Direct, practical, and focused on restoring confidence.",
    where: "Programs experiencing schedule overruns, budget pressure, scope creep, or team dysfunction. Organizations that need an independent assessment of program health. Leadership teams needing a credible path forward.",
    outcomes: [
      "Honest assessment of program status and recovery options",
      "Stabilized delivery with clear accountability",
      "Restored stakeholder and team confidence",
      "Disciplined execution through to completion",
    ],
  },
  {
    title: "Cybersecurity & Compliance",
    what: "Risk assessment, compliance readiness, and security program development. We help organizations understand their exposure, prioritize remediation, and build sustainable security practices — without over-investing in tools or process for their risk profile.",
    where: "Companies preparing for SOC 2, ISO 27001, PCI DSS, or regulatory examination. Organizations that have received audit findings or security assessment gaps. Firms needing to demonstrate security posture to customers or partners.",
    outcomes: [
      "Clear understanding of risk exposure and priorities",
      "Practical remediation plans that respect operational constraints",
      "Compliance documentation and evidence readiness",
      "Sustainable security operations integrated with existing teams",
    ],
  },
  {
    title: "AI-Enabled Transformation",
    what: "Practical advisory for identifying and implementing AI-enabled use cases that improve productivity, decision-making, risk management, and business execution. We help organizations cut through the noise and focus on high-impact AI opportunities that deliver measurable results.",
    where: "Organizations exploring how AI can improve operations, customer experience, or competitive position. Companies that need practical guidance on AI adoption without over-investing in unproven technology. Teams seeking to build AI capabilities pragmatically.",
    outcomes: [
      "Identified high-impact AI use cases aligned to business priorities",
      "Practical roadmap for AI adoption and capability building",
      "Improved productivity and decision-making through AI-enabled tools",
      "Risk-managed approach to AI implementation and governance",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-ivory/10 bg-navy">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <SectionHeading
            eyebrow="Services"
            title="Advisory and leadership for critical technology work"
            description="Engagement models designed for organizations that need experienced technology direction — without adding permanent executive headcount."
            className="text-ivory [&_h2]:text-ivory [&_p]:text-ivory/60"
          />
        </div>
      </section>

      {/* Service details */}
      {services.map((service, i) => (
        <section
          key={service.title}
          className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}
        >
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
            <div className="grid gap-10 lg:grid-cols-5">
              {/* Number */}
              <div className="lg:col-span-1">
                <span className="text-5xl font-bold text-gold/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div className="lg:col-span-4">
                <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">
                  {service.title}
                </h2>

                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <div>
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                      What it is
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.what}
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                      Where it helps
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.where}
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                    Example outcomes
                  </h3>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {service.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTASection variant="dark" />
    </>
  );
}
