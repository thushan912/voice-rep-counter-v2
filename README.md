# Voice Rep Counter — Marketing Website

A production-ready, SEO-first, bilingual (EN/IT) marketing website for **Voice Rep Counter** (public store listing: *Voice Rep Counter Coach*).

Built with **Astro 7**, **Tailwind CSS 4**, **TypeScript**, Markdown content collections, static prerendering, and Docker/Nginx for production hosting.

## Product accuracy (read first)

The site describes the app as a **timer-based, voice-guided repetition pacer**—not an automatic movement detector. It never claims:

- automatic physical rep detection via camera/microphone/sensors,
- form correction, calorie/heart-rate/step tracking,
- account-based cloud sync,
- working push-notification reminders,
- universal screen-off/background audio,
- “no ads” or “no tracking”.

Before public release, re-verify the store URLs in [`src/data/site.ts`](src/data/site.ts) against the live listings, and complete the legal review noted on the privacy/terms pages.

## Requirements

- Node.js 24 (see [`.nvmrc`](.nvmrc))
- npm 9.6.5+

## Local development

```bash
npm install
npm run dev
```

## Build, type-check, preview

```bash
npm run check      # astro check (TypeScript)
npm run build      # outputs to dist/
npm run preview    # serve dist/ locally
```

After a build, run the verification script:

```bash
node scripts/verify-build.mjs
```

## Project structure

```
src/
├── components/        # Astro UI components and page templates
├── content/
│   ├── blog/          # Markdown blog posts (EN + IT)
│   └── (config)       # src/content.config.ts collection schema
├── data/              # Verified product facts, feature/exercise/legal copy
├── i18n/              # UI strings + locale/route helpers
├── layouts/           # BaseLayout (SEO, header, footer)
├── pages/             # Routes; English at root, Italian under /it/
├── styles/            # Tailwind 4 + design tokens
└── utils/             # Date formatting helpers
public/
├── assets/images/     # The seven supplied images (exact filenames)
├── assets/brand/      # Official store badges
├── robots.txt
└── favicon.svg
```

## Editing content

- **Homepage copy**: [`src/data/home.ts`](src/data/home.ts)
- **Feature pages**: [`src/data/features.ts`](src/data/features.ts)
- **Exercise guides**: [`src/data/exercises.ts`](src/data/exercises.ts)
- **How it works / FAQ / contact**: [`src/data/howItWorks.ts`](src/data/howItWorks.ts), [`src/data/faq.ts`](src/data/faq.ts), [`src/data/contact.ts`](src/data/contact.ts)
- **Privacy / Terms**: [`src/data/legal.ts`](src/data/legal.ts)
- **Blog posts**: Markdown files in [`src/content/blog/`](src/content/blog/) with typed frontmatter (schema in [`src/content.config.ts`](src/content.config.ts))

## Deployment

See [`DEPLOYMENT.md`](DEPLOYMENT.md) for Ubuntu VPS + Docker Compose + Nginx reverse-proxy instructions, HTTPS, rollback, and verification commands.
