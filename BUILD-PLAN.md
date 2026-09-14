# MASTER BUILD PLAN
## JIHAD MAASARANI — CINEMATIC PORTFOLIO
### Creative Brief + Complete Implementation Specification for Claude Code

**Version:** 1.0
**Date:** September 14, 2026
**Project root:** `C:\Users\maasa\Desktop\Portfolio\Website`
**Build type:** Static site — `index.html`, `style.css`, `script.js`, `/assets`
**Target standard:** Awwwards Site of the Day / FWA-tier cinematic scroll storytelling

---

# 1. WEBSITE OVERVIEW

## 1.1 What this is

A single-page, scroll-driven cinematic portfolio for **Jihad Maasarani** — Automation & AI Systems Engineer and Technology Consultant at EY. The site is a hiring instrument disguised as a film. Its job is to make a hiring manager, engineering lead, or recruiting partner feel, within eight seconds, that they are looking at someone operating a level above the rest of the stack of candidates on their desk.

This is not a resume with a dark theme. It is a **three-act film** with a resume embedded inside it.

## 1.2 Primary objective

Convert a scroll into a conversation. Every section is engineered to move a visitor one step closer to a single terminal action: **sending an email or opening the LinkedIn profile.**

## 1.3 Audience (ranked)

| Priority | Audience | What they need in the first 8 seconds |
|---|---|---|
| 1 | Hiring managers & engineering leads (AI/automation/platform roles) | Proof of depth, not breadth. That he ships systems, not demos. |
| 2 | Technical recruiters & talent partners | Fast, scannable credibility: EY, AUB 3.86, ServiceNow CSA/CAD, Oracle Java. |
| 3 | Consulting partners & enterprise clients | That he has stood in front of national-scale government stakeholders and delivered. |
| 4 | Founders needing automation built | That he can turn a manual process into a self-running system. |

## 1.4 Success metrics

- Visitor reaches the Final CTA section (scroll depth > 85%).
- Email click or LinkedIn click.
- Time on page > 90 seconds — the film has to be worth watching.
- Zero layout shift, sub-2.5s LCP, 60fps scroll on a mid-range laptop.

## 1.5 The one-line pitch of the site itself

> *A portfolio that behaves like the systems it describes — precise, automated, and impossible to look away from.*

---

# 2. CORE POSITIONING

## 2.1 The positioning statement

**Jihad Maasarani builds systems that run without him.**

Most engineers build software. Jihad builds the layer above software — the automation and agent systems that generate, test, repair, and operate other software. He does this in two arenas simultaneously: inside the enterprise (ServiceNow platform automation for national government and university programs at EY) and at the frontier (self-built AI agents that turn API documentation into tested production code, and that investigate and repair live database integrity).

That dual-arena positioning is the entire differentiator. Enterprise consultants rarely write agents. Agent builders rarely survive a government rollout. He does both.

## 2.2 Positioning pillars

**1. Enterprise-hardened.**
Business rule automation for the National Center for Government Resource System — a Saudi national government entity. Demand management automation for Qatar University's Strategic Portfolio Management rollout. This is not a side project. This is production, under audit, at national scale.

**2. Frontier-native.**
Claude Code as a daily primary development environment. An API Integration Agent that reads docs, writes connectors, runs sandbox tests, and self-corrects from its own errors — with rate limits, retries, logging, and approval gates before anything ships. A Data Quality & Repair Assistant that proposes explained corrections with change previews, audit logs, and transactional rollback.

**3. Engineering discipline.**
Unit tests around the calculation logic. CI/CD pipelines so every change is validated. Containerized, TLS-secured deployment. Approval gates and rollback on every agent that touches production. **The distinguishing trait is not that he automates things — it is that he automates things safely.**

## 2.3 The core message hierarchy

```
LEVEL 1  (Hero)          I build systems that run themselves.
LEVEL 2  (Mission)       Manual work is a bug. I ship the patch.
LEVEL 3  (Pillars)       Agents · Enterprise Automation · Full-Stack Delivery
LEVEL 4  (Proof)         EY · NCGR · Qatar University · Murex · AUB 3.86
LEVEL 5  (CTA)           Let's build something that runs itself.
```

## 2.4 Messaging rules

- **Never** say "passionate," "results-driven," "dynamic," or "self-motivated."
- **Always** lead with the system, then the outcome, then the guardrail.
- Numbers over adjectives. `3.86` beats "excellent academic record." `99%` beats "high accuracy."
- Short sentences. Engineering voice. Confidence without volume.
- Every claim on the site must be traceable to the CV. No invention, no inflation.

---

# 3. BRAND PERSONALITY

## 3.1 Archetype

**The Architect** — with a trace of **The Magician**.

Calm, exacting, structurally minded. Builds the thing that builds the thing. Speaks quietly because the work is loud. Not a hype account. Not a motivational founder. An engineer with taste.

## 3.2 Personality dials

| Attribute | Setting |
|---|---|
| Formality | 7/10 — professional, never stiff |
| Warmth | 5/10 — human, but composed |
| Confidence | 9/10 — stated as fact, never argued |
| Playfulness | 2/10 — precision is the joke |
| Technical density | 8/10 — respects the reader's intelligence |
| Volume | 3/10 — whispers, never shouts |

## 3.3 Voice

**We sound like:** the release notes of a system that just quietly fixed itself.
**We do not sound like:** a LinkedIn thought-leader, a bootcamp grad, or an agency pitch deck.

**Voice samples for copy throughout the site:**

- "The process took a person. Now it takes a trigger."
- "Agents that write code, test it in a sandbox, and correct themselves before anything reaches production."
- "Approval gates. Audit logs. Transactional rollback. Automation you can actually trust in production."
- "National government scale. Under audit. Shipped."

## 3.4 Brand keywords

`precision` · `automation` · `agentic` · `enterprise-grade` · `self-correcting` · `production` · `guardrails` · `systems`

---

# 4. VISUAL DIRECTION

## 4.1 The concept: **VIOLET MACHINE**

A near-black void lit by a single violet light source, as if the viewer is standing inside a server room at 3am with one indigo status LED burning. Warmth enters only where a human does — the amber of the reference photograph's office lighting bleeds into the frame whenever Jihad appears on screen. Cold machine violet, warm human amber. That tension is the entire visual thesis: **engineered systems, built by a person.**

## 4.2 Why violet

Violet sits exactly between the blue of enterprise trust and the magenta of creative frontier work — which is precisely the position being claimed. It is also the least-used color in the enterprise-consulting visual landscape, which makes it memorable against a field of navy-blue competitors. Paired with the near-black void and a single amber accent, it reads *premium*, not *gamer*.

## 4.3 Visual pillars

1. **Void-first.** Black is the dominant surface. Content emerges from darkness; it is never placed on top of it.
2. **One light source.** Violet glow, always directional, always falling off. Nothing is evenly lit.
3. **Huge typography as architecture.** Type is not on the page — type *is* the page. Display sizes up to 13rem / 11vw.
4. **Grain over everything.** A constant fine film grain at 3–4% opacity unifies video, image, and CSS surfaces into one medium.
5. **Motion with mass.** Nothing snaps. Everything eases with weight, as if it has inertia.
6. **Negative space as luxury.** Generous vertical rhythm. Sections breathe. Emptiness signals confidence.

## 4.4 Anti-patterns (explicitly forbidden)

- No neon cyberpunk clutter, no Matrix rain, no circuit-board backgrounds.
- No glassmorphism cards floating on gradient blobs.
- No stock "AI brain" imagery or glowing humanoid robots.
- No bouncy/elastic easings. No spin animations. No confetti.
- No emoji in UI. No rounded-pill buttons with gradients.
- No more than two accent colors visible in any single viewport.

---

# 5. HIGGSFIELD SEEDANCE 2.0 — ASSET GENERATION

## 5.1 Identity reference

**All three clips must use the same identity reference image for character consistency:**

