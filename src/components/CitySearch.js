// src/components/CitySearch.js
import React from 'react';
import { useState } from "react";

const CitySearch = ({ allLocations }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChanged = (event) => {
    const value = event.target.value;
  
    const filteredLocations = allLocations
      ? allLocations.filter((location) => {
          // Check if location is a valid string before calling toUpperCase
          return location && typeof location === 'string' && location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        })
      : [];  

    setQuery(value);
    setSuggestions(filteredLocations);
  };

  const handleItemClicked = (event) => {
    const value = event.target.textContent;
    setQuery(value);
    setShowSuggestions(false); // to hide the list
  };

  return (
    <div id="city-search">
      <input
        type="text"
        className="city"
                placeholder="Search for a city"
        value={query}        
        onFocus={() => setShowSuggestions(true)}
        onChange={handleInputChanged}
      />
      {showSuggestions ?
        <ul className="suggestions">
          {suggestions.map((suggestion) => {
            return <li onClick={handleItemClicked} key={suggestion}>{suggestion}</li>
          })}
          <li key='See all cities' onClick={handleItemClicked}>
            <b>See all cities</b>
          </li>
        </ul>
        : null
      }
    </div>
  )
}
 
 export default CitySearch;