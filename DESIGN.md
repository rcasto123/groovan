---
name: groovan.org
description: Two vans, one shed — a corrugated-steel record page lit through an open door.
colors:
  shed: "#17110c"
  shed-2: "#221812"
  shed-3: "#2f2119"
  shed-night: "#100c08"
  patina: "#8fb3ac"
  patina-lift: "#a9cdc6"
  patina-dim: "#5f7d78"
  oxide: "#a24438"
  timber: "#cbb84a"
  dirt: "#9a8465"
  daylight: "#f4e7cc"
  daylight-2: "#e6d4ae"
  daylight-3: "#d6c095"
  sun: "#f0b429"
  sun-hot: "#ffc949"
  ember: "#e07b26"
  rust: "#b4502a"
  cocoa: "#3a2817"
  on-shed: "#f2e5cb"
  on-shed-2: "#c2a980"
  on-shed-3: "#ab946c"
  on-light: "#241a11"
  on-light-2: "#6b5230"
  chalk-on-dark: "#d3bf99"
  chalk-on-light: "#5d4522"
  win: "#4d7f57"
  win-on-dark: "#7fb98c"
  win-on-light: "#2f6b3e"
  setback-on-dark: "#d98a7c"
  wait-on-light: "#3f6560"
  plate-neutral-bg: "#2a3a38"
  plate-win-bg: "#26401f"
  plate-win-text: "#b3d9a4"
  plate-setback-bg: "#4a231c"
  plate-setback-text: "#f0a292"
typography:
  display:
    fontFamily: "Big Shoulders, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(3.4rem, 12vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.82
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Big Shoulders, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 5.4vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.012em"
  title:
    fontFamily: "Big Shoulders, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(1.35rem, 2.4vw, 1.75rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "0.005em"
  compact:
    fontFamily: "Big Shoulders, Arial Narrow, system-ui, sans-serif"
    fontSize: "1.02rem"
    fontWeight: 800
    letterSpacing: "0.03em"
  lede:
    fontFamily: "Karla, system-ui, sans-serif"
    fontSize: "clamp(1.1rem, 1.7vw, 1.32rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Karla, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.62
  data-body:
    fontFamily: "Karla, system-ui, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.62
  label:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.14em"
    fontFeature: "tabular-nums"
  label-mid:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "0.6rem"
    fontWeight: 400
    letterSpacing: "0.14em"
    fontFeature: "tabular-nums"
  label-micro:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "0.56rem"
    fontWeight: 400
    letterSpacing: "0.14em"
    fontFeature: "tabular-nums"
  chalk:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "0.58rem"
    fontWeight: 400
    letterSpacing: "0.16em"
rounded:
  none: "0px"
  hair: "1px"
  panel: "2px"
spacing:
  hairline: "1px"
  tight: "0.6rem"
  panel: "clamp(1.3rem, 2.4vw, 1.9rem)"
  gutter: "clamp(1.15rem, 3.6vw, 2.6rem)"
  grid-gap: "clamp(1.6rem, 3vw, 2.6rem)"
  bay: "clamp(4rem, 11vw, 8.5rem)"
  rib: "46px"
