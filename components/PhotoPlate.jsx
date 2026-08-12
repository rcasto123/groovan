import fs from 'node:fs';
import path from 'node:path';
import Sunburst from './Sunburst';

/* A photo slot that is never a broken image and never needs JavaScript.
   The file's existence is checked once, at build time, so a slot with no
   photo yet emits no <img> at all — no broken-image glyph, no alt-text stub,
   just the drawn livery and a stencilled plate naming the file it wants.
   Drop the jpg in /public/img, rebuild, and the plate is gone. */

const has = (src) => {
  try {
    return fs.existsSync(path.join(process.cwd(), 'public', src));
  } catch {
    return false;
  }
};

export default function PhotoPlate({
  src,
  alt,
  file,
  caption,
  spin = 0,
  flip = false,
  tall = false,
  /* Where the van sits in the frame. The plates crop to a landscape window,
     so a portrait photograph needs to be told which part to keep — otherwise
     a shot of a van in a shed crops to a shot of a dirt floor. */
  focus = 'center',
  /* Stamps the image as generated rather than photographed. Every other
     picture on this site is a record of something that exists; anything that
     is not says so on its face, not in a caption a visitor might skip. */
  synthetic = false,
}) {
  const present = has(src);

  return (
    <figure className={`plate ${tall ? 'plate--tall' : ''}`}>
      <div className="plate-frame">
        <Sunburst spin={spin} flip={flip} grain={false} />
        {present ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            style={{ objectPosition: focus }}
          />
        ) : (
          <div className="plate-pending" role="img" aria-label={`Photo pending: ${alt}`}>
            <span className="stencil">Photo pending</span>
            <b className="num">{file}</b>
            <span className="stencil plate-pending-hint">drop it in /public/img</span>
          </div>
        )}
        {synthetic && present && (
          <p className="stencil plate-synthetic">Generated image · not a photograph</p>
        )}
      </div>
      {caption && <figcaption className="stencil plate-cap">{caption}</figcaption>}
    </figure>
  );
}
