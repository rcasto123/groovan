# groovan.org

The public record of restoring two vintage vans: a finished Chevrolet G-series
shorty in sunburst livery, and a Ford Econoline currently apart in a corrugated
steel shed.

Live at **https://groovan.netlify.app**

## Running it

```bash
npm install
npm run dev      # http://localhost:4310
npm run build    # static export to out/
```

Next.js with `output: 'export'` — the build writes plain files, no server.

## Adding the photographs

Two slots are waiting. Drop the files in `public/img/` with these exact names:

| File | Photo |
|---|---|
| `chevy-profile.jpg` | the Chevy shorty, side profile, sunburst livery |
| `econoline-shed.jpg` | the Econoline, rear three-quarter, inside the open shed |

The check runs **at build time**, so the stencilled "PHOTO PENDING" plates only
disappear after `npm run build`. Dropping the files in alone does nothing.

## Adding content

Everything lives in three files. Nothing is fetched, there is no CMS.

- `data/log.js` — dated work entries, newest first
- `data/parts.js` — specs per van, and every part by system
- `data/vans.js` — the two vehicles

Every entry currently carries `draft: true`, which is what renders the dashed
chalk `DRAFT` / `UNFILLED` marks on the page. Replace the text with the real
thing, then delete the flag. An em dash means the figure has not been read off
the vehicle yet — it is a blank, not a rounding, and it should stay a blank
until someone actually reads it.

## Design

The direction is recorded in [DESIGN.md](DESIGN.md) and product truth in
[PRODUCT.md](PRODUCT.md). The short version: the site is the shed. Corrugated
steel is the page grid, the open door is the light source, and the vans are the
only saturated things on screen.
