// Two vans. Anything marked draft:true renders with a visible chalk "DRAFT"
// mark on the page — it is scaffolding, not fact. Replace the value, then
// delete the draft flag. Nothing here was taken from a document; it was
// authored so the pages have shape before the real numbers exist.

export const vans = [
  {
    slug: 'chevy',
    plate: 'THE CHEVY',
    name: 'Chevrolet G-Series Shorty',
    year: '197—', // draft
    yearDraft: true,
    status: 'done',
    statusLabel: 'Finished',
    tagline: 'Sunburst livery, slotted mags, and nothing left to apologise for.',
    photo: '/img/chevy-profile.jpg',
    photoAlt:
      'A short-wheelbase Chevrolet van in profile, painted with a sunburst of golden yellow, orange and rust stripes fanning back from the front wheel over a chocolate-brown lower body.',
    livery: ['#f0b429', '#e07b26', '#b4502a', '#3a2817'],
    blurb:
      'The one that already runs. Golden yellow over chocolate, a sunburst fanning back from the front wheel, slotted mags on raised-white-letter Firestones. It is the reference: the paint the other one is aiming at, and the proof the aim is reachable.',
  },
  {
    slug: 'econoline',
    plate: 'GROOVAN',
    name: 'Ford Econoline',
    year: '198—', // draft
    yearDraft: true,
    status: 'wip',
    statusLabel: 'In the shed',
    tagline: 'Yellow over brown, spare on the door, and a long way to go.',
    photo: '/img/econoline-shed.jpg',
    photoAlt:
      'A yellow and brown Ford Econoline parked nose-in inside a corrugated metal shed, rear doors facing out, covered spare tyre mounted on the door, GROOVAN licence plate.',
    livery: ['#efc23a', '#8c6a3a', '#4a3520', '#8fb3ac'],
    blurb:
      'Nose-in under corrugated steel, doors swung open onto a dirt floor. It carries the plate the site is named after. Everything on the log from here down happens to this van.',
  },
];

export const vanBySlug = Object.fromEntries(vans.map((v) => [v.slug, v]));
