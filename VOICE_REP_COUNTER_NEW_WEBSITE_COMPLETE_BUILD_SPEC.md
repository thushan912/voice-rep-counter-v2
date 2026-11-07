# VOICE REP COUNTER — COMPLETE NEW WEBSITE BUILD SPECIFICATION

**Document type:** Production implementation brief and master prompt for an AI coding assistant  
**Prepared:** 7 November 2026  
**Website:** `https://voicerepcounter.com/`  
**Brand:** Voice Rep Counter (public store listing: Voice Rep Counter Coach)  
**Primary objective:** A premium, fast, fully functional, SEO-first multilingual website that converts qualified organic visitors into iOS and Android app downloads.  
**Implementation target:** A NEW website project, not an incremental patch to the old landing page.  
**Hosting:** Existing Ubuntu 24.04 VPS, Docker Compose, Nginx, existing public TLS reverse proxy.

> **READ THIS FIRST:** This is an instruction to **build the actual site**, not another mockup, draft, report, or design-only prototype. Follow it phase by phase, implement files and pages, run the build and tests, and provide deployment instructions. Never claim a page, feature, test, or deployment works unless it was actually implemented or verified. Do not edit the Flutter mobile-app source.

---

## 0. COPY-PASTE MASTER COMMAND FOR THE CODING AGENT

Act as a senior Astro/TypeScript frontend engineer, technical SEO engineer, visual designer, accessibility specialist, and deployment engineer. Build a completely new production-quality marketing website for **Voice Rep Counter** following this entire specification. Use **Astro 7, Tailwind CSS 4, TypeScript, static prerendering, Markdown/MDX content collections, and Docker/Nginx hosting on my Ubuntu VPS**. Use my seven supplied visual assets with their exact filenames and paths. Create responsive EN/IT pages, complete content, technical SEO, real download links, working navigation, legal pages, blog and feature-page templates, accessible interactions, and a dark/neon-lime premium fitness visual design. Maintain the product-claim accuracy rules below. **Do not use a generic template, fake stats, fabricated testimonials, fictitious app screens, or unimplemented app features.** Do not stop at a plan or scaffolding; implement the website. If a legal or technical fact cannot be verified, leave a clearly marked review item, not a false public claim. Before marking done, run a production build and verify routes, images, metadata, locale switching, mobile layouts, 404 handling, links, accessibility, and deployment files.

---

## 1. PROJECT SOURCES AND ORDER OF AUTHORITY

1. **Mobile-app source audit**: `Pasted markdown(10).md`, titled *Voice Rep Counter — Complete Project Analysis* (4 November 2026). This is code-level evidence, **not** proof of all device-runtime behavior.
2. **Existing SEO/content planning**: `VOICE_REP_COUNTER_SEO_WEBSITE_MASTER_BLUEPRINT.md` (4 November 2026). Reuse its verified descriptions and editorial guidance where available; override any contradictions with the app audit and these requirements.
3. **Latest approved privacy-policy draft**: `VOICE_REP_COUNTER_PRIVACY_POLICY.md` and/or `.html`. Publish only after reviewing accuracy against released Android/iOS SDK configuration and legal requirements.
4. **Actual provided assets**: the files visible in the developer's `assets/images` folder (see Section 5). Their filenames are case-sensitive.
5. **Official current docs**: Astro, Tailwind, Google Search Central, and provider SDK docs for technical implementation. Do not rely on obsolete configuration snippets.
6. **Current public app stores** for store links, pricing, compatibility, languages, and app identity; verify at deployment time.

If source materials are not in the new website repository, work with the product facts explicitly recorded here rather than inventing details. Do not block the build for optional missing screenshots; use already-supplied promotional imagery and label it appropriately.

---

## 2. PRODUCT SOURCE OF TRUTH — STRICT FACTS

### What the app DOES

- It is a Flutter mobile app for **Android and iOS**.
- It is a **timer-based, voice-guided repetition pacer**. User sets target repetitions and seconds per repetition. The app speaks `1`, `2`, `3`... at that cadence so the user can follow along.
- It offers **Reps Counter** and **Rest Timer** session types.
- Rest Timer has audible ticks and **speaks its final five-second countdown** (plus zero), with a configurable preparation announcement when appropriate.
- Supports **Start, Pause, Resume, Stop**, **Play All**, optional **Play Sequentially**, and progression between configured sessions.
- Allows users to **create, edit, duplicate, delete, reorder, group/categorize, and reuse** workout sessions.
- Saves session definitions and completed workout history locally on-device.
- Provides **JSON backup export/import** for session templates.
- Offers voice adjustments: speech rate, pitch, volume, TTS language, haptic feedback, and an audio-ducking setting (runtime behavior can vary).
- Core workout operation works **offline** and needs **no account**.
- Source audit lists five human languages with six locale choices: **English (US/UK), Italian, Spanish, French, German**. Website launch languages are EN and IT; other website languages can be added later without claiming full translated public pages currently exist.
- The app is **free and ad-supported**; it integrates Google AdMob, Firebase Analytics, Crashlytics, Remote Config, and a consent mechanism.

### What the app DOES NOT do (NEVER CLAIM)

- It **does not sense or automatically detect actual physical reps** through camera, microphone, AI, motion sensors, or wearables. Its count is **scheduled spoken pacing**, not physical-repetition recognition.
- It does not evaluate exercise form, track calories, heart rate, or steps.
- It does not implement account-based cloud sync.
- It does not implement working workout reminder/push notifications, even if an unused settings toggle appears in source.
- It does not guarantee uninterrupted screen-off/background audio on every Android/iOS device; Android's audited build has no dedicated foreground service. Do not promise universal operation while locked.
- It is **not ad-free**, **not tracking-free**, and cannot be called “100% offline/no data transmitted.” Workout functionality works offline, but ads/analytics may connect when online.
- It is not a medical device or a treatment/recovery service. No injury-prevention or rehabilitation outcome promises.

### Wording safety

**Use:** “Voice-guided rep counter”, “timed spoken repetitions”, “hear every rep at your chosen pace”, “hands-free workout pacing”, “rest timer with spoken countdown”, “offline workouts”, “no sign-up required”, “free with ads”.

**Avoid:** “AI counts your movements automatically”, “detects each rep”, “microphone listens to your workout”, “guaranteed rep tracking”, “smart form correction”, “unlimited voice languages”, “no ads”, “no tracking”, “automatic workout reminders”, “clinically proven”.

**Subtle but critical:** Do not put “automatic counting” without qualifying it as *automatically speaking a scheduled count*. Never present illustrative UI as an exact reproduction of a current build.

---

## 3. TECHNOLOGY STACK AND ARCHITECTURE

