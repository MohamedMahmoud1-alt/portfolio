import { SectionHeading, Tag } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";
import { education } from "@/data/education";
import { languages } from "@/data/skills";
import { MapPin, GraduationCap, Languages as LanguagesIcon } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="section-shell grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading kicker={site.about.eyebrow} title={site.about.heading} />

          <div className="mt-10 space-y-4 rounded-2xl border border-[var(--color-border)] bg-white/[0.02] p-6">
            <InfoRow icon={<MapPin size={16} />} label="Location" value={site.location} />
            <InfoRow
              icon={<GraduationCap size={16} />}
              label="Education"
              value={`${education.institution} · GPA ${education.gpa}`}
            />
            <InfoRow
              icon={<LanguagesIcon size={16} />}
              label="Languages"
              value={languages.map((l) => `${l.name} (${l.level})`).join(" · ")}
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Generative AI"].map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="space-y-5">
          {site.about.paragraphs.map((p, i) => (
            <p key={i} className="text-[15px] leading-relaxed text-[var(--color-text-muted)] text-pretty sm:text-base">
              {p}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-[var(--color-primary)]">{icon}</span>
      <div>
        <div className="text-xs text-[var(--color-text-faint)]">{label}</div>
        <div className="text-sm text-[var(--color-text)]">{value}</div>
      </div>
    </div>
  );
}
