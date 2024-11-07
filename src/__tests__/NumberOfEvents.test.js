// src/__tests__/NumberOfEvents.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  test('contains an input with the role of "spinbutton"', () => {
    render(<NumberOfEvents onChange={() => {}} />);
    const inputElement = screen.getByRole('spinbutton');
    expect(inputElement).toBeInTheDocument();
  });

  test('default value of the input field is 32', () => {
    render(<NumberOfEvents onChange={() => {}} />);
    const inputElement = screen.getByRole('spinbutton');
    expect(inputElement).toHaveValue(32);
  });

  test('input value changes when user types', async () => {
    render(<NumberOfEvents onChange={() => {}} />);
    const inputElement = screen.getByRole('spinbutton');
    // Simulate user typing (backspacing twice and typing '10')
    await userEvent.type(inputElement, '{backspace}{backspace}10');
    expect(inputElement).toHaveValue(10);
  });

  test('only allows numbers in the input field', async () => {
    render(<NumberOfEvents onChange={() => {}} />);
    const inputElement = screen.getByRole('spinbutton');

    // Simulate typing a letter (should not be accepted)
    await userEvent.type(inputElement, 'a');
    expect(inputElement).toHaveValue(32);

    // Simulate typing a number (should be accepted)
    await userEvent.clear(inputElement); 
    await userEvent.type(inputElement, '5');
    expect(inputElement).toHaveValue(5);
  });
});