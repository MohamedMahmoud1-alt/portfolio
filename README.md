# Mohamed Mahmoud Salem — AI Engineering Portfolio

A production-ready personal portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion — showcasing applied Machine Learning, Deep Learning, NLP, Computer Vision, and Generative AI work, training, certifications, and research.

Sections: Hero · About · Why Me · Skills · Projects · Certifications · Research · Education & Training · Achievements & Leadership · Professional Presence (GitHub/LinkedIn/Kaggle) · Resume · Contact.

**v2 highlights:** a vibrant violet → pink → orange gradient identity with a full Dark/Light theme toggle, 12 real projects (verified against their actual GitHub repos), a dedicated Research section, real competition/leadership certificates in Achievements, animated number counters, a scroll-progress bar, and a mouse-tilt hero portrait.

---

## 1. Content notes

A few details were confirmed directly with Mohamed during the build and are reflected below:

1. **LinkedIn URL** — `linkedin.com/in/mohamed-mahmoud-mohamed-salem`. Set in `data/socials.ts`.
2. **Class year** — fourth-year. Set throughout `data/site.ts`.
3. **Projects** — all 12 project names, descriptions, and tech stacks were verified directly against their GitHub repositories (not assumed from the original CV/portfolio PDF), including two with live demos (Suez Canal Authority Bank, Smart Home Diagnostics).
4. **Research** — the solar-forecasting paper is unpublished/under review, so no preprint link or cover image is shown per Mohamed's request.

Everything else (certifications, dates, scores, GPA, leadership roles) was verified directly against certificate images.

---

## 2. Tech stack

- **Next.js 16** (App Router, static export via `output: "export"`)
- **TypeScript**
- **Tailwind CSS v4** (CSS-based theme, see `app/globals.css`) with a runtime Dark/Light toggle driven by a `data-theme` attribute on `<html>`
- **Framer Motion** for animation (scroll reveals, number counters, scroll-progress bar, mouse-tilt hero card, magnetic buttons)
- **lucide-react** for icons (GitHub/LinkedIn/Kaggle use hand-built SVGs in `components/ui/BrandIcons.tsx` since lucide-react no longer ships brand logos)
- Self-hosted fonts via `@fontsource` (Space Grotesk + Inter) — no runtime call to Google Fonts

No backend, no database, no API keys. The two "dynamic" pieces are:
- The GitHub stats card (`components/sections/GitHubPresence.tsx`), which calls GitHub's public REST API directly from the visitor's browser and gracefully falls back to static links if the call fails or is rate-limited.
- The contact form, which builds a `mailto:` link client-side — it genuinely opens the visitor's email client with your address and their message pre-filled. There's no server to wire up, but see §7 if you'd rather have a "real" inbox-delivered form later.

---

## 3. Project structure

```
portfolio/
├── app/
│   ├── layout.tsx        # Root layout, fonts, theme-init script, SEO metadata
│   ├── page.tsx           # Assembles all sections + JSON-LD
│   ├── globals.css        # Design tokens (Tailwind v4 @theme), dark + light theme
│   ├── sitemap.ts / robots.ts
│   ├── icon.png / apple-icon.png / favicon.ico
├── components/
│   ├── layout/             # Navbar (incl. theme toggle), Footer
│   ├── sections/           # One file per page section
│   └── ui/                 # Reveal, Magnetic, NeuralBackground, ThemeToggle,
│                            # Counter, ScrollProgress, TiltCard, BrandIcons
├── data/                   # All real content — edit these, not the components
│   ├── site.ts              # Hero copy, About copy, USP copy, SEO strings
│   ├── socials.ts            # Email, phone, GitHub/LinkedIn/Kaggle URLs
│   ├── skills.ts              # Technical + soft skills, quick stats
│   ├── projects.ts            # 12 project case studies (verified vs. GitHub)
│   ├── certificates.ts        # 15 certificates (essential/more tiers)
│   ├── research.ts            # Research paper details
│   ├── education.ts           # Degree info
│   └── experience.ts          # Training timeline, leadership, achievements
├── lib/utils.ts             # `cn()` class-name helper
├── public/
│   ├── images/                 # Profile photo + certificate images
│   └── cv/                     # Downloadable CV PDF
├── next.config.ts
├── package.json
└── .env.example
```

