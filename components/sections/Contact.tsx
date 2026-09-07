"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Copy, Check, Send } from "lucide-react";
import { GithubMark, LinkedinMark } from "@/components/ui/BrandIcons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/MagneticButton";
import { contact, socials } from "@/data/socials";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function copyEmail() {
    navigator.clipboard.writeText(contact.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  }

  const github = socials.find((s) => s.icon === "github");
  const linkedin = socials.find((s) => s.icon === "linkedin");

  return (
    <section id="contact" className="border-t border-[var(--color-border)] py-24 sm:py-32">
      <div className="section-shell grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading
            kicker="Contact"
            title="Let's talk about an internship or a project"
            description="The fastest way to reach me is email — I'll usually reply within a day or two."
          />

          <div className="mt-8 space-y-3">
            <div className="flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-white/[0.02] p-4">
              <div className="flex items-center gap-3">
                <Mail size={17} className="text-[var(--color-primary)]" />
                <span className="text-sm text-[var(--color-text)]">{contact.email}</span>
              </div>
              <button
                onClick={copyEmail}
                aria-label="Copy email address"
                className="rounded-md border border-[var(--color-border)] p-2 text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
              </button>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-white/[0.02] p-4">
              <Phone size={17} className="text-[var(--color-primary)]" />
              <span className="text-sm text-[var(--color-text)]">{contact.phone}</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-white/[0.02] p-4">
              <MapPin size={17} className="text-[var(--color-primary)]" />
              <span className="text-sm text-[var(--color-text)]">{contact.location}</span>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            {github && (
              <a
                href={github.url}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-[var(--color-border)] p-3 text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
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
                className="rounded-full border border-[var(--color-border)] p-3 text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                <LinkedinMark size={18} />
              </a>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-[var(--color-border)] bg-white/[0.02] p-6 sm:p-7">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Your name">
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-elevated)] px-3.5 py-2.5 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-primary)]"
                  placeholder="Jane Doe"
                />
              </Field>
              <Field label="Your email">
                <input
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-elevated)] px-3.5 py-2.5 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-primary)]"
                  placeholder="jane@company.com"
                />
              </Field>
            </div>
            <div className="mt-5">
              <Field label="Message">
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full resize-none rounded-lg border border-[var(--color-border)] bg-[var(--color-elevated)] px-3.5 py-2.5 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-primary)]"
                  placeholder="Tell me a bit about the role or project..."
                />
              </Field>
            </div>
            <Magnetic
              as="button"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[#050609]"
            >
              <Send size={15} />
              Send message
            </Magnetic>
            <p className="mt-3 text-xs text-[var(--color-text-faint)]">
              Opens your email client with this message pre-filled — no data is stored or sent anywhere else.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs text-[var(--color-text-faint)]">{label}</span>
      {children}
    </label>
  );
}
