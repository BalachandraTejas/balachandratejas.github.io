import about from '../assets/about.json';
import { Link } from 'react-router-dom';
import '../assets/about.css';

function About() {
  return (
    // ref: https://www.toptal.com/resume/vladimir-mitrovic
    <article className="about">
      <header className="about-header">
        <section>
          <h1>{about.name}</h1>
          <h5>{about.role}</h5>
          <p className="date">{about.lastUpdated}</p>
          <hr></hr>
          {about.intro.map((intro) => (
            <p key={intro.id}>{intro.text}</p>
          ))}
        </section>
      </header>
      <section>
        <p>
          <em>SKILLS:</em>
        </p>
        <ul className="topics">
          {about.skills.map((topic, id) => (
            <li key={id}>{topic}</li>
          ))}
        </ul>
      </section>

      <footer>
        <Link to="/" className="to-home">
          &lArr; Home
        </Link>
      </footer>
    </article>
  );
}
export default About;
