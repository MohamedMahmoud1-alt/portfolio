import { GithubMark, LinkedinMark } from "@/components/ui/BrandIcons";
import { site } from "@/data/site";
import { socials } from "@/data/socials";

export function Footer() {
  const github = socials.find((s) => s.icon === "github");
  const linkedin = socials.find((s) => s.icon === "linkedin");

  return (
    <footer className="border-t border-[var(--color-border)] py-10">
      <div className="section-shell flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-text)]">
            {site.name}
          </p>
          <p className="mt-1 text-xs text-[var(--color-text-faint)]">
            &copy; {new Date().getFullYear()} · Built with Next.js, TypeScript &amp; Tailwind CSS
          </p>
        </div>
        <div className="flex items-center gap-3">
          {github && (
            <a
              href={github.url}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-[var(--color-text-faint)] transition-colors hover:text-[var(--color-primary)]"
            >
              <GithubMark size={18} />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin.url}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-[var(--color-text-faint)] transition-colors hover:text-[var(--color-primary)]"
            >
              <LinkedinMark size={18} />
            </a>
          )}
          <a
            href="#top"
            className="ml-2 rounded-full border border-[var(--color-border)] px-3 py-1.5 text-xs text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
