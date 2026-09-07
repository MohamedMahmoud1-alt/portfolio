"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { certificates } from "@/data/certificates";

const sorted = [...certificates].sort((a, b) => (a.sortDate < b.sortDate ? 1 : -1));

export function Certifications() {
  const [index, setIndex] = useState<number | null>(null);

  const open = index !== null;
  const current = index !== null ? sorted[index] : null;

  function next() {
    if (index === null) return;
    setIndex((index + 1) % sorted.length);
  }
  function prev() {
    if (index === null) return;
    setIndex((index - 1 + sorted.length) % sorted.length);
  }

  return (
    <section id="certifications" className="border-t border-[var(--color-border)] py-24 sm:py-32">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            kicker="Certifications"
            title="15 completed certifications"
            description="Institutional training and self-paced coursework from NTI, MCIT, NVIDIA DLI, ITI, DataCamp, Udacity, and Microsoft. Click any certificate to view it full-size."
          />
        </Reveal>

        <RevealGroup className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((cert, i) => (
            <RevealItem key={cert.id}>
              <button
                onClick={() => setIndex(i)}
                className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-[var(--color-border)] bg-white/[0.02] text-left transition-all hover:-translate-y-1 hover:border-[var(--color-primary)]/40"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--color-elevated)]">
                  <Image
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {cert.score && (
                    <span className="absolute right-2 top-2 rounded-md bg-[var(--color-accent)] px-2 py-1 text-xs font-semibold text-[#1a1204]">
                      {cert.score}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col gap-1 p-4">
                  <h3 className="text-sm font-semibold leading-snug text-[var(--color-text)]">{cert.title}</h3>
                  <p className="text-xs text-[var(--color-text-muted)]">{cert.issuer}</p>
                  <p className="mt-auto pt-2 text-xs text-[var(--color-text-faint)]">{cert.date}</p>
                </div>
              </button>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <AnimatePresence>
        {open && current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel relative w-full max-w-3xl overflow-hidden rounded-2xl border"
            >
              <button
                onClick={() => setIndex(null)}
                aria-label="Close"
                className="absolute right-3 top-3 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
              >
                <X size={18} />
              </button>
              <button
                onClick={prev}
                aria-label="Previous certificate"
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Next certificate"
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
              >
                <ChevronRight size={18} />
              </button>

              <div className="relative aspect-[4/3] w-full bg-black">
                <Image
                  src={current.image}
                  alt={`${current.title} certificate — full size`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-[var(--color-accent)]">
                  <Award size={16} />
                  <span className="text-xs font-medium">{current.issuer}</span>
                </div>
                <h3 className="mt-1.5 text-lg font-semibold text-[var(--color-text)]">{current.title}</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  {current.date}
                  {current.hours ? ` · ${current.hours}` : ""}
                  {current.score ? ` · Score ${current.score}` : ""}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{current.description}</p>
                {current.verification && (
                  <p className="mt-2 text-xs text-[var(--color-text-faint)]">
                    Verification code: {current.verification}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
