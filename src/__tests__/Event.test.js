// src/__tests__/Event.test.js
import React from 'react';
import EventList from '../components/EventList';
import Event from '../components/Event';
import mockData from "../mock-data";
import { render } from "@testing-library/react";

const event = mockData[0];

describe('<Event /> component', () => {
    let EventComponent;
    beforeEach(() => {
        EventComponent = render(<Event event={event}/>);
    });
    
    test('render event title', () => {
        const eventTitle = EventComponent.queryByText(event.summary);
        expect(eventTitle).toBeInTheDocument();
    });
});