```
Source: Media/ChatGPT Image Sep 14, 2026, 11_24_30 AM.png
Rename and place at: assets/reference/jihad-identity-reference.png
```

**Reference description for the model:** Adult man, short dark brown hair, short trimmed beard, olive/light-tan complexion, wearing a matte black tailored blazer over a black crew-neck t-shirt, silver steel-bracelet wristwatch on the left wrist. Calm, composed expression. Executive presence, relaxed shoulders.

> **Rule:** Attach this image as the identity/character reference on **every** Seedance 2.0 generation. Do not re-describe the face in the prompt beyond the line above — let the reference carry the likeness.

## 5.2 Global generation settings

| Setting | Value |
|---|---|
| Model | Higgsfield **Seedance 2.0** |
| Resolution | **1080p** |
| Aspect ratio | **16:9** |
| Duration | **8–12 seconds** per clip |
| Frame rate | 24fps (cinematic) |
| Motion | Slow, continuous, single-move camera. No cuts inside a clip. |
| Audio | None — all clips are silent; the site never plays audio |
| Identity reference | `assets/reference/jihad-identity-reference.png` on all three |

## 5.3 Global style suffix

**Append this exact block to all three prompts** so the three clips grade as one film:

```
Shot on ARRI Alexa, 35mm anamorphic lens, shallow depth of field, T1.8.
Near-black environment, single violet-indigo key light with warm amber
practical fill. Volumetric haze, gentle lens bloom, subtle 35mm film grain.
Cinematic color grade: crushed blacks, violet highlights, warm amber skin
tones. Slow deliberate camera movement, no cuts, no text, no logos, no
on-screen graphics, no captions. Photorealistic, premium, understated.
Calm confident presence — not a motivational speaker, not a stock corporate
video.
```

## 5.4 Continuity decision

**Three separate shots — graded as one film.**

Three distinct scenes are correct for a portfolio, because each one carries a different message (identity → craft → scale), and each anchors a different act of the scroll. But they share one lighting design, one lens, one color grade, and one wardrobe, so that moving between them feels like moving between shots in the same movie rather than between three unrelated stock clips. The site then uses matched **cross-dissolve scroll transitions** between acts, which produces the seamless-flow feeling without sacrificing narrative variety.

## 5.5 Output handling

| Clip | File | Poster frame | Usage |
|---|---|---|---|
| 01 | `assets/video/scene-01-hero.mp4` | `assets/video/poster-01.jpg` | Hero — autoplay loop, muted |
| 02 | `assets/video/scene-02-architect.mp4` | `assets/video/poster-02.jpg` | Pillars — scroll-scrubbed |
| 03 | `assets/video/scene-03-scale.mp4` | `assets/video/poster-03.jpg` | Final CTA — autoplay loop, muted |

**Encoding (run after generation):**

Scenes 01 and 03 play normally, so a default keyframe interval is fine:

```bash
ffmpeg -i input.mp4 -c:v libx264 -profile:v high -crf 24 -preset slow -pix_fmt yuv420p -an -movflags +faststart output.mp4
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 34 -b:v 0 -row-mt 1 -an output.webm
ffmpeg -i input.mp4 -frames:v 1 -q:v 3 poster.jpg
```

**Scene 02 is different and must be encoded differently.** It is scroll-scrubbed, so
the browser seeks it to an arbitrary time on every frame of scroll. A default GOP
(~250 frames) forces the decoder back to a distant keyframe on each seek, which reads
as a stuttering, laggy scrub. It needs a dense keyframe interval — one every 6 frames
(0.25s at 24fps). Dense keyframes inflate the file, so this clip is delivered at 720p:
it sits at `opacity: .45` behind a scrim and body copy, where 1080p is invisible spend.

```bash
ffmpeg -i scene-02.mp4 -vf scale=1280:720 -c:v libx264 -profile:v high -crf 24   -preset slow -g 6 -keyint_min 6 -sc_threshold 0 -pix_fmt yuv420p -an   -movflags +faststart scene-02-architect.mp4
ffmpeg -i scene-02.mp4 -vf scale=1280:720 -c:v libvpx-vp9 -crf 34 -b:v 0   -g 6 -keyint_min 6 -row-mt 1 -an scene-02-architect.webm
```

Target: **under 4 MB per clip.** Serve `.webm` first with `.mp4` fallback. Poster images
are mandatory — they render before the video decodes and eliminate the black flash.

> **Hosting requirement:** the scrub depends on the host answering **HTTP Range
> requests** (`206 Partial Content`). Without them a `<video>` reports an empty
> `seekable` range and scroll-scrubbing silently does nothing while every other part of
> the page still looks correct. Netlify, Vercel, Cloudflare Pages, S3/CloudFront and
> Hostinger all support Range by default; Python's `http.server` does **not**, which is
> why `.claude/devserver.py` implements it for local work.

---

# 6. THE THREE CINEMATIC SCENES

## SCENE 01 — **THE OPERATOR**
*Hero. Act I. Identity.*

**Message:** This is a person who is completely still while everything around him moves.

**Prompt:**

```
A man sits alone at a wide dark walnut desk in a vast black void. He wears a
matte black tailored blazer over a black crew-neck t-shirt, a silver steel
wristwatch on his left wrist. His hands are loosely clasped on the desk. He is
still, composed, looking directly toward camera with quiet confidence.

Behind and around him, faint violet-indigo light panels hang in the darkness at
varying depths, softly out of focus, pulsing almost imperceptibly like status
indicators on distant hardware. Thin threads of violet light drift slowly
through the volumetric haze between him and the camera.

The camera performs one single slow dolly push-in from a wide shot to a
medium-close shot over the full duration, drifting almost imperceptibly to the
left as it moves. A warm amber practical light sits off-frame to his right,
rim-lighting his shoulder and the side of his face in warm gold against the
violet dark.

[APPEND GLOBAL STYLE SUFFIX]
```

**Duration:** 10s · **Loop:** yes, seamless (hold the final framing for the last 12 frames to ease the loop point)

---

## SCENE 02 — **THE ARCHITECT**
*Act II. Craft.*

**Message:** He does not use the tools. He builds the tools.

**Prompt:**

```
The same man stands in a black void, seen from a three-quarter rear angle,
facing away from camera into the darkness. He wears the same matte black
blazer over a black t-shirt. He raises his right hand slowly and deliberately.

Suspended in the void in front of him is a vast architecture of translucent
violet-indigo panels and thin connecting lines — a floating system diagram
several stories tall, layered in depth, nodes glowing softly, lines of light
travelling slowly along the connections between them. The panels are abstract
and geometric, not readable text, softly defocused in the far layers.

As his hand rises, the entire structure slowly rotates and reorganizes around
him, panels sliding into new alignment, the light travelling faster along the
connections. The camera orbits slowly to the left around him, revealing the
scale of the structure as it turns.

Warm amber light falls on his shoulders and the back of his head from a source
behind camera, isolating the human figure in warmth against the cold violet
machine architecture.

[APPEND GLOBAL STYLE SUFFIX]
```

**Duration:** 12s · **Loop:** no — this clip is **scroll-scrubbed**, played forward as the user scrolls the Pillars section and reversed if they scroll back up

---

## SCENE 03 — **THE SCALE**
*Act IV. Consequence.*

**Message:** The things he builds run at national scale, and he can stand inside them.

**Prompt:**

```
The same man walks slowly toward camera down the centre of an immense dark
corridor. He wears the same matte black blazer over a black t-shirt, hands
relaxed at his sides, unhurried, calm.

The corridor walls on both sides are built entirely of tall, softly glowing
violet-indigo panels stretching far into the distance and high above him,
displaying abstract flowing data patterns and slow-moving geometric light —
never readable text. The panels dim slightly as he passes each one, then glow
brighter behind him in his wake, as if the system is acknowledging him.

The floor is polished black and reflects the violet light in long vertical
streaks. Volumetric haze fills the corridor. A single warm amber light source
hangs far behind him at the end of the corridor, throwing a warm rim around
his silhouette.

The camera tracks slowly backward at his exact walking pace, holding him at
the centre of frame. In the final two seconds the camera slows to a stop and
he stops with it, standing in a relaxed, grounded hero pose, looking directly
into the lens.

[APPEND GLOBAL STYLE SUFFIX]
```

