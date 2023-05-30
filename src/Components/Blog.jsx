function Blog({ blog }) {
  return (
    <a href={`/${blog.slug}`} className="blog-link">
      <article>
        <h2>{blog.title}</h2>
        <p className="date">{blog.date}</p>
        <ul className="topics">
          {blog.topics.map((topic, id) => (
            <li key={id}>{topic}</li>
          ))}
        </ul>
      </article>

      {blog.thumbnail && (
        <aside>
          <img className="thumbnail" src={blog.thumbnail} alt={blog.title} />
        </aside>
      )}
    </a>
  );
}
export default Blog;