components:
  button-primary:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.cocoa}"
    typography: "{typography.compact}"
    rounded: "{rounded.panel}"
    padding: "0.78rem 1.25rem"
  button-primary-hover:
    backgroundColor: "{colors.sun-hot}"
    textColor: "{colors.cocoa}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.daylight}"
    typography: "{typography.compact}"
    rounded: "{rounded.panel}"
    padding: "0.78rem 1.25rem"
  tag:
    backgroundColor: "{colors.daylight-2}"
    textColor: "{colors.on-light}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.42rem 0.72rem 0.4rem 1.35rem"
  tag-current:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.on-light}"
  tag-bay:
    backgroundColor: "{colors.daylight}"
    textColor: "{colors.on-light}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.55rem 0.9rem 0.5rem 1.45rem"
  panel-lit:
    backgroundColor: "{colors.daylight}"
    textColor: "{colors.on-light}"
    rounded: "{rounded.panel}"
    padding: "{spacing.panel}"
  van-plate:
    backgroundColor: "{colors.cocoa}"
    textColor: "{colors.sun}"
    typography: "{typography.label}"
    rounded: "{rounded.panel}"
    padding: "0.28rem 0.6rem"
  id-plate:
    backgroundColor: "{colors.plate-neutral-bg}"
    textColor: "{colors.patina}"
    rounded: "{rounded.panel}"
    padding: "0.3rem 0.55rem"
    size: "1.32rem"
  id-plate-win:
    backgroundColor: "{colors.plate-win-bg}"
    textColor: "{colors.plate-win-text}"
  id-plate-setback:
    backgroundColor: "{colors.plate-setback-bg}"
    textColor: "{colors.plate-setback-text}"
  chalk-mark:
    backgroundColor: "transparent"
    textColor: "{colors.chalk-on-dark}"
    typography: "{typography.chalk}"
    rounded: "{rounded.hair}"
    padding: "0.12rem 0.4rem"
  chalk-mark-on-light:
    textColor: "{colors.chalk-on-light}"
  pip-in:
    backgroundColor: "#1f3519"
    textColor: "#bde0ae"
    typography: "{typography.label-micro}"
    rounded: "{rounded.panel}"
    padding: "0.22rem 0.55rem"
  pip-ordered:
    backgroundColor: "#3f3110"
    textColor: "#f8c95a"
    typography: "{typography.label-micro}"
    rounded: "{rounded.panel}"
    padding: "0.22rem 0.55rem"
  pip-need:
    backgroundColor: "#431e17"
    textColor: "#f6b3a4"
    typography: "{typography.label-micro}"
    rounded: "{rounded.panel}"
    padding: "0.22rem 0.55rem"
  pip-unknown:
    backgroundColor: "#21302e"
    textColor: "#a9cdc6"
    typography: "{typography.label-micro}"
    rounded: "{rounded.panel}"
    padding: "0.22rem 0.55rem"
  part-block-in:
    backgroundColor: "rgba(38, 64, 31, 0.22)"
    rounded: "{rounded.panel}"
    padding: "0.85rem 0.95rem"
  part-block-ordered:
    backgroundColor: "rgba(74, 58, 18, 0.28)"
    rounded: "{rounded.panel}"
    padding: "0.85rem 0.95rem"
  part-block-need:
    backgroundColor: "rgba(74, 35, 28, 0.32)"
    rounded: "{rounded.panel}"
    padding: "0.85rem 0.95rem"
  part-block-unknown:
    backgroundColor: "rgba(33, 48, 46, 0.3)"
    rounded: "{rounded.panel}"
    padding: "0.85rem 0.95rem"
---

# Design System: groovan.org

## Overview

**Creative North Star: "The Shed"**

The page is the building. A vertical galvanized sheet at a fixed 46px pitch is the ground plane, an open doorway on the right is the only light source, and the two vans are the only saturated things on screen. Everything else is structure: faded shed teal, oxide-red roof trim, sun-bleached timber, dirt. Content does not sit on a surface, it sits *in the light* — cream daylight panels with hard corners, raked by a single directional wash that runs hot at the door-side edge and grubby at the far corner.

The palette is not invented. It is lifted from two photographs the owner supplied — a sunburst-liveried Chevrolet G-series shorty (golden yellow, orange, rust, chocolate over cream) and a Ford Econoline standing inside a corrugated shed (faded teal walls, oxide-red trim, bleached yellow door frame, dirt floor). That derivation is binding: a new colour has to be traceable to one of those two photographs or it does not enter the system.

The world refuses the category default — kraft-paper "vintage garage" with a stock hero photo and a reverse-chron card feed. It is loud in structure and quiet in ornament: every label is a punched shelf tag, a painted bay plate, or a chalk mark; every number is tabular; unknowns are chalked as unknown rather than styled into confidence. All materials ship as authored CSS and SVG — specular-roll ribbing, tiled fractal-noise grain, tape-line-separated sunburst wedges — because no raster imagery was available at build time. Real photographs are the intended upgrade path, and the photo slot is already built to accept them.