**To update content** (new project, new certificate, new skill, a role change), edit the relevant file in `data/` — you will not need to touch any component.

---

## 4. Local development

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build     # production build → static files in /out
npm run preview   # serve the built /out folder locally (uses `serve`)
npm run lint       # ESLint
```

`npm run build` runs a full static export — the same output that ships to production. If it succeeds locally, it will succeed on Vercel or GitHub Pages.

---

## 5. Deploying to Vercel (recommended)

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Next.js** (auto-detected). No environment variables are required to build.
4. Deploy. Vercel runs `next build`, which produces the static export automatically because of `output: "export"` in `next.config.ts`.
5. Optional: once you have a custom domain, set `NEXT_PUBLIC_SITE_URL` in Vercel's Environment Variables (see `.env.example`) so Open Graph tags and the sitemap use the real domain, then redeploy.

## 6. Deploying to GitHub Pages

1. In `next.config.ts`, uncomment and set the `basePath` line to match your repository name:
   ```ts
   basePath: "/your-repo-name",
   ```
   (Skip this step if you're publishing to a custom domain or a `<username>.github.io` root repo.)
2. Build the static export:
   ```bash
   npm run build
   ```
3. Deploy the contents of `/out` to the `gh-pages` branch (or use a GitHub Action such as `actions/deploy-pages`). A minimal manual flow:
   ```bash
   npx gh-pages -d out
   ```
4. Enable GitHub Pages in the repo settings, pointing at the branch you deployed to.

---

## 7. Notes on the contact form

The form currently opens the visitor's email client via a `mailto:` link — no message data touches a server, and nothing can silently fail. If you'd rather have messages land straight in an inbox without opening the visitor's mail app, swap the `handleSubmit` function in `components/sections/Contact.tsx` for a call to a form backend such as Formspree or Resend (these work fine with a static export, since they're just an API you `fetch()` to — no server code needed on your side). A Next.js API route is also an option but would require removing `output: "export"`, since static export has no server runtime.

---

## 8. Design system

- **Palette:** a vibrant violet → pink → orange gradient (`--gradient-brand` in `app/globals.css`) carries the brand identity — used in the hero headline, primary buttons, card borders, and stat numbers — on top of a deep charcoal dark theme and a soft off-white light theme, both defined as CSS custom properties and swapped at runtime via `data-theme` on `<html>`.
- **Type:** Space Grotesk for headings (technical, geometric), Inter for body/UI text.
- **Motion:** a canvas neural-node network in the hero (colored from the brand gradient, theme-aware), scroll-triggered reveals, animated number counters, a scroll-progress bar, a mouse-tilt hero portrait, a magnetic-pull effect on primary buttons, and modal/lightbox transitions for projects, certificates, and achievement proof images. Everything respects `prefers-reduced-motion`.
- All tokens live in `app/globals.css` under `@theme` and the `[data-theme="light"]` override block — change colors, fonts, or spacing there.

---

## 9. Content & QA checklist

- [x] All content sourced from CV, portfolio PDF, certificate images, and verified GitHub repositories — nothing fabricated
- [x] All 12 real projects included, verified against their actual repos, with GitHub/live-demo links where available
- [x] All certificates (15 core + 7 achievement/leadership proof certs) included as viewable images with lightboxes
- [x] CV is a genuine, downloadable PDF
- [x] Profile photo updated and processed for the hero section
- [x] `npm run build` succeeds with zero TypeScript or ESLint errors
- [x] Dark/Light theme toggle implemented and verified in the compiled CSS
- [x] Reduced-motion support verified in code (canvas freezes, counters skip to final value, tilt disabled)
- [x] Alt text on every image
- [x] SEO: metadata, Open Graph, Twitter card, JSON-LD `Person` schema, sitemap.xml, robots.txt — description updated for 12 projects
- [x] No secrets, API keys, or credentials anywhere in the codebase
- [ ] Add a real production domain and set `NEXT_PUBLIC_SITE_URL` once you have one
- [ ] Consider swapping the `mailto:` contact form for a hosted form backend if you want messages delivered without opening the visitor's mail client (see §7)

---

Built for Mohamed Mahmoud Salem.