| Concern | Required choice | Notes |
|---|---|---|
| Main framework | **Astro 7** | Latest compatible patch, static `output: 'static'` |
| Language | **TypeScript** | Strict type checking |
| Styling | **Tailwind CSS 4** | Vite plugin; avoid obsolete `@astrojs/tailwind` for v4 |
| Content | Astro Content Collections + Markdown/MDX | Typed frontmatter for guides/articles |
| UI | Astro components | Semantic, prerendered HTML first |
| Interactive UI | Tiny vanilla TS or optional isolated islands | Only where essential; no full React SPA |
| Animation | CSS + IntersectionObserver progressive enhancement | Respect reduced motion |
| Icon system | Inline SVG/Lucide assets as needed | No heavy icon runtime necessary |
| Hosting | **Existing Ubuntu VPS** | Static Nginx container behind existing reverse proxy |
| Container | Docker Compose | Multi-stage Node builder + Nginx runtime |
| TLS | Existing public reverse proxy + Let's Encrypt | Do not overwrite other services' proxy configuration |
| Database | **None** | No login/auth/backend needed for marketing site |
| SEO | Astro sitemap, metadata, hreflang, JSON-LD | All SEO-critical copy in HTML response |
| Analytics | Optional, consent-reviewed | Do not install invasive trackers by default |
| Search | Optional later | No client-heavy site-wide search at launch |

### Why static

All website content is editorial and public. Build pages to `dist/`, then serve them directly from Nginx. No Node.js process in production. Avoid unnecessarily adding SSR adapters or APIs.

### Bootstrap

```bash
npm create astro@latest voice-rep-counter-web
cd voice-rep-counter-web
npx astro add tailwind mdx sitemap
```

Use Astro/Tailwind 4's **current official Vite plugin** and import `@import "tailwindcss";` in the global CSS. Do not install the deprecated Tailwind 3 Astro integration. Verify Node version requirement for the installed Astro release, then pin an appropriate current LTS version in `.nvmrc` and the Docker builder (Node 24 is one viable choice in late 2026 if compatible).

---

## 4. BRAND, DESIGN TOKENS, AND PREMIUM LOOK

### Art direction

**Editorial sports-tech / premium fitness technology.** Dark near-black surfaces; bold, legible typography; electric yellow-lime/green used sparingly; cinematic gym photos; clean layout rhythm; authentic screens; restrained glass/gradient effects. Think high-end performance equipment, not a flashy gaming dashboard.

### Base design tokens (adjust locally for contrast)

```css
:root {
  --bg: #050805;
  --surface: #0c110d;
  --surface-raised: #111813;
  --surface-hover: #19221b;
  --text: #f7f9f5;
  --muted: #a7b0a8;
  --muted-strong: #c8d0c8;
  --border: rgba(211, 255, 181, .15);
  --accent: #c8f500;
  --accent-strong: #d6ff18;
  --accent-on: #071000;
  --focus: #d6ff18;
  --radius-card: 22px;
  --radius-button: 12px;
  --site-max: 1640px;
}
```

Typography: use a modern licensed, preferably locally hosted type family such as **Inter** for body copy and optionally **Space Grotesk** or **Manrope** for headings; use safe fallbacks. Do not send private/licensed font files to external services. Use consistent weight scale and readable paragraphs.

### Layout rules

- Desktop **max-width 1640px**; horizontal width `min(calc(100% - 64px), 1640px)`; on ultra-wide monitors avoid >1640px text spreading.
- Main hero two columns roughly **50% content / 50% app-and-photo scene**, gap 48–96px.
- Home hero background full bleed; inner text and phone aligned to wide content grid.
- Hero phone approximately 380–500px rendered width on large desktop, responsive, never cropped.
- Readable body text max-width ~60–75 characters, even if section width is large.
- Each page must have a single clear H1, then H2/H3 hierarchy.
- Features: three premium editorial cards or alternating image/text rows; do not overuse small icon cards.
- Section spacing: 96–144px desktop, 56–88px mobile, compact where appropriate.
- Use subtle borders, neon accent dividers, restrained shadows, minimal glow.
- Sticky translucent header after scroll, only if contrast remains good.
- Mobile at ~360px must fit with no horizontal scrollbar; stack columns under ~900px.
- Appropriate breakpoints for 360, 390, 768, 1024, 1440, 1920 and wider.
- Buttons have clear touch targets (at least ~44×44 CSS px), readable hover/focus states.
- Define mobile header menu and locale switcher with keyboard support.
- Refrain from auto-playing audio, video or unrequested animations.

### Avoid

- Huge blank left/right gutters as in the previous screenshot.
- Text baked into hero images (use HTML headings).
- Continuous/parallax heavy GPU animation on mobile.
- Generic fake analytics dashboards/AI features, fabricated user counts, fake star ratings, badges without proof.
- AI-generated screens represented as pixel-perfect shipped UI.

---

## 5. ASSET INVENTORY — EXACT IMAGE FILE MAPPING

**Files already available in the developer's screenshot:**

```text
assets/images/
├── Custom-Workout-Sessions.webp
├── Desktop-Hero-Background.webp
├── Main-App-Mockup.webp
├── Rest-Timer.webp
├── Social-Sharing-Image.webp
├── Voice-Rep-Counting.webp
└── og-cover.jpg
```

**IMPORTANT:** The screenshot shows an `assets/images` folder, not necessarily Astro's `public/` directory. For this new Astro project, copy or move the files into **`public/assets/images/`**, preserving exact names/capitalization. Check that the files are present; do not invent empty placeholders if a file is missing. The actual source assets exist in the developer's machine/project, not automatically in the AI agent runtime.

| Asset | Final public URL | Placement | Loading/alt |
|---|---|---|---|
| `Desktop-Hero-Background.webp` | `/assets/images/Desktop-Hero-Background.webp` | Homepage full-bleed hero background | Decorative, CSS background/empty alt, eagerly ready for first viewport |
| `Main-App-Mockup.webp` | `/assets/images/Main-App-Mockup.webp` | Homepage hero right-side phone | Descriptive alt; high priority; indicate *illustration* if UI differs from shipped app |
| `Voice-Rep-Counting.webp` | `/assets/images/Voice-Rep-Counting.webp` | Homepage feature #1 and preview on feature detail | Below fold: lazy load, width/height |
| `Rest-Timer.webp` | `/assets/images/Rest-Timer.webp` | Homepage feature #2 and rest timer page | Below fold: lazy load |
| `Custom-Workout-Sessions.webp` | `/assets/images/Custom-Workout-Sessions.webp` | Homepage feature #3 and session page | Below fold: lazy load |
| `Social-Sharing-Image.webp` | `/assets/images/Social-Sharing-Image.webp` | Optional alternate Open Graph/Twitter social image and promotional share preview | Not necessary to show in normal page body |
| `og-cover.jpg` | `/assets/images/og-cover.jpg` | **Primary OG/Twitter image** if verified at ~1200×630 and properly cropped | Prefer JPEG for cross-platform compatibility; inspect actual dimensions |

### Exact page-specific placement

