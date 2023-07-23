import React from 'react';

const DatePicker = ({ date, setDate }) => {
  return (
    <div>
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
};

export default DatePicker;
