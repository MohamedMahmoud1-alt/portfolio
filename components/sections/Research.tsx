import { FlaskConical, Users2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { research } from "@/data/research";

export function Research() {
  return (
    <section id="research" className="border-t border-[var(--color-border)] py-24 sm:py-32">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            kicker="Research"
            title="Academic research"
            description="Applying optimization and machine learning methods to real-world forecasting problems, alongside coursework and applied projects."
          />
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <div className="rounded-2xl p-[2px]" style={{ background: "var(--gradient-brand)" }}>
            <div className="rounded-[calc(1rem-2px)] bg-[var(--color-elevated)] p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-1 text-xs font-medium text-[var(--color-text-muted)]">
                  <FlaskConical size={13} className="text-[var(--color-primary)]" />
                  {research.status}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-1 text-xs font-medium text-[var(--color-text-muted)]">
                  <Users2 size={13} className="text-[var(--color-primary)]" />
                  Co-authored
                </span>
                <span className="text-xs text-[var(--color-text-faint)]">{research.period}</span>
              </div>

              <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold leading-snug text-[var(--color-text)] sm:text-2xl">
                {research.title}
              </h3>

              <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-text-muted)] text-pretty">
                {research.summary}
              </p>

              <div className="mt-6 grid grid-cols-3 gap-4 border-t border-[var(--color-border)] pt-6 sm:max-w-md">
                {research.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-[family-name:var(--font-display)] text-2xl font-semibold gradient-ink">
                      <Counter value={m.value} />
                    </div>
                    <div className="mt-1 text-xs text-[var(--color-text-faint)]">{m.label}</div>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs text-[var(--color-text-faint)]">
                Benchmarked against {research.benchmarkedAgainst.join(", ")}. {research.note}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
