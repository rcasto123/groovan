import LogList from './LogList';

export const metadata = {
  title: 'Work log',
  description:
    'Every dated entry on both vans — what was done, what went wrong, and what is still waiting on a part.',
};

export default function LogPage() {
  return (
    <>
      <section className="head corrugate">
        <div className="wrap">
          <h1 className="display">Work log</h1>
          <p className="lede">
            Newest first. Entries are not rewritten — when something turns out to be wrong, a later
            entry says so and the original stays where it is.
          </p>
        </div>
      </section>
      <LogList />
    </>
  );
}
