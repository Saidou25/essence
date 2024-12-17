import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

test('renders the correct content', () => {
  render(<Header />);
  expect(screen.getByText(/How Self-Aware Are You?/i)).toBeInTheDocument();
});
