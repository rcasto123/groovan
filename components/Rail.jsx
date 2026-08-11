'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  ['/', 'The shed'],
  ['/log/', 'Work log'],
  ['/parts/', 'Pegboard'],
  ['/story/', 'How they got here'],
];

export default function Rail() {
  const path = usePathname();
  const here = path.endsWith('/') ? path : path + '/';

  return (
    <header className="rail corrugate">
      <nav className="wrap rail-in" aria-label="Main">
        <Link href="/" className="mark">
          groo<b>van</b>
          <span>.org</span>
        </Link>
        {LINKS.map(([href, label]) => (
          <Link
            key={href}
            href={href}
            className="tag"
            aria-current={here === href ? 'page' : undefined}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
