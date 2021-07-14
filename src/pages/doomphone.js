import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/fontawesome-free-solid';
import doomTitle from './doomphone/doom-title.png';
import doomphone1 from './doomphone/doomphone1.png';

function LinkScrollToElement({ elementId, children }) {
  function onElementClicked(e) {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();

    const elem = document.getElementById(elementId);
    if (elem) elem.scrollIntoView();
  }

  return (
    <a href="#" onClick={onElementClicked}>
      {children}
    </a>
  );
}

function BlogTitle({ title, summary, publishDate }) {
  return (
    <>
      <h2 style={{ textDecoration: 'none', marginBottom: '0.25em' }}>
        <Link to="/">Neil's Place</Link> / {title}
      </h2>
      <p style={{ margin: '0' }}>{summary}</p>
      <span style={{ fontStyle: 'italic', fontSize: '0.7em' }}>
        Published {publishDate}
      </span>
    </>
  );
}

function CenterImg({ src, alt }) {
  return (
    <div style={{ height: '15em', textAlign: 'center' }}>
      <img src={src} alt={alt} style={{ height: '100%', width: 'auto' }} />
    </div>
  );
}

export default function DoomPhone() {
  return (
    <div>
      <BlogTitle
        title="DoomPhone"
        summary={
          <>
            How I hacked an office telephone to play{' '}
            <a href="https://en.wikipedia.org/wiki/Doom_(1993_video_game)">
              DOOM
            </a>
            : a technical walkthrough.
          </>
        }
        publishDate="2021-07-15"
      />

      <h3>Contents</h3>
      <ol>
        <li>
          <LinkScrollToElement elementId="doomphone-background">
            Background
          </LinkScrollToElement>
        </li>
        <li>Hack the phone</li>
        <li>Make it run DOOM</li>
        <li>Conclusion</li>
      </ol>

      <CenterImg src={doomTitle} alt="DOOM logo" />

      <h3 id="doomphone-background">Background</h3>
      <p>
        In late 2017 I was a new hire on a small (&lt; 10) IT team. We generally
        had an option to take hardware for ourselves if the alternative was to
        be thrown out. Everyone in our office was issued a Polycom desk phone,
        and occasionally they were retired in favor of newer models. One
        afternoon we upgraded a user's phone, and I took my opportunity. That
        night I went home with a Polycom VXX600 and a mission to make it run
        DOOM.
      </p>
      <p>
        I spent a couple weeks probing the system for exploits. The phone has
        but ultimately failed to hack it. However, I gained knowledge and
        experience — a worthy trade. I conceded, threw the phone out, and gave
        up on the venture.
      </p>
      <CenterImg src={doomphone1} alt="Polycom phone running DOOM" />
      <p>
        I'll admit, it sounds a lot easier to do than it turned out. I also have
        a tendency to underestimate difficulty.
      </p>
    </div>
  );
}
