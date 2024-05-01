import { useState } from 'react';
import './App.css';
import TrafficLights from './TrafficLights'; 
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ClickDisplay from './ClickDisplay'; 
import trafficLightsData from './TrafficLightsData.json'; 
import StatsBar from './StatsBar';
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import Header from './Header';
import HorizontalTrafficLight from './HorizontalTrafficLight';
import VerticalTrafficLight from './VerticalTrafficLight';


function App() {
  
  const [data, setData] = useState(trafficLightsData);
  const [isVertical, setIsVertical] = useState(true); 
 
  const handleLightClick = (id) => {
    const newData = data.map(item => {
      if (item.id === id) {
        return { ...item, clickcount: item.clickcount + 1 };
      }
      return item;
    });
    setData(newData);
  };

  const resetClicks = () => {
    const resetData = data.map(item => ({ ...item, clickcount: 0 }));
    setData(resetData);
  };

  const toggleOrientation = () => {
    setIsVertical(!isVertical);
  };
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Header /><Outlet /></>,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "horizontal",
          element: <HorizontalTrafficLight data={data} onLightClick={handleLightClick} onReset={resetClicks} />
        },
        {
          path: "vertical",
          element: <VerticalTrafficLight data={data} onLightClick={handleLightClick} onReset={resetClicks} />
        }
      ]
    }
  ]);
  
  return (
    <RouterProvider router={router}>
    <div className="App">
      <StatsBar toggleOrientation={toggleOrientation} /> 
      <ClickDisplay data={data} onReset={resetClicks} />
      <TrafficLights orientation={isVertical ? "vertical" : "horizontal"} data={data} onLightClick={handleLightClick} />
      
    </div>
    </RouterProvider>
  );
}

export default App;