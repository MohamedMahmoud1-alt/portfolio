import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { leadership, achievements } from "@/data/experience";
import { Trophy, Users } from "lucide-react";

export function Achievements() {
  return (
    <section id="achievements" className="border-t border-[var(--color-border)] py-24 sm:py-32">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            kicker="Highlights"
            title="Leadership & achievements"
            description="Technical leadership roles and recognitions earned alongside coursework and training."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold text-[var(--color-text)]">
              <Trophy size={16} className="text-[var(--color-accent)]" />
              Achievements
            </h3>
            <RevealGroup className="mt-4 space-y-3">
              {achievements.map((item) => (
                <RevealItem key={item.title}>
                  <div className="rounded-xl border-l-2 border-[var(--color-accent)] bg-[var(--color-accent-soft)] p-4">
                    <p className="text-sm font-semibold text-[var(--color-text)]">{item.title}</p>
                    <p className="mt-1 text-sm text-[var(--color-text-muted)]">{item.description}</p>
                    <p className="mt-1.5 text-xs text-[var(--color-text-faint)]">{item.year}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold text-[var(--color-text)]">
              <Users size={16} className="text-[var(--color-primary)]" />
              Leadership & volunteering
            </h3>
            <RevealGroup className="mt-4 space-y-3">
              {leadership.map((item) => (
                <RevealItem key={item.title + item.organization}>
                  <div className="rounded-xl border border-[var(--color-border)] bg-white/[0.02] p-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="text-sm font-semibold text-[var(--color-text)]">{item.title}</p>
                      <span className="text-xs text-[var(--color-text-faint)]">{item.period}</span>
                    </div>
                    <p className="text-sm text-[var(--color-primary)]">{item.organization}</p>
                    <ul className="mt-2 space-y-1">
                      {item.bullets.map((b, i) => (
                        <li key={i} className="text-sm leading-relaxed text-[var(--color-text-muted)] text-pretty">
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
