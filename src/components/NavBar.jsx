import { HashLink as Link } from 'react-router-hash-link'
import logo from '../assets/NSBE-logo-white.png'

function NavBar() {
    return (
    <div className="navbar">
      <div  className='logo'>
        <img src={logo} alt="" width="50" className='logo-img'/>
      </div>
      <div className='optionsNavigation'>
        <Link to="#homepage">
          Home
        </Link>
        <Link to="#about">
          About Us
        </Link>
        <Link to="#faq">
          FAQ
        </Link>
        <Link to="#sponsors">
          Sponsors
        </Link>
      </div>
    </div>
    )
}

export default NavBar;