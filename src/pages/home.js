import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <>
      <h2>Neil's Place</h2>
      <p>
        Hey there welcome to my place, thanks for stopping by. I'm a software engineer by day; currently building the
        future of cannabis with <a href="https://growflow.com">@GrowFlow</a>. By night I identify as your friendly
        hacker. Check out some of my projects 👇🏻
      </p>
      <h3>My Work</h3>
      <ul>
        <li>
          <Link to="/doomphone">github/DoomPhone</Link> — An office phone I hacked to run Doom
        </li>
        <li>
          <a href="https://github.com/NeilBostian/os">github/os</a> — A toy operating system in C++
        </li>
        <li>
          <a href="https://github.com/NeilBostian/x86-quine">github/x86-quine</a> — A quine written in x86/64 assembly
          language
        </li>
        <li>
          <a href="http://store.steampowered.com/app/446770">steam/skeet</a> — A VR skeet shooting game built with
          Unity3d
        </li>
      </ul>
      <h3>Find Me</h3>
      <ul>
        <li>
          <span>
            <FontAwesomeIcon fixedWidth={true} icon={faTwitter} />
          </span>{' '}
          <a href="https://twitter.com/neilbostian" target="_blank">
            @NeilBostian
          </a>{' '}
          — 💌 DMs open
        </li>
        <li>
          <span>
            <FontAwesomeIcon fixedWidth={true} icon={faGithub} />
          </span>{' '}
          <a href="https://github.com/neilbostian" target="_blank">
            @NeilBostian
          </a>{' '}
          — 🧑🏻‍💻 Toss me a follow to see what I'm up to
        </li>
      </ul>
      <h3>About Me</h3>
      <p>
        On the daily I work with JS and C#. My skills range from front-end html/css/js to back-end graphql and
        webservers to databases and devops. I work with all members of an organization to solve problems and build
        features.
      </p>
      <h4>Neil Trivia</h4>
      <ul>
        <li>
          I love regex, especially{' '}
          <a href="https://regexcrossword.com/" target="_blank">
            regex crossword puzzles
          </a>
        </li>
        <li>I come from a family of engineers! You may stumble upon them if you look hard enough 😉</li>
        <li>My favorite language is C#</li>
        <li>I'm from New York [State, not City]</li>
        <li>
          I broke my arm as a child and have titanium plates screwed into my left{' '}
          <a href="https://www.mayoclinic.org/diseases-conditions/broken-arm/multimedia/arm-bones/img-20007018">
            radius and ulna
          </a>
          . 🦾
        </li>
      </ul>
    </>
  );
}
