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

One command, from anywhere the two files happen to live:

```bash
./scripts/add-photos.sh <chevy-photo> <econoline-photo>
```

It takes JPEG, PNG or HEIC straight off a phone, converts and resizes, names
them correctly, rebuilds, and pushes. Type the command and drag each file from
Finder into the terminal to fill in its path.

By hand instead: drop them in `public/img/` as `chevy-profile.jpg` (the Chevy,
side profile) and `econoline-shed.jpg` (the Econoline, in the shed), then run
`npm run build`. The file check runs **at build time**, so copying the files in
without rebuilding changes nothing.

The optional third file is the generated robot render. It becomes the header
image on the home page, with a "generated image, not a photograph" stamp burned
onto it — every other picture on this site is a record of something real, and
the one that is not says so on its face.

### Framing

The plates crop to a landscape window. Each van carries a `focus` value in
`data/vans.js` that decides which part of the photograph survives the crop —
`center` for the Chevy, `center 38%` for the Econoline, whose portrait shot
would otherwise crop to a picture of the dirt floor. Adjust the percentage if
the crop lands wrong; smaller means higher in the frame.

The header render has its own focus value in `lib/photos.js`, biased right of
centre to keep the robot whole in a near-square opening. Move it toward 50% to
bring more of the van back into frame.

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

## Deploys

Pushing to `main` triggers a Netlify build from this repo (`npm run build`,
publishing `out/`). The GitHub webhook and read-only deploy key that make that
work were added by hand — the Netlify API attaches build settings without
creating either, which fails at the clone step with a host key error.
