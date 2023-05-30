import { Link } from 'react-router-dom';
import logo from '../assets/B.png';

function Header() {
  return (
    <nav>
      <Link to="/">
        <ul className="logo-block">
          <li>
            <img className="logo" src={logo} alt="Bala Blogs" />
          </li>
          <li>Bala Learns To Code</li>
        </ul>
      </Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
export default Header;