1. Homepage first screen: `Desktop-Hero-Background.webp` as full-width background with dark gradient overlay.
2. Hero app preview: `Main-App-Mockup.webp` prominently in the right column, no heavy shadows that obscure the mockup.
3. Feature sequence: `Voice-Rep-Counting.webp` → `Rest-Timer.webp` → `Custom-Workout-Sessions.webp` (maintain this order).
4. Feature pages can reuse the corresponding image but place supporting **real** app screenshots later when available.
5. All pages: `og-cover.jpg` as default social share preview after validating size/crop; `Social-Sharing-Image.webp` may be used as a secondary `og:image` variant or specifically for social media with WebP support.
6. Do not accidentally define two conflicting primary OG images or claim both will be chosen in all platforms. Use a single primary JPEG OG image across the site unless a tested alternative is better.

### App logo

The screenshot does not prove there is a dedicated logo file in this folder. **Look for existing app-logo assets already supplied elsewhere.** If present, use the actual logo, not a fabricated one; place it under `public/assets/brand/` with a clear filename. If no suitable logo is available, render the brand as plain text until it is supplied. Generate favicons from a verified official logo only.

### Image reliability and SEO

- Inspect actual pixel dimensions and alpha; **do not presume** file names encode dimensions or transparency.
- The generated mockups are **marketing illustrations**, not trusted evidence of the shipping interface (some example art may show “Set 1 of 3” and controls not verified as app UI). Do not use mockup-specific features as product facts.
- Prefer authentic product screenshots for feature explanations. If unavailable, use the provided illustrations with an appropriate alt such as “Illustration of voice-guided workout pacing.”
- Never stretch; crop with `object-fit: cover` only when safe. Avoid cropping phones or embedded UI text.
- Decorative images: CSS background or `alt=""`; meaningful screenshots: concise, truthful alt.
- For responsive content images provide `sizes`, `srcset` where practical, numeric width/height, and `decoding="async"`.
- Use WebP as provided; produce optional AVIF versions only if visual quality and browser support are tested.
- Do not lazy-load the LCP hero; preload carefully (one primary hero only, not every image).
- Set `og:image:width` and `og:image:height` to the **actual verified** dimensions of the selected file, not guessed sizes.

---

## 6. COMPLETE WEBSITE INFORMATION ARCHITECTURE

Launch with quality pages first; do not generate dozens of thin duplicates. Use **English at root** and **Italian under `/it/`**, with matching paths and clear language switching.

### Core launch pages (build ALL of these)

```text
/                              English homepage
/it/                           Italian homepage

/features/                     English overview
/it/features/                  Italian overview

/features/voice-rep-counting/  Spoken rep pacing detail
/it/features/voice-rep-counting/
/features/rest-timer/         Rest timing detail
/it/features/rest-timer/
/features/custom-sessions/    Session creation and organization
/it/features/custom-sessions/
/features/sequential-workouts/ Grouping and sequential play
/it/features/sequential-workouts/
/features/workout-history/   History and JSON backup
/it/features/workout-history/
/features/voice-settings/    Rate, pitch, volume, language
/it/features/voice-settings/

/how-it-works/                 Step-by-step tutorial
/it/how-it-works/

/exercises/                    Exercise use-case directory
/it/exercises/
/exercises/push-up-rep-pacer/ Distinct push-up example
/it/exercises/push-up-rep-pacer/
/exercises/squat-rep-timer/   Distinct squat example
/it/exercises/squat-rep-timer/
/exercises/plank-timer/       Timer for holds (not automatic detection)
/it/exercises/plank-timer/

/blog/                         Editorial hub
/it/blog/
/blog/[slug]/                  SEO articles as approved
/it/blog/[slug]/               Italian translations only where written

/faq/                          Expanded FAQ
/it/faq/
/privacy/                      Accurate privacy policy
/it/privacy/                   Reviewed Italian privacy translation
/terms/                        Reviewed terms
/it/terms/
/contact/                      Contact/support
/it/contact/

/404.html                      Actual 404 page
/robots.txt
/sitemap-index.xml             Or sitemap output matching integration
```

### Not all launch content has to be exhaustive

Prioritize **homepage + all core feature pages + How It Works + legal/contact** before growing exercise/blog articles. A page should be published only when it contains distinct, useful content; otherwise hold it as a draft and exclude it from sitemap/internal links. All routes above are target architecture, not permission to publish empty stubs.

### Navigation

Desktop top bar: `Logo/Brand | Features | How It Works | Exercises | Blog | FAQ | EN / IT | Download`.

Mobile: brand + menu; expanded menu with keyboard-accessible links and language toggle; persistent CTA can be placed at bottom of drawer. Highlight active section/page with subtle accent.

Footer: product description; 2-column/4-column internal links; real store badges; policy/terms/contact; actual responsible legal entity name where verified; no invented corporate claims.

---

## 7. HOMEPAGE — EXACT LAYOUT AND COPY (ENGLISH)

### Section A — Header

- Minimal black/navy near-black bar, logo at left.
- Keep nav container aligned with hero grid's 1640px max width.
- EN and IT buttons remain links to corresponding localized URLs, not JavaScript-only text toggles.
- Download button leads to a visible choice of Android and iOS links; no “Download now” dead button.

### Section B — Hero (first viewport)

**Eyebrow:** `VOICE-GUIDED WORKOUT COACH`

**H1:** `Your reps. Your pace. Counted out loud.`

**Lead:** `Set the repetitions and seconds between counts. Voice Rep Counter speaks each number at your chosen pace, then helps you time your rest and move through your workout—without constantly checking your phone.`

**CTA 1:** Official Google Play badge → verified Play Store URL  
**CTA 2:** Official App Store badge → verified App Store URL  
**Secondary link:** `See how it works` → `/how-it-works/`

**Proof strip:** `Voice-guided rep pacing` · `Spoken rest countdowns` · `No account needed`  
**Pricing line:** `Free with ads · Core workouts work offline`

**Design:** left ~50% text; right ~50% `Main-App-Mockup.webp`; `Desktop-Hero-Background.webp` across hero with dark overlay. Keep left typography large on desktop without splitting the H1 into awkward four/five lines. Background athlete must remain visible but must not compete with headline or mockup.

### Section C — Value proposition

**H2:** `Stay in your workout. Let the voice do the counting.`

Intro: `Counting in your head or checking a timer can interrupt the rhythm of a set. Voice Rep Counter gives you an audible pace, so you can follow each rep and rest interval with less screen checking.`

Three concise supporting cards:

- `Hear the next rep` — `Follow a spoken number at your configured interval.`
- `Know when rest ends` — `Listen for timer ticks and the final spoken countdown.`
- `Keep your routine organized` — `Save, group, reorder, and sequence your sessions.`

### Section D — Three showcase feature blocks

**Block 1 — Voice rep counting**  
Asset: `Voice-Rep-Counting.webp`  
H2: `Every rep, spoken at your pace`  
Copy: `Choose a target count and the seconds between repetitions. Start your session and listen as Voice Rep Counter announces each number. You set the rhythm; the app handles the spoken count.`  
CTA: `Explore voice rep counting` → `/features/voice-rep-counting/`

**Block 2 — Rest timer**  
Asset: `Rest-Timer.webp`  
H2: `Rest intervals you can hear`  
Copy: `Create a dedicated rest timer. Hear ticks as the interval runs and a spoken countdown through the final five seconds, so you can prepare for what's next.`  
CTA: `Explore the rest timer` → `/features/rest-timer/`

