import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";

const areas = [
  "Fractional CIO or CISO advisory engagements",
  "Technology transformation and strategy",
  "Cybersecurity and compliance advisory",
  "Program recovery and execution support",
  "Cloud and infrastructure strategy",
  "Board and investor technology assessments",
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-ivory/10 bg-navy">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <SectionHeading
            eyebrow="Contact"
            title="Start the conversation"
            description="Whether you need interim technology leadership, advisory support for a specific initiative, or an independent perspective on a complex challenge — we would welcome the opportunity to discuss how we might help."
            className="text-ivory [&_h2]:text-ivory [&_p]:text-ivory/60"
          />
        </div>
      </section>

      {/* Contact content */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Left */}
            <div>
              <h2 className="text-2xl font-bold leading-tight text-foreground">
                Reach out directly
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                The best way to start a conversation is by email. Tell us a bit
                about your situation, and we will respond promptly to arrange a
                confidential discussion.
              </p>

              <div className="mt-8">
                <Button asChild size="lg">
                  <a
                    href="mailto:contact@64thsquare.com?subject=64thSquare%20Consulting%20Inquiry"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Send an email inquiry
                  </a>
                </Button>
              </div>

              <p className="mt-4 text-center text-sm text-muted-foreground">
                Inquiries are typically acknowledged within one business day.
                Initial conversations are confidential and carry no obligation.
              </p>

              <div className="mt-8">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Email:</span>{" "}
                  <a
                    href="mailto:contact@64thsquare.com"
                    className="underline transition-colors hover:text-foreground"
                  >
                    contact@64thsquare.com
                  </a>
                </p>
              </div>
            </div>

            {/* Right */}
            <div>
              <h2 className="text-2xl font-bold leading-tight text-foreground">
                Areas of inquiry
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We work with organizations across a range of technology
                leadership and advisory needs:
              </p>

              <ul className="mt-6 space-y-3">
                {areas.map((area) => (
                  <li
                    key={area}
                    className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="dark" />
    </>
  );
}
