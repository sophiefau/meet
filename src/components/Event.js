// src/components/Event.js
import React from "react";
import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  // Toggle the button and details display
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <li>
      <div className="event">
        <h2>{event.summary}</h2>
        <p> {event.created} </p>
        <p> {event.location}</p>
        <button onClick={toggleDetails}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>

        {showDetails && (
          <div className="event-details">
            <h3>About event:</h3>
            <a href={event.htmlLink} target="_blank" rel="noopener noreferrer">
              See details on Google Calendar
            </a>
            <p>
              <strong>Description:</strong> {event.description}
            </p>
          </div>
        )}
      </div>
    </li>
  );
};

export default Event;
