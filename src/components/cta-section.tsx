import { Button } from "@/components/ui/button";

interface CTASectionProps {
  variant?: "dark" | "light";
}

export function CTASection({ variant = "dark" }: CTASectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={
        isDark
          ? "bg-navy"
          : "border-y border-teal/20 bg-teal/[0.03]"
      }
    >
      <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-28">
        <h2
          className={`text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
            isDark ? "text-white" : "text-navy"
          }`}
        >
          Need senior technology leadership for a project, transition, recovery
          effort, or advisory role?
        </h2>
        <p
          className={`mx-auto mt-5 max-w-xl text-base leading-relaxed ${
            isDark ? "text-white/60" : "text-slate"
          }`}
        >
          Schedule a confidential conversation to discuss how 64thSquare can
          help your organization.
        </p>
        <div className="mt-10">
          <Button
            asChild
            size="lg"
            className={
              isDark
                ? "bg-teal text-white hover:bg-teal/90"
                : ""
            }
          >
            <a
              href="mailto:contact@64thsquare.com?subject=64thSquare%20Consulting%20Inquiry"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a conversation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