**Block 3 — Custom sessions**  
Asset: `Custom-Workout-Sessions.webp`  
H2: `Make the workout yours`  
Copy: `Create reusable sessions with your chosen count, interval, and name. Organize them into categories, change the order, and play them in sequence when you want a guided routine.`  
CTA: `Explore custom sessions` → `/features/custom-sessions/`

Desktop layout alternating image/text or three tall grid cards based on best visual balance; mobile uses one column. Consistent accessible heading hierarchy and image sizes.

### Section E — Sequential routines (no new fabricated image)

**H2:** `From one exercise to the next`  
Copy: `Build a sequence of repetition and rest sessions, then enable sequential playback. Voice Rep Counter can move to the next configured session without you rebuilding the routine each time.`  
Points: `Grouped exercises` · `Reorder sessions` · `Optional sequential playback`  
CTA → `/features/sequential-workouts/`

Use HTML/CSS visual diagram or authentic screenshot if present. Do not fabricate a real app screen.

### Section F — How It Works

**H2:** `Four steps to a more focused set`

1. `Create a session` — `Select Reps Counter or Rest Timer.`
2. `Set your pace` — `Choose the target count and timing, or a rest duration.`
3. `Press Start` — `Listen for spoken numbers or the rest countdown.`
4. `Build your routine` — `Save, group, sequence, and review completed sessions.`

Make steps static semantic HTML, with CSS animation only as enhancement. CTA → `/how-it-works/`.

### Section G — Custom voice, history, offline

Three clear horizontal or grid panels:

- `A voice that suits you` — speech speed, pitch, volume and available languages.
- `Keep a record of what you did` — completed-session history stored on your device; no fake performance charts.
- `Your workout doesn't require a login` — core counting, saved sessions, and history work offline, though ads/analytics can use internet when available.

Links to respective feature pages and privacy policy.

### Section H — Use Cases

**H2:** `A voice-guided rhythm for different workouts`

Four editorial cards linking to distinct useful pages:

- Push-ups: `Follow a steady spoken count.`
- Squats: `Choose the seconds between each squat.`
- Planks: `Use a timed interval and audible ending.`
- Circuit sessions: `Alternate configured rep and rest segments.`

Avoid suggesting detection, exercise recognition, medical benefits, or form correction.

### Section I — Credibility / safety

Short truth-based callout:

`Built for simple, focused workout pacing: no account to create, configurable sessions saved locally, and a clear spoken count. Voice Rep Counter is a timer-based voice coach—not a camera or motion-tracking app.`

Do not show review counts, user counts, athlete testimonials or ratings unless verified and permissioned.

### Section J — Homepage FAQ

Add 8–10 question/answer items in server-rendered HTML with accessible `<details>` or a keyboard-operable accordion. Questions and answers should include:

1. **Does Voice Rep Counter automatically detect my reps?**  
   `No. It speaks repetition numbers at intervals you choose. You perform each repetition in time with the spoken count; the app doesn't use a camera or motion sensors to detect movement.`
2. **Can I change how fast the voice counts?**  
   `Yes. Choose the time between repetitions in each Reps Counter session and adjust available voice settings such as speech rate, pitch, and volume.`
3. **Can it count down rest periods?**  
   `Yes. Rest Timer plays audible ticks and speaks the final five seconds, plus zero.`
4. **Can I combine more than one exercise?**  
   `Yes. Create and organize sessions, then use the optional sequential-play feature to move through a configured routine.`
5. **Can I use the app without creating an account?**  
   `Yes. No account is required.`
6. **Does it work without an internet connection?**  
   `Core workout counting, session management, and saved history work offline. Advertising and analytics services may use the internet when connected.`
7. **Can I save my sessions?**  
   `Yes. Session definitions are stored on your device. You can also export and import them as JSON backups.`
8. **Can I change the spoken language?**  
   `The audited app supports English, Italian, Spanish, French, and German, with English locale options. Voice availability may depend on your device.`
9. **Is Voice Rep Counter free?**  
   `Yes, it is free to download and supported by advertising.`
10. **Will it keep counting with my phone locked?**  
   `Background audio is configured in the app, but behavior may vary by device and operating system. We cannot guarantee uninterrupted screen-off counting on every phone.`

### Section K — Final CTA

**H2:** `Ready to let the voice count?`  
Copy: `Choose your reps, choose your pace, and focus on the workout in front of you.`  
Both official store badges. Small trust line: `Free with ads · No account needed`. Bold lime gradient but keep contrast accessible.

### Section L — Footer

Four groups: `Product`, `Guides`, `Support`, `Get the app`. Real copyright/legal identity after verification. Include `Privacy`, `Terms`, `Contact`, `Language`, and no dead links.

---

## 8. HOMEPAGE — ITALIAN EDITORIAL COPY (DO NOT MACHINE-LITERALIZE)

English structure stays identical at `/it/`, with natural Italian copy. Recommended primary text:

| Component | Italian content |
|---|---|
| Eyebrow | `ALLENAMENTO GUIDATO DALLA VOCE` |
| H1 | `Le tue ripetizioni. Il tuo ritmo. Una voce che conta.` |
| Lead | `Imposta il numero di ripetizioni e i secondi tra un conteggio e l'altro. Voice Rep Counter pronuncia ogni numero al ritmo che scegli, ti accompagna durante le pause e ti aiuta a seguire la tua routine senza controllare continuamente il telefono.` |
| Main CTA | `Scarica su Google Play` / `Scarica su App Store` |
| Benefit 1 | `Segui ogni ripetizione con la voce` |
| Benefit 2 | `Ascolta il conto alla rovescia delle pause` |
| Benefit 3 | `Organizza le sessioni di allenamento` |
| Section H2 | `Concentrati sul movimento. Al conteggio pensa la voce.` |
| Rep block | `Ogni ripetizione, al ritmo che scegli` |
| Rest block | `Pause con conto alla rovescia vocale` |
| Session block | `Crea sessioni personalizzate` |
| Sequencing | `Da un esercizio al successivo` |
| How It Works | `Come funziona in quattro passaggi` |
| Use Cases | `Un ritmo guidato dalla voce per diversi allenamenti` |
| Final CTA H2 | `Pronto ad allenarti seguendo la voce?` |
| Trust line | `Gratis con pubblicità · Nessun account richiesto · Funzioni principali disponibili offline` |

Italian FAQ answers should match the precise English statements, including the automatic-detection clarification and limitations. Preserve app feature names and avoid awkward literal English terms if a familiar Italian equivalent exists.

---

## 9. FEATURE PAGE TEMPLATE + UNIQUE CONTENT REQUIREMENTS

Each feature page must contain **distinct** helpful information; not one paragraph with a swapped keyword. All pages have intro/H1, explanatory example, how-to, verified limitations, supporting screenshot/illustration, internal links, 3–6 relevant FAQ, and store CTAs.

