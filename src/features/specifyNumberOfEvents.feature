Feature: Specify Number of Events

  Scenario: When user hasn’t specified a number, 32 events are shown by default.
    Given the user has not specified a number of events to display
    When the event list is loaded
    Then 32 events should be displayed by default

  Scenario: User can change the number of events displayed.
    Given the user is viewing the event list
    When the user changes the number of events to display to 10
    Then the event list should display 10 events
