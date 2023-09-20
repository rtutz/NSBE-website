import PropTypes from 'prop-types';
import './ModernButton.css'; // Import the CSS file for styling

// eslint-disable-next-line react/prop-types
const ModernButton = ({ text, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <button className="modern-button">
        {text}
      </button>
    </a>
  );
};

// eslint-disable-next-line react/prop-types
const ModernButtonInverted = ({ text, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <button className="modern-button-inverted">
        {text}
      </button>
    </a>
  );
};

ModernButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export {ModernButtonInverted, ModernButton };
