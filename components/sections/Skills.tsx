import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { technicalSkills, softSkills } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="border-t border-[var(--color-border)] py-24 sm:py-32">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            kicker="Skills"
            title="Technical expertise"
            description="Organized by how I actually use them — from core languages up through the AI domains and tooling built on top."
          />
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {technicalSkills.map((category) => (
            <RevealItem key={category.title}>
              <div className="h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-colors hover:border-[var(--color-border-strong)]">
                <h3 className="text-sm font-semibold text-[var(--color-text)]">{category.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-[var(--color-border)] bg-[var(--color-elevated)] px-2.5 py-1.5 text-sm text-[var(--color-text-muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-14">
          <h3 className="text-sm font-semibold text-[var(--color-text)]">Core strengths</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[var(--color-primary)]/25 bg-[var(--color-primary-soft)] px-4 py-2 text-sm text-[var(--color-text)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