**Duration:** 12s · **Loop:** yes, with a slow 1s cross-fade from the final frame back to the first

---

# 7. WEBSITE STRUCTURE

## 7.1 The four-act architecture

```
┌─ PRELOADER ──────────────── Counter 000 → 100, violet line wipe
│
├─ ACT I · IDENTITY
│  ├─ 01  HERO                 Scene 01 video · kinetic headline
│  └─ 02  STATS STRIP          Animated odometer counters
│
├─ ACT II · CRAFT
│  ├─ 03  MISSION              Pinned kinetic manifesto
│  ├─ 04  THREE PILLARS        Scene 02 scrubbed · pinned horizontal
│  └─ 05  STORY                Vertical timeline, 2018 → today
│
├─ ACT III · PROOF
│  ├─ 06  CAPABILITIES         What he builds / how to engage him
│  ├─ 07  FEATURED WORK        Case-study grid, generated previews
│  └─ 08  CREDENTIALS          Certifications + education
│
└─ ACT IV · INVITATION
   ├─ 09  FINAL CTA            Scene 03 video · huge type · email
   └─ 10  FOOTER               Links, contact, colophon
```

## 7.2 Scroll length

Approximately **900vh total** on desktop. Every section earns its height — if a section does not change state as you scroll through it, it is too tall.

## 7.3 Navigation

A minimal fixed header. Left: `JM` monogram mark. Right: a single text link `Contact` and a thin scroll-progress bar pinned to the very top edge of the viewport (1px, violet, `scaleX` driven by scroll). No hamburger, no mega-menu. On scroll-down the header hides; on scroll-up it returns, with a `backdrop-filter: blur(24px)` panel behind it.

A vertical **section index** sits pinned to the right edge on desktop: small numerals `01`–`10`, the active one expanding into its section name with a violet underline. Hidden below 1024px.

---

# 8. SECTION 01 — HERO

## 8.1 Intent

Eight seconds to establish: *this person operates at a level you were not expecting.*

## 8.2 Layout

Full viewport (`100svh`). Scene 01 video fills the frame as a background layer at `object-fit: cover`, with a radial vignette and a `linear-gradient(180deg, rgba(4,4,10,.35) 0%, rgba(4,4,10,.10) 45%, rgba(4,4,10,.95) 100%)` scrim so the bottom of the frame resolves into pure black and the next section emerges from it.

The headline is anchored to the lower-left third. Type is enormous and set in three staggered lines that break asymmetrically.

## 8.3 Copy

```
KICKER (top-left, under header):
    AUTOMATION & AI SYSTEMS ENGINEER
    EY · BEIRUT

HEADLINE (lower-left, display, clamp up to 11vw):
    I BUILD
    SYSTEMS THAT
    RUN THEMSELVES.

SUBLINE (below headline, max 46ch):
    AI agents that write, test, and repair production code — and enterprise
    automation running at national government scale.

CTA ROW:
    [ START A CONVERSATION → ]      [ VIEW THE WORK ↓ ]

BOTTOM-RIGHT MICRO-LABEL:
    SCROLL      (animated 1px vertical line, 24px, pulsing downward)
```

## 8.4 Motion

- **Entrance:** after the preloader completes, headline lines rise from `y: 110%` behind an `overflow: hidden` mask, staggered 0.09s, `power4.out`, 1.2s duration. The kicker fades in at 0.4s. The CTA row fades and rises at 0.9s.
- **Ambient:** the headline has an extremely subtle parallax tied to cursor position — `±8px` max, lerped at 0.06, so it feels like it has weight rather than tracking the mouse.
- **On scroll out:** the video layer scales from `1` to `1.12` and fades to `0.25` opacity while the headline translates up `-18%` and blurs `0 → 6px`. The next section slides over the top of it. This is the Act I → Act II dissolve.

## 8.5 Fallback

If the video fails to load or `prefers-reduced-motion` is set, `poster-01.jpg` is displayed as a static background with a slow CSS `scale(1 → 1.06)` over 20s — the Ken Burns fallback. The site must never show a black hole where a video should be.

---

# 9. SECTION 02 — ANIMATED STATS STRIP

## 9.1 Intent

Instant, scannable, numeric credibility immediately after the emotional hit of the hero. This is the section a recruiter screenshots.

## 9.2 Layout

A full-width band with a 1px violet-tinted hairline border on top and bottom. Six stats on desktop in a single row, 3×2 on tablet, 2×3 on mobile. Each cell: giant number, thin rule, small uppercase mono label.

## 9.3 The stats

| Number | Label |
|---|---|
| `3.86` | GPA · AUB Computer Science · Dean's Honor List |
| `100%` | Full academic scholarship |
| `04` | Professional certifications — ServiceNow CSA, CAD, Oracle Java OCP, AWS AI |
| `02` | National-scale enterprise programs — NCGR, Qatar University |
| `99%` | Accuracy — computer vision classification models |
| `02` | FLL Championship titles · 2018, 2019 |

## 9.4 Motion

- Numbers animate as **odometers**, not as fades. Each digit is a vertical strip of `0–9` that translates on the Y axis into position, staggered per digit left-to-right by 0.05s. Duration 1.6s, `expo.out`.
- Triggered once at `start: "top 78%"`, `once: true`.
- The hairline borders draw in from the left, `scaleX: 0 → 1`, `transformOrigin: left`, 1.2s, before the numbers move.
- On hover, a stat cell lifts `-4px` and its number shifts to the violet accent color over 0.4s.

---

# 10. SECTION 03 — MISSION

## 10.1 Intent

The philosophical spine. One idea, stated with total conviction, in type large enough to be uncomfortable.

## 10.2 Layout

Pinned full-viewport section on black. No image, no video, no decoration. Only type, centered, with a single violet glow behind it that grows in intensity as the section scrubs.

## 10.3 Copy

```
EYEBROW:
    THE MISSION

MANIFESTO (kinetic, word-by-word reveal, display size):

    MANUAL WORK
    IS A BUG.

    I SHIP
    THE PATCH.

BODY (fades in last, max 58ch, muted):
    Every organisation runs on processes a person has to remember to do.
    Intake handled by hand. Budgets recalculated in a spreadsheet. Data
    corrected by whoever noticed first. I replace those with systems that
    run on a trigger — with approval gates, audit logs, and rollback, so
    the automation is something you can actually trust in production.
```

## 10.4 Motion — kinetic typography

This is the site's signature moment.

- The section pins for `250vh` of scroll.
- Words of the manifesto are individually wrapped in `<span class="word">` inside `<span class="word-mask">`.
- As the user scrubs, words animate in sequentially: `y: 100% → 0`, `opacity: 0 → 1`, `filter: blur(8px) → blur(0)`, `rotateX: 45deg → 0`, with `perspective: 800px` on the parent so the rotation reads as depth.
- The words `BUG` and `PATCH` receive the violet accent color and a soft violet text-shadow that intensifies as they settle.
- Behind the type, a radial violet glow scales from `0.6 → 1.4` and fades `0 → 0.35` across the pin, then back down.
- The body paragraph fades in only at `progress > 0.72`.
- On exit, the entire type block scales `1 → 0.94` and fades — the section "breathes out."

---

# 11. SECTION 04 — THREE PILLARS

## 11.1 Intent

The core capability statement. Three domains, one engineer. Scene 02 plays underneath, scrubbed to the scroll, so the floating architecture in the video reorganizes exactly as the user moves between pillars.

## 11.2 Layout

Pinned section, `320vh` of scroll. Scene 02 sits as a fixed background layer at `opacity: 0.45` with a black scrim. The three pillars translate horizontally across the pinned viewport — pillar 01 enters from the right, centers, exits left, and so on. A large index numeral `01 / 02 / 03` sits in the top-right, cross-fading between pillars.

