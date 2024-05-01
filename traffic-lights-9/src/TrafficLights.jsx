import PropTypes from 'prop-types';
import Light from './Light';
import './TrafficLights.css';

const TrafficLights = ({ orientation, data, onLightClick }) => {
  return (
    <div className="trafficLightContainer">
      <div className={`trafficLight ${orientation === "vertical" ? "vertical" : "horizontal"}`}>
        <div className="lightsContainer">
          {data.map((light) => (
            <Light
              key={light.id}
              tlColor={light.color}
              onClick={() => onLightClick(light.id)}         
            />
          ))}
        </div>
      </div>
    </div>
  );
};

TrafficLights.propTypes = {
  orientation: PropTypes.oneOf(['vertical', 'horizontal']).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
  })).isRequired,
  onLightClick: PropTypes.func.isRequired
};

export default TrafficLights;
