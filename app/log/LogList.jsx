'use client';

import { useState } from 'react';
import Icon from '../../components/Icon';
import { log, resultLabel } from '../../data/log';
import { vans } from '../../data/vans';

const fmt = (iso) =>
  new Date(iso + 'T12:00:00').toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

const FILTERS = [['all', 'Both vans'], ...vans.map((v) => [v.slug, v.plate])];

export default function LogList() {
  const [van, setVan] = useState('all');
  const shown = van === 'all' ? log : log.filter((e) => e.van === van);

  return (
    <section className="bay" aria-label="Log entries">
      <div className="wrap">
        <div className="filters" role="group" aria-label="Filter by van">
          {FILTERS.map(([key, label]) => (
            <button
              key={key}
              type="button"
              className="tag"
              aria-pressed={van === key}
              onClick={() => setVan(key)}
            >
              {label}
            </button>
          ))}
          <span className="stencil filters-count num">
            {shown.length} {shown.length === 1 ? 'entry' : 'entries'}
          </span>
        </div>

        {shown.length === 0 ? (
          <p className="empty lit">
            Nothing logged against this van yet. That is a gap in the record, not a claim that
            nothing happened.
          </p>
        ) : (
          <ol className="ledger">
            {shown.map((e) => (
              <li key={e.id} className={`row row--${e.result}`}>
                <div className="row-rail">
                  <span className="num row-id">{e.id}</span>
                  <time className="stencil row-date" dateTime={e.date}>
                    {fmt(e.date)}
                  </time>
                  <span className="stencil row-van">{e.van}</span>
                </div>
                <div className="row-body lit">
                  <h2 className="h3">{e.title}</h2>
                  <p>{e.body}</p>
                  <p className={`verdict verdict--${e.result} verdict--on-light`}>
                    <Icon name={e.result} size={14} />
                    {resultLabel[e.result]}
                    {e.draft && <span className="chalk">draft — replace</span>}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
