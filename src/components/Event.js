// src/components/Event.js
import React from "react";
import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li>
      <div className="event">
        <h2>{event.summary}</h2>
        <p>  <strong>{event.created} </strong></p>
        <p>  {event.location}</p>
        
      {showDetails ? (
        <div className="event-details">
            {/* <h3>Description</h3> */}
            <p>
              {event.description}
            </p>
            <button className="btn-to-calendar">
            <a href={event.htmlLink} target="_blank" rel="noopener noreferrer" className="link-to-calendar">
              See on Google Calendar</a>
            </button>
            </div>
      ) : null}
      <button className="show-details-btn"
        onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
        </div>
    </li>
  );
};

export default Event;
