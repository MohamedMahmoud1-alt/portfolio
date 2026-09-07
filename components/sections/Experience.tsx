import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { GraduationCap } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="border-t border-[var(--color-border)] py-24 sm:py-32">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            kicker="Education & applied training"
            title="From coursework into structured, evaluated practice"
            description="A B.Eng. in AI Engineering, backed by five hands-on training programs totaling 500+ hours."
          />
        </Reveal>

        {/* Education card */}
        <Reveal delay={0.05} className="mt-10">
          <div className="flex flex-col gap-5 rounded-2xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-primary-soft)] to-transparent p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="rounded-xl border border-[var(--color-primary)]/30 bg-[var(--color-elevated)] p-3 text-[var(--color-primary)]">
                <GraduationCap size={22} />
              </span>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-text)]">
                  {education.degree}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  {education.institution} · {education.location}
                </p>
              </div>
            </div>
            <div className="flex gap-6 sm:text-right">
              <div>
                <div className="text-xs text-[var(--color-text-faint)]">Duration</div>
                <div className="text-sm font-medium text-[var(--color-text)]">{education.duration}</div>
              </div>
              <div>
                <div className="text-xs text-[var(--color-text-faint)]">GPA</div>
                <div className="text-sm font-medium text-[var(--color-text)]">{education.gpa}</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Training timeline */}
        <RevealGroup className="relative mt-14 border-l border-[var(--color-border)] pl-8 sm:pl-10">
          {experience.map((item) => (
            <RevealItem key={item.title + item.organization} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[calc(2rem+5px)] top-1 h-2.5 w-2.5 rounded-full border-2 border-[var(--color-primary)] bg-[var(--color-bg)] sm:-left-[calc(2.5rem+5px)]" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-base font-semibold text-[var(--color-text)]">{item.title}</h3>
                <span className="text-xs text-[var(--color-text-faint)]">{item.period}</span>
              </div>
              <p className="text-sm font-medium text-[var(--color-primary)]">
                {item.organization} · {item.location}
              </p>
              <ul className="mt-3 space-y-1.5">
                {item.bullets.map((b, bi) => (
                  <li key={bi} className="text-sm leading-relaxed text-[var(--color-text-muted)] text-pretty">
                    {b}
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
