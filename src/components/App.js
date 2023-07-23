import React, { useState } from 'react';
import '../styles/App.css'; 
import LocationSelector from './LocationSelector';
import DatePicker from './DatePicker';
import SearchButton from './SearchButton';
import AvailableVehiclesList from './AvailableVehiclesList';

import vehiclesData from '../vehiclesData.json';






const App = () => {
  const [pointA, setPointA] = useState('');
  const [pointB, setPointB] = useState('');
  const [date, setDate] = useState('');
  const [availableVehicles, setAvailableVehicles] = useState([]);

  const handleSearch = () => {
    
    const filteredVehicles = vehiclesData.filter(vehicle => {
      
      return true;
    });

    setAvailableVehicles(filteredVehicles);
  };

  return (
    <div className="app-container">
      <h1>Airport Transfer Booking App</h1>
      <LocationSelector
        pointA={pointA}
        setPointA={setPointA}
        pointB={pointB}
        setPointB={setPointB}
      />
      <DatePicker date={date} setDate={setDate} />
      <SearchButton handleSearch={handleSearch} />
      <AvailableVehiclesList availableVehicles={availableVehicles} />
    </div>
  );
};

export default App;
