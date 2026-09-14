# Jihad Maasarani · Portfolio

A single-page, scroll-driven cinematic portfolio. No framework, no build step:
hand-written HTML, CSS and vanilla JavaScript, with GSAP, ScrollTrigger and Lenis
loaded from a CDN.

**Live:** _(added after deploy)_

---

## Running locally

The site is static, but it needs a server that answers **HTTP Range requests**.
Without them a `<video>` reports an empty `seekable` range and the scroll-scrubbed
scene in the Pillars section silently stops working while everything else still
looks correct. Python's `http.server` does not implement Range, so this repo ships
a small dev server that does:

```bash
python .claude/devserver.py 5174
```

Then open <http://localhost:5174>. It also sends `no-store`, so edits are never
masked by the browser cache.

## Structure

```
index.html      markup, all copy, headlines pre-split for the reveal animation
style.css       design tokens first, then mobile-first sections in order
script.js       one init function per section, called from a single boot()
assets/
  video/        the three cinematic scenes (mp4 + webm) and their posters
  img/          generated SVG work previews, grain tile, OG image
  docs/         CV
  reference/    identity reference used to generate the scenes
BUILD-PLAN.md   the full creative brief and implementation spec
```

## Notes on the build

- **Everything degrades.** The site is fully readable with JavaScript disabled,
  fully usable under `prefers-reduced-motion`, and fully presentable with every
  video file deleted. Each scene falls back to a poster frame.
- **Scene 02 is encoded differently** from the other two. It is scroll-scrubbed,
  so it uses a dense keyframe interval (one every 6 frames) to keep seeking cheap,
  and is delivered at 720p because it sits at 45% opacity behind a scrim.
- **Video scrubbing is frame-quantised.** Writes to `currentTime` are issued only
  when the 24fps frame index actually changes, which removes the redundant decoder
  seeks that made slow scrolling feel laggy.
- Animations touch only `transform`, `opacity`, `filter` and `clip-path`.

See [BUILD-PLAN.md](BUILD-PLAN.md) for the full specification.

## Licence

Code is free to learn from. The photography, video, copy and CV are not.