| Route | H1 (EN) | Unique useful content | Asset |
|---|---|---|---|
| `/features/voice-rep-counting/` | `A voice rep counter for your workout pace` | Example: 12 reps, 4 seconds between announcements; explains scheduled numbers vs sensor detection; start/pause/finish | `Voice-Rep-Counting.webp` |
| `/features/rest-timer/` | `A workout rest timer with spoken countdowns` | Example: 60-second rest; ticks; spoken last five seconds; preparation announcement only where configured | `Rest-Timer.webp` |
| `/features/custom-sessions/` | `Create custom rep and rest sessions` | Title, type, rep target, interval, categories, edit/duplicate/reorder | `Custom-Workout-Sessions.webp` |
| `/features/sequential-workouts/` | `Play your workout sessions in sequence` | Explain grouping, optional Play Sequentially, Play All, transition flow, scope caveat | Authentic screenshot if supplied or CSS diagram |
| `/features/workout-history/` | `Review completed workouts and back up your sessions` | Explain local entries, details, delete, JSON export/import, no cloud account sync | Authentic screenshot if supplied or text diagram |
| `/features/voice-settings/` | `Adjust your workout's spoken voice` | Rate, pitch, volume, language, haptics, ducking; acknowledge device variance | Authentic screenshot if supplied |

For each `/it/features/.../`, provide full Italian adaptation, metadata, internal links, and `hreflang`. Do not publish an empty translated shell.

---

## 10. HOW-IT-WORKS PAGE: REAL WORKFLOWS

Content must describe the code-audited journey clearly:

**Example A — Push-up voice pace:** Open app → choose/create Reps Counter → name `Push-ups` → choose `12 repetitions` → interval `4 seconds` → Start → hear spoken counts while exercising → finish → view history. Clarify this is an illustrative configuration and the app is not physically sensing completed push-ups.

**Example B — Rest between sets:** Create Rest Timer of `60 seconds` → start → hear tick sound → hear final `5, 4, 3, 2, 1, zero` → start/transition to next configured session when applicable.

**Example C — Grouped routine:** Create sessions for different exercises and rests → assign categories → reorder → use group play or Play Sequentially → pause/resume as required. Do not imply all groups are always executed in one cross-category playlist; playback scope has implementation rules.

Add genuine screenshot slots with captions. A video/demo is optional only after a real recording exists. Do not use autoplay or fake animations that imply sensors.

---

## 11. EXERCISE USE CASE PAGES (HIGH-INTENT SEO)

### `/exercises/push-up-rep-pacer/`

- H1: `Voice-guided push-up rep pacing`
- Explain why users may want an audible cadence during push-ups.
- Provide configuration example: e.g., 10 reps at 3 seconds/repetition; user may customize.
- Explain a timer-paced count does not know whether a rep was completed.
- Include safety-neutral exercise description; no medical promises.
- Cross-link voice rep counting and rest timer.

### `/exercises/squat-rep-timer/`

- H1: `Follow a spoken count during squat sets`
- Example 12 reps at 4 seconds between numbers.
- Differentiate time between spoken counts from movement quality or form analysis.
- Explain optional rest segment and reuse of sessions.

### `/exercises/plank-timer/`

- H1: `An audible plank timer for timed holds`
- Demonstrate using Rest Timer for timed hold; clarify the app does not detect posture or automatically assess completion.
- Explain countdown, ticks, and end-of-time feedback.

### `/exercises/` directory

Helpful introduction + use-case cards; do not claim there is an exercise library or personalized exercise prescriptions inside the app.

**Editorial rule:** Do not manufacture hundreds of near-identical keyword pages. Add only distinct topics with real instructional value and product examples.

---

## 12. BLOG / CONTENT COLLECTIONS

Implement typed collection frontmatter with: `title`, `description`, `slug`, `locale`, `date`, `updated` optional, `category`, `tags`, `heroImage` optional, `author` (verified name/brand), `draft`, `related`, `translationKey` optional.

### Publish initial helpful articles (2–4 substantive pages, translated carefully as feasible)

1. `How to pace push-ups with a spoken count` — demonstrate voice timing; explicit no sensor detection.
2. `How long should you rest between workout sets?` — avoid universal prescriptions; distinguish different training goals; cite reputable exercise science if factual physiology claims are included.
3. `Build a simple bodyweight circuit with rep and rest timers` — clear example using actual app logic.
4. `Voice rep timer vs automatic rep detection: what's the difference?` — high-value clarity piece.

Additional research backlog: interval-timer setup, timed holds vs rep counts, workout consistency, pacing choices, rest countdown tips. These require original, helpful explanations, not bulk generated filler.

Blog layout: Article/BlogPosting JSON-LD for content, real publication/update dates, author details only when verified, table of contents for long content, related pages, useful internal links. Don't publish “2026 definitive exercise science” claims without source review.

---

## 13. SEO IMPLEMENTATION — NON-NEGOTIABLE

### Core requirements

- All primary headings, copy, FAQs, navigation, and links must exist in **prerendered HTML**; no JavaScript-generated content dependency for SEO.
- One meaningful unique H1, unique `<title>` and meta description per page/language.
- Canonical absolute URL per page (canonical to the **same-language** URL, not all Italian pages to English).
- Correct `hreflang="en"` and `hreflang="it"` on matched pages; optionally `x-default` to English homepage or suitable language-selector destination. Every alternate should include itself and reciprocate where both exist.
- `html lang="en"` or `"it"` accordingly.
- Proper sitemap incl. only indexable, published URLs; respect Astro sitemap integration output filename.
- `robots.txt` linking to sitemap; don't accidentally block assets or translated pages.
- Permanent redirects from old canonical/legacy URLs if they have backlinks, with no redirect chains.
- Simple hyphenated lowercase slugs, trailing-slash convention consistent across all links/routes.
- HTML anchors for all essential internal links; not click-only `<div>` actions.
- Breadcrumbs on interior pages, Article schema on blog, optional MobileApplication/SoftwareApplication markup truthful to the app.
- No fake rich-result reviews, ratings or aggregates.
- OG and Twitter metadata per page with verified absolute image URL and appropriate description.
- Official iOS/Google Play store URLs, always tested before publication.

### Suggested homepage SEO

- EN title: `Voice Rep Counter App | Spoken Reps & Workout Rest Timer`
- EN description: `Hear each repetition at your chosen pace with Voice Rep Counter. Create custom sessions, follow spoken rest countdowns, and train hands-free on iOS or Android.`
- IT title: `Voice Rep Counter | Conteggio vocale ripetizioni e pause`
- IT description: `Ascolta ogni ripetizione al ritmo che scegli. Crea sessioni personalizzate, segui il conto alla rovescia delle pause e allenati con Voice Rep Counter.`

These are editorial starting points; check character rendering and search-intent fit, not a guarantee of rankings.

### Suggested per-page intent