## 11.3 Content

### PILLAR 01 — **AI AGENTS & AGENTIC SYSTEMS**

> **Agents that write code, test it, and correct themselves.**
>
> I build AI agents that do real engineering work under real guardrails. The **API Integration Agent** reads API documentation, identifies endpoints, auth, and schemas, generates connector code, runs it against a sandbox, and self-corrects from its own errors — with rate limits, retries, logging, and an approval gate before anything ships. The **Data Quality & Repair Assistant** investigates database integrity issues through SQL checks and an agent workflow, then proposes explained corrections with change previews, audit logs, and transactional rollback.
>
> `Claude Code` `Agentic workflows` `REST APIs` `Sandbox testing` `SQL` `n8n`

### PILLAR 02 — **ENTERPRISE AUTOMATION**

> **Workflow automation at national government scale.**
>
> At EY, I own automation of rollout workflows across multiple participating entities on the ServiceNow App Engine platform for the **National Center for Government Resource System** — a Saudi national government entity — designing business rule automation end to end and building the front-end UI layer, while advising on platform architecture and on-premise deployment strategy. I configured demand management automation and business rules for **Qatar University's** Strategic Portfolio Management implementation, and replaced a manual request intake process with a working request-management application that supported a client's decision-making.
>
> `ServiceNow App Engine` `ITSM` `SPM` `Business rules` `Solution architecture` `Agile/SDLC`

### PILLAR 03 — **FULL-STACK ENGINEERING**

> **Systems that survive production.**
>
> At **Murex** I built ITBF, a full-stack budgeting automation platform for asset managers in Angular, C#, .NET 9, PostgreSQL, and Docker — automating fiscal year budget calculations through a data pipeline driven by configurable growth and inflation inputs, and replacing manual reconciliation with real-time approval, payment, and balance visibility. Unit-tested at the calculation layer, shipped through CI/CD pipelines, deployed on containerized TLS-secured infrastructure.
>
> `Angular` `React` `C#/.NET 9` `FastAPI` `Spring Boot` `PostgreSQL` `MongoDB` `Docker` `CI/CD`

## 11.4 Motion

- `ScrollTrigger` pin with `scrub: 1`, horizontal `xPercent` translation of the pillar track.
- Each pillar's heading uses a per-character stagger on entry (`opacity`, `y: 30`, stagger `0.012`).
- The video's `currentTime` is mapped linearly to the pin's scroll progress. Use a `gsap.ticker` lerp toward the target time so the scrub is smooth rather than stepped.
- Tag chips fade in with a 0.03s stagger after the body copy.
- Index numeral cross-fades with a `blur(12px)` in/out.

**Mobile:** the pin is disabled. The three pillars stack vertically, each revealing with a standard fade-up. The video becomes a static poster with a slow scale.

---

# 12. SECTION 05 — STORY

## 12.1 Intent

Establish trajectory. The point is not biography — it is **slope**. Every entry is one step up in scale and stakes.

## 12.2 Layout

A centered vertical spine: a 1px violet line that draws downward as the section scrolls, with entries alternating left and right of it on desktop, and stacked to the right of it on mobile. A small violet node marks each entry and pulses once as it activates.

## 12.3 Copy

```
EYEBROW:  THE TRAJECTORY
HEADING:  FROM A ROBOTICS TABLE
          TO NATIONAL INFRASTRUCTURE.
```

| Year | Title | Body |
|---|---|---|
| **2018–2019** | It started with a robot that had to work | Two FIRST LEGO League Championship wins, a Best Mechanical Design award, and representing Lebanon at the 2019 Arab FLL Championship in Jordan. The lesson stuck: a system either runs on its own when the judges are watching, or it doesn't. |
| **2023–2025** | Computer Science, American University of Beirut | Full academic scholarship. GPA 3.86, Dean's Honor List. Machine learning, systems, and the habit of proving things rather than claiming them — computer vision classifiers reaching 99% accuracy on dog breeds and 90%+ on flower species through transfer learning. |
| **2025** | Building in public, under mentorship | A bilingual Lebanese news aggregation platform in React, FastAPI, and MongoDB — six news sources pulled through RSS, APIs, and scraping, with Google Gemini automating summarisation and dynamic filtering. Built with mentorship from a Meta software engineer. |
| **2025** | Murex — full-stack, in production | ITBF: a budgeting automation platform for asset managers. Angular, C#, .NET 9, PostgreSQL, Docker. CI/CD pipelines, unit tests on the calculation core, containerized TLS-secured deployment, Agile team, code review. The first time automation I wrote had money attached to it. |
| **2026** | EY — national scale | Technology consultant. Business rule automation across participating entities for a Saudi national government platform. Architecture advice on on-premise deployment. Demand management automation for Qatar University. Requirements to rollout, across concurrent engagements. |
| **Now** | Agents that build and repair systems | Claude Code as a daily development environment. The API Integration Agent and the Data Quality & Repair Assistant — self-correcting agents with approval gates, audit logs, and rollback. The same principle as the robot: it has to run without me in the room. |

## 12.4 Motion

- The spine line draws `scaleY: 0 → 1` with `scrub: true` over the full section.
- Each entry fades and translates in from its own side (`x: ±48px`) as its node reaches 70% viewport height.
- Nodes scale `0 → 1` with a violet `box-shadow` bloom that expands and fades once on activation.
- The year numeral is set large and semi-transparent behind each entry's title, translating at a slower parallax rate.

---

# 13. SECTION 06 — CAPABILITIES

*(the "Product / Service / Community" slot, reframed for a portfolio)*

## 13.1 Intent

Convert admiration into a concrete sense of "here is what I would hire him to do." This is the bridge between proof and CTA.

## 13.2 Layout

Three cards in one asymmetric row — the lead card is given extra column weight (`1.35fr 1fr 1fr` at ≥ 1280px), the other two sit beside it at equal width. Cards are near-black on black, separated only by a 1px violet-tinted border that brightens on hover, with an interior violet radial glow that follows the cursor.

## 13.3 Content

```
EYEBROW:  WHAT I BUILD
HEADING:  THREE WAYS TO PUT THIS TO WORK.
```

**CARD 01 — AGENT & AUTOMATION SYSTEMS**
Design and build AI agents that do real work against real systems — reading documentation, generating and testing code, investigating and repairing data — with rate limits, retries, logging, approval gates, and rollback so they are safe to run in production.
*Typical outcome:* a manual engineering or data process becomes a monitored, self-correcting pipeline.

**CARD 02 — ENTERPRISE PLATFORM AUTOMATION**
ServiceNow App Engine, ITSM, and SPM work end to end: business rule automation, demand management workflows, front-end UI layers, platform architecture advice, and on-premise deployment strategy — through requirements, development, testing, documentation, and rollout.
*Typical outcome:* a process that took a team of people now runs as a governed workflow.

**CARD 03 — FULL-STACK PRODUCT DELIVERY**
Applications built to survive: Angular, React, .NET, FastAPI, Spring Boot, PostgreSQL, MongoDB, containerized with Docker, unit-tested, shipped through CI/CD, deployed on TLS-secured infrastructure.
*Typical outcome:* a working system in production, with the tests and pipelines to keep it there.

## 13.4 Motion

- Cards enter with a staggered `y: 60 → 0`, `opacity: 0 → 1`, 0.08s stagger.
- Cursor-tracked radial glow: a CSS custom property `--mx/--my` updated on `pointermove`, feeding `radial-gradient(600px circle at var(--mx) var(--my), rgba(139,92,246,.10), transparent 42%)`.
- Border color lerps from `rgba(139,92,246,.16)` to `rgba(139,92,246,.55)` on hover over 0.45s.
- A thin violet line sweeps across the top edge of the card on hover, `scaleX: 0 → 1` from left.

---

# 14. SECTION 07 — FEATURED WORK

## 14.1 Intent

The evidence locker. Enough specificity that a technical interviewer can open a conversation from any single card.

