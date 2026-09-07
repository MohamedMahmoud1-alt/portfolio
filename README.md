# Mohamed Mahmoud Salem — AI Engineering Portfolio

A production-ready personal portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion — showcasing applied Machine Learning, Deep Learning, NLP, Computer Vision, and Generative AI work, training, and certifications.

Sections: Hero · About · Why Me · Skills · Projects · Certifications · Education & Training · Achievements & Leadership · Professional Presence (GitHub/LinkedIn/Kaggle) · Resume · Contact.

---

## 1. Content notes

Two details differed between your CV and portfolio PDF during the initial build. Both have since been **confirmed directly with Mohamed** and the site now reflects the confirmed values:

1. **LinkedIn URL** — confirmed as `linkedin.com/in/mohamed-mahmoud-mohamed-salem` (matches the CV). Set in `data/socials.ts`.
2. **Class year** — confirmed as **fourth-year**. Set throughout `data/site.ts` (hero subheadline, About heading, About paragraph).

Everything else (projects, certifications, dates, scores, GPA, leadership roles) was verified directly against your certificate images and is consistent across sources.

---

## 2. Tech stack

- **Next.js 16** (App Router, static export via `output: "export"`)
- **TypeScript**
- **Tailwind CSS v4** (CSS-based theme, see `app/globals.css`)
- **Framer Motion** for animation
- **lucide-react** for icons (GitHub/LinkedIn/Kaggle use hand-built SVGs in `components/ui/BrandIcons.tsx` since lucide-react no longer ships brand logos)
- Self-hosted fonts via `@fontsource` (Space Grotesk + Inter) — no runtime call to Google Fonts, so the site has no external font dependency at build or run time

No backend, no database, no API keys. The two "dynamic" pieces are:
- The GitHub stats card (`components/sections/GitHubPresence.tsx`), which calls GitHub's public REST API directly from the visitor's browser and gracefully falls back to static links if the call fails or is rate-limited.
- The contact form, which builds a `mailto:` link client-side — it genuinely opens the visitor's email client with your address and their message pre-filled. There's no server to wire up, but see §7 if you'd rather have a "real" inbox-delivered form later.

---

## 3. Project structure

```
portfolio/
├── app/
│   ├── layout.tsx        # Root layout, fonts, SEO metadata
│   ├── page.tsx          # Assembles all sections + JSON-LD
│   ├── globals.css       # Design tokens (Tailwind v4 @theme) + base styles
│   ├── sitemap.ts        # Generates /sitemap.xml
│   ├── robots.ts         # Generates /robots.txt
│   ├── icon.png / apple-icon.png / favicon.ico
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── sections/          # One file per page section
│   └── ui/                # Reusable primitives (Reveal, Magnetic button,
│                           # NeuralBackground canvas, SectionHeading,
│                           # BrandIcons)
├── data/                  # All real content — edit these, not the components
│   ├── site.ts             # Hero copy, About copy, USP copy, SEO strings
│   ├── socials.ts          # Email, phone, GitHub/LinkedIn/Kaggle URLs
│   ├── skills.ts            # Technical + soft skills, quick stats
│   ├── projects.ts          # 8 project case studies
│   ├── certificates.ts      # 15 certificates (title, issuer, date, image)
│   ├── education.ts         # Degree info
│   └── experience.ts        # Training timeline, leadership, achievements
├── lib/utils.ts            # `cn()` class-name helper
├── public/
│   ├── images/               # Profile photo + 15 certificate images
│   └── cv/                   # Downloadable CV PDF
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

- **Palette:** deep blue-charcoal background (`#0b0e14`) with a signal-blue primary (`#6d8cff`) and a warm amber counterpoint (`#f2b84b`) — chosen deliberately over the more generic "near-black + single neon accent" look, and to avoid a cyberpunk/gamer feel while staying in the dark, technical register you asked for.
- **Type:** Space Grotesk for headings (technical, geometric), Inter for body/UI text.
- **Motion:** one signature hero animation (a lightweight canvas neural-node network), scroll-triggered reveals, a magnetic-pull effect on primary buttons, and modal/lightbox transitions for projects and certificates. Everything respects `prefers-reduced-motion` — animations are disabled and the canvas freezes to a static frame for visitors who have that preference set.
- All tokens live in `app/globals.css` under `@theme` (Tailwind v4's CSS-based config) — change colors, fonts, or spacing there.

---

## 9. Content & QA checklist

- [x] All content sourced from your CV, portfolio PDF, and certificate files — nothing fabricated
- [x] All 8 real projects included with real technical descriptions
- [x] All 15 real certificates included as viewable/downloadable images with a lightbox
- [x] CV is a genuine, downloadable PDF rebuilt from your original two-page CV
- [x] Profile photo processed and used in the hero section
- [x] `npm run build` succeeds with zero TypeScript or ESLint errors
- [x] Reduced-motion support verified in code (canvas freezes, global transition override)
- [x] Alt text on every image (profile photo and all 15 certificates)
- [x] SEO: metadata, Open Graph, Twitter card, JSON-LD `Person` schema, sitemap.xml, robots.txt
- [x] No secrets, API keys, or credentials anywhere in the codebase
- [x] LinkedIn URL and class-year wording confirmed directly and corrected
- [ ] Add a real production domain and set `NEXT_PUBLIC_SITE_URL` once you have one
- [ ] Consider swapping the `mailto:` contact form for a hosted form backend if you want messages delivered without opening the visitor's mail client (see §7)

---

Built for Mohamed Mahmoud Salem.
