// The workbench log. Newest first. Entries are additive — once an entry is
// written it does not get rewritten, it gets a later entry correcting it.
//
// Every entry below is draft:true. They exist so the page has rhythm, density
// and real states (a win, a setback, a wait-on-parts) before the true log is
// written. Replace the text, keep the shape, drop the flag.

export const log = [
  {
    id: '0006',
    date: '2026-07-19',
    van: 'econoline',
    title: 'Doors off, floor out',
    body:
      'Pulled both rear doors to get at the lower corners. The passenger side is solid. The driver side is not solid. Floor pan came out in three pieces, two of which were not supposed to be pieces.',
    result: 'setback',
    draft: true,
  },
  {
    id: '0005',
    date: '2026-06-28',
    van: 'econoline',
    title: 'Fuel tank dropped and flushed',
    body:
      'Twenty-odd years of sediment. Tank itself is sound once the varnish is out. Sender was seized; ordered a replacement rather than fight it.',
    result: 'win',
    draft: true,
  },
  {
    id: '0004',
    date: '2026-06-02',
    van: 'econoline',
    title: 'Waiting on the sender',
    body:
      'Nothing to report. The part exists, it is just not here. Spent the weekend masking the Chevy instead.',
    result: 'wait',
    draft: true,
  },
  {
    id: '0003',
    date: '2026-05-11',
    van: 'econoline',
    title: 'It moved under its own power',
    body:
      'Fresh plugs, new cap and rotor, a battery that holds. Ran rough for a minute and then settled. Backed it four feet and put it away.',
    result: 'win',
    draft: true,
  },
  {
    id: '0002',
    date: '2026-04-24',
    van: 'chevy',
    title: 'Stripe edges cut back and re-laid',
    body:
      'The rust band had lifted along the trailing edge where the sun gets it. Cut back to sound paint, re-taped, re-shot. The fan lines up again.',
    result: 'win',
    draft: true,
  },
  {
    id: '0001',
    date: '2026-03-30',
    van: 'econoline',
    title: 'Home',
    body:
      'Trailered it in and put it nose-first under the steel. First time both vans have been on the same property.',
    result: 'win',
    draft: true,
  },
];

export const resultLabel = {
  win: 'Went right',
  setback: 'Went wrong',
  wait: 'Waiting',
};