## 14.2 Layout

Two large feature cards on top, then a four-card grid below, then a compact list of remaining projects. Each card carries a generated abstract violet preview visual (see 14.4) that scales `1 → 1.06` on hover while the overlay copy rises.

## 14.3 The work

**FEATURED — large cards**

| Project | Stack | One-liner |
|---|---|---|
| **API Integration Agent** | AI agent · REST APIs · Sandbox testing | Turns API documentation into tested integration code — identifying endpoints, auth, and schemas, generating connector code, running sandbox tests, and self-correcting from errors, with rate limits, retries, logging, and approval gates before changes ship. |
| **ITBF — Budgeting Automation** *(Murex)* | Angular · C# · .NET 9 · PostgreSQL · Docker | Full-stack budgeting automation for asset managers. Automates fiscal-year calculations through a data pipeline driven by configurable growth and inflation inputs, and gives real-time approval, payment, and balance visibility — replacing manual reconciliation. Unit-tested, CI/CD, TLS-secured containerized deployment. |

**GRID — four cards**

| Project | Stack | One-liner |
|---|---|---|
| **Data Quality & Repair Assistant** | AI agent · SQL · Relational DBs | Investigates data quality issues through SQL checks and an agent workflow, proposing explained corrections with change previews, approval controls, audit logs, and transactional rollback. |
| **NCGR Rollout Automation** *(EY)* | ServiceNow App Engine | Business rule automation across multiple participating entities for a Saudi national government platform, plus the front-end UI layer and on-premise architecture advice. |
| **Lebanese News Aggregator** | React · FastAPI · MongoDB · Gemini | Bilingual aggregation across six Lebanese sources via RSS, APIs, and scraping, with automated summarisation and dynamic filtering. Built under mentorship from a Meta software engineer. |
| **WhatsApp Educational Bot** | n8n · Workflow automation | An automated WhatsApp bot that teaches users on topics of their choice through n8n-orchestrated conversation flows. |

**LIST — compact rows, revealing on hover**

| Project | Stack |
|---|---|
| **MediLog** — role-based medical records with secure doctor access links | React · Spring Boot · MongoDB · Docker |
| **AUBIFY** — social platform for AUB students, auth, profiles, real-time interaction | React · Node.js · MongoDB |
| **Computer Vision Models** — 99% on dog breeds, 90%+ on flower species | PyTorch · VGG16 · Transfer learning |
| **Qatar University SPM** — demand management automation & business rules | ServiceNow SPM |

## 14.4 Preview visuals

No stock photography. Each card's visual is a **generated abstract**: an SVG violet node-graph / waveform / grid motif, unique per card, seeded by the card index. Keeps the site self-contained, on-brand, and fast. Store as `assets/img/work-01.svg` … `work-06.svg`.

## 14.5 Links

Each card carries a small `↗` affordance linking to **LinkedIn** — `https://www.linkedin.com/in/jihad-masarani-13631b225/` — where the project posts, screenshots, and write-ups live. A single line above the grid states this plainly: *"Full write-ups, screenshots, and build posts live on LinkedIn."*

## 14.6 Motion

- Cards reveal on a 0.06s stagger with `clipPath: inset(0 0 100% 0)` → `inset(0 0 0% 0)` — a wipe, not a fade. This is the premium detail.
- Hover: preview scales `1.06`, overlay copy rises `12px`, border brightens, and a violet corner bracket draws in at the top-right.
- The compact list rows expand their stack tags from `height: 0` on hover with a `power2.out` ease.

---

# 15. SECTION 08 — CREDENTIALS

## 15.1 Layout

A quiet, dense, two-column section — deliberately calmer than everything around it. Left: certifications. Right: education and recognition. Thin rules between rows. No cards, no glow. Restraint here makes the CTA that follows hit harder.

## 15.2 Content

**CERTIFICATIONS**
- ServiceNow Certified System Administrator (CSA)
- ServiceNow Certified Application Developer (CAD)
- Oracle Certified Professional (OCP), Java
- AI Programming with Python Nanodegree — AWS
- DataCamp — Python, Pandas, SQL

**EDUCATION**
- **BSc Computer Science**, American University of Beirut — Jan 2023 to Dec 2025
- GPA 3.86 / 4.0 · Dean's Honor List · Full academic scholarship

**RECOGNITION**
- FIRST LEGO League Championship winner — 2018, 2019
- Represented Lebanon — 2019 Arab FLL Championship, Jordan
- Best Mechanical Design Award

## 15.3 Motion

Rows fade up on a 0.04s stagger. Hairlines draw from left. Nothing else. This section is the exhale.

---

# 16. SECTION 09 — FINAL CTA

## 16.1 Intent

The close. Scene 03 plays — he walks toward the viewer and stops, looking into the lens — while the headline resolves. The film ends by addressing the audience directly.

## 16.2 Layout

Full viewport. Scene 03 fills the frame, `object-fit: cover`, with a heavy bottom scrim into pure black. Headline centered, enormous. The email address is the largest interactive element on the page.

## 16.3 Copy

```
EYEBROW:
    AVAILABLE FOR NEW ROLES & ENGAGEMENTS

HEADLINE (display, clamp up to 12vw, kinetic):
    LET'S BUILD
    SOMETHING THAT
    RUNS ITSELF.

SUBLINE (max 52ch):
    Automation, AI agent systems, or platform engineering — if you have a
    process that still depends on someone remembering to do it, I'd like
    to hear about it.

PRIMARY CTA (huge, underlined, hover-animated):
    jihadismasarani@gmail.com   →

SECONDARY ROW:
    LINKEDIN ↗        +961 71 919 075        BEIRUT, LEBANON
```

## 16.4 CTA behaviour

- **Primary:** `mailto:jihadismasarani@gmail.com?subject=Let%27s%20talk%20%E2%80%94%20automation%20%26%20AI%20systems`. On click, also copy the address to the clipboard and show a small `COPIED` toast in violet for 2s — so the CTA works even for a visitor with no mail client configured. This is why email is the primary CTA: it is the lowest-friction, highest-intent action for a hiring conversation, and it needs no third-party booking tool.
- **Secondary:** LinkedIn opens `https://www.linkedin.com/in/jihad-masarani-13631b225/` in a new tab with `rel="noopener noreferrer"`.
- The phone number is a `tel:` link on mobile, plain text on desktop.

## 16.5 Motion

- The headline reveals with the same masked line-rise as the hero, so the film's first and last shots rhyme.
- The email link has an animated underline that wipes in from the left on hover, plus a `→` arrow that translates `+8px`.
- A slow violet glow pulses behind the CTA on a 6s cycle, `opacity: .18 → .30`, `ease: sine.inOut`, `yoyo: true`, `repeat: -1`.

---

# 17. SECTION 10 — FOOTER

## 17.1 Layout

Compact, black, hairline top border. Three zones: left identity, center links, right colophon. Above them, an oversized outlined wordmark `JIHAD MAASARANI` set at `~13vw` in stroke-only type, clipped by the viewport edges — the signature sign-off.

## 17.2 Content

```
OVERSIZED OUTLINE WORDMARK:
    JIHAD MAASARANI

LEFT:
    Automation & AI Systems Engineer
    Beirut, Lebanon

CENTER LINKS:
    Email  ·  LinkedIn  ·  Download CV

RIGHT:
    © 2026 Jihad Maasarani
    Built from scratch — HTML, CSS, JavaScript

BOTTOM-RIGHT:
    BACK TO TOP ↑
```

## 17.3 Motion

- The outline wordmark translates horizontally at a slow parallax as the footer enters — `xPercent: -6 → 0`.
- `BACK TO TOP` triggers `lenis.scrollTo(0, { duration: 2.0 })` — a long, smooth, cinematic return rather than an instant jump.

---

# 18. COMPLETE VISUAL STYLE GUIDE

## 18.1 Color tokens

