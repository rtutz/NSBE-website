import { HashLink as Link } from 'react-router-hash-link'
import logo from '../assets/NSBE-logo-white.png';
import mlhLogo from '../assets/mlh-trust-badge-white-2024.png'

function NavBar() {
    return (
    <div className="navbar">
      <div  className='logo'>
        {/* <img src={logo} alt="" className='logo-img'/> */}
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
      <div className='MLHLogoAndApply flex'>
        <div className='applyButton flex items-center'>
          Apply Now
        </div>
        <div id="mlh-logo">
          <img src={mlhLogo} alt="" className='logo-img' id='mlh-logo-img' />
        </div>

      </div>
    </div>
    )
}

export default NavBar;