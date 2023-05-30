import blogs from '../assets/blogs.json';
import Blog from './Blog.jsx';

function Home() {
  return (
    <section className="blog-links">
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </section>
  );
}
export default Home;
