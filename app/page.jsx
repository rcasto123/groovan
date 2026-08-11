import Link from 'next/link';
import Sunburst from '../components/Sunburst';
import PhotoPlate from '../components/PhotoPlate';
import Icon from '../components/Icon';
import { vans } from '../data/vans';
import { log, resultLabel } from '../data/log';

const fmt = (iso) =>
  new Date(iso + 'T12:00:00').toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

export default function Home() {
  const latest = log.slice(0, 3);

  return (
    <>
      {/* ---- the doorway ------------------------------------------------- */}
      <section className="doorway corrugate" aria-labelledby="thesis">
        <div className="doorway-light">
          <Sunburst spin={-6} />
          <div className="doorway-glow" />
        </div>

        <div className="leaf leaf--l corrugate" aria-hidden="true" />
        <div className="leaf leaf--r corrugate" aria-hidden="true" />

        <div className="wrap doorway-copy">
          <h1 id="thesis" className="display">
            Two vans.
            <br />
            One shed.
          </h1>
          <p className="lede">
            One is finished and wears a sunburst. One is nose-in under the steel with its floor
            out. This is the whole record of both — what was done, what it cost, and what is still
            wrong.
          </p>
          <div className="doorway-cta">
            <Link href="/log/" className="btn">
              Read the work log <Icon name="arrow" size={16} />
            </Link>
            <Link href="/parts/" className="btn btn--ghost">
              What is in them
            </Link>
          </div>

          {/* the two bays, named on the tags that hang off them */}
          <ul className="bay-tags">
            {vans.map((v) => (
              <li key={v.slug}>
                <a href={`#van-${v.slug}`} className="tag tag--bay">
                  {v.plate}
                  <em>{v.statusLabel}</em>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- the bays ---------------------------------------------------- */}
      <section className="bay" aria-labelledby="bays">
        <div className="wrap">
          <h2 id="bays" className="h2 bay-head">
            The two of them
          </h2>
          <div className="bays">
            {vans.map((v, i) => (
              <article key={v.slug} id={`van-${v.slug}`} className={`van van--${v.status}`}>
                <PhotoPlate
                  src={v.photo}
                  alt={v.photoAlt}
                  file={v.photo.split('/').pop()}
                  spin={i === 0 ? -6 : 4}
                  flip={i === 1}
                  focus={v.focus}
                  caption={v.photoAlt.split(',')[0]}
                />
                <div className="van-body lit">
                  <p className="stencil van-plate">{v.plate}</p>
                  <h3 className="h3">
                    {v.year}{' '}
                    {v.yearDraft && <span className="chalk">year?</span>} {v.name}
                  </h3>
                  <p className={`status status--${v.status}`}>
                    <Icon name={v.status === 'done' ? 'win' : 'wrench'} size={15} />
                    {v.statusLabel}
                  </p>
                  <p>{v.blurb}</p>
                  <ul className="swatches" aria-label="Colours on this van">
                    {v.livery.map((c) => (
                      <li key={c} style={{ background: c }}>
                        <span className="num">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---- the workbench ----------------------------------------------- */}
      <section className="bay bench" aria-labelledby="bench">
        <div className="wrap">
          <div className="bench-head">
            <h2 id="bench" className="h2">
              Off the bench
            </h2>
            <Link href="/log/" className="tag">
              All {log.length} entries
            </Link>
          </div>
          <ol className="strip">
            {latest.map((e) => (
              <li key={e.id} className={`entry entry--${e.result}`}>
                <p className="stencil entry-meta">
                  <span className="num">{e.id}</span>
                  <time dateTime={e.date}>{fmt(e.date)}</time>
                  <span className="entry-van">{e.van}</span>
                </p>
                <h3 className="h3">{e.title}</h3>
                <p className="dim">{e.body}</p>
                <p className={`verdict verdict--${e.result}`}>
                  <Icon name={e.result} size={14} />
                  {resultLabel[e.result]}
                  {e.draft && <span className="chalk">draft</span>}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---- the close --------------------------------------------------- */}
      <section className="closer" aria-labelledby="closer">
        <Sunburst spin={-4} flip opacity={0.34} />
        <div className="wrap closer-in">
          <h2 id="closer" className="display">
            Doors shut
            <br />
            at dark.
          </h2>
          <p className="lede">
            Nothing on this site is for sale and nothing on it is finished except one van. If you
            have a lead on an Econoline floor pan, that is the single most useful thing you could
            send.
          </p>
          <Link href="/story/" className="btn">
            How they got here <Icon name="arrow" size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
