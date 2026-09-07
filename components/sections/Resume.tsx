"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Eye, X, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/MagneticButton";

const pages = ["/images/cv-preview-1.jpg", "/images/cv-preview-2.jpg"];
const CV_PATH = "/cv/Mohamed_Mahmoud_Salem_CV.pdf";

export function Resume() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);

  return (
    <section id="resume" className="border-t border-[var(--color-border)] py-24 sm:py-32">
      <div className="section-shell grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading
            kicker="Resume"
            title="Full CV, ready to download"
            description="Every project, training program, and certification listed here comes directly from this resume — kept current as new training completes."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Magnetic
              as="a"
              href={CV_PATH}
              download
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[#050609]"
            >
              <Download size={16} />
              Download CV (PDF)
            </Magnetic>
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)]"
            >
              <Eye size={16} />
              View CV
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-[radial-gradient(circle_at_50%_20%,rgba(109,140,255,0.15),transparent_70%)] blur-xl" />
          <button
            onClick={() => setOpen(true)}
            className="group relative block overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-2xl transition-transform hover:-translate-y-1"
          >
            <Image
              src={pages[0]}
              alt="CV preview, page 1"
              width={900}
              height={1300}
              className="w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
              <span className="translate-y-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                View full CV
              </span>
            </div>
          </button>
        </Reveal>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[88vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-[var(--color-border)] bg-[var(--color-elevated)]"
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close CV preview"
                className="absolute right-3 top-3 z-10 rounded-full bg-black/60 p-2 text-white"
              >
                <X size={18} />
              </button>
              {pages.length > 1 && (
                <>
                  <button
                    onClick={() => setPage((p) => (p - 1 + pages.length) % pages.length)}
                    aria-label="Previous page"
                    className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => setPage((p) => (p + 1) % pages.length)}
                    aria-label="Next page"
                    className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}
              <Image src={pages[page]} alt={`CV preview, page ${page + 1}`} width={900} height={1300} className="w-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
