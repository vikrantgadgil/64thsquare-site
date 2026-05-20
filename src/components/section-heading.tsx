import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "center" | "left";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
