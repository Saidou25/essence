import React from 'react';
import { render, screen } from '@testing-library/react';
import Success from './Success';

test('renders the correct content', () => {
  render(<Success />);
  expect(screen.getByText(/You have completed the/i)).toBeInTheDocument();
});

test("renders ESA44", () => {
  render(<Success />);
  expect(screen.getByText(/ESA44/i)).toBeInTheDocument();
});

test("renders , now lets head to your results.", () => {
  render(<Success />);
  expect(screen.getByText(/, now lets head to your results./i)).toBeInTheDocument();
})

test("renders the check icon", () => {
  render(<Success />);
  const iconElement = screen.getByTestId("success-icon");
  expect(iconElement).toBeInTheDocument();
})