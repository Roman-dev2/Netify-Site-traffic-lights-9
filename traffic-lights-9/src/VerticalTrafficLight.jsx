import PropTypes from 'prop-types';
import TrafficLights from './TrafficLights';
import ClickDisplay from './ClickDisplay';

const VerticalTrafficLight = ({ data, onLightClick, onReset }) => {
  return (
    <>
        {/*Для виклику ErrorPage <h1 style={"margin"}></h1> */}
      <ClickDisplay data={data} onReset={onReset} />
      <TrafficLights orientation="vertical" data={data} onLightClick={onLightClick} />
    </>
  );
};

VerticalTrafficLight.propTypes = {
  data: PropTypes.object.isRequired,
  onLightClick: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
};

export default VerticalTrafficLight;