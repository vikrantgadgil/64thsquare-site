import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";

const articles = [
  {
    title: "When a Fractional CIO or CISO Makes Sense",
    summary:
      "Not every organization needs a full-time technology executive. We explore the signals that indicate a fractional leadership model may be the right fit — and how to structure the engagement for maximum impact.",
    status: "Coming soon",
  },
  {
    title: "Recovering Troubled Technology Programs",
    summary:
      "Technology programs go off track for predictable reasons. This article examines the common patterns behind program distress and the disciplined approach needed to restore momentum and confidence.",
    status: "Coming soon",
  },
  {
    title: "Cybersecurity Maturity Without Tool Sprawl",
    summary:
      "Building security maturity does not require buying every new tool. We discuss a practical, risk-based approach to improving security posture that respects operational reality and budget discipline.",
    status: "Coming soon",
  },
];

export default function InsightsPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-ivory/10 bg-navy">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <SectionHeading
            eyebrow="Insights"
            title="Perspectives on technology leadership and advisory"
            description="Practical thinking on the topics that matter to senior technology leaders — fractional leadership, program execution, cybersecurity, and transformation."
            className="text-ivory [&_h2]:text-ivory [&_p]:text-ivory/60"
          />
        </div>
      </section>

      {/* Articles */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="grid gap-8 md:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.title}
                className="group relative flex flex-col rounded-xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:shadow-md sm:p-8"
              >
                <div className="mb-5">
                  <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-gold">
                    {article.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold leading-snug text-foreground">
                  {article.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {article.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection variant="dark" />
    </>
  );
}
