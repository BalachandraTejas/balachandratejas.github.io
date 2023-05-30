import { Link, useParams } from 'react-router-dom';
import blogs from '../assets/blogs.json';
import '../assets/Post.css';

function Post() {
  let { slug } = useParams();
  const post = blogs.find((blog) => blog.slug === slug);

  return (
    <article className="post">
      <h1>{post.title}</h1>
      {post.heroImg && (
        <header className="hero">
          <img className="hero-img" src={post.heroImg} alt={post.title} />
        </header>
      )}
      <p className="date">{post.date}</p>
      <ul className="topics">
        {post.topics.map((topic, id) => (
          <li key={id}>{topic}</li>
        ))}
      </ul>
      {post.desc.map((row) => (
        <section className="article-section" key={row.id}>
          {row.showHeading && <h3>{row.heading}</h3>}
          <p className={'row' + (row.imagePos === 'left' ? ' reverse' : '')}>
            <div className="text">{row.text}</div>
            {row.image && <img src={row.image} alt={row.heading} />}
          </p>
        </section>
      ))}
      <footer>
        <Link to="/" className="to-home">
          &lArr; Home
        </Link>
      </footer>
    </article>
  );
}
export default Post;
