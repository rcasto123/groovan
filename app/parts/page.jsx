import Icon from '../../components/Icon';
import { parts, specs, stateLabel } from '../../data/parts';
import { vans, vanBySlug } from '../../data/vans';

export const metadata = {
  title: 'Pegboard',
  description:
    'What is in each van, what has been replaced, what is on order, and what nobody has looked at yet.',
};

const SYSTEMS = [...new Set(parts.map((p) => p.system))];

export default function PartsPage() {
  return (
    <>
      <section className="head corrugate">
        <div className="wrap">
          <h1 className="display">What is in them</h1>
          <p className="lede">
            Specifications first, then every part by system. An em dash means the figure has not
            been read off the vehicle yet. It is not a rounding, it is a blank.
          </p>
        </div>
      </section>

      <section className="bay" aria-labelledby="specs">
        <div className="wrap">
          <h2 id="specs" className="h2 bay-head">
            Specification
          </h2>
          <div className="specs">
            {vans.map((v) => (
              <div key={v.slug} className="spec lit">
                <p className="stencil van-plate">{v.plate}</p>
                <h3 className="h3">{v.name}</h3>
                <dl className="spec-list">
                  {specs[v.slug].map(([k, val, draft]) => (
                    <div key={k} className="spec-row">
                      <dt className="stencil">{k}</dt>
                      <dd className="num">
                        {val}
                        {draft && <span className="chalk">unfilled</span>}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bay bench" aria-labelledby="parts">
        <div className="wrap">
          <h2 id="parts" className="h2 bay-head">
            Parts, by system
          </h2>

          <div className="legend">
            {Object.entries(stateLabel).map(([k, label]) => (
              <span key={k} className={`pip pip--${k}`}>
                {label}
              </span>
            ))}
          </div>

          {SYSTEMS.map((sys) => (
            <div key={sys} className="sysblock">
              <h3 className="h3 sysblock-head">
                <Icon name="wrench" size={17} /> {sys}
              </h3>
              <div className="tablewrap">
                <table className="pegtable">
                  <caption className="stencil">
                    {sys} — {parts.filter((p) => p.system === sys).length} items
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Item</th>
                      <th scope="col">Van</th>
                      <th scope="col">Part no.</th>
                      <th scope="col">Source</th>
                      <th scope="col">State</th>
                    </tr>
                  </thead>
                  <tbody>
                    {parts
                      .filter((p) => p.system === sys)
                      .map((p) => (
                        <tr key={p.item} data-state={p.state}>
                          <th scope="row">{p.item}</th>
                          <td className="stencil" data-label="Van">{vanBySlug[p.van].plate}</td>
                          <td className="num" data-label="Part no.">{p.pn}</td>
                          <td className="num" data-label="Source">{p.source}</td>
                          <td>
                            <span className={`pip pip--${p.state}`}>{stateLabel[p.state]}</span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          <p className="note">
            <Icon name="tag" size={15} /> Every part number and source on this page is a
            placeholder shaped like the real thing. Fill them from the boxes and receipts, then
            delete the <code>draft</code> flags in <code>data/parts.js</code>.
          </p>
        </div>
      </section>
    </>
  );
}
