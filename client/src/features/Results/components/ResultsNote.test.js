import React from "react";
import { render, screen } from "@testing-library/react";
import ResultsNote from "./ResultsNote";

test("renders the correct content", () => {
  render(<ResultsNote />);
  const note = screen.getByTestId("note");

  // Testing if all the Note's text is rendered
  expect(note).toBeInTheDocument();
});
