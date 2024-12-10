# MEET app

## About this project

Meet app allows users to see events in the city where there are. They can select the city and look for events. The app is a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## Tech Stack
- **React** → for building the user interface
- **Serverless** and **AWS** → for scalable backend services
- **Google Calendar API** → for fetching event data
- **Jest** and **Puppeteer** → for testing and end-to-end coverage
- **Recharts** → for data visualization

## Key Features

Meet app support the following features: 
- Authentificate using Google Account
- Filter Events by City
- Show/Hide Event Details
- Specify Number of Events
- Use the App When Offline
- Display Charts Visualizing Event Details

## Overview

Check out [Meet app live!](https://sophiefau.github.io/meet/)

![Example view on Website](https://github.com/sophiefau/meet/blob/main/screenshots/meetapp_full.png)
![Example view on Mobile](https://github.com/sophiefau/meet/blob/main/screenshots/meetapp_mobile.png)

## User Stories With Gherkin

Meet app was build using the following user stories using Gherkin: 

### Filter Events by City

As a user, I should be able to filter events by city so that I can find events that are relevant to my location.

- *GIVEN* I am on the main page
- *WHEN* I select a city from the filter options
- *THEN* I should see a list of events specific to that city

### Show/Hide Event Details

As a user, I should be able to show or hide event details so that I can view only the information I need at any given time.

- *GIVEN* I am viewing a list of events
- *WHEN* I choose to show or hide the details of an event
- *THEN* I should see the details expand or collapse accordingly

### Specify Number of Events

As a user, I should be able to specify the number of events displayed so that I can control the amount of information on the screen.

- *GIVEN* I am on the main page
- *WHEN* I specify the number of events to display
- *THEN* the page should show only the number of events I selected

### Use the App When Offline

As a user, I should be able to use the app offline so that I can access event information without an internet connection.

- *GIVEN* I am offline
- *WHEN* I open the app
- *THEN* I should still be able to view previously loaded event information

### Add an App Shortcut to the Home Screen

As a user, I should be able to add an app shortcut to my home screen so that I can quickly access the app.

- *GIVEN* I am using the app on a mobile device
- *WHEN* I choose to add a shortcut to the home screen
- *THEN* the app icon should appear on my home screen for easy access

### Display Charts Visualizing Event Details

As a user, I should be able to view charts that visualize event details so that I can easily understand event trends and insights.

- *GIVEN* I am viewing the event details page
- *WHEN* I open the charts section
- *THEN* I should see visual representations of event data, such as trends and statistics

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/mayyinandprojects/meet.git

2. Navigate into the project directory:
    ```bash
    cd meet

3. Run the app:
    ```bash
    npm start

## Testing

1. Unit and Integration Tests: Run using Jest.
    ```bash
    npm run test

2. End-to-End Tests: Run using Puppeteer (Switch headless mode to true in EndtoEnd.tests.js).
    ```bash
    npm run test

## License
This project is made solely for educational purpose as part of Career Foundry Fullstack Development Course. This is released under the MIT License.