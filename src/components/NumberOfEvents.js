// src/components/NumberOfEvents.js
import React, { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [number, setNumber] = useState(32);

  const handleChange = (event) => {
    const value = event.target.value;
    const numValue = Number(value);
    setNumber(value);
    let errorText = "";
    if (isNaN(numValue) || numValue <= 0) {
      errorText = "Please enter a valid number";
    } else if (numValue > 32) {
      errorText = "Only a maximum of 32 is allowed";
    }
    setErrorAlert(errorText);
    if (!errorText) {
      setCurrentNOE(numValue);
    }
  };

  return (
    <div id="number-of-events">
      <label>Number of events to display:</label>
      <input
        className="input-field"
        type="number"
        value={number}
        onChange={handleChange}
        min="1"
        placeholder="32"
      />
    </div>
  );
};

export default NumberOfEvents;
