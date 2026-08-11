/* One drawn icon set. 24-grid, 1.6 stroke, round caps, no fills — the same
   hand throughout. Nothing here is an emoji or a glyph borrowed from a font. */

const PATHS = {
  win: 'M4 12.8 9.2 18 20 6.4',
  setback: 'M6 6l12 12M18 6L6 18',
  wait: 'M12 6.6v5.9l3.7 2.2M12 3.2a8.8 8.8 0 1 0 0 17.6 8.8 8.8 0 0 0 0-17.6Z',
  arrow: 'M4 12h15.5M13.4 5.9 19.9 12l-6.5 6.1',
  // a hex nut. Reads cleanly at 14px where an open-end wrench turns to mush.
  wrench: 'M12 3.1 19.6 7.5v8.9L12 20.9 4.4 16.4V7.5ZM12 8.6a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8Z',
  door: 'M4.6 3.6h9.9v16.8H4.6zM14.5 3.6l4.9 2.1v12.6l-4.9 2.1M11.4 12.3v1.4',
  bolt: 'M13.6 3.4 5.8 13.6h5.3l-.7 7 7.8-10.2h-5.3z',
  tag: 'M3.6 3.6h7.2l9.6 9.6-7.2 7.2-9.6-9.6zM7.2 7.2h.01',
};

export default function Icon({ name, size = 18, className = '', style }) {
  const d = PATHS[name];
  if (!d) return null;
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={d} />
    </svg>
  );
}