| URL | Primary search intent |
|---|---|
| `/` | voice rep counter app, hands-free workout timer |
| `/features/voice-rep-counting/` | talking repetition counter, spoken rep timer |
| `/features/rest-timer/` | rest timer for workout, spoken countdown |
| `/features/custom-sessions/` | custom repetition timer sessions |
| `/features/sequential-workouts/` | workout timer with sequential sessions |
| `/exercises/push-up-rep-pacer/` | voice-paced push-up counter (not camera automatic) |
| `/exercises/squat-rep-timer/` | squat repetition timing |
| `/exercises/plank-timer/` | plank hold countdown timer |
| `/it/` | contatore ripetizioni vocale, timer allenamento |
| `/it/features/rest-timer/` | timer recupero allenamento, conto alla rovescia vocale |

Use genuine phrases naturally; do not stuff variant keywords into headings.

### JSON-LD examples (adapt to Astro safely)

Home: `WebSite` plus `MobileApplication` or `SoftwareApplication` describing truthful title, operating systems and actual store links.

Example factual core (do not add ratings without evidence):

```json
{
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "Voice Rep Counter Coach",
  "url": "https://voicerepcounter.com/",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Android, iOS",
  "description": "A voice-guided workout timer that speaks repetitions at configured intervals and includes rest countdowns.",
  "offers": {"@type": "Offer", "price": "0", "priceCurrency": "EUR"}
}
```

**Google Software App rich result caution:** Google's documentation may require a rating or review to be eligible for its specific rich result; leave out such fields rather than fabricating them. Structured data improves machine understanding but cannot guarantee special search appearance. Validate with Rich Results Test and schema validator.

On interior pages add `BreadcrumbList` reflecting actual hierarchy. Blog pages add `BlogPosting` with accurate visible title/date/author (do not mark fake updates). Keep JSON-LD consistent with visible page content.

### SEO tools

- Google Search Console verification & sitemap submission once deployed.
- Google Rich Results Test for JSON-LD validation.
- PageSpeed Insights / Lighthouse.
- Actual Search Console Performance and indexing reports for keyword decisions; do not invent search volume or ranking claims.

---

## 14. ENGLISH / ITALIAN INTERNATIONALIZATION

Astro config must use built-in i18n with `defaultLocale: 'en'`, `locales: ['en', 'it']`, and `routing: { prefixDefaultLocale: false }` (check current syntax for Astro 7). English routes at root; Italian routes under `/it/`.

Prefer route-level static generation, not browser-language gating. Locale switcher must navigate to **the equivalent translated page when it exists**, otherwise a relevant locale homepage—never a 404. If a blog article has no Italian translation, do not invent its Italian hreflang alternate.

Use shared page templates with locale-based dictionaries/content arrays, or explicit pages where most maintainable. Avoid duplicate code and duplicate English copy in Italian URLs. Check translated button labels, FAQ grammar, breadcrumbs, dates and page titles.

Never automatically redirect Googlebot or visitors based solely on IP. Language menu must be visible and stable. Do not change the domain/path when a user clicks unrelated navigation.

---

## 15. ACCESSIBILITY, UX, AND TRUST

- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.
- Skip-to-main link visible on keyboard focus.
- Proper heading order and accessible meaningful labels; one H1 per page.
- All menu, FAQ, locale, and control elements keyboard-operable; `aria-expanded` on toggles.
- Visible focus rings and WCAG AA-appropriate color contrast for normal and large text.
- Store badge links accessible and clearly titled; open externally only if reasonable; avoid surprise behavior.
- Respect `prefers-reduced-motion`; no scroll trapping or autoplay sounds.
- Any interactive demo must clearly be labeled **simulation**, not an actual app screen or motion detector. Prefer no demo until implemented correctly.
- Contact email should be visible and functional. Avoid a form unless backend/spam protection/privacy handling is implemented.
- Mobile sticky CTA only if it doesn't obscure content or browser safe areas.
- Cookies/tracking: don't add third-party scripts without appropriate disclosure/consent review.
- No dark patterns, fake download buttons, nonfunctional nav links or invented certifications.

---

## 16. PRIVACY, TERMS, CONTACT, AND COMPLIANCE

### Privacy

Use the already drafted `VOICE_REP_COUNTER_PRIVACY_POLICY.md` / `.html` **as a reviewed source**, not a generic “no data collected” template. The privacy policy must accurately disclose, subject to final release verification:

- Local sessions/history/settings and account-free use.
- Firebase Analytics (workout events/usage telemetry), Crashlytics, Remote Config.
- Google AdMob advertising and consent via UMP.
- Data shared/processed by providers, retention, user controls, rights, and support contact.
- No claims of zero tracking or entirely offline data flows.

Contact in previous draft: **contact@codeneir.com** (verify mailbox before publication). Legal owner in existing policy draft is Dimuthu Thushan Lankadewa / Codeneir; verify the appropriate public legal name and any mandatory Italian business details before publishing. This is not a substitute for legal review.

### Terms

Create a clear initial Terms page covering permitted use, scope/limitations of a timer-based fitness aid, third-party app-store terms, no medical advice, warranty/availability subject to applicable law, intellectual property, contact, changes, and applicable legal provisions. **Do not fabricate an enforceable jurisdiction, legal entity, company registration, VAT number, or invalid consumer-rights waiver.** Mark for human legal review before publishing.

### Contact

Minimal accessible contact page: brand, support email, app store links, response process if accurate, privacy-request route. No form backend required. If adding a form later, implement real delivery, validation, abuse prevention, privacy disclosures, and error handling.

### Legal review gate

Website is not production-approved unless privacy/cookie, terms, company identity, and store disclosures are reviewed against the **currently published mobile builds**, not solely repository code.

---

## 17. RECOMMENDED SOURCE TREE

```text
voice-rep-counter-web/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── Custom-Workout-Sessions.webp
│   │   │   ├── Desktop-Hero-Background.webp
│   │   │   ├── Main-App-Mockup.webp
│   │   │   ├── Rest-Timer.webp
│   │   │   ├── Social-Sharing-Image.webp
│   │   │   ├── Voice-Rep-Counting.webp
│   │   │   └── og-cover.jpg
│   │   └── brand/               # Verified official logo, icons, badges
│   ├── robots.txt
│   └── favicon.svg              # Only after verified logo available
├── src/
│   ├── components/
│   │   ├── SEOHead.astro
│   │   ├── Header.astro
│   │   ├── MobileMenu.astro
│   │   ├── LocaleSwitcher.astro
│   │   ├── Footer.astro
│   │   ├── StoreBadges.astro
│   │   ├── Hero.astro
│   │   ├── FeatureSpotlight.astro
│   │   ├── FeatureCard.astro
│   │   ├── Benefits.astro
│   │   ├── HowItWorksSteps.astro
│   │   ├── ExerciseGrid.astro
│   │   ├── FAQList.astro
│   │   ├── Breadcrumbs.astro
│   │   └── FinalCTA.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── ContentLayout.astro
│   │   └── ArticleLayout.astro
│   ├── content/
│   │   ├── blog/                # EN/IT Markdown/MDX; approved only
│   │   └── config.ts            # Content collections schema
│   ├── data/
│   │   ├── app.ts               # Official store URLs and facts
│   │   ├── features.ts          # Verified feature copy
│   │   ├── navigation.ts
│   │   └── faq.ts
│   ├── i18n/
│   │   ├── en.ts
│   │   ├── it.ts
│   │   └── helpers.ts
│   ├── pages/
│   │   ├── index.astro
│   │   ├── features/...
│   │   ├── how-it-works/index.astro
│   │   ├── exercises/...
│   │   ├── blog/...
│   │   ├── faq/index.astro
│   │   ├── privacy/index.astro
│   │   ├── terms/index.astro
│   │   ├── contact/index.astro
│   │   ├── it/                  # EN counterpart pages and translations
│   │   └── 404.astro
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       ├── seo.ts
│       ├── hreflang.ts
│       └── routes.ts
├── scripts/
│   └── verify-build.mjs        # Optional route/link/meta checks
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── astro.config.mjs
├── package.json
├── package-lock.json
├── tsconfig.json
├── .dockerignore
├── .gitignore
├── README.md
└── DEPLOYMENT.md
```

