// src/__tests__/NumberOfEvents.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> Component', () => {
  let setCurrentNOE;
  let setErrorAlert;

  beforeEach(() => {
    // Mock the functions to test their behavior
    setCurrentNOE = jest.fn();
    setErrorAlert = jest.fn();

    // Render the component
    render(
      <NumberOfEvents
        setCurrentNOE={setCurrentNOE}
        setErrorAlert={setErrorAlert}
      />
    );
  });

  test('component contains an input textbox', () => {
    const input = screen.getByRole('spinbutton');
    expect(input).toBeInTheDocument();
  });
  
  test('ensures the default value of the textbox is 99', () => {
    const input = screen.getByRole('spinbutton');
    expect(input).toHaveValue(99);
  });

  test('textbox value changes when user updates input', async () => {
    const input = screen.getByRole('spinbutton');
    const user = userEvent.setup();
    
    // Simulate the user typing '10' after clearing the value
    await user.clear(input);
    await user.type(input, '10');
    
    expect(input).toHaveValue(10);
  });

  test('shows error when a non-number is entered', async () => {
    const input = screen.getByRole('spinbutton');
    const user = userEvent.setup();

    // Simulate typing a non-numeric value ('a')
    await user.clear(input);
    await user.type(input, 'a');
    
    expect(setErrorAlert).toHaveBeenCalledWith('Please enter a valid number');
  });

  test('shows error when a number greater than 99 is entered', async () => {
    const input = screen.getByRole('spinbutton');
    const user = userEvent.setup();

    // Simulate typing a number greater than 32
    await user.clear(input);
    await user.type(input, '101');
    
    expect(setErrorAlert).toHaveBeenCalledWith('Only a maximum of 99 is allowed');
  });

  test('shows no error and calls setCurrentNOE when a valid number is entered', async () => {
    const input = screen.getByRole('spinbutton');
    const user = userEvent.setup();

    // Simulate typing a valid number (e.g., '25')
    await user.clear(input);
    await user.type(input, '25');
    
    expect(setErrorAlert).toHaveBeenCalledWith(''); // Ensure no error message
    expect(setCurrentNOE).toHaveBeenCalledWith(25); // Ensure setCurrentNOE is called with the number 25
  });
});