**Key Characteristics:**
- Deep chocolate-brown ground under vertical galvanized ribbing at a fixed 46px pitch
- One light source: the doorway, hot at the right, falling away to the left
- Cream daylight panels for all sustained reading, 2px corners at most
- Livery yellow / ember / rust / cocoa appear only where a van does
- Every number in Martian Mono, tabular-lined; every label uppercase stencil
- State is carried twice — as a chip and as its own surface tint — so it survives any viewport
- Authored SVG livery and drawn 24-grid icons — no stock imagery, no icon fonts

## Colors

A dirt-and-daylight palette pulled off two photographs: a dark, tinted-brown building; desaturated teal, oxide and timber as structure; and one hot livery family reserved for the vehicles.

### Primary
- **Livery Sun** (`{colors.sun}`): The van's golden yellow. Primary buttons, the `van` half of the wordmark, current/pressed shelf tags, system-block heads, inline `code`, focus rings, selection highlight, and the 5% row-hover tint on the pegboard. It is the loudest thing on the page and appears at most a few times per screen.
- **Livery Sun Hot** (`{colors.sun-hot}`): Hover-only lift on the primary button. Never a resting colour.
- **Ember** (`{colors.ember}`) and **Rust** (`{colors.rust}`): The middle and far bands of the sunburst, and the in-progress van status. They live in the drawn livery and in van state, nowhere else.
- **Cocoa** (`{colors.cocoa}`): The chocolate body the stripes were laid over. Text colour on Sun surfaces, background of painted bay plates and inline data emphasis, ground of the photo frame.

### Secondary — the building
- **Shed Patina** (`{colors.patina}`): Faded teal off the corrugated wall. Structural voice: section-head rules, in-panel note borders and icons, waiting-state verdicts, plate lines under page headings, van attribution.
- **Patina Lift** (`{colors.patina-lift}`): The same teal one step brighter, adopted after the finish review as the standing label colour on dark ground — pegboard column headers, the `data-label` prefixes on narrow-viewport part blocks, and the unknown pip's text. Use it, not `{colors.patina}`, wherever a small tracked label sits on the ground and must stay legible.
- **Patina Dim** (`{colors.patina-dim}`): The same teal worn thinner — default log-entry top rule, ledger van line, scrollbar thumb.
- **Oxide** (`{colors.oxide}`): The roof trim red. The doorway header, the setback log rule, and the setback verdict on light panels.
- **Timber** (`{colors.timber}`): Sun-bleached door frame. The jamb posts and sill, and the door-leaf edges. Structural only — never a text colour.
- **Dirt** (`{colors.dirt}`): The floor. The 4px band that separates the footer from the page.

### Neutral — the ground and the light
- **Shed** (`{colors.shed}`), **Shed 2** (`{colors.shed-2}`), **Shed 3** (`{colors.shed-3}`), **Shed Night** (`{colors.shed-night}`): Four steps of chocolate-brown ground, dark to darkest. Page background, bench band, table caption strip, the closing section after the light goes.
- **Daylight** / **Daylight 2** / **Daylight 3** (`{colors.daylight}`, `{colors.daylight-2}`, `{colors.daylight-3}`): The cream that falls through the door. Reading panels, shelf-tag card stock, pegboard cell text, footer wordmark.
- **On Shed / 2 / 3** (`{colors.on-shed}`, `{colors.on-shed-2}`, `{colors.on-shed-3}`): Body, secondary and tertiary text on dark. Each is tinted warm out of the ground.
- **On Light / 2** (`{colors.on-light}`, `{colors.on-light-2}`): Body and secondary text inside daylight panels.
- **Chalk** (`{colors.chalk-on-dark}` on dark, `{colors.chalk-on-light}` on cream): The annotation pair, each with a matching dashed border at ~50% alpha. Also the colour of the photo-plate pending hint, which additionally carries a scrim because it sits on the livery.

### Tertiary — state
State is a first-class colour group. Four part states and three log verdicts, each declared for every surface it can land on:

