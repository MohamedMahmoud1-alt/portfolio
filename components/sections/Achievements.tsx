"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Trophy, Users, X, Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { leadership, achievements, recognitions, type Achievement } from "@/data/experience";

export function Achievements() {
  const [lightbox, setLightbox] = useState<Achievement | null>(null);

  return (
    <section id="achievements" className="border-t border-[var(--color-border)] py-24 sm:py-32">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            kicker="Highlights"
            title="Leadership & achievements"
            description="Competition results, technical leadership roles, and recognitions earned alongside coursework and training."
          />
        </Reveal>

        {/* Headline achievements */}
        <RevealGroup className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {achievements.map((item) => (
            <RevealItem key={item.title}>
              <button
                onClick={() => item.image && setLightbox(item)}
                disabled={!item.image}
                className="group flex h-full w-full flex-col gap-3 rounded-2xl p-[2px] text-left transition-transform disabled:cursor-default"
                style={{ background: "var(--gradient-brand-soft)" }}
              >
                <div className="flex h-full flex-col gap-3 rounded-[calc(1rem-2px)] bg-[var(--color-elevated)] p-5">
                  <div className="flex items-start justify-between gap-3">
                    <Trophy size={20} className="text-[var(--color-accent)]" />
                    <span className="text-xs text-[var(--color-text-faint)]">{item.year}</span>
                  </div>
                  <p className="font-[family-name:var(--font-display)] text-base font-semibold text-[var(--color-text)]">
                    {item.title}
                  </p>
                  <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{item.description}</p>
                  {item.image && (
                    <span className="mt-auto text-xs font-medium text-[var(--color-primary)] group-hover:underline">
                      View certificate →
                    </span>
                  )}
                </div>
              </button>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr]">
          {/* Leadership */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold text-[var(--color-text)]">
              <Users size={16} className="text-[var(--color-primary)]" />
              Leadership & volunteering
            </h3>
            <RevealGroup className="mt-4 space-y-3">
              {leadership.map((item) => (
                <RevealItem key={item.title + item.organization}>
                  <button
                    onClick={() => item.image && setLightbox({ title: item.title, description: item.bullets.join(" "), year: item.period, image: item.image })}
                    disabled={!item.image}
                    className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-4 text-left transition-colors hover:border-[var(--color-primary)]/30 disabled:cursor-default"
                  >
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
                    {item.image && (
                      <span className="mt-2 inline-block text-xs font-medium text-[var(--color-primary)] hover:underline">
                        View certificate →
                      </span>
                    )}
                  </button>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          {/* Recognitions grid */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold text-[var(--color-text)]">
              <Award size={16} className="text-[var(--color-accent)]" />
              Recognitions & participation
            </h3>
            <RevealGroup className="mt-4 grid grid-cols-2 gap-3">
              {recognitions.map((item) => (
                <RevealItem key={item.title}>
                  <button
                    onClick={() => setLightbox(item)}
                    className="flex h-full w-full flex-col gap-1.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-4 text-left transition-colors hover:border-[var(--color-primary)]/30"
                  >
                    <p className="text-sm font-semibold leading-snug text-[var(--color-text)]">{item.title}</p>
                    <p className="text-xs text-[var(--color-text-faint)]">{item.year}</p>
                  </button>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel relative w-full max-w-2xl overflow-hidden rounded-2xl border"
            >
              <button
                onClick={() => setLightbox(null)}
                aria-label="Close"
                className="absolute right-3 top-3 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
              >
                <X size={18} />
              </button>
              {lightbox.image && (
                <div className="relative aspect-[4/3] w-full bg-black">
                  <Image
                    src={lightbox.image}
                    alt={`${lightbox.title} certificate`}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>
              )}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[var(--color-text)]">{lightbox.title}</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{lightbox.description}</p>
                <p className="mt-2 text-xs text-[var(--color-text-faint)]">{lightbox.year}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
