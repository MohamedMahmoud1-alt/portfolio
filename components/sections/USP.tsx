import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { site } from "@/data/site";

export function USP() {
  return (
    <section id="why-me" className="border-t border-[var(--color-border)] py-24 sm:py-32">
      <div className="section-shell grid grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              kicker={site.usp.eyebrow}
              title={site.usp.heading}
              description="Five things that come up consistently across my training, projects, and leadership work."
            />
          </div>
        </Reveal>

        <RevealGroup className="divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
          {site.usp.points.map((point, i) => (
            <RevealItem key={point.title}>
              <div className="grid grid-cols-[3rem_1fr] gap-4 py-7 sm:grid-cols-[4rem_1fr]">
                <span className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-text-faint)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text)]">{point.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-text-muted)] text-pretty">
                    {point.description}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
