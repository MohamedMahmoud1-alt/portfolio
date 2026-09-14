import { cn } from "@/lib/utils";

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  className,
}: {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {kicker && (
        <div
          className={cn(
            "mb-3 flex items-center gap-2 text-sm font-medium text-[var(--color-primary)]",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-px w-6 bg-[var(--color-primary)]/60" />
          {kicker}
        </div>
      )}
      <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-[var(--color-text-muted)] text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}

export function Tag({ children, tone = "default" }: { children: React.ReactNode; tone?: "default" | "accent" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium",
        tone === "default" &&
          "border-[var(--color-border)] bg-[var(--color-card-strong)] text-[var(--color-text-muted)]",
        tone === "accent" &&
          "border-[var(--color-accent)]/30 bg-[var(--color-accent-soft)] text-[var(--color-accent)]"
      )}
    >
      {children}
    </span>
  );
}
