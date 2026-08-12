import PhotoPlate from '../../components/PhotoPlate';
import Sunburst from '../../components/Sunburst';
import { vans } from '../../data/vans';

export const metadata = {
  title: 'How they got here',
  description:
    'Where the two vans came from, why these two, and what the shed has to do with any of it.',
};

const [chevy, econoline] = vans;

export default function StoryPage() {
  return (
    <>
      <section className="head corrugate">
        <div className="wrap">
          <h1 className="display">How they got here</h1>
          <p className="lede">
            Two vans end up on the same dirt floor for reasons that made sense at the time. This is
            those reasons.
          </p>
        </div>
      </section>

      <article className="bay">
        <div className="wrap prose">
          <section className="chapter">
            <h2 className="h2">The plate came first</h2>
            <div className="chapter-body lit">
              <p>
                The name of this site is bolted to the back of the Econoline. <b>GROOVAN</b> was on
                the van when it arrived, and taking it off felt like a worse idea than building a
                website around it.
              </p>
              <p className="dim">
                <span className="chalk">replace</span> Write the real version here: where the plate
                came from, whether it was the previous owner&rsquo;s idea, and what the DMV thought
                about it.
              </p>
            </div>
          </section>

          <section className="chapter">
            <h2 className="h2">The Chevy</h2>
            <div className="chapter-media">
              <PhotoPlate
                src={chevy.photo}
                alt={chevy.photoAlt}
                file={chevy.photo.split('/').pop()}
                spin={-6}
                focus={chevy.focus}
                caption="The finished one. Sunburst raking back from the front wheel."
              />
            </div>
            <div className="chapter-body lit">
              <p>
                The sunburst is the whole argument. Four colours fanning back from the front wheel —
                golden yellow through orange into rust, all of it sitting on a chocolate lower body
                that hides what road salt does. Slotted mags, raised white letters.
              </p>
              <p>
                It runs, it stops, it is finished in the sense that any of these are ever finished.
                It exists on this site as the reference: proof that the paint in the plan is
                reachable, because it has already been reached once.
              </p>
              <p className="dim">
                <span className="chalk">replace</span> Year, engine, where it was found, what was
                wrong with it, who shot the paint, and how long the whole thing took.
              </p>
            </div>
          </section>

          <section className="chapter">
            <h2 className="h2">The Econoline</h2>
            <div className="chapter-media">
              <PhotoPlate
                src={econoline.photo}
                alt={econoline.photoAlt}
                file={econoline.photo.split('/').pop()}
                spin={4}
                flip
                tall
                focus={econoline.focus}
                caption="Nose-in under corrugated steel. Doors open onto a dirt floor."
              />
            </div>
            <div className="chapter-body lit">
              <p>
                Yellow over brown, spare mounted on the rear door under a black cover, and a floor
                pan that turned out to be more of a suggestion than a floor pan. It is the current
                project, and everything in the work log from entry 0001 forward happens to this van.
              </p>
              <p className="dim">
                <span className="chalk">replace</span> Year, how far it was trailered, what the
                seller claimed versus what turned up, and the moment it became obvious this was
                going to take a while.
              </p>
            </div>
          </section>

          <section className="chapter">
            <h2 className="h2">What it thinks it is</h2>
            <div className="chapter-media">
              <PhotoPlate
                src="/img/chevy-robot-render.jpg"
                alt="An AI-generated image of a yellow and brown sunburst van standing upright as a robot, posed beside the van it transformed out of."
                file="chevy-robot-render.jpg"
                spin={-6}
                synthetic
                caption="Generated, not photographed. The van has never done this."
              />
            </div>
            <div className="chapter-body lit">
              <p>
                Every other picture on this site is a record of something that exists. This one is
                not: it is a generated image, and it is here because a brown-and-yellow shorty with
                a sunburst down the side was always going to end up looking like this in somebody&rsquo;s
                head.
              </p>
              <p>
                It is stamped on its face rather than in a caption, because the whole point of the
                rest of the site is that you can trust what you are looking at.
              </p>
            </div>
          </section>

          <section className="chapter">
            <h2 className="h2">The shed</h2>
            <div className="chapter-body lit">
              <p>
                Corrugated steel, faded teal on the walls, oxide red along the roofline, a yellow
                timber door frame that has been in the sun for decades, and a dirt floor. It is not
                a workshop. It is a building that keeps rain off two vans while a person with a wire
                wheel makes slow progress on one of them.
              </p>
              <p>
                This site is built to look like that building on purpose. The ribbing behind
                everything is the wall. The cream panels are the light coming through the open door.
                The tags are the ones hanging off the shelves.
              </p>
            </div>
          </section>
        </div>
      </article>

      <section className="closer">
        <Sunburst spin={-4} flip opacity={0.34} />
        <div className="wrap closer-in">
          <h2 className="display">
            Still
            <br />
            going.
          </h2>
          <p className="lede">
            The record gets longer roughly as often as a weekend is dry and a part has arrived.
          </p>
        </div>
      </section>
    </>
  );
}
