import PropTypes from 'prop-types';
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const TrafficLightsContext = createContext();

export const TrafficLightsProvider = ({ children }) => {
    const [lights, setLights] = useState([]);
    const [isVertical, setIsVertical] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLights = async () => {
            try {
                const response = await axios.get('http://localhost:5000/lights');
                setLights(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch lights:", error);
                setLoading(false);
            }
        };

        fetchLights();
    }, []);

    const toggleOrientation = () => {
        setIsVertical(!isVertical);
    };

    const handleLightClick = async (id) => {
        const light = lights.find(light => light.id === id);
        const updatedLight = { ...light, clickcount: light.clickcount + 1 };
        try {
            await axios.put(`http://localhost:5000/lights/${id}`, updatedLight);
            setLights(lights.map(light => light.id === id ? updatedLight : light));
        } catch (error) {
            console.error("Failed to update light:", error);
        }
    };

    const resetClicks = async () => {
        const resetData = lights.map(light => ({ ...light, clickcount: 0 }));
        try {
            resetData.forEach(async light => {
                await axios.put(`http://localhost:5000/lights/${light.id}`, light);
            });
            setLights(resetData);
        } catch (error) {
            console.error("Failed to reset lights:", error);
        }
    };

    return (
        <TrafficLightsContext.Provider value={{
            lights,
            handleLightClick,
            resetClicks,
            toggleOrientation, 
            isVertical,
            loading
        }}>
            {children}
        </TrafficLightsContext.Provider>
    );
};

TrafficLightsProvider.propTypes = {
    children: PropTypes.node.isRequired 
};