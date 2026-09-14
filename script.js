/* ═══════════════════════════════════════════════════════════════════
   JIHAD MAASARANI — VIOLET MACHINE
   Vanilla JS · GSAP + ScrollTrigger + Lenis
   ═══════════════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  /* ───────────────────────────────────────────────── 1 · BOOT ── */
  document.documentElement.classList.add("js-enabled");

  /* ─────────────────────────────────────────────── 2 · CONFIG ── */
  var EASE = {
    out: "power4.out",
    inOut: "power3.inOut",
    expo: "expo.out",
    soft: "sine.inOut"
  };

  var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var DESKTOP = "(min-width: 1024px)";
  var HOVERABLE = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  var conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  var LIGHT_DATA = !!(conn && (conn.saveData === true || /^(slow-)?2g$/.test(conn.effectiveType || "")));

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  var lenis = null;

  /* ──────────────────────────────────────────────── 3 · LENIS ── */
  function initLenis() {
    if (REDUCED || typeof window.Lenis !== "function") return;

    lenis = new window.Lenis({
      duration: 0.9,
      easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
      orientation: "vertical",
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1.8,
      /* A higher lerp settles sooner: the page comes to rest almost as soon as
         the wheel stops, so a text section can actually be read mid-scroll. */
      wheelMultiplier: 1.15,
      lerp: 0.16
    });

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
  }

  function scrollTo(target, offset) {
    if (lenis) {
      lenis.scrollTo(target, { duration: 1.6, offset: offset || 0 });
    } else if (target === 0) {
      window.scrollTo({ top: 0, behavior: "auto" });
    } else if (target && target.getBoundingClientRect) {
      window.scrollTo({ top: window.scrollY + target.getBoundingClientRect().top + (offset || 0) });
    }
  }

  /* ───────────────────────────────────── 4 · VIDEO RESILIENCE ── */
  /* Every scene has a poster. If the clip is missing, slow, or the
     connection is metered, we fall back to the poster with a Ken Burns
     drift so the section never renders as a black hole.                */
  function guardVideo(video, wrapper, opts) {
    if (!video) return;
    opts = opts || {};
    var succeeded = false;
    var failed = false;
    var timer = null;

    function fallback() {
      if (succeeded || failed) return;
      failed = true;
      video.removeAttribute("autoplay");
      try { video.pause(); } catch (e) {}
      // The element stays in the flow: with no decodable source the browser
      // paints the poster, which is exactly the fallback we want.
      if (wrapper) wrapper.classList.add("is-static");
      if (opts.onFallback) opts.onFallback();
    }

    /* A late arrival must be able to undo an earlier fallback: a lazily
       loaded clip decodes long after the guard's timeout would have run. */
    function ready() {
      if (succeeded) return;
      succeeded = true;
      failed = false;
      window.clearTimeout(timer);
      if (wrapper) wrapper.classList.remove("is-static");
      if (opts.onReady) opts.onReady();
    }

    if (LIGHT_DATA || REDUCED) { fallback(); return; }

    video.addEventListener("error", fallback, true);
    video.addEventListener("stalled", function () {
      if (video.readyState < 1) fallback();
    });
    video.addEventListener("loadeddata", ready);
    video.addEventListener("canplay", ready);

    function startTimer() {
      window.clearTimeout(timer);
      timer = window.setTimeout(function () {
        if (video.readyState >= 2) ready();
        else fallback();
      }, opts.timeout || 3200);
    }

    /* Only start counting once the download actually begins. A preload="none"
       clip does not start until its observer fires, so an immediate timer
       would fail it while it is still far off-screen. */
    if (video.preload === "none") video.addEventListener("loadstart", startTimer, { once: true });
    else startTimer();
  }

  /* Lazily hand `preload="none"` clips their download when they approach. */
  function lazyLoadVideo(video) {
    if (!video || LIGHT_DATA || REDUCED) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.disconnect();
        video.preload = "auto";
        try { video.load(); } catch (err) {}
      });
    }, { rootMargin: "200% 0px" });
    io.observe(video);
  }

  /* ──────────────────────────────────────────── 5 · PRELOADER ── */
  function initPreloader(done) {
    var pre = $("#preloader");
    var count = $("#preCount");
    var bar = $("#preBar");

    if (!pre || REDUCED) {
      if (pre) pre.style.display = "none";
      document.body.classList.remove("is-locked");
      done();
      return;
    }

    document.body.classList.add("is-locked");

    var state = { v: 0 };
    var settled = false;

    var counter = gsap.to(state, {
      v: 100,
      duration: 2.1,
      ease: "power2.inOut",
      onUpdate: function () {
        var n = Math.round(state.v);
        count.textContent = (n < 10 ? "00" : n < 100 ? "0" : "") + n;
        bar.style.transform = "scaleX(" + (state.v / 100) + ")";
      }
    });

    function finish() {
      if (settled) return;
      settled = true;

      var tl = gsap.timeline({
        onComplete: function () {
          pre.classList.add("is-done");
          pre.style.display = "none";
          document.body.classList.remove("is-locked");
          ScrollTrigger.refresh();
          done();
        }
      });

      tl.to(state, {
        v: 100,
        duration: 0.4,
        ease: "power2.out",
        onUpdate: function () {
          var n = Math.round(state.v);
          count.textContent = (n < 10 ? "00" : n < 100 ? "0" : "") + n;
          bar.style.transform = "scaleX(" + (state.v / 100) + ")";
        }
      })
        .to([count, $(".preloader__label")], { opacity: 0, duration: 0.4, ease: EASE.out }, "+=0.1")
        .to(bar, { scaleX: 1, duration: 0.5, ease: EASE.inOut }, "<")
        .to(pre, {
          clipPath: "inset(0 0 100% 0)",
          duration: 1.1,
          ease: "power4.inOut"
        }, "-=0.1");
    }

    var assets = Promise.all([
      document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve(),
      new Promise(function (res) {
        var v = $("#heroVideo");
        if (!v) return res();
        if (v.readyState >= 2) return res();
        v.addEventListener("loadeddata", res, { once: true });
        v.addEventListener("error", res, { once: true, capture: true });
        window.setTimeout(res, 2200);
      })
    ]);

    // Hard timeout: a slow connection can never trap a visitor.
    var hard = window.setTimeout(finish, 2600);

    assets.then(function () {
      if (counter.progress() > 0.55) finish();
      else counter.eventCallback("onComplete", finish);
    });

    counter.eventCallback("onComplete", function () {
      window.clearTimeout(hard);
      finish();
    });
  }

  /* ─────────────────────────────────────────────── 6 · CURSOR ── */
  function initCursor() {
    if (!HOVERABLE || REDUCED || !window.matchMedia(DESKTOP).matches) return;

    var dot = $("#cursorDot");
    var ring = $("#cursorRing");
    if (!dot || !ring) return;

    var mx = window.innerWidth / 2, my = window.innerHeight / 2;
    var rx = mx, ry = my;

    window.addEventListener("pointermove", function (e) {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = "translate3d(" + mx + "px," + my + "px,0)";
      if (!dot.classList.contains("is-on")) {
        dot.classList.add("is-on");
        ring.classList.add("is-on");
      }
    }, { passive: true });

    gsap.ticker.add(function () {
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      ring.style.transform = "translate3d(" + rx + "px," + ry + "px,0)";
    });

    var SEL = "a, button, [data-magnetic], .card, .stat, .row, .cap";
    document.addEventListener("pointerover", function (e) {
      if (e.target.closest && e.target.closest(SEL)) ring.classList.add("is-hover");
    });
    document.addEventListener("pointerout", function (e) {
      if (e.target.closest && e.target.closest(SEL)) ring.classList.remove("is-hover");
    });
    document.addEventListener("pointerleave", function () {
      dot.classList.remove("is-on");
      ring.classList.remove("is-on");
    });
  }

  /* ─────────────────────────────────────────────── 7 · HEADER ── */
  function initHeader() {
    var header = $("#header");
    var progress = $("#progressBar");
    if (!header) return;

    var last = 0;

    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: function (self) {
        var y = self.scroll();
        if (progress) progress.style.transform = "scaleX(" + self.progress + ")";

        header.classList.toggle("is-solid", y > 80);
        if (y > 260 && y > last) header.classList.add("is-hidden");
        else header.classList.remove("is-hidden");
        last = y;
      }
    });
  }

  /* ────────────────────────────────── 8 · NAV RAIL & ANCHORS ── */
  function initNav() {
    $$('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var id = a.getAttribute("href");
        if (!id || id === "#") return;
        var el = document.querySelector(id);
        if (!el) return;
        e.preventDefault();
        scrollTo(el, -80);
      });
    });

    var links = $$("#rail a");
    if (!links.length) return;

    links.forEach(function (a) {
      var id = a.getAttribute("href");
      var section = document.querySelector(id);
      if (!section) return;
      ScrollTrigger.create({
        trigger: section,
        start: "top 55%",
        end: "bottom 55%",
        onToggle: function (self) { a.classList.toggle("is-active", self.isActive); }
      });
    });
  }

  /* ───────────────────────────────────────────────── 9 · HERO ── */
  function heroIntro() {
    var lines = $$(".hero__title .line-inner");
    var tl = gsap.timeline();

    tl.to(lines, {
      yPercent: 0,
      duration: 1.25,
      ease: EASE.out,
      stagger: 0.09
    })
      .to(".hero__kicker", { opacity: 1, y: 0, duration: 0.9, ease: EASE.out }, 0.4)
      .to(".hero__sub", { opacity: 1, y: 0, duration: 1.0, ease: EASE.out }, 0.75)
      .to(".hero__cta", { opacity: 1, y: 0, duration: 1.0, ease: EASE.out }, 0.9)
      .to(".hero__scroll", { opacity: 1, duration: 0.8, ease: EASE.out }, 1.1);
  }

  function initHero() {
    var media = $("#heroMedia");
    var content = $("#heroContent");
    var title = $(".hero__title");

    gsap.set(".hero__title .line-inner", { yPercent: 110 });
    gsap.set([".hero__kicker", ".hero__sub", ".hero__cta"], { opacity: 0, y: 28 });
    gsap.set(".hero__scroll", { opacity: 0 });

    guardVideo($("#heroVideo"), media, { timeout: 3000 });

    if (REDUCED) return;

    // Act I → Act II dissolve
    gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    })
      .to(media, { scale: 1.12, opacity: 0.25, ease: "none" }, 0)
      .to(content, { yPercent: -18, opacity: 0.25, filter: "blur(6px)", ease: "none" }, 0);

    // weighted cursor parallax on the headline
    if (HOVERABLE && title) {
      var tx = 0, ty = 0, cx = 0, cy = 0;
      window.addEventListener("pointermove", function (e) {
        tx = (e.clientX / window.innerWidth - 0.5) * 16;
        ty = (e.clientY / window.innerHeight - 0.5) * 12;
      }, { passive: true });
      gsap.ticker.add(function () {
        cx += (tx - cx) * 0.06;
        cy += (ty - cy) * 0.06;
        title.style.transform = "translate3d(" + cx.toFixed(2) + "px," + cy.toFixed(2) + "px,0)";
      });
    }
  }

  /* ────────────────────────────────────── 10 · STATS ODOMETER ── */
  function buildOdometer(el, value) {
    var chars = String(value).split("");
    el.textContent = "";
    var digits = [];

    chars.forEach(function (ch) {
      if (/\d/.test(ch)) {
        var cell = document.createElement("span");
        cell.className = "d";
        var strip = document.createElement("span");
        strip.className = "d__strip";
        for (var n = 0; n <= 9; n++) {
          var i = document.createElement("i");
          i.textContent = String(n);
          strip.appendChild(i);
        }
        cell.appendChild(strip);
        el.appendChild(cell);
        digits.push({ strip: strip, target: parseInt(ch, 10) });
      } else {
        var sep = document.createElement("span");
        sep.className = "d-sep";
        sep.textContent = ch;
        el.appendChild(sep);
      }
    });

    return digits;
  }

  function initStats() {
    var nums = $$(".stat__num");
    if (!nums.length) return;

    nums.forEach(function (el) {
      var raw = el.getAttribute("data-count") || "";
      var suffix = el.getAttribute("data-suffix") || "";
      var digits = buildOdometer(el, raw + suffix);

      if (REDUCED) {
        digits.forEach(function (d) {
          d.strip.style.transform = "translateY(" + (-d.target * 10) + "%)";
        });
        return;
      }

      ScrollTrigger.create({
        trigger: el,
        start: "top 88%",
        once: true,
        onEnter: function () {
          digits.forEach(function (d, i) {
            gsap.fromTo(d.strip,
              { yPercent: 0 },
              {
                yPercent: -d.target * 10,
                duration: 1.6,
                ease: EASE.expo,
                delay: i * 0.05
              });
          });
        }
      });
    });

    $$(".stats__rule").forEach(function (rule) {
      gsap.to(rule, {
        scaleX: 1,
        duration: 1.2,
        ease: EASE.out,
        scrollTrigger: { trigger: ".stats", start: "top 85%", once: true }
      });
    });
  }

  /* ─────────────────────────────────────── 11 · MISSION TYPE ── */
  function splitWords(root) {
    var words = [];

    $$(".mline", root).forEach(function (line) {
      var nodes = Array.prototype.slice.call(line.childNodes);
      var last = null;
      line.textContent = "";

      nodes.forEach(function (node) {
        if (node.nodeType === 3) {
          var raw = node.textContent;
          var tokens = raw.split(/\s+/).filter(Boolean);
          if (!tokens.length) return;

          // Punctuation that ran straight on from the previous word (".", ",")
          // belongs to that word — never to a mask of its own.
          if (last && !/^\s/.test(raw)) {
            last.textContent += tokens.shift();
          }
          tokens.forEach(function (w) {
            last = appendWord(line, w, false);
            words.push(last);
          });
        } else if (node.nodeType === 1) {
          last = appendWord(line, node.textContent, true);
          words.push(last);
        }
      });
    });

    return words;
  }

  function appendWord(line, text, accent) {
    var mask = document.createElement("span");
    mask.className = "word-mask";
    var word = document.createElement("span");
    word.className = "word" + (accent ? " word--accent" : "");
    word.textContent = text;
    mask.appendChild(word);
    line.appendChild(mask);
    line.appendChild(document.createTextNode(" "));
    return word;
  }

  function initMission() {
    var type = $("#missionType");
    var glow = $("#missionGlow");
    var body = $("#missionBody");
    if (!type) return;

    var words = splitWords(type);

    if (REDUCED) {
      gsap.set(words, { yPercent: 0, opacity: 1, filter: "none", rotateX: 0 });
      return;
    }

    gsap.set(words, { yPercent: 100, opacity: 0, filter: "blur(8px)", rotateX: 45 });
    gsap.set(body, { opacity: 0, y: 24 });

    var mm = gsap.matchMedia();

    /* Desktop: pinned and scrubbed — the signature moment. */
    mm.add(DESKTOP, function () {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#missionPin",
          start: "top top",
          end: "+=125%",
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 1
        }
      });

      tl.to(words, {
        yPercent: 0,
        opacity: 1,
        filter: "blur(0px)",
        rotateX: 0,
        duration: 0.9,
        ease: EASE.out,
        stagger: 0.3
      }, 0)
        .to(glow, { opacity: 0.35, scale: 1.4, duration: 4.2, ease: "none" }, 0)
        .to(body, { opacity: 1, y: 0, duration: 1.1, ease: EASE.out }, 3.3)
        .to([type, body], { scale: 0.94, opacity: 0.15, duration: 1.3, ease: EASE.inOut }, 5.2);
    });

    /* Mobile: same reveal, unpinned, triggered rather than scrubbed. */
    mm.add("(max-width: 1023px)", function () {
      gsap.to(words, {
        yPercent: 0,
        opacity: 1,
        filter: "blur(0px)",
        rotateX: 0,
        duration: 0.9,
        ease: EASE.out,
        stagger: 0.055,
        scrollTrigger: { trigger: type, start: "top 78%", once: true }
      });
      gsap.to(glow, {
        opacity: 0.3,
        scale: 1.2,
        duration: 2,
        ease: EASE.soft,
        scrollTrigger: { trigger: type, start: "top 80%", once: true }
      });
      gsap.to(body, {
        opacity: 1, y: 0, duration: 1, ease: EASE.out,
        scrollTrigger: { trigger: body, start: "top 88%", once: true }
      });
    });
  }

  /* ──────────────────────────────────────────── 12 · PILLARS ── */
  function initPillars() {
    var pin = $("#pillarsPin");
    var track = $("#pillarsTrack");
    var video = $("#pillarsVideo");
    var media = $(".pillars__media");
    var pillars = $$(".pillar");
    var idx = $$(".pidx");
    if (!pin || !track) return;

    var scrubbable = false;
    guardVideo(video, media, {
      timeout: 3400,
      onReady: function () { scrubbable = true; },
      onFallback: function () { scrubbable = false; initSequenceFallback(); }
    });
    lazyLoadVideo(video);

    if (REDUCED) return;

    /* Declared before the pin is created: ScrollTrigger can fire onToggle
       during setup when the page loads already scrolled into this section,
       and a later initialiser would wipe that out. */
    var FRAME = 1 / 24;
    var targetTime = 0, currentTime = 0;
    var lastFrame = -1;
    var pinActive = false;

    var mm = gsap.matchMedia();

    mm.add(DESKTOP, function () {
      var distance = function () { return track.scrollWidth - window.innerWidth; };

      var st = ScrollTrigger.create({
        trigger: pin,
        start: "top top",
        /* Shorter than the track is wide: the pillars travel further per pixel
           scrolled, so the section reads as paced rather than sticky. */
        end: function () { return "+=" + distance() * 0.6; },
        onToggle: function (self) { pinActive = self.isActive; },
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: function (self) {
          gsap.set(track, { x: -distance() * self.progress });

          var active = Math.min(pillars.length - 1, Math.floor(self.progress * pillars.length + 0.15));
          idx.forEach(function (n, i) { n.classList.toggle("is-active", i === active); });

          if (scrubbable && video.duration) targetTime = self.progress * video.duration;
        }
      });

      pillars.forEach(function (p) {
        gsap.from($(".pillar__title", p), {
          opacity: 0, y: 30, duration: 0.9, ease: EASE.out,
          scrollTrigger: { trigger: pin, start: "top top", once: true }
        });
      });

      return function () { gsap.set(track, { x: 0 }); st.kill(); };
    });

    /* Mobile: stacked, simple reveals. */
    mm.add("(max-width: 1023px)", function () {
      pillars.forEach(function (p) {
        gsap.from(p, {
          opacity: 0, y: 48, duration: 1, ease: EASE.out,
          scrollTrigger: { trigger: p, start: "top 82%", once: true }
        });
      });
    });

    /* Lerped video scrub.

       Seeking is the single most expensive thing on the page: every write to
       currentTime makes the decoder seek and decode. The clip is 24fps, so a
       write finer than 1/24s cannot change what is on screen — it is wasted
       work. Writes are therefore quantised to the frame grid, issued only when
       the frame index actually changes, and never while a previous seek is
       still in flight.

       During a fast scrub this changes little, because most ticks genuinely
       advance a frame. It matters when the scroll slows or stops — the lerp
       keeps making sub-frame movements, and the old sub-frame threshold kept
       seeking for them. Measured over a nudge-then-stop: 38 seeks (29 of them
       landing on a frame already displayed) became 9, for the same 9 frames. */
    gsap.ticker.add(function () {
      if (!pinActive || !scrubbable || !video || !video.duration) return;

      currentTime += (targetTime - currentTime) * 0.16;

      var frameIndex = Math.round(currentTime / FRAME);
      if (frameIndex === lastFrame) return;
      if (video.seeking) return;

      lastFrame = frameIndex;
      try { video.currentTime = Math.min(frameIndex * FRAME, video.duration - FRAME); } catch (e) {}
    });

    /* Image-sequence fallback: used only when the frames are present. */
    function initSequenceFallback() {
      var first = new Image();
      first.src = "assets/seq/pillars-0001.webp";
      first.onload = function () { buildSequence(); };
      first.onerror = function () { /* no frames on disk — poster stands in */ };

      function buildSequence() {
        var TOTAL = 60;
        var canvas = document.createElement("canvas");
        canvas.className = "pillars__video";
        canvas.setAttribute("aria-hidden", "true");
        media.insertBefore(canvas, media.firstChild);
        media.classList.remove("is-static");

        var ctx = canvas.getContext("2d");
        var frames = [];
        var loaded = 0;

        function size() {
          var dpr = Math.min(window.devicePixelRatio || 1, 2);
          canvas.width = Math.round(media.offsetWidth * dpr);
          canvas.height = Math.round(media.offsetHeight * dpr);
        }
        size();
        window.addEventListener("resize", size);

        function draw(i) {
          var img = frames[Math.max(0, Math.min(TOTAL - 1, i))];
          if (!img || !img.complete) return;
          var s = Math.max(canvas.width / img.width, canvas.height / img.height);
          var w = img.width * s, h = img.height * s;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);
        }

        function load(i, eager) {
          var img = new Image();
          img.src = "assets/seq/pillars-" + String(i + 1).padStart(4, "0") + ".webp";
          img.onload = function () { if (++loaded === 1) draw(0); };
          frames[i] = img;
          if (!eager) return;
        }

        for (var i = 0; i < 12; i++) load(i, true);
        var idle = window.requestIdleCallback || function (fn) { return setTimeout(fn, 200); };
        idle(function () { for (var j = 12; j < TOTAL; j++) load(j, false); });

        ScrollTrigger.create({
          trigger: pin,
          start: "top top",
          end: function () { return "+=" + (track.scrollWidth - window.innerWidth) * 0.72; },
          scrub: true,
          onUpdate: function (self) { draw(Math.round(self.progress * (TOTAL - 1))); }
        });
      }
    }
  }

  /* ────────────────────────────────────────────── 13 · STORY ── */
  function initStory() {
    var spine = $("#spine");
    var items = $$(".tl");
    if (!items.length) return;

    if (REDUCED) return;

    if (spine) {
      gsap.to(spine, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "#timeline",
          start: "top 80%",
          end: "bottom 70%",
          scrub: true
        }
      });
    }

    items.forEach(function (item, i) {
      var card = $(".tl__card", item);
      var node = $(".tl__node", item);
      var fromX = window.matchMedia(DESKTOP).matches ? (i % 2 === 0 ? -48 : 48) : 32;

      gsap.timeline({
        scrollTrigger: { trigger: item, start: "top 78%", once: true }
      })
        .fromTo(node, { scale: 0 }, { scale: 1, duration: 0.6, ease: EASE.out })
        .fromTo(node,
          { boxShadow: "0 0 0 0 rgba(139,92,246,.55)" },
          { boxShadow: "0 0 0 16px rgba(139,92,246,0)", duration: 1.2, ease: EASE.out }, "<")
        .fromTo(card,
          { opacity: 0, x: fromX },
          { opacity: 1, x: 0, duration: 1.1, ease: EASE.out }, "<0.05");
    });
  }

  /* ─────────────────────────────────────── 14 · CAPABILITIES ── */
  function initCaps() {
    var caps = $$(".cap");
    if (!caps.length) return;

    if (!REDUCED) {
      ScrollTrigger.batch(caps, {
        start: "top 86%",
        once: true,
        onEnter: function (batch) {
          gsap.fromTo(batch,
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, duration: 1.1, ease: EASE.out, stagger: 0.08 });
        }
      });
    }

    if (!HOVERABLE) return;

    /* One rAF for all cards. The rect is measured on enter and on resize
       rather than on every move, so a pointer event costs no layout read
       and no repaint — only a compositor transform. */
    var pending = null;
    var frame = null;

    function flush() {
      frame = null;
      if (!pending) return;
      pending.glow.style.transform =
        "translate3d(" + pending.x + "px," + pending.y + "px,0)";
      pending = null;
    }

    caps.forEach(function (cap) {
      var glow = $(".cap__glow", cap);
      if (!glow) return;
      var rect = null;

      function measure() { rect = cap.getBoundingClientRect(); }

      cap.addEventListener("pointerenter", measure, { passive: true });
      window.addEventListener("resize", function () { rect = null; }, { passive: true });

      cap.addEventListener("pointermove", function (e) {
        if (!rect) measure();
        pending = { glow: glow, x: e.clientX - rect.left, y: e.clientY - rect.top };
        if (!frame) frame = requestAnimationFrame(flush);
      }, { passive: true });
    });
  }

  /* ─────────────────────────────────────────────── 15 · WORK ── */
  function initWork() {
    if (REDUCED) return;

    var cards = $$(".card");
    if (cards.length) {
      ScrollTrigger.batch(cards, {
        start: "top 88%",
        once: true,
        onEnter: function (batch) {
          gsap.fromTo(batch,
            { clipPath: "inset(0 0 100% 0)", opacity: 0.4 },
            {
              clipPath: "inset(0 0 0% 0)",
              opacity: 1,
              duration: 1.2,
              ease: EASE.out,
              stagger: 0.06
            });
        }
      });
    }

    var rows = $$(".row");
    if (rows.length) {
      ScrollTrigger.batch(rows, {
        start: "top 92%",
        once: true,
        onEnter: function (batch) {
          gsap.fromTo(batch,
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.9, ease: EASE.out, stagger: 0.05 });
        }
      });
    }

    $$(".sec-head .line-inner").forEach(function (el) {
      gsap.fromTo(el,
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1.2,
          ease: EASE.out,
          scrollTrigger: { trigger: el.closest(".sec-head"), start: "top 85%", once: true }
        });
    });
  }

  /* ────────────────────────────────────── 16 · CREDENTIALS ── */
  function initCreds() {
    if (REDUCED) return;
    var rows = $$(".creds__list li");
    if (!rows.length) return;

    ScrollTrigger.batch(rows, {
      start: "top 92%",
      once: true,
      onEnter: function (batch) {
        gsap.fromTo(batch,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.8, ease: EASE.out, stagger: 0.04 });
      }
    });
  }

  /* ──────────────────────────────────────────── 17 · FINAL CTA ── */
  function initCta() {
    var video = $("#ctaVideo");
    var media = $(".cta__media");
    var glow = $("#ctaGlow");
    var mail = $("#mailto");
    var toast = $("#toast");

    guardVideo(video, media, { timeout: 3400 });
    lazyLoadVideo(video);

    if (video && !LIGHT_DATA && !REDUCED) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { video.play().catch(function () {}); }
          else { try { video.pause(); } catch (err) {} }
        });
      }, { threshold: 0.15 });
      io.observe(video);
    }

    if (!REDUCED) {
      gsap.fromTo(".cta__title .line-inner",
        { yPercent: 110 },
        {
          yPercent: 0, duration: 1.3, ease: EASE.out, stagger: 0.09,
          scrollTrigger: { trigger: ".cta", start: "top 62%", once: true }
        });

      gsap.fromTo([".cta__sub", "#mailto", ".cta__row"],
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1.1, ease: EASE.out, stagger: 0.1,
          scrollTrigger: { trigger: ".cta", start: "top 55%", once: true }
        });

      if (glow) {
        gsap.to(glow, {
          opacity: 0.3,
          duration: 6,
          ease: EASE.soft,
          yoyo: true,
          repeat: -1
        });
      }
    }

    /* The mail client opens AND the address lands on the clipboard, so the
       CTA works for visitors with no mail client configured.               */
    if (mail && toast) {
      mail.addEventListener("click", function () {
        var address = "jihadismasarani@gmail.com";
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(address).catch(function () {});
        }
        toast.classList.add("is-on");
        window.setTimeout(function () { toast.classList.remove("is-on"); }, 2000);
      });
    }
  }

  /* ───────────────────────────────────────────── 18 · FOOTER ── */
  function initFooter() {
    var word = $("#footWord");
    var top = $("#backTop");

    if (word && !REDUCED) {
      gsap.fromTo(word,
        { xPercent: -6 },
        {
          xPercent: 0,
          ease: "none",
          scrollTrigger: { trigger: ".footer", start: "top bottom", end: "bottom bottom", scrub: true }
        });
    }

    if (top) {
      top.addEventListener("click", function () {
        if (lenis) lenis.scrollTo(0, { duration: 2.0 });
        else window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  /* ──────────────────────────────────────────── 19 · MAGNETIC ── */
  function initMagnetic() {
    if (!HOVERABLE || REDUCED) return;

    $$("[data-magnetic]").forEach(function (el) {
      el.addEventListener("pointermove", function (e) {
        var r = el.getBoundingClientRect();
        var dx = e.clientX - (r.left + r.width / 2);
        var dy = e.clientY - (r.top + r.height / 2);
        gsap.to(el, {
          x: Math.max(-14, Math.min(14, dx * 0.22)),
          y: Math.max(-14, Math.min(14, dy * 0.22)),
          duration: 0.4,
          ease: EASE.out
        });
      });
      el.addEventListener("pointerleave", function () {
        gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "power3.out" });
      });
    });
  }

  /* ───────────────────────────────────────────── 20 · RESIZE ── */
  function initResize() {
    var t = null;
    var wasDesktop = window.matchMedia(DESKTOP).matches;

    window.addEventListener("resize", function () {
      window.clearTimeout(t);
      t = window.setTimeout(function () {
        var isDesktop = window.matchMedia(DESKTOP).matches;
        if (isDesktop !== wasDesktop) {
          wasDesktop = isDesktop;
          ScrollTrigger.refresh();
        } else {
          ScrollTrigger.refresh();
        }
      }, 250);
    });
  }

  /* ──────────────────────────────────────────────── 21 · BOOT ── */
  function boot() {
    if (!window.gsap || !window.ScrollTrigger) {
      // Without GSAP the markup still reads correctly — reveal everything.
      document.documentElement.classList.remove("js-enabled");
      var pre = $("#preloader");
      if (pre) pre.style.display = "none";
      document.body.classList.remove("is-locked");
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ limitCallbacks: true, ignoreMobileResize: true });

    initLenis();
    initCursor();
    initHeader();
    initNav();
    initHero();
    initStats();
    initMission();
    initPillars();
    initStory();
    initCaps();
    initWork();
    initCreds();
    initCta();
    initFooter();
    initMagnetic();
    initResize();

    initPreloader(function () {
      if (REDUCED) {
        gsap.set(".hero__title .line-inner", { yPercent: 0 });
        gsap.set([".hero__kicker", ".hero__sub", ".hero__cta", ".hero__scroll"], { opacity: 1, y: 0 });
      } else {
        heroIntro();
      }
    });

    window.addEventListener("load", function () {
      ScrollTrigger.refresh();
      // A deep link lands before the pins exist, so the native hash jump is
      // off by the pinned spacing. Re-seek once the layout is final.
      if (window.location.hash) {
        var target = document.querySelector(window.location.hash);
        if (target) window.setTimeout(function () { scrollTo(target, -80); }, 120);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
