// src/components/Event.js
import React from "react";
import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li>
      <div className="event">
        <h2>{event.summary}</h2>
        <p> {event.created} </p>
        <p> {event.location}</p>
        </div>
      {showDetails ? (
        <div className="event-details">
            <h3>About event:</h3>
            <a href={event.htmlLink} target="_blank" rel="noopener noreferrer">
              See details on Google Calendar
            </a>
            <p>
              <strong>Description:</strong> {event.description}
            </p>
            </div>
      ) : null}
      <button className="show-details-btn"
        onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
    </li>
  );
};

export default Event;
