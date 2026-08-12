import fs from 'node:fs';
import path from 'node:path';

/* Whether an image actually exists in /public, checked once at build time.
   Everywhere a photograph can appear, it can also be absent — so nothing
   renders a broken image, and the site stands up on the day the files land
   exactly as it does on the day before. */

export function photoExists(src) {
  try {
    return fs.existsSync(path.join(process.cwd(), 'public', src));
  } catch {
    return false;
  }
}

export const ROBOT = {
  src: '/img/chevy-robot-render.jpg',
  file: 'chevy-robot-render.jpg',
  alt: 'A generated image of a yellow and brown sunburst van standing upright as a robot, posed beside the van it transformed out of.',
  /* The doorway opening is close to square and the render is 3:2, so the
     sides get cropped. Biased right of centre to keep the robot whole; drop
     toward 50% to bring more of the van back into the frame. */
  focus: '58% 42%',
};
