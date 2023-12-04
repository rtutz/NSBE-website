import { HashLink as Link } from 'react-router-hash-link'
import logo from '../assets/NSBE-logo-white.png';
import mlhLogo from '../assets/mlh-trust-badge-white-2024.png';
import { useState } from 'react';

function NavBar() {
  const [activeLink, setActiveLink] = useState("homepage");

  const handleClick = (link) => {
    setActiveLink(link);
  };

  const getLinkStyle = (link) => {
    if (activeLink === link) {
      return 'border-b-2 border-palette-100 text-palette-800';
    } else {
      return 'hover:border-b-2 hover:border-palette-100 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110';
    }
  };

  return (
  <div className="navbar">
    <div  className='logo'>
      <img src={logo} alt="" className='logo-img'/>
    </div>
    <div className='optionsNavigation text-palette-400'>
      <Link to="#homepage" onClick={() => handleClick("homepage")}>
        <p className={getLinkStyle("homepage")}>Home</p>
      </Link>
      <Link to="#about" onClick={() => handleClick("about")}>
        <p className={getLinkStyle("about")}>About Us</p>
      </Link>
      <Link to="#faq" onClick={() => handleClick("faq")}>
        <p className={getLinkStyle("faq")}>FAQ</p>
      </Link>
      <Link to="#sponsors" onClick={() => handleClick("sponsors")}>
        <p className={getLinkStyle("sponsors")}>Sponsors</p>
      </Link>
    </div>
    <div className='MLHLogoAndApply flex'>
      <div id="mlhLogo" className='mr-5'>
        <img src={mlhLogo} alt="" className='logo-img' id='mlh-logo-img' />
      </div>

    </div>
  </div>
  )
}

export default NavBar;