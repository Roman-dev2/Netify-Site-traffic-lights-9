import PropTypes from 'prop-types';
import './ClickDisplay.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ClickDisplay = ({ data, onReset }) => {
  return (
    <div className="clickDisplay">
      {data.map(light => (
        <span key={light.id} style={{ color: light.color }}>
          {light.description}: {light.clickcount}
        </span>
      ))}

      <button id="resetButton" onClick={onReset} style={{ transform: 'translate(110%)' }}>
        <i className="fas fa-sync-alt fa-3x"></i>
      </button>
    </div>
  );
};

ClickDisplay.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    clickcount: PropTypes.number.isRequired
  })).isRequired,
  onReset: PropTypes.func.isRequired
};

export default ClickDisplay;
