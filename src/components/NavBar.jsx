import { BrowserRouter as Router} from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

function NavBar() {
    return (
    <div className="navbar">
      <Router>
        <Link to="#homepage">
          Home
        </Link>
        <Link to="#about">
          About Us
        </Link>
        <Link to="#faq">
          About Us
        </Link>
        <Link to="#sponsors">
          Sponsors
        </Link>

    </Router>
    </div>
    )
}

export default NavBar;