import React from 'react';

const LocationSelector = ({ pointA, setPointA, pointB, setPointB }) => {
  return (
    <div>
      <label htmlFor="pointA">From:</label>
      <input
        type="text"
        id="pointA"
        value={pointA}
        onChange={(e) => setPointA(e.target.value)}
      />

      <label htmlFor="pointB">To:</label>
      <input
        type="text"
        id="pointB"
        value={pointB}
        onChange={(e) => setPointB(e.target.value)}
      />
    </div>
  );
};

export default LocationSelector;