```css
:root {
  /* Surfaces */
  --void:        #04040A;   /* page background — the deepest black */
  --obsidian:    #0A0A12;   /* section surfaces */
  --slate:       #12121C;   /* cards, elevated surfaces */
  --hairline:    rgba(139,92,246,0.16);
  --hairline-lo: rgba(237,234,242,0.08);

  /* Violet — the machine */
  --violet-900:  #2E1065;
  --violet-700:  #5B21B6;
  --violet-500:  #7C3AED;   /* primary brand violet */
  --violet-400:  #8B5CF6;   /* interactive / accent */
  --violet-300:  #A78BFA;   /* highlights on dark */
  --violet-glow: rgba(124,58,237,0.30);

  /* Amber — the human (used sparingly, < 5% of surface) */
  --amber-500:   #F5A524;
  --amber-300:   #FCC65C;
  --amber-glow:  rgba(245,165,36,0.18);

  /* Signal — rare, for live/active states only */
  --signal:      #22D3EE;

  /* Text */
  --bone:        #EDEAF2;   /* primary text */
  --ash:         #9C9AAB;   /* secondary text */
  --dim:         #5E5C6B;   /* tertiary, labels */

  /* Effects */
  --grain-op:    0.038;
  --blur-nav:    24px;
}
```

**Usage ratio, enforced:** 78% void/obsidian · 14% bone/ash text · 6% violet · 2% amber.
Never more than two accent colors visible in a single viewport.

## 18.2 Elevation & surface

There are no drop shadows on this site — black cannot cast a convincing shadow onto black. Elevation is expressed with **three tools only**: a 1px hairline border, a subtle interior radial glow, and a change in surface value (`--void` → `--obsidian` → `--slate`).

## 18.3 Grain

A single fixed full-viewport overlay, `pointer-events: none`, `z-index: 9998`, `mix-blend-mode: overlay`, `opacity: var(--grain-op)`. Implemented as a tiled 128×128 noise texture animated by stepping `background-position` between 8 discrete positions at 8fps via `steps(8)` — cheap, GPU-friendly, and it reads as genuine film grain rather than a static screen-door.

Do **not** animate grain with JS. Do **not** use an SVG `feTurbulence` filter at full viewport — it is a paint-cost trap.

## 18.4 Vignette

A second fixed overlay beneath the grain: `radial-gradient(ellipse at center, transparent 42%, rgba(4,4,10,0.55) 100%)`. Constant across the whole site. It is what makes every section feel like a frame rather than a web page.

## 18.5 Cursor

A custom cursor on pointer-fine devices only: a 6px violet dot that tracks instantly, plus a 34px outlined ring that lerps toward it at `0.14`. On hover over interactive elements the ring scales to `2.2` and its border fades; over the hero and CTA video sections it inverts to `mix-blend-mode: difference`. Falls back to the native cursor on touch and under `prefers-reduced-motion`.

## 18.6 Imagery rules

- Only two photographic sources exist on this site: the three Seedance clips and their poster frames. Nothing else is photographic.
- All other visuals are generated SVG abstracts in violet.
- Every video and image is graded to the same palette. If an asset does not match the grade, it does not ship.

---

# 19. TYPOGRAPHY

## 19.1 Type system

| Role | Family | Source | Notes |
|---|---|---|---|
| **Display** | `Anton` | Google Fonts | Condensed, ultra-heavy grotesque for headlines. Set tight: `letter-spacing: -0.02em`, `line-height: 0.86`. |
| **Body / UI** | `Inter` | Google Fonts (variable) | Weights 300–700. |
| **Mono / labels** | `JetBrains Mono` | Google Fonts | Eyebrows, stat labels, stack tags, section indices. Always uppercase, `letter-spacing: 0.14em`. |

**Load strategy:** `preconnect` to `fonts.gstatic.com`, `display=swap`, and only the weights actually used — `Anton:400`, `Inter:300,400,500,700`, `JetBrains Mono:400,500`. Preload the Anton woff2 explicitly since it renders inside the LCP element.

## 19.2 Scale

```css
--fs-display-xl: clamp(3.6rem, 11vw, 13rem);   /* hero, final CTA */
--fs-display-l:  clamp(2.8rem, 7.5vw, 8rem);   /* section headings */
--fs-display-m:  clamp(2.2rem, 4.6vw, 4.4rem); /* pillar titles */
--fs-h3:         clamp(1.35rem, 2vw, 1.9rem);  /* card titles */
--fs-body-l:     clamp(1.05rem, 1.35vw, 1.3rem);
--fs-body:       clamp(0.98rem, 1.05vw, 1.08rem);
--fs-label:      0.72rem;                       /* mono, uppercase */
```

## 19.3 Typographic rules

- Display type is **always** uppercase, always `line-height` under 0.9, always optically tightened.
- Body copy never exceeds **68ch**. Pull quotes never exceed **32ch**.
- Mono labels always uppercase with `0.14em` tracking, always `--dim` or `--violet-300`.
- Never center body copy. Center display copy only in the Mission and Final CTA sections.
- Numbers in the stats strip use `font-variant-numeric: tabular-nums` so odometers do not jitter.
- Every headline must break where the **meaning** breaks, not where the container ends — use explicit `<span class="line">` wrappers.

---

# 20. ANIMATION DIRECTION

## 20.1 Philosophy

**Everything has mass.** Nothing appears — things arrive. Nothing disappears — things leave. The site should feel like a heavy, well-balanced door: significant effort to start moving, then perfectly smooth.

## 20.2 Easing palette

```js
const EASE = {
  out:   "power4.out",     // entrances — 1.0–1.4s
  inOut: "power3.inOut",   // transitions — 0.8–1.2s
  expo:  "expo.out",       // counters, numbers — 1.6s
  soft:  "sine.inOut",     // ambient loops — 4–8s
};
```

**Forbidden:** `back`, `elastic`, `bounce`, and `linear` (except for scrubs). Nothing on this site bounces.

## 20.3 Duration scale

| Interaction | Duration |
|---|---|
| Micro (hover color, border) | 0.28–0.45s |
| Element entrance | 0.9–1.4s |
| Section transition | 1.0–1.6s |
| Kinetic text stagger | 0.06–0.12s per unit |
| Ambient loop | 4–8s |
| Preloader | 1.8–2.4s total |

## 20.4 The signature motions

1. **Masked line rise** — every display headline. `overflow:hidden` parent, child from `y:110%`, staggered per line.
2. **Per-word kinetic reveal** — Mission section only. Y-translate + blur + rotateX, scrubbed.
3. **Odometer count** — stats only. Digit strips translating vertically.
4. **Clip-path wipe** — work cards. `inset(0 0 100% 0)` → `inset(0 0 0 0)`.
5. **Cross-dissolve act transition** — outgoing section scales up + blurs + fades while the incoming slides over. Used at Act I→II and Act III→IV.
6. **Line draw** — every hairline border on the site draws from its origin rather than appearing.

## 20.5 Preloader

```
Center: a mono counter 000 → 100, tabular-nums, --bone
Below:  a 1px violet progress line, scaleX bound to real asset load progress
Exit:   counter fades → violet line expands to full width →
        the whole overlay wipes upward with clip-path inset(0 0 100% 0),
        1.1s power4.inOut, revealing the hero beneath
```

Bound to actual `loadeddata` on the hero video plus `document.fonts.ready`, with a **2.6s hard timeout** so a slow connection can never trap a visitor. The hero entrance animation is chained directly off the preloader exit.

## 20.6 Performance rules

- Animate **only** `transform`, `opacity`, `filter`, and `clip-path`. Never `top/left/width/height/margin`.
- `will-change` applied only immediately before an animation and removed on complete.
- One `gsap.ticker` drives Lenis; never run a second `requestAnimationFrame` loop.
- `ScrollTrigger.config({ limitCallbacks: true, ignoreMobileResize: true })`.
- Batch reveal animations with `ScrollTrigger.batch()` rather than creating one trigger per card.
- Rebuild triggers on a debounced (250ms) resize that crosses a breakpoint.

---

