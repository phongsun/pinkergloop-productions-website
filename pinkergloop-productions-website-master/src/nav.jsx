import "./App.js";
import {Link} from 'react-router-dom';

export const Nav = () => {
    return (
        <nav>
        <ul>
          <li><Link className="link" to="/">HOME</Link></li>
          <li><Link className="link" to="/artists">ARTISTS</Link></li>
          <li><Link className="link" to="/merch">MERCH</Link></li>
          <li><Link className="link" to="/contact">CONTACT</Link></li>
        </ul>
        </nav>
    )
}