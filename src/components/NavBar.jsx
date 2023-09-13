import { BrowserRouter as Router} from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

function NavBar() {
    return (
    <Router>
      <Link to="#about">
        services
      </Link>

    </Router>
    )
}

export default NavBar;