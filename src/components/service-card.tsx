import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  index: number;
}

export function ServiceCard({ title, description, index }: ServiceCardProps) {
  return (
    <div className="group relative rounded-xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:border-teal/20 hover:shadow-md sm:p-8">
      {/* Top accent line */}
      <div
        className={cn(
          "absolute left-0 top-0 h-1 w-full rounded-t-xl",
          index % 2 === 0 ? "bg-teal/40" : "bg-aqua/30",
        )}
      />

      {/* Geometric marker */}
      <div
        className={cn(
          "mb-5 flex h-10 w-10 items-center justify-center rounded-lg border text-xs font-bold",
          index % 2 === 0
            ? "border-teal/20 bg-teal/8 text-teal"
            : "border-aqua/20 bg-aqua/8 text-aqua",
        )}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      <h3 className="text-lg font-semibold leading-snug text-navy">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-slate">
        {description}
      </p>
    </div>
  );
}
