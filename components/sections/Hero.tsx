"use client";

import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { GithubMark, LinkedinMark } from "@/components/ui/BrandIcons";
import { NeuralBackground } from "@/components/ui/NeuralBackground";
import { Magnetic } from "@/components/ui/MagneticButton";
import { site } from "@/data/site";
import { socials } from "@/data/socials";
import { quickStats } from "@/data/skills";
import { motion } from "framer-motion";

export function Hero() {
  const github = socials.find((s) => s.icon === "github");
  const linkedin = socials.find((s) => s.icon === "linkedin");

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0">
        <NeuralBackground className="h-full w-full opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-bg)]/40 to-[var(--color-bg)]" />
      </div>

      <div className="section-shell relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Copy column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/[0.03] px-3.5 py-1.5 text-sm text-[var(--color-text-muted)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            Open to AI / ML Engineering internships
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]"
          >
            <span className="gradient-ink">{site.heroHeadline}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-text-muted)] text-pretty"
          >
            {site.heroSubheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Magnetic
              as="a"
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[#050609] shadow-[0_0_0_1px_rgba(109,140,255,0.4),0_8px_30px_-8px_rgba(109,140,255,0.6)] transition-transform"
            >
              View My Projects
              <ArrowRight size={16} />
            </Magnetic>
            <Magnetic
              as="a"
              href="/cv/Mohamed_Mahmoud_Salem_CV.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)]"
            >
              <Download size={16} />
              Download CV
            </Magnetic>

            <div className="ml-1 flex items-center gap-2">
              {github && (
                <a
                  href={github.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="rounded-full border border-[var(--color-border)] p-2.5 text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                >
                  <GithubMark size={18} />
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="rounded-full border border-[var(--color-border)] p-2.5 text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                >
                  <LinkedinMark size={18} />
                </a>
              )}
            </div>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 grid max-w-lg grid-cols-2 gap-x-6 gap-y-6 border-t border-[var(--color-border)] pt-8 sm:grid-cols-4"
          >
            {quickStats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-text)]">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-xs leading-snug text-[var(--color-text-faint)]">{stat.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Portrait column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:mx-0"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_50%_30%,rgba(109,140,255,0.22),transparent_65%)] blur-2xl"
          />
          <div
            aria-hidden="true"
            className="absolute -right-6 -top-6 h-24 w-24 rounded-2xl border border-[var(--color-accent)]/25 bg-[var(--color-accent-soft)] blur-[1px]"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-8 -left-6 h-28 w-28 rounded-full border border-[var(--color-primary)]/25"
          />
          <div className="relative">
            <Image
              src="/images/profile-hero.png"
              alt="Portrait of Mohamed Mahmoud Salem"
              width={711}
              height={906}
              priority
              className="relative z-10 mx-auto h-auto w-full max-w-[380px] select-none"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
