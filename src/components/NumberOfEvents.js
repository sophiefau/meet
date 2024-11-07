// src/components/NumberOfEvents.js
import React, { useState } from 'react';

const NumberOfEvents = ({ onChange }) => {
  const [number, setNumber] = useState(32); // Default value is 32

  // Handle input change
  const handleChange = (event) => {
    const value = event.target.value;
    if (value === '' || /^[0-9]+$/.test(value)) { // Allow only numbers
      setNumber(value);
      onChange(value);
    }
  };

  return (
    <div id="number-of-events">
      <label>Enter number of events to display:</label>
      <input
        type="number"
        value={number}
        onChange={handleChange}
        min="1" // Prevent the user from entering negative numbers
        placeholder="32"
      />
    </div>
  );
};

export default NumberOfEvents;