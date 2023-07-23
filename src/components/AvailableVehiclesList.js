import React from 'react';

const AvailableVehiclesList = ({ availableVehicles }) => {
  return (
    <div>
      <h2>Available Vehicles:</h2>
      <ul>
        {availableVehicles.map(vehicle => (
          <li key={vehicle.id}>
            {vehicle.name} - {vehicle.type} (Capacity: {vehicle.capacity})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableVehiclesList;
