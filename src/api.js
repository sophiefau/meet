// src/api.js

import mockData from './mock-data';

/**
 *
 * @param {*} events:
 * The following function should be in the “api.js” file.
 * This function takes an events array, then uses map to create a new array with only locations.
 * It will also remove all duplicates by creating another new array using the spread operator and spreading a Set.
 * The Set will remove all duplicates from the array.
 */
export const extractLocations = (events) => {
  const extractedLocations = events.map((event) => event.location);
  const locations = [...new Set(extractedLocations)];
  return locations;
};

/**
 * Function to extract specific properties from each event
 * @param {*} events - Array of events to process
 * @returns {Array} - Array of event objects with specific properties
 */
export const getEventDetails = (events) => {
  return events.map((event) => ({
    summary: event.summary,
    start: {
      dateTime: event.start.dateTime,
      timeZone: event.start.timeZone,
    },
    location: event.location,
    htmlLink: event.htmlLink,
    description: event.description,
  }));
};

/**
 *
 * This function will fetch the list of all events
 */
export const getEvents = async () => {
  return mockData;
};