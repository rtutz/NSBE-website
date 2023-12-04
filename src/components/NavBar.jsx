import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import logo from '../assets/nsbe-logo.png';
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
    <img src={logo} alt="" className='logo-img' style={{ maxWidth: '20rem', maxHeight: '20rem' }} />

    </div>
    <div className='optionsNavigation text-palette-400'>
      <ScrollLink
        to="homepage"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        onClick={() => handleClick("homepage")}
      >
        <p className={getLinkStyle("homepage")}>Home</p>
      </ScrollLink>

      <ScrollLink
        to="about"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        onClick={() => handleClick("about")}
      >
        <p className={getLinkStyle("about")}>About Us</p>
      </ScrollLink>

      <ScrollLink
        to="faq"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        onClick={() => handleClick("faq")}
      >
        <p className={getLinkStyle("faq")}>FAQ</p>
      </ScrollLink>

      {/* Uncomment the section below if you want a Sponsors link */}
      {/* <ScrollLink
        to="sponsors"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        onClick={() => handleClick("sponsors")}
      >
        <p className={getLinkStyle("sponsors")}>Sponsors</p>
      </ScrollLink> */}
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