This is architectural guidance. Adapt minor paths if Astro 7 content-collection configuration differs, but preserve the separate concern boundaries and test actual generated routes.

---

## 18. SEO HEAD AND URL HELPERS

Implement a reusable `SEOHead.astro` receiving typed props:

- `title`, `description`, `canonicalPath`, `locale`, `image` (default validated `og-cover.jpg`), `imageAlt`.
- Optional `noindex`, `article`, `publishedTime`, `modifiedTime`, `translationKey`, and JSON-LD data.
- Site URL controlled by `https://voicerepcounter.com` from config, not a concatenation bug.
- Canonical absolute, OG URL absolute, `twitter:card=summary_large_image`.
- Per-language `hreflang` only for published translated equivalents.
- Proper `og:locale` (`en_US` vs `it_IT`), `og:site_name`, social image type/size when known.
- Add optional `apple-itunes-app` smart banner **only if verified app ID and correct implementation are desired**.

Place all store links in a single typed config:

```ts
export const appLinks = {
  googlePlay: 'https://play.google.com/store/apps/details?id=com.voiceRepCounter.app',
  appStore: 'https://apps.apple.com/it/app/voice-rep-counter-coach/id6757661700',
} as const;
```

Verify live final destinations. Prefer language-neutral App Store deep links if tested (avoid hard-coded Italian storefront UX for every visitor if undesired). Every store badge should use the same source of truth and consistent click analytics if enabled.

---

## 19. VPS / DOCKER / NGINX PRODUCTION DEPLOYMENT

### Architecture

`DNS A/AAAA -> Existing VPS public reverse proxy (HTTPS) -> 127.0.0.1:8085 -> Docker static Nginx -> Astro dist/`

**Never bind a second container to VPS ports 80/443 if those are in use by other websites.** Reuse the host's existing reverse proxy (Nginx Proxy Manager, Nginx, Caddy, Traefik or equivalent). Obtain the actual current configuration before touching it.

### Example Dockerfile (production static site)

```dockerfile
FROM node:24-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/ /usr/share/nginx/html/
EXPOSE 80
```

Use a compatible pinned Node LTS and lockfile. Add `.dockerignore` excluding `node_modules/`, `.git/`, `.astro/`, `dist/`, `.env*`, secrets, and local temp files; do not include secrets in the build context.

### Example docker-compose.yml

```yaml
services:
  voice-rep-counter-site:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: voice-rep-counter-site
    restart: unless-stopped
    ports:
      - "127.0.0.1:8085:80"
    healthcheck:
      test: ["CMD", "wget", "-q", "-O", "/dev/null", "http://127.0.0.1/"]
      interval: 30s
      timeout: 5s
      retries: 3
```

If the reverse proxy is itself in Docker and cannot reach loopback-bound containers, use an explicit shared internal Docker network instead of exposing the site publicly. Don't implement both topologies blindly.

### Example nginx.conf inside static container

```nginx
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    # Astro trailingSlash: 'always' produces directory index pages.
    location / {
        try_files $uri $uri/ =404;
    }

    location /_astro/ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    location ~* \.(?:webp|avif|png|jpe?g|svg|ico)$ {
        expires 30d;
        add_header Cache-Control "public, max-age=2592000";
    }

    # HTML should revalidate after deploy; do not apply long immutable caching to HTML.
    location ~* \.html$ {
        add_header Cache-Control "public, max-age=0, must-revalidate";
    }

    gzip on;
    gzip_vary on;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml;
}
```

**IMPORTANT for Astro static 404:** Ensure unknown routes return a real 404 status **and a useful custom 404 body**. Stock Nginx may return its own default 404 unless `error_page 404 /404.html;` is configured (and the built file actually exists). Validate both body and status and add `error_page` if appropriate. Do not use SPA fallback to homepage for unknown URLs.

### Domain and HTTPS

- A record `@` → actual VPS public IPv4.
- `www` CNAME → root, or A record as appropriate.
- Verify and update any existing AAAA record only if VPS IPv6 configured correctly.
- Use one canonical host (`https://voicerepcounter.com/`); 301 redirect from HTTP and www.
- Ensure TLS renewal, HTTP/2 or HTTP/3 where supported, proper proxy headers and security headers.
- Do not publicly expose Node development port, `8085`, or administrative dashboards.

### Deployment sequence

```bash
npm ci
npm run build
# Verify dist/ and local static preview first

docker compose build
docker compose up -d

docker compose ps
curl -I http://127.0.0.1:8085/
# Only after reverse proxy & DNS are configured:
curl -I https://voicerepcounter.com/
```

Protect existing website rankings and uptime: capture old route list and redirects, stage deployment first, back up existing site, ensure legal/contact pages work, then swap proxy route after checks. Avoid changing the root domain before the new site is production ready.

### Operational

- Use Git repository, branch-based changes, reviewed PRs where feasible.
- Back up code and deployment configuration; static site content is in git, not a DB.
- Provide rollback procedure to prior image/tag or static build.
- Pin image/library versions, run dependency/security updates, minimize Docker privileges.
- Monitor HTTP uptime, logs, certificate renewals, 404 rates, Google Search Console indexing.

---

## 20. PERFORMANCE BUDGET & QUALITY TARGETS

Targets for mobile on a realistic network/device (not guaranteed):

- LCP ≤ **2.5 seconds** at 75th percentile where measured.
- CLS ≤ **0.1**.
- INP ≤ **200 ms**.
- Lighthouse mobile Performance and SEO goals ≥ 90 where practical; don't report an unmeasured score.
- Hero image compressed and responsive; app mockup not 4–10 MB in production.
- Most content pages should ship little or no client JavaScript.
- Use system fonts until actual licensed brand fonts are ready, or self-host optimized WOFF2.
- Avoid multiple heavy tracking/animation scripts or giant icon bundles.
- Do not preload all six images; only the most critical first-viewport resource.
- Load images below fold lazily and reserve dimensions to prevent layout shift.
- Do not use an enormous background image for mobile if a smaller cropped derivation can be made without breaking composition.

