"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { projects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const filters = ["All", "Computer Vision", "NLP", "Generative AI", "Classical ML", "Other"] as const;
type Filter = (typeof filters)[number];

function matchesFilter(project: Project, filter: Filter) {
  if (filter === "All") return true;
  if (filter === "Other") {
    return !/computer vision|nlp|generative ai|classical ml/i.test(project.category);
  }
  return project.category.toLowerCase().includes(filter.toLowerCase());
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<Project | null>(null);

  const visible = useMemo(() => projects.filter((p) => matchesFilter(p, filter)), [filter]);

  return (
    <section id="projects" className="border-t border-[var(--color-border)] py-24 sm:py-32">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            kicker="Selected work"
            title="Project case studies"
            description="Applied ML, deep learning, NLP, and generative AI projects — built independently and through hackathon and training contexts."
          />
        </Reveal>

        <Reveal delay={0.05} className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-sm transition-colors",
                filter === f
                  ? "border-[var(--color-primary)] bg-[var(--color-primary-soft)] text-[var(--color-text)]"
                  : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-border-strong)]"
              )}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <RevealGroup className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <RevealItem key={project.slug}>
              <button
                onClick={() => setActive(project)}
                className="group flex h-full w-full flex-col rounded-2xl border border-[var(--color-border)] bg-white/[0.02] p-6 text-left transition-all hover:-translate-y-1 hover:border-[var(--color-primary)]/40 hover:bg-white/[0.04]"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="font-[family-name:var(--font-display)] text-lg font-semibold leading-snug text-[var(--color-text)]">
                    {project.title}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="mt-1 shrink-0 text-[var(--color-text-faint)] transition-colors group-hover:text-[var(--color-primary)]"
                  />
                </div>
                <p className="mt-1.5 text-xs font-medium text-[var(--color-primary)]">{project.category}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)] text-pretty">
                  {project.overview}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded border border-[var(--color-border)] px-2 py-0.5 text-xs text-[var(--color-text-faint)]"
                    >
                      {t}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="rounded border border-[var(--color-border)] px-2 py-0.5 text-xs text-[var(--color-text-faint)]">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </button>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass-panel max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-t-3xl border-t p-7 sm:rounded-3xl sm:border"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-[var(--color-primary)]">{project.category}</p>
                <h3 className="mt-1 font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-text)]">
                  {project.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close project details"
                className="shrink-0 rounded-full border border-[var(--color-border)] p-2 text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-text)]"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <h4 className="text-xs font-semibold text-[var(--color-text-faint)]">Overview</h4>
                <p className="mt-1.5 text-[15px] leading-relaxed text-[var(--color-text-muted)] text-pretty">
                  {project.overview}
                </p>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-[var(--color-text-faint)]">Technical implementation</h4>
                <p className="mt-1.5 text-[15px] leading-relaxed text-[var(--color-text-muted)] text-pretty">
                  {project.implementation}
                </p>
              </div>
              {project.result && (
                <div className="rounded-xl border-l-2 border-[var(--color-accent)] bg-[var(--color-accent-soft)] p-4">
                  <h4 className="text-xs font-semibold text-[var(--color-accent)]">Result</h4>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-[var(--color-text)] text-pretty">
                    {project.result}
                  </p>
                </div>
              )}
              <div>
                <h4 className="text-xs font-semibold text-[var(--color-text-faint)]">Technologies</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-[var(--color-border)] bg-[var(--color-elevated)] px-2.5 py-1 text-sm text-[var(--color-text-muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
