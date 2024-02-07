import { HashLink as Link } from 'react-router-hash-link';
import logo from '../assets/nsbe-logo.png';
import mlhLogo from '../assets/mlh-trust-badge-white-2024.png';
import { useMediaQuery } from 'react-responsive';

// eslint-disable-next-line react/prop-types
const NavBar = ({activeLink, setActiveLink}) => {
  
  const isSmallScreen = useMediaQuery({ query: '(max-width: 600px)' });

  const handleClick = (link) => {
    setActiveLink(link);
    smoothScrollTo(link);
  };

  const getLinkStyle = (link) => activeLink === link ? 
    'border-b-2 border-palette-100 text-palette-800' : 
    'hover:border-b-2 hover:border-palette-100 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110';

  const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="navbar">
      <div className="logo ml:0 sm:ml-4">
        <img src={logo} alt="" className='logo-img sm:max-w-xs' />
      </div>
      {
        isSmallScreen ? (
          <>
          </>
        ) : (
          <div className='optionsNavigation text-palette-400'>
           {['homepage', 'about', 'FAQ', "sponsors"].map((item) => (
             // eslint-disable-next-line react/jsx-key
             <Link key={item} smooth to={`#${item}`} onClick={() => handleClick(item)}>
              <p className={getLinkStyle(item)}>{item}</p>
             </Link>
           ))}
          </div>
        )
      }
      <div className="mlhLogoAndApply flex">
        <div id="mlhlogo">
        <img src={mlhLogo} alt="" className={`logo-img ${isSmallScreen ? 'w-20' : 'w-32'} mr-5`} id='mlh-logo-img' />
        </div>
      </div>
    </div>
  )
}

export default NavBar;