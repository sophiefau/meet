// src/components/CityEventsChart.js
import { useState, useEffect, useCallback } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis, YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const CityEventsChart = ({ allLocations, events }) => {
  const [data, setData] = useState([]);

  // Memoize the getData function to avoid recreating it on each render
  const getData = useCallback(() => {
    const data = allLocations.map((location) => {
      const count = events.filter((event) => event.location === location).length;
      const city = location.split(', ')[0];
      return { city, count };
    });
    return data;
  }, [allLocations, events]);

  useEffect(() => {
    setData(getData());
  }, [getData]); // Correct dependency array

  return (
    <ResponsiveContainer width="99%" height={400}>
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="category" dataKey="city" name="City" />
        <YAxis type="number" dataKey="count" name="Number of events" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="Events" data={data} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default CityEventsChart;