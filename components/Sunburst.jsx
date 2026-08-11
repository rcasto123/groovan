/* The livery, drawn as paint rather than as a gradient.
   The Chevy's stripes are masked and shot: hard tapered wedges raking back
   from the front wheel, each one separated from the next by a thin cocoa
   pinstripe where the fine-line tape sat, the whole thing sitting on a
   chocolate ground and carrying enough grain that it reads as a sprayed
   panel and not as a CSS effect. */

const RAYS = [
  // [start deg, end deg, colour]   0deg = straight up, sweeping clockwise
  [4, 15, '#f7d267'],
  [15, 24, '#f0b429'],
  [24, 31, '#fadd7d'],
  [31, 42, '#efa521'],
  [42, 50, '#e07b26'],
  [50, 60, '#f0b429'],
  [60, 71, '#e07b26'],
  [71, 79, '#c95f24'],
  [79, 90, '#b4502a'],
  [90, 100, '#e07b26'],
  [100, 111, '#b4502a'],
  [111, 120, '#8f3f24'],
  [120, 132, '#b4502a'],
  [132, 143, '#6d3320'],
  [143, 156, '#8f3f24'],
  [156, 172, '#4a2a19'],
];

const R = 300;

function pt(deg, r) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return [(Math.cos(rad) * r).toFixed(2), (Math.sin(rad) * r).toFixed(2)];
}

function wedge(a1, a2) {
  const [x1, y1] = pt(a1, R);
  const [x2, y2] = pt(a2, R);
  return `M0 0 L${x1} ${y1} A${R} ${R} 0 0 1 ${x2} ${y2} Z`;
}

let uid = 0;

export default function Sunburst({
  className = '',
  origin = '14% 88%',
  spin = 0,
  opacity = 1,
  flip = false,
  grain = true,
}) {
  const [ox, oy] = origin.split(' ');
  const id = `sb${++uid}`;

  return (
    <svg
      className={className}
      viewBox="-100 -100 200 200"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity,
        transformOrigin: flip ? '50% 50%' : `${ox} ${oy}`,
        transform: flip ? 'scaleX(-1)' : undefined,
      }}
    >
      <defs>
        <filter id={`${id}-grain`} x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed="7" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.085" intercept="0" />
          </feComponentTransfer>
        </filter>
      </defs>

      {/* the chocolate body the stripes were laid over */}
      <rect x="-100" y="-100" width="200" height="200" fill="#2c1e12" />

      <g transform={`translate(-72 78) rotate(${spin})`}>
        {RAYS.map(([a, b, fill], i) => (
          <path key={i} d={wedge(a, b)} fill={fill} />
        ))}
        {/* the fine-line tape edges between bands */}
        {RAYS.map(([a], i) => {
          const [x, y] = pt(a, R);
          return (
            <line
              key={`t${i}`}
              x1="0"
              y1="0"
              x2={x}
              y2={y}
              stroke="#2c1e12"
              strokeWidth="0.55"
              strokeOpacity="0.5"
            />
          );
        })}
      </g>

      {grain && (
        <rect
          x="-100"
          y="-100"
          width="200"
          height="200"
          filter={`url(#${id}-grain)`}
          style={{ mixBlendMode: 'overlay' }}
        />
      )}
    </svg>
  );
}
