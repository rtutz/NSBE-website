import PropTypes from 'prop-types';
import './ModernButton.css'; // Import the CSS file for styling

const ModernButton = ({ text }) => {
  return (
    <button className="modern-button">
      {text}
    </button>
  );
};

ModernButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ModernButton;
