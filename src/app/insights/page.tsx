import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";

const publishedArticles = [
  {
    title: "When a Fractional CIO or CISO Makes Sense",
    description:
      "Not every organization needs a full-time technology executive. Here are the signals that point toward a fractional model, and how to structure the engagement.",
    href: "/insights/when-fractional-cio-ciso-makes-sense",
  },
];

export default function InsightsPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-ivory/10 bg-navy">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
          <SectionHeading
            eyebrow="Insights"
            title="Perspectives on technology leadership and advisory"
            description="Practical thinking on the topics that matter to senior technology leaders, fractional leadership, program execution, cybersecurity, and transformation."
            className="text-ivory [&_h2]:text-ivory [&_p]:text-ivory/60"
          />
        </div>
      </section>

      {/* Articles */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="grid gap-8 md:grid-cols-3">
            {publishedArticles.map((article) => (
              <article
                key={article.title}
                className="group relative flex flex-col rounded-xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:shadow-md sm:p-8"
              >
                <div className="mb-5">
                  <span className="inline-block rounded-full bg-teal/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-teal">
                    Published
                  </span>
                </div>
                <h3 className="text-lg font-semibold leading-snug text-foreground">
                  {article.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {article.description}
                </p>
                <div className="mt-6">
                  <Button asChild variant="outline" size="sm">
                    <Link href={article.href}>
                      Read
                      <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection variant="dark" />
    </>
  );
}