# 21. INTERACTION DESIGN

## 21.1 Interactive inventory

| Element | Rest | Hover | Active | Focus |
|---|---|---|---|---|
| Primary button | Violet 1px border, transparent fill, bone text | Violet fill sweeps up from the bottom via `scaleY` on a pseudo-element, text → void | `scale(0.985)` | 2px `--violet-300` outline, 3px offset |
| Text link | Bone, 1px underline at 40% opacity | Underline wipes to 100% from the left, text → `--violet-300` | — | Visible outline |
| Work card | `--slate`, hairline border | Preview `scale(1.06)`, border brightens, copy rises 12px, corner bracket draws | — | Outline on the card |
| Email CTA | Huge, bone, thin underline | Underline thickens and wipes, `→` translates +8px, violet glow intensifies | Copies to clipboard, `COPIED` toast | Outline |
| Stat cell | Bone number | Lifts 4px, number → `--violet-300` | — | — |
| Nav link | `--ash` | `--bone`, violet dot appears left | — | Outline |

## 21.2 Feedback principles

- Every interactive element responds within **100ms**. No exceptions.
- Hover states are **directional** — things wipe, sweep, and draw from an origin. Nothing simply fades.
- Clicking the email CTA must produce **two** confirmations: the mail client opening *and* the copy toast. Never leave the user unsure whether the click registered.
- Cursor ring scale is the global "this is interactive" signal — wire it through a single delegated listener, not per-element handlers.

## 21.3 Magnetic buttons

Primary CTAs are magnetic: on `pointermove` within a 90px radius, the button translates toward the cursor at `0.22 × distance`, capped at 14px, and springs back to 0 on `pointerleave` over 0.6s `power3.out`. Disabled on touch and under `prefers-reduced-motion`.

## 21.4 Keyboard & accessibility

- Full keyboard traversal in DOM order; visible focus rings on every interactive element (never `outline: none` without a replacement).
- `Skip to content` link as the first focusable element.
- All decorative video carries `aria-hidden="true"`; all meaningful imagery carries real `alt` text.
- Contrast: `--bone` on `--void` is ~15.8:1. `--ash` on `--void` is ~6.4:1. `--dim` is used **only** for non-essential labels at 14px+.
- `prefers-reduced-motion: reduce` → Lenis disabled (native scroll), all scrubs replaced with instant final states, videos replaced with poster images, grain animation frozen, magnetic and custom cursor disabled. **The site must be fully readable and fully navigable with every animation removed.**

---

# 22. SCROLL BEHAVIOR

## 22.1 Smooth scroll — Lenis

```js
const lenis = new Lenis({
  duration: 1.15,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: "vertical",
  smoothWheel: true,
  syncTouch: false,          // native momentum on touch devices
  touchMultiplier: 1.6,
  wheelMultiplier: 1.0,
  lerp: 0.09,
});

lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```

`duration: 1.15` with `lerp: 0.09` is the calibration point — enough glide to feel expensive, not so much that the page feels detached from the wheel. Do not exceed 1.3.

## 22.2 Pinned sections

Three pins total: **Mission** (250vh), **Three Pillars** (320vh), and the Hero's scale-out (a non-pinned scrub). Three is the maximum — more than that and the page starts to feel like it is fighting the user.

Every pin uses `anticipatePin: 1` and `pinSpacing: true`.

## 22.3 Video scrubbing

Scene 02 is scrubbed to the Pillars pin:

```js
// Requires: preload="auto", muted, playsinline, and a poster.
// Lerp toward the target time so scrubbing reads as smooth playback.
let target = 0, current = 0;
ScrollTrigger.create({
  trigger: ".pillars", start: "top top", end: "+=320%", scrub: true,
  onUpdate: (self) => { target = self.progress * (video.duration || 0); }
});
gsap.ticker.add(() => {
  if (!video.duration) return;
  current += (target - current) * 0.12;
  if (Math.abs(target - current) > 0.01) video.currentTime = current;
});
```

**Fallback:** if `video.readyState < 2` after 3s, or on iOS where `currentTime` scrubbing is unreliable, swap to an **image-sequence scrub** — 60 frames exported at 1280px wide as `assets/seq/pillars-0001.webp` … `-0060.webp`, drawn to a `<canvas>` sized with `devicePixelRatio`, with the frame index driven by the same scroll progress. Preload the first 12 eagerly and the rest on `requestIdleCallback`.

## 22.4 Act transitions

Between acts, the outgoing section runs `scale: 1 → 1.08`, `filter: blur(0 → 8px)`, `opacity: 1 → 0.15` while the incoming section translates up over it with `z-index` priority. Scrubbed over 60vh of overlap. This is what makes the scroll read as film editing rather than page scrolling.

## 22.5 Anchor navigation

All in-page anchors route through `lenis.scrollTo(target, { duration: 1.6, offset: -80 })`. Never use CSS `scroll-behavior: smooth` — it conflicts with Lenis.

---

# 23. MOBILE BEHAVIOR

## 23.1 Breakpoints

```css
/* Mobile-first authoring order */
--bp-sm:  480px;
--bp-md:  768px;
--bp-lg:  1024px;
--bp-xl:  1440px;
--bp-2xl: 1920px;
```

## 23.2 Mobile adaptation rules

| Desktop behavior | Mobile (< 768px) |
|---|---|
| Hero video autoplay loop | Same — but `preload="metadata"`, poster shown until `canplay`. Reduced-bitrate 720p variant via `<source media="(max-width: 768px)">`. |
| Pillars horizontal pin + video scrub | Pin **disabled**. Pillars stack vertically, reveal on fade-up. Video replaced with a static poster + slow CSS scale. |
| Mission pin, 250vh | Pin reduced to 140vh; per-word reveal retained but faster. |
| Custom cursor | Removed entirely. |
| Magnetic buttons | Disabled. |
| Section index rail | Hidden. |
| Stats 6-across | 2 columns × 3 rows. |
| Story alternating timeline | Single column, spine on the left, all entries right-aligned to it. |
| Work grid | Single column, full-width cards, wipe reveal retained. |
| Display type at `11vw` | `clamp()` floor raised so the smallest display size is never under 2.6rem. |
| Footer outline wordmark | Reduced to `22vw`, still clipped. |

## 23.3 Mobile-specific requirements

- All videos: `muted`, `playsinline`, `autoplay`, `loop`, `disablepictureinpicture`, `preload="metadata"`.
- Use `100svh`, never `100vh` — the mobile URL bar will otherwise cause a jump on first scroll.
- Minimum tap target: **44×44px**, including footer links.
- Side gutters: `clamp(20px, 5vw, 32px)`, applied once on a single wrapper. **The body must never scroll horizontally** — only the work grid and code blocks may overflow, each inside its own `overflow-x: auto` container.
- On `navigator.connection.saveData === true` or an `effectiveType` of `2g`/`slow-2g`, skip video entirely and render posters.
- Test at **375×812** (iPhone SE / 13 mini) as the floor.

---

# 24. TECHNICAL IMPLEMENTATION

## 24.1 File structure

```
Website/
├── index.html
├── style.css
├── script.js
├── BUILD-PLAN.md
└── assets/
    ├── video/
    │   ├── scene-01-hero.mp4 / .webm
    │   ├── scene-02-architect.mp4 / .webm
    │   ├── scene-03-scale.mp4 / .webm
    │   └── poster-01.jpg / poster-02.jpg / poster-03.jpg
    ├── seq/                     # fallback image sequence for pillars scrub
    │   └── pillars-0001.webp … pillars-0060.webp
    ├── img/
    │   ├── work-01.svg … work-06.svg
    │   ├── grain.png            # 128×128 tiled noise
    │   └── og-image.jpg         # 1200×630 social card
    ├── reference/
    │   └── jihad-identity-reference.png
    ├── docs/
    │   └── Jihad_Maasarani_Resume_2026.pdf
    └── favicon/
        ├── favicon.svg
        └── apple-touch-icon.png
```

