import './globals.css';
import { Big_Shoulders, Karla, Martian_Mono } from 'next/font/google';
import Rail from '../components/Rail';

const display = Big_Shoulders({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
});
const body = Karla({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});
const data = Martian_Mono({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-data',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://groovan.org'),
  title: {
    default: 'groovan.org — two vans, one shed',
    template: '%s · groovan.org',
  },
  description:
    'The public record of restoring two vintage vans: a finished Chevrolet G-series shorty in sunburst livery, and a Ford Econoline currently apart in a corrugated steel shed.',
  openGraph: {
    title: 'groovan.org — two vans, one shed',
    description:
      'One person, two vintage vans, a dirt floor and a lot of masking tape. Dated work log, parts pegboard, and how they got here.',
    url: 'https://groovan.org',
    siteName: 'groovan.org',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#17110c',
};

const CONTRACT = `<!--
impeccable direction contract · seed 66ee0531 · read mode
THESIS: The site is the shed. Corrugated steel is the page grid, the open door
is the light source, and the vans are the only saturated things on screen. It
refuses the category default: kraft-paper "vintage garage" with a hero photo
and a reverse-chron card feed.
OWN-WORLD: Deep chocolate-brown ground under vertical galvanized ribbing at a
46px pitch; faded shed teal and oxide red as structure; content on cream
daylight panels with hard sharp corners; labels are punched shelf tags and
chalk marks; every number tabular. Livery yellow/orange/rust/cocoa appear only
where a van does.
STORY: A visitor understands there are two specific vans, which one is finished
and which one is apart, exactly what has been done to each and when, and that
the unknowns are stated as unknowns rather than guessed.
FIRST VIEWPORT: Full-height dark frame; two door leaves swing back off a lit
rectangle holding the drawn sunburst livery; the wordmark and the one-line
thesis sit on the dark left; two shelf tags name the bays below the fold line.
FORM: The shed — candidate 5 of the grounded list, assigned by seed 66ee0531.
FINISH: unreviewed and undocumented is unfinished; this build ends with the
finish review, the verdict, and DESIGN.md
-->`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${data.variable}`}>
      <body>
        <div hidden dangerouslySetInnerHTML={{ __html: CONTRACT }} />
        <a href="#main" className="skip">
          Skip to content
        </a>
        <Rail />
        <main id="main">{children}</main>
        <footer className="floor">
          <div className="wrap floor-in">
            <p className="stencil floor-mark">
              groovan.org — two vans, one shed, one person with a wire wheel
            </p>
            <p className="stencil dim floor-note">
              Nothing here is for sale. Parts leads and corrections welcome at{' '}
              <span className="chalk">add your address</span>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
