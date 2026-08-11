// The pegboard. What is in each van, what has been replaced, and where it
// came from. Sorted by system, not by date.
//
// state: 'in'      — fitted and working
//        'ordered' — paid for, not here
//        'need'    — known gap, not sourced
//        'unknown' — nobody has looked yet. This is a real and useful value.
//                    Do not upgrade it to a guess.
//
// Every row is draft:true. Part numbers in particular are placeholders shaped
// like part numbers; none of them was read off a box.

export const specs = {
  chevy: [
    ['Engine', '—', true],
    ['Transmission', '—', true],
    ['Wheelbase', '—', true],
    ['Wheels', 'Slotted mag, 15in', true],
    ['Tyres', 'Firestone, raised white letter', true],
    ['Paint', 'Sunburst — yellow / orange / rust over chocolate', false],
  ],
  econoline: [
    ['Engine', '—', true],
    ['Transmission', '—', true],
    ['Wheelbase', '—', true],
    ['Wheels', 'Steel, hubcaps missing', true],
    ['Tyres', '—', true],
    ['Paint', 'Factory two-tone — yellow over brown', true],
  ],
};

export const parts = [
  { system: 'Fuel', item: 'Tank sending unit', van: 'econoline', pn: 'FS-———', source: '—', state: 'ordered', draft: true },
  { system: 'Fuel', item: 'Rubber fill hose + clamps', van: 'econoline', pn: '—', source: '—', state: 'in', draft: true },
  { system: 'Fuel', item: 'Mechanical pump', van: 'econoline', pn: '—', source: '—', state: 'unknown', draft: true },
  { system: 'Ignition', item: 'Cap and rotor', van: 'econoline', pn: '—', source: '—', state: 'in', draft: true },
  { system: 'Ignition', item: 'Plugs, set of eight', van: 'econoline', pn: '—', source: '—', state: 'in', draft: true },
  { system: 'Ignition', item: 'Coil', van: 'econoline', pn: '—', source: '—', state: 'unknown', draft: true },
  { system: 'Body', item: 'Floor pan, driver side', van: 'econoline', pn: '—', source: '—', state: 'need', draft: true },
  { system: 'Body', item: 'Lower door skin, driver side', van: 'econoline', pn: '—', source: '—', state: 'need', draft: true },
  { system: 'Body', item: 'Spare tyre cover', van: 'econoline', pn: '—', source: '—', state: 'in', draft: true },
  { system: 'Body', item: 'Rear door seals, pair', van: 'econoline', pn: '—', source: '—', state: 'need', draft: true },
  { system: 'Paint', item: 'Sunburst stripe masking, 6mm fine line', van: 'chevy', pn: '—', source: '—', state: 'in', draft: true },
  { system: 'Paint', item: 'Rust band, matched', van: 'chevy', pn: '—', source: '—', state: 'in', draft: true },
  { system: 'Running gear', item: 'Slotted mag wheels, set of four', van: 'chevy', pn: '—', source: '—', state: 'in', draft: true },
  { system: 'Running gear', item: 'Hubcaps, set of four', van: 'econoline', pn: '—', source: '—', state: 'need', draft: true },
  { system: 'Electrical', item: 'Battery', van: 'econoline', pn: '—', source: '—', state: 'in', draft: true },
  { system: 'Electrical', item: 'Headlamp, passenger side', van: 'econoline', pn: '—', source: '—', state: 'unknown', draft: true },
];

export const stateLabel = {
  in: 'Fitted',
  ordered: 'Ordered',
  need: 'Needed',
  unknown: 'Not looked at',
};