---

## 21. WORKING SITE BEHAVIOR / ACCEPTANCE CRITERIA

### Functional

- All navigation items and CTA badges go to valid destinations.
- No empty placeholder features, “Coming Soon” links, or dummy buttons on published pages.
- EN/IT locale switching works per route and never lands on a 404.
- Mobile nav opens/closes, supports escape key and keyboard focus.
- FAQ questions expand/collapse without inaccessible keyboard traps.
- Contact email links use `mailto:contact@codeneir.com` after verification.
- Content sections align with intended width; images are not clipped or distorted.
- 404 page is styled and a real HTTP 404.

### SEO

- All H1/H2, descriptions, FAQ and links present in `curl`-retrieved HTML (not only post-JS DOM).
- `<title>`, description, canonical, OG image, language and hreflang correct for each locale.
- No canonical to the wrong language; no orphan translated pages.
- Sitemap exists and contains only published pages.
- Robots file exists and references sitemap.
- Breadcrumbs and JSON-LD pass validation; no invented review properties.
- Existing old indexed paths redirect or remain accessible as appropriate.

### Security and legal

- HTTPS valid; no mixed-content assets.
- Legal/contact pages work.
- Privacy claims match actual app SDK data handling and consent flow after release verification.
- No accidental `.env`, `Dockerfile`, source map secrets, or API tokens publicly exposed.
- Security headers (including sensible CSP) implemented after testing third-party store badges and needed scripts. Avoid a CSP so strict it breaks site; validate actual deployed behavior.

### Responsive / accessibility

Test in browsers/devices or emulator widths: **360, 390, 768, 1024, 1440, 1920**.

- No horizontal overflow.
- Hero text remains readable on athlete background, buttons visible on mobile.
- Touch targets comfortable; text respects zoom.
- Real focus indicators, logical reading order, reduced-motion support.
- Alt text meaningful; no duplicate decorative alt.

### Build

- `npm run build` completes successfully.
- TypeScript check passes (add `astro check` in scripts and CI if installed).
- Image paths verified as HTTP 200 with actual MIME types.
- `docker compose config`, `docker compose build`, and container health pass locally.
- Production reverse proxy and public domain checks are documented even if no VPS credentials are available to the coding agent.

---

## 22. IMPLEMENTATION PHASES — EXECUTE IN ORDER

### Phase 1 — Foundation

- Create Astro project with Tailwind 4, TS, MDX, sitemap.
- Setup branding design tokens, global layout, header/footer, SEO component.
- Copy the 7 exact image assets to `public/assets/images/` and verify them.
- Set config for domain, store URLs, locales.

**Output:** working static layout and successful build.

### Phase 2 — Homepage

- Implement full English homepage with all specified sections and the exact six visual placements (plus OG fallback asset).
- Implement Italian homepage, real locale links.
- Proper wide layout, premium mobile adaptation.

**Output:** complete responsive, indexable bilingual homepage.

### Phase 3 — Interior pages

- Features overview + distinct feature detail pages in both languages.
- How It Works, FAQ, Contact, Privacy, Terms.
- Exercises directory and initial genuinely useful use-case pages.

**Output:** no dead links or thin placeholders.

### Phase 4 — Editorial content & SEO

- Setup content collections, English/Italian blogging structure.
- Publish only approved substantive articles.
- Metadata, canonical, hreflang, sitemap, structured data, social images, breadcrumbs, 404.

**Output:** validated SEO technical baseline.

### Phase 5 — Performance and audit

- Compress images and implement responsive size variants.
- Accessibility, keyboard, reduced motion, slow device/mobile QA.
- Confirm app claims against source report; verify store URLs and public privacy terms.

**Output:** passing build, no critical broken UX or inaccurate claims.

### Phase 6 — Production VPS deployment

- Dockerfile, Nginx config, Docker Compose, deployment/rollback docs.
- Stage privately before DNS/proxy swap.
- Integrate with pre-existing reverse proxy without disturbing other services.

**Output:** ready-to-deploy production site (actual public deployment only if authorized and access supplied).

---

## 23. DELIVERABLES THAT THE CODING AGENT MUST PROVIDE

1. Complete new Astro project with source code and correct directories.
2. All approved, useful EN/IT pages and working navigation.
3. Seven supplied images correctly referenced, optimized where appropriate; no missing-image placeholders.
4. Real app-brand identity if official logo files are available.
5. SEO metadata, sitemap, robots, bilingual canonical/hreflang logic, truthful JSON-LD.
6. Real Google Play / App Store links and accessible download CTAs.
7. Privacy/terms/contact pages (with human-review TODO for unresolved legal facts).
8. Accessible responsive layouts and premium animation restraint.
9. Dockerfile, docker-compose.yml, nginx.conf, `.dockerignore`.
10. Clear `README.md` for local development.
11. `DEPLOYMENT.md` for Ubuntu VPS, existing proxy, HTTPS, rollback, test commands.
12. Final quality report: implemented routes, verified checks, known issues, pending legal/release verification, no invented scores.

**Important:** If the developer has not provided VPS credentials or domain access, implement and test everything locally and provide deployment instructions; do not claim it is already live.

---

## 24. FINAL RELEASE GATE (NO EXCEPTIONS)

- [ ] Correct app description: timed voice pacing, **not** automatic physical rep detection.
- [ ] Accurate: free with ads, Firebase SDKs; **no** “no ads/no tracking” claims.
- [ ] All seven image paths resolve; OG primary image validated.
- [ ] EN and IT pages fully translated (not locale shells with English text).
- [ ] Correct smartphone artwork disclaimer if needed; authentic real screenshots where available.
- [ ] Homepage uses 1640px-wide content grid instead of excessive left/right empty space.
- [ ] Working store badges, footer, privacy, terms, contact, routes and 404.
- [ ] Robots, sitemap, canonical, hreflang, metadata and semantic HTML verified.
- [ ] Nginx static serving works; no backend required and no port conflicts with other VPS applications.
- [ ] Tests run and results reported honestly.
- [ ] Legal/privacy and current app store metadata reviewed before public release.

---

## 25. REFERENCES FOR ENGINEERING VERIFICATION

- Astro 7 release: https://astro.build/blog/astro-7/
- Astro deployment docs: https://docs.astro.build/en/guides/deploy/
- Astro internationalization docs: https://docs.astro.build/en/guides/internationalization/
- Astro Tailwind docs: https://docs.astro.build/en/guides/styling/
- Tailwind 4 Astro guide: https://tailwindcss.com/docs/installation/framework-guides/astro
- Google multilingual SEO: https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
- Google JavaScript SEO: https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- Google Software App schema: https://developers.google.com/search/docs/appearance/structured-data/software-app
- Google Play: https://play.google.com/store/apps/details?id=com.voiceRepCounter.app
- Apple App Store: https://apps.apple.com/it/app/voice-rep-counter-coach/id6757661700

**END OF IMPLEMENTATION SPECIFICATION. Build, test, and deliver the site—do not respond with another generic plan.**
