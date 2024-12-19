import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  test("renders button with correct text when buttonLoading is false", () => {
    const handleSubmit = jest.fn();
    render(
      <Button
        buttonLoading={false}
        handleSubmit={handleSubmit}
        buttonDisabled={false}
      >
        SUBMIT
      </Button>
    );
    // Check if the button text is rendered correctly
    const button = screen.getByText(/SUBMIT/i);
    expect(button).toBeInTheDocument();
  });

  test("calls onClick function when clicked", () => {
    const handleSubmit = jest.fn();
    render(
      <Button
        buttonLoading={false}
        handleSubmit={handleSubmit}
        buttonDisabled={false}
      >
        SUBMIT
      </Button>
    );

    // Simulate a click event on the button
    const button = screen.getByText(/SUBMIT/i);
    fireEvent.click(button);

    // Check if the onClick function was called
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

    test('Shows ButtonSpinner when buttonLoading is true', () => {
      const handleSubmit = jest.fn();
      render(<Button buttonLoading={true} handleSubmit={handleSubmit} buttonDisabled={false}>SUBMIT</Button>);

      // Check if the ButtonSpinner is rendered when buttonLoading is true
      expect(screen.getByTestId("button-spinner")).toBeInTheDocument();
    });
});
