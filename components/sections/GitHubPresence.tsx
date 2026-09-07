"use client";

import { useEffect, useState } from "react";
import { ExternalLink, BarChart3 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { socials } from "@/data/socials";
import { GithubMark, LinkedinMark, KaggleMark } from "@/components/ui/BrandIcons";

type GhStats = {
  public_repos: number;
  followers: number;
  following: number;
} | null;

const GITHUB_USERNAME = "MohamedMahmoud1-alt";

export function GitHubPresence() {
  const [stats, setStats] = useState<GhStats>(null);
  const [status, setStatus] = useState<"loading" | "ok" | "error">("loading");

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((res) => {
        if (!res.ok) throw new Error("GitHub API unavailable");
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        setStats({
          public_repos: data.public_repos ?? 0,
          followers: data.followers ?? 0,
          following: data.following ?? 0,
        });
        setStatus("ok");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const github = socials.find((s) => s.icon === "github");
  const linkedin = socials.find((s) => s.icon === "linkedin");
  const kaggle = socials.find((s) => s.icon === "kaggle");

  return (
    <section id="presence" className="border-t border-[var(--color-border)] py-24 sm:py-32">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            kicker="Professional presence"
            title="Code, competitions, and community"
            description="Where to find project code, notebooks, and ongoing work."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <a
              href={github?.url}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-white/[0.02] p-6 transition-colors hover:border-[var(--color-primary)]/40"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="rounded-xl border border-[var(--color-border)] bg-[var(--color-elevated)] p-3 text-[var(--color-text)]">
                    <GithubMark size={20} />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-[var(--color-text)]">GitHub</h3>
                    <p className="text-sm text-[var(--color-text-muted)]">@{github?.handle}</p>
                  </div>
                </div>
                <ExternalLink size={16} className="text-[var(--color-text-faint)] group-hover:text-[var(--color-primary)]" />
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-[var(--color-border)] pt-5">
                <StatBlock
                  label="Public repos"
                  value={status === "ok" && stats ? stats.public_repos : status === "loading" ? "—" : "N/A"}
                />
                <StatBlock
                  label="Followers"
                  value={status === "ok" && stats ? stats.followers : status === "loading" ? "—" : "N/A"}
                />
                <StatBlock
                  label="Following"
                  value={status === "ok" && stats ? stats.following : status === "loading" ? "—" : "N/A"}
                />
              </div>
              {status === "error" && (
                <p className="mt-3 flex items-center gap-1.5 text-xs text-[var(--color-text-faint)]">
                  <BarChart3 size={13} />
                  Live stats unavailable right now — visit the profile directly.
                </p>
              )}
            </a>
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col gap-5">
            {linkedin && (
              <PresenceLink
                icon={<LinkedinMark size={18} />}
                label="LinkedIn"
                handle={linkedin.handle}
                url={linkedin.url}
              />
            )}
            {kaggle && (
              <PresenceLink icon={<KaggleMark size={18} />} label="Kaggle" handle={kaggle.handle} url={kaggle.url} />
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function StatBlock({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <div className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text)]">
        {value}
      </div>
      <div className="mt-0.5 text-xs text-[var(--color-text-faint)]">{label}</div>
    </div>
  );
}

function PresenceLink({
  icon,
  label,
  handle,
  url,
}: {
  icon: React.ReactNode;
  label: string;
  handle: string;
  url: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-1 items-center justify-between rounded-2xl border border-[var(--color-border)] bg-white/[0.02] p-5 transition-colors hover:border-[var(--color-primary)]/40"
    >
      <div className="flex items-center gap-3">
        <span className="rounded-xl border border-[var(--color-border)] bg-[var(--color-elevated)] p-3 text-[var(--color-text)]">
          {icon}
        </span>
        <div>
          <h3 className="text-sm font-semibold text-[var(--color-text)]">{label}</h3>
          <p className="text-sm text-[var(--color-text-muted)]">@{handle}</p>
        </div>
      </div>
      <ExternalLink size={16} className="text-[var(--color-text-faint)] group-hover:text-[var(--color-primary)]" />
    </a>
  );
}
