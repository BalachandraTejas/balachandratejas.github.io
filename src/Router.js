import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Post from './Components/Post';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/:slug" element={<Post />} />
    </Routes>
  );
}
export default Router;