**Every path in the HTML/CSS/JS must be relative** — `assets/video/scene-01-hero.mp4`, never `/assets/...`. The site must open correctly from `file://` as well as from a server.

## 24.2 Stack

**Permitted:** HTML5, CSS3, vanilla JavaScript (ES2020, no build step, no bundler, a single classic `<script defer>`).
**Forbidden:** React, Next.js, Vue, Svelte, Tailwind, jQuery, any framework, any npm build step.

**CDN dependencies — exactly these three, pinned:**

```html
<script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/lenis@1.1.13/dist/lenis.min.js"></script>
<script defer src="script.js"></script>
```

Loaded in that order. Register the plugin explicitly: `gsap.registerPlugin(ScrollTrigger);`

## 24.3 `index.html` requirements

- Semantic landmarks: `<header>`, `<main>`, `<section>`, `<footer>`. Each section carries a stable `id` and `data-section` index.
- Complete `<head>`: charset, viewport (`width=device-width, initial-scale=1, viewport-fit=cover`), title, description, canonical, Open Graph, Twitter card, `theme-color: #04040A`, favicon set.
- `JSON-LD` `Person` schema: name, jobTitle, worksFor, alumniOf, email, sameAs (LinkedIn), knowsAbout.
- `preconnect` to `fonts.googleapis.com`, `fonts.gstatic.com` (crossorigin), and `cdnjs.cloudflare.com`.
- Preload: the Anton woff2 and `poster-01.jpg`.
- All display headlines pre-split into `<span class="line"><span class="line-inner">…</span></span>` **in the HTML**, not at runtime — runtime splitting causes a flash of unsplit text.
- `<noscript>` block providing a fully readable, unanimated version of the content.

## 24.4 `style.css` requirements

- Authored mobile-first, single file, organised in this order with clear banner comments:
  `1 Reset · 2 Tokens · 3 Base & typography · 4 Layout primitives · 5 Overlays (grain, vignette, cursor) · 6 Header & nav · 7 Preloader · 8–17 Sections in order · 18 Components · 19 Utilities · 20 Media queries · 21 prefers-reduced-motion`
- All colors, sizes, and easings referenced through the custom properties in §18.1 and §19.2. No hard-coded hex values outside the token block.
- Elements that will be GSAP-animated start in their **final CSS state**; the initial hidden state is set by `gsap.set()` in JS, guarded by a `js-enabled` class added to `<html>` as the very first statement in `script.js`. This guarantees the content is visible if JS fails.
- `@media (prefers-reduced-motion: reduce)` at the end of the file, disabling every transition and animation.

## 24.5 `script.js` architecture

```
 1  BOOT          document.documentElement.classList.add('js-enabled')
 2  CONFIG        breakpoints, easing map, reduced-motion + saveData flags
 3  LENIS         init, ticker bind, ScrollTrigger sync, reduced-motion bypass
 4  PRELOADER     asset+font promise race w/ 2.6s timeout → exit → heroIntro()
 5  CURSOR        dot + lerped ring, delegated hover detection
 6  GRAIN         (CSS-only — JS only toggles the class)
 7  HEADER        hide-on-down / show-on-up, blur panel, progress bar
 8  NAV           section index rail, active-state observer, lenis anchors
 9  HERO          masked line rise, cursor parallax, scroll-out scrub
10  STATS         odometer counters, ScrollTrigger once:true
11  MISSION       pinned per-word kinetic reveal, glow scrub
12  PILLARS       pinned horizontal track + video scrub (w/ sequence fallback)
13  STORY         spine draw, alternating entry reveals, node pulses
14  CAPABILITIES  batch reveal, cursor-tracked card glow
15  WORK          clip-path wipe batch reveal, hover states
16  CREDENTIALS   hairline draw + row stagger
17  CTA           masked reveal, ambient glow loop, mailto + clipboard toast
18  FOOTER        parallax wordmark, back-to-top
19  MAGNETIC      delegated magnetic button behaviour
20  RESIZE        debounced 250ms, breakpoint-crossing rebuild
21  A11Y          reduced-motion teardown, focus management
```

- Each section is an isolated `init*()` function called from a single `boot()`. No global leakage — wrap the file in an IIFE.
- Use `gsap.matchMedia()` to register desktop-only pins so mobile never creates them at all. Everything registered inside a matchMedia context is reverted automatically on breakpoint change.
- All DOM queries cached once at init. No queries inside ticker or scroll callbacks.

## 24.6 Performance budget — hard targets

| Metric | Target |
|---|---|
| LCP | < 2.5s on 4G |
| CLS | **0** — all media has explicit `width`/`height` or `aspect-ratio` |
| INP | < 200ms |
| Total page weight (excl. video) | < 900 KB |
| Each video | < 4 MB |
| Sustained scroll FPS | 60 on a mid-range 2021 laptop |
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 95 |

**Enforcement:**
- `loading="lazy"` + `decoding="async"` on every image below the fold.
- Only the hero video preloads; scenes 02 and 03 use `preload="none"` and begin loading via `IntersectionObserver` at `rootMargin: "200% 0px"`.
- `content-visibility: auto` with `contain-intrinsic-size` on sections below the fold.
- No layout reads (`offsetTop`, `getBoundingClientRect`) inside animation frames — cache on init and on resize only.

## 24.7 SEO & metadata

```
<title>Jihad Maasarani — Automation & AI Systems Engineer</title>
<meta name="description" content="Automation and AI systems engineer. I build AI agents that write, test, and repair production code, and enterprise automation running at national government scale. Technology consultant at EY, Beirut.">
og:title, og:description, og:image (assets/img/og-image.jpg, 1200×630),
og:type=website, og:locale=en_US, twitter:card=summary_large_image
```

## 24.8 Browser support

Chrome/Edge 110+, Firefox 110+, Safari 16.4+. Graceful degradation below: the site remains fully readable and navigable without `clip-path` animation, `backdrop-filter`, or `mix-blend-mode` support.

## 24.9 Build order for Claude Code

1. Scaffold the file structure and `/assets` directories.
2. Copy and rename the identity reference into `assets/reference/jihad-identity-reference.png`.
3. Copy the CV into `assets/docs/`.
4. Write `index.html` — complete semantic markup, all copy from this plan verbatim, headlines pre-split.
5. Write `style.css` — tokens first, then mobile-first sections in order.
6. Write `script.js` — boot, Lenis, preloader, then each section's init in order.
7. Generate the SVG work previews, the grain tile, the favicon, and placeholder posters into `assets/`.
8. Place **placeholder** poster images and a `poster` attribute on every video so the site is fully presentable **before** the Seedance clips exist. The site must look finished with zero video files present.
9. Generate the three Seedance clips per §5–6, encode per §5.5, drop into `assets/video/`. No code change is needed — the markup already points at these filenames and swaps off the posters the moment the files resolve.
10. Verify: 375px, 768px, 1440px, 1920px · reduced-motion · JS disabled · video files deleted.

## 24.10 Definition of done

- [ ] Scrolls at 60fps end to end with no jank at any breakpoint.
- [ ] Zero horizontal overflow at 320px and above.
- [ ] Fully readable with JavaScript disabled.
- [ ] Fully usable with `prefers-reduced-motion: reduce`.
- [ ] Fully presentable with every video file deleted.
- [ ] No console errors or warnings.
- [ ] Every claim on the page traces to the CV.
- [ ] Email CTA opens a mail client **and** copies to clipboard.
- [ ] Lighthouse: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO = 100.

---

# 25. CONTACT & LINK REFERENCE

| Item | Value |
|---|---|
| Email | `jihadismasarani@gmail.com` |
| Phone | `+961 71 919 075` |
| Location | Beirut, Lebanon |
| LinkedIn | `https://www.linkedin.com/in/jihad-masarani-13631b225/` |
| CV | `assets/docs/Jihad_Maasarani_Resume_2026.pdf` |
| Identity reference | `assets/reference/jihad-identity-reference.png` |

---

*End of Master Build Plan.*
