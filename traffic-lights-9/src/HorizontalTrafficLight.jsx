import PropTypes from 'prop-types';
import TrafficLights from './TrafficLights';
import ClickDisplay from './ClickDisplay';

const HorizontalTrafficLight = ({ data, onLightClick, onReset }) => {
  return (
    <> 
      <ClickDisplay data={data} onReset={onReset} />
      <TrafficLights orientation="horizontal" data={data} onLightClick={onLightClick} />
    </>
  );
};


HorizontalTrafficLight.propTypes = {
  data: PropTypes.object.isRequired,
  onLightClick: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
};

export default HorizontalTrafficLight;