- **Part states**, as chips: **Fitted** (`part-block-in` / `pip-in`), **Ordered** (`pip-ordered`), **Needed** (`pip-need`), **Not looked at** (`pip-unknown`) — each a dark ground with tinted text from the same hue family.
- **Part states**, as surfaces: below 760px each part becomes its own block carrying a translucent tint of its own state plus a matching border — Fitted `rgba(38,64,31,.22)` on `rgba(155,200,138,.3)`, Ordered `rgba(74,58,18,.28)` on `rgba(240,180,41,.34)`, Needed `rgba(74,35,28,.32)` on `rgba(246,179,164,.36)`, Not looked at `rgba(33,48,46,.3)` on `rgba(169,205,198,.26)`. Same four semantics as the chips, translucent so the ground reads through.
- **Log verdicts**: **Went right** (`{colors.win-on-dark}` on dark, `{colors.win-on-light}` on cream, `{colors.win}` as the entry's top rule), **Went wrong** (`{colors.setback-on-dark}` on dark, `{colors.oxide}` on cream and as the rule), **Waiting** (`{colors.patina}` on dark, `{colors.wait-on-light}` on cream, `{colors.patina-dim}` as the rule).
- **Log verdicts, as painted plates**: the ledger entry number takes the state as a filled plate — neutral `{colors.plate-neutral-bg}` / `{colors.patina}`, win `{colors.plate-win-bg}` / `{colors.plate-win-text}`, setback `{colors.plate-setback-bg}` / `{colors.plate-setback-text}`. On the ledger this plate is the only place state is coded.

### Named Rules
**The Photograph Rule.** Every colour in this system is traceable to one of the two supplied van photographs. A new colour must name which photograph it came from, or it does not get added.

**The Only Saturated Thing Rule.** Livery colours — Sun, Ember, Rust, Cocoa — appear only where a van appears: the drawn sunburst, the bay plates, van status, and the one primary call to action per screen. The building itself is desaturated by design. If a screen reads as colourful, the livery has leaked.

**The Never Grey Rule.** No neutral in this system is neutral. Every text and hairline colour is tinted out of the chocolate ground or the cream light. `#888` and its family are foreign objects here.

**The State Travels Rule.** Every state colour is declared for every surface it can reach: chip, translucent block tint plus border, top rule, painted plate, and a separate on-cream variant. Adding a state means adding all of its surfaces, not one. Never carry a dark-ground state colour onto a daylight panel — take the `-on-light` sibling.

**The Small Label Lifts Rule.** Tracked labels under ~0.6rem on the dark ground take `{colors.patina-lift}`, not `{colors.patina}`. The lift exists because the finish review found the dimmer teal failing at that size; it is a contrast floor, not a decorative alternative.

## Typography

**Display Font:** Big Shoulders (weights 600–900; fallback Arial Narrow, system-ui)
**Body Font:** Karla (fallback system-ui, sans-serif)
**Label/Data Font:** Martian Mono (400/600; fallback ui-monospace)

**Character:** A condensed industrial sign face over a plain humanist body, with a wide-set mono for anything countable. Headings behave like paint on a wall — uppercase, weight 800, set tighter than their own line-height. Body copy stays quiet so the data can be read from arm's length with dirty hands.

### Hierarchy

There are two ramps. The **prose ramp** is fluid and fully systematic; the **label/data ramp** is fixed and partly loose (see the honesty note below).

Prose ramp:
- **Display** (800, `clamp(3.4rem, 12vw, 6rem)`, line-height 0.82, `-0.02em`, uppercase): The doorway headline, inner-page titles, the closing statement. One per view.
- **Headline** (800, `clamp(2.1rem, 5.4vw, 3.5rem)`, line-height 0.9, uppercase): Section heads — the bays, the bench, story chapters.
- **Title** (800, `clamp(1.35rem, 2.4vw, 1.75rem)`, line-height 0.9, uppercase): Van names, log entry titles, spec-block heads.
- **Lede** (400, `clamp(1.1rem, 1.7vw, 1.32rem)`, line-height 1.5, max 46ch): The one sentence under a display heading. Never more than one per section.
- **Body** (400, `1.0625rem`, line-height 1.62, max 68ch): All sustained prose. Chapter panels tighten to 64ch — the panel is the measure, not the column.

Label and data ramp:
- **Compact** (`1.02rem`): The shared "one notch above data" step. Carries the display face at 800 on buttons, and the body face at 500 on the narrow-viewport part heading. The size is systematic; the face changes with context.
- **Data body** (`0.9rem`, body face): Pegboard table cells and the in-page note. Also `1.32rem` for the wordmark and the ledger entry plate (`1.1rem` below 700px).
- **Label** (`0.6875rem`, `0.14em`, uppercase, tabular): The stencil default — shelf tags, plates, captions, meta rows.
- **Label mid** (`0.6rem`, `0.14em`): Verdict lines and the wordmark's `.org`.
- **Label micro** (`0.56rem`, `0.13–0.14em`): Pegboard column headers, pips, `data-label` prefixes, the photo-plate pending hint. The floor — nothing tracked goes smaller and stays readable.
- **Chalk** (`0.58rem`, `0.16em`): Annotations and unfilled values.

**Honesty note on the small end.** Between 0.5rem and 0.7rem the build actually ships nine distinct sizes: `0.7` (skip link), `0.6875`, `0.66` (shelf tag), `0.64` (van status), `0.6`, `0.58`, `0.56`, `0.55` (bay-tag sub-line), `0.5` (swatch caption). Four of those are the system: 0.6875, 0.6, 0.58, 0.56. The other five — 0.7, 0.66, 0.64, 0.55, 0.5 — are drift, not a scale; they sit inside a 0.2rem band with no perceptual difference between neighbours and no rule assigning them. New work should pick from the four named steps and let the loose five collapse into them as those components are next touched. The mid-range steps `0.86rem` / `0.82rem` (spec values, inline data emphasis, pending filename, `code`) are two more that could be one; they are recorded here as observed, not endorsed as a scale.

### Named Rules
**The Tabular Rule.** Every number on this site is set in Martian Mono with `tabular-nums`: dates, entry IDs, part numbers, hex swatches, counts. A figure set in the body face is a bug.

**The Stencil Rule.** Every label is uppercase Martian Mono at 0.13–0.18em tracking. Body copy is never uppercase and never tracked; tracking is what makes a thing a label.

**The Painted Heading Rule.** Display and headline type is uppercase, weight 800, and set under a 1.0 line-height so multi-line headings stack like painted sign panels. Never set a heading in the body face.

**The Four Steps Rule.** The label ramp is 0.6875 / 0.6 / 0.58 / 0.56rem. Pick one of the four. A new small size is drift unless it replaces one of these everywhere.

## Layout

One centred container: `width: min(100% - gutter*2, 1240px)`, with the gutter fluid from 1.15rem to 2.6rem. Sections ("bays") breathe on `clamp(4rem, 11vw, 8.5rem)` of vertical padding.

Everything horizontal aligns to the corrugation: a **fixed 46px rib pitch** that does not scale with viewport, because a physical sheet does not. Card grids are auto-fit with hard minimums — 330px for the van bays, 320px for spec blocks, 280px for the bench strip — so columns collapse by dropping count, never by squeezing below legibility. The bench strip separates its cells with a 1px hairline of the ground colour showing through a grid gap, not with borders.

The hero closes on a **bay-tag shelf**: a wrapped row of tags under the CTAs, separated from them by a 1px hairline rule at 2.4rem, capped at 30rem so the tags read as a short hanging row rather than a nav bar.

The work log uses a two-column ledger: a 148px right-aligned rail carrying the painted entry-number plate, date and van, then the daylight panel. A 1px vertical hairline runs down the rail at x=138px connecting entries, and drops on the last row.

Story chapters run on one rhythm: above 900px **every** chapter is `0.85fr 1.15fr` with items top-aligned, and a chapter carrying no photograph puts its heading in the left column with 1.5rem of right padding rather than spanning both — so an unillustrated chapter keeps the same measure as an illustrated one instead of leaving a dead field. Below 900px chapters are a single column.

Responsive behaviour, as built:
- **≤860px** — the doorway stops being a full-height frame: the copy stacks above a 5:3 lit rectangle, the swinging door leaves are removed entirely, and the scroll cue is hidden.
- **≤780px** — navigation stays on one physical rail: tags become a nowrap horizontal scroller with hidden scrollbar and a 34px mask fade at the right edge, so a tag frays off rather than being guillotined mid-word.
- **≤760px** — the parts table stops being a table. Caption and header row go to screen-reader-only, each row becomes its own block: 1px border, 2px corners, 0.85rem/0.95rem padding, a state tint and a matching state border, the item name at `1.02rem`, cells at `0.78rem` each printing its own `data-label` prefix in micro-label patina lift. Row hover is suppressed, because a block is not a row.
- **≤700px** — the ledger collapses to one column and the rail turns into a horizontal baseline row with the plate at `1.1rem`.
- **≥900px** — the story chapter grid described above.

Anchor targets carry `scroll-margin-top: 84px` to clear the sticky rail.

### Named Rules
**The 46px Rib Rule.** The corrugation pitch is a constant. It does not respond, does not scale with type, and does not change per section. It is the one measurement the whole building agrees on.

**The Never Hide the Point Rule.** When a layout narrows, the column that carries the answer — part state, verdict, status — must survive. Reformat the container (table to state-tinted blocks, wrapped nav to one scrolling rail) rather than pushing the payload off the edge.

**The Scannable Stack Rule.** A stack of more than a dozen identical blocks is not scannable, and a legend above it promises that it is. When a table becomes blocks, each block must carry its state as a surface, not only as a chip inside it.

**The One Rhythm Rule.** All siblings in a grid share the grid, whether or not they carry media. Rearrange what goes in the columns; do not give one sibling a different column count.

## Elevation & Depth

Depth is lighting, not stacking. There is exactly one light source — the doorway — and it sits to the right; every shadow in the build falls down and away from it, wide and soft, with no hard offsets and no rim of black. Daylight panels are lifted by a single long diffuse drop plus a 1px inner white top highlight, which reads as a sheet catching the sun on its leading edge rather than as a floating card. The panel's own surface carries a 108° raking wash: near-white at the door-side corner, ambered and dusty at the far corner.

The dark ground layers tonally instead: shed → shed-2 (the bench band) → shed-night (the closer and table caption), separated by 1px hairlines at 14% cream. The doorway itself is depth without shadow — an inset dark vignette in the opening, a screen-blend radial glow, and two door leaves rotating on a 1500px perspective.

Alongside shadow there is a **scrim system**: translucent blacks and browns used to seat text on a surface it does not own. They are lighting values, not palette entries, and every one of them is recorded in the sidecar's `scrims` list — the doorway jamb grime, the closer's left-to-right darkening fan, the photo-plate wash, the pending-hint chip's `rgba(23,17,12,.72)` backing, and the two text shadows on the hero. A scrim always names what it protects.

### Shadow Vocabulary
- **Daylight lift** (`box-shadow: 0 26px 60px -28px rgba(0,0,0,0.85), 0 2px 0 rgba(255,255,255,0.12) inset`): The only elevation on a cream panel.
- **Sun bloom** (`box-shadow: 0 10px 26px -14px rgba(240,180,41,0.9)`, hover `0 16px 30px -14px rgba(240,180,41,0.95)`): Under the primary button only — the button glows in its own colour, it does not cast a grey shadow.
- **Doorway spill** (`-40px 0 90px -20px rgba(240,180,41,0.22)`): Light leaking left out of the opening.
- **Inset seat** (`inset 0 0 0 1px rgba(0,0,0,0.5)`): Frames photo plates and the opening; a recess, not a lift.
- **Jamb vignette** (`inset 0 0 44px 10px rgba(23,17,12,0.55)`): Darkness gathering inside the door frame.
- **Ghost border** (`inset 0 0 0 1px`): How ghost buttons, van plates and ledger plates draw an edge without a border property — cream at 30%, Sun at 40%, white at 9% respectively.

### Named Rules
**The One Light Source Rule.** Every shadow falls down and away from the doorway at the right. No hard offset shadows, no shadow above an element, no second light. If a shadow implies a different sun, it is wrong.

**The Glow In Its Own Colour Rule.** Accent surfaces cast their own hue (Sun glows amber), never a neutral grey drop.

**The Scrim Names Its Job Rule.** A translucent black exists to make specific text survive a specific surface. If you cannot name the text it protects, it is decoration and does not belong.

## Shapes

Corners are effectively square. The scale tops out at 2px: panels, buttons, plates, pips, part blocks and table wrappers take 2px; swatches, chalk marks and the pending hint take 1px; shelf tags take none at all. Nothing in this system is rounded, because nothing in a shed is.

Silhouette does the work instead. The shelf tag is cut with a `clip-path` chevron — a 9px point on the left, a punched 5px hole seated in it — and hangs at a slight rotation, alternating −1.1° / +0.9°, straightening to level on hover and when current. Chalk marks are dashed 1px outlines rotated −0.6°. Photo plates are 5:3 (or 4:5 tall), square-topped and joined flush to the panel below. Verdict and state colour arrive as a 3px top rule on a log card, a filled pip, a painted plate, or a tinted block with a 1px state border — never as a rounded badge.

Hairlines are 1px at 14% cream (30% for the emphasized variant); spec rows separate with a dotted rule mixed from cocoa at 28%; the note and chalk use dashed borders.

### Named Rules
**The Sharp Corner Rule.** 2px is the maximum radius anywhere in this system. There is no `md`, no `lg`, no pill. A rounded component is off-world.

**The Crooked Tag Rule.** Shelf tags hang slightly out of true and straighten when you touch them. The rotation is the affordance; do not ship a level tag at rest.

## Components

### Buttons
- **Shape:** Square-ish (2px), no border, condensed uppercase display type at 800, `1.02rem`, 0.03em tracking.
- **Primary:** Livery Sun ground, cocoa text, padding `0.78rem 1.25rem`, amber bloom beneath.
- **Hover / Focus:** Lifts 2px on a 0.22s custom ease (`cubic-bezier(0.16, 1, 0.3, 1)`), brightens to Sun Hot, bloom widens; a contained arrow icon slides 3px right. Active drops back flush. Focus-visible is a 2px Sun outline at 3px offset — the same ring site-wide.
- **Ghost:** Transparent with a cream inset hairline and daylight text; on hover fills to 8% cream and the hairline turns patina teal. Used for the second, lower-commitment action only.

### Shelf Tags (navigation, filters, bays)
- **Style:** Cream card stock (`daylight-2`), punched-hole chevron cut, stencil label, hung at ±1°.
- **States:** Hover and `aria-current="page"` / `aria-pressed="true"` both fill with Livery Sun and rotate level; hover additionally lifts 2px.
- **Bay variant** (`tag-bay`): Full daylight cream, wider padding, two lines — a plate name over a `0.55rem` status sub-line in `on-light-2` that darkens to cocoa on hover. Lives only on the hero's bay-tag shelf, naming a bay and linking to it.
- **Mobile:** One nowrap scrolling rail with a masked right edge; never a stacked menu.

### Daylight Panels (the card of this system)
- **Corner Style:** 2px.
- **Background:** Cream with the 108° raking light wash; headings inside switch to cocoa, dim text to `on-light-2`, chalk to its on-light pair.
- **Shadow Strategy:** Daylight lift only (see Elevation).
- **Border:** None — the lift and the light do the separating.
- **Internal Padding:** `clamp(1.3rem, 2.4vw, 1.9rem)`.

### Navigation (the rail)
Sticky at top with a 6px backdrop blur, corrugated ground fading to 86% opacity at its lower edge, closed by a cream hairline. The wordmark sets `groo` in daylight and `van` in Livery Sun with a `.org` in tiny tracked mono. Nav items are shelf tags; minimum rail height 62px.

### Pips, Part Blocks and Verdicts
The four part states appear twice: as a filled micro-label pip inside the wide table, and — below 760px — as the block's own translucent tint plus a matching 1px border. Log verdicts appear as a 3px top rule on the bench card, a coloured verdict line with a drawn icon, and on the ledger as a painted entry-number plate carrying the state. Every one of these has a separate value for cream ground.

### Pegboard Table
Cream-on-dark data table at `0.9rem`: patina-lift uppercase micro headers on a 6% teal wash, `daylight-3` cell text, cream row headers in the body face at weight 500, 1px hairline rows, and a 5% Sun tint on row hover. Wrapped in a 2px-cornered hairline frame that scrolls horizontally above 760px and, below it, becomes the state-tinted part blocks described in Layout.

### Photo Plate (signature)
A build-time photo slot that can never render broken. The file's presence is checked on disk at build; if it is missing, no `<img>` is emitted at all — the drawn sunburst shows through and a stencilled plate names the exact filename the slot wants, above a hint line pointing at `/public/img`. That hint carries chalk colour on a `rgba(23,17,12,.72)` scrim with 1px corners, because it is the one label that sits directly on the brightest thing on the page. When the file lands, the plate disappears. Captions are stencil, `on-shed-3`, hung under the frame.

### Sunburst (signature)
The site's only imagery, drawn rather than photographed: sixteen hard tapered wedges raking back from a low-left origin across a chocolate ground, each separated from the next by a 0.55px cocoa pinstripe standing in for fine-line masking tape, with an optional overlay-blended fractal-noise grain so it reads as sprayed paint and not as a CSS gradient. Configurable spin, flip, opacity. It is the light behind the doorway, the fill behind an empty photo slot, and the fading wash behind the closing section.

### Icons
One authored set on a 24 grid: 1.6 stroke, round caps and joins, no fills, `currentColor`. Eight glyphs — win, setback, wait, arrow, wrench (drawn as a hex nut, because an open-end wrench turns to mush at 14px), door, bolt, tag. Always `aria-hidden`, always paired with a text label.

### Chalk Mark
The system's honest-blank: a rotated, dashed-outline mono tag reading `year?`, `unfilled`, `draft`, `add your address`. It is how the build states an unknown instead of guessing one, and it swaps to its on-light pair inside daylight panels.

### Named Rules
**The Chalk Rule.** An unsupplied fact ships as a chalk mark, never as plausible-looking text. If a value is not known, the chalk shows the shape of the hole.

**The Real Datum Rule.** A stencil line above a heading (the bay plate) is permitted only when it carries an actual identifier — a licence plate, an entry ID, a system name. It is a plate, not a kicker; invented lead-in phrases do not qualify.

## Do's and Don'ts

### Do:
- **Do** keep the corrugation at a fixed 46px pitch and let every other measure align to it.
- **Do** set every number in Martian Mono with tabular figures — dates, IDs, part numbers, hex values, counts.
- **Do** put sustained reading on a cream daylight panel with the 108° raking wash; dark ground is for structure, headings and data, not for paragraphs.
- **Do** reserve Livery Sun for one primary action per screen plus van-owned surfaces.
- **Do** give a new state all of its surfaces at once: chip, block tint plus border, rule, plate, and the on-cream variant.
- **Do** use `{colors.patina-lift}` for tracked labels at 0.56–0.6rem on dark ground.
- **Do** pick a label size from the four named steps (0.6875 / 0.6 / 0.58 / 0.56rem).
- **Do** mark unknowns with a chalk mark and let the blank be visible.
- **Do** reformat containers at narrow widths (table to state-tinted blocks, wrapped nav to one scrolling rail) so state and verdict survive.
- **Do** back any label that sits on the livery with a scrim, as the photo-plate hint does.
- **Do** keep grid siblings on one column rhythm; move content between columns rather than changing the grid per item.
- **Do** draw new icons on the 24 grid at 1.6 stroke, no fill, `currentColor`.
- **Do** keep the reduced-motion path complete: the door leaves render already-open, and all transitions collapse to 0.001ms.

### Don't:
- **Don't** exceed a 2px corner radius anywhere. No pills, no `rounded-lg`, no soft cards.
- **Don't** use an untinted grey. Every neutral comes out of the chocolate ground or the cream light.
- **Don't** introduce a colour that cannot be traced to the two supplied van photographs.
- **Don't** add a tenth size to the small end of the label ramp; the five loose steps already there are drift to be collapsed, not a precedent.
- **Don't** cast a hard offset shadow, or any shadow that implies a light source other than the doorway on the right.
- **Don't** add a translucent black you cannot attach to specific text it protects.
- **Don't** spend livery colour on structure — teal, oxide, timber and dirt carry the building.
- **Don't** ship an icon font, emoji, or third-party icon package; the drawn set is the only hand on this site.
- **Don't** set body copy in uppercase or add tracking to it — tracking is what marks a label.
- **Don't** ship a stock or generic photograph; a slot with no real photo shows the drawn livery and its stencilled pending plate instead.
- **Don't** hang a shelf tag level at rest or place one on anything that is not navigation, a filter, or a bay name.
