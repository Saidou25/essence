import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ResultsButtonsLine from "./ResultsButtonsLine";

test("renders the correct content", () => {
  render(
    <ResultsButtonsLine
      handlePrint={() => {}}
      handleRetake={() => {}}
      downloadAssessmentResults={() => {}}
      showForm={() => {}}
    />
  );

  const printer = screen.getByTestId("printer");
  const download = screen.getByTestId("download");
  const email = screen.getByTestId("email");
  const restart = screen.getByTestId("restart");

  // Testing if all texts and logo are rendered
  expect(screen.getByText(/Print Results/i)).toBeInTheDocument();
  expect(printer).toBeInTheDocument();
  expect(screen.getByText(/Download PDF/i)).toBeInTheDocument();
  expect(download).toBeInTheDocument();
  expect(screen.getByText(/E-mail Results/i)).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(screen.getByText(/Restart Assessment/i)).toBeInTheDocument();
  expect(restart).toBeInTheDocument();
});

// Checks if all buttons from button-line are rendered
test("renders buttons", () => {
  render(
    <ResultsButtonsLine
      handlePrint={() => {}}
      handleRetake={() => {}}
      downloadAssessmentResults={() => {}}
      showForm={() => {}}
    />
  );

  // Testing print button and its functionality
  jest.spyOn(window, "print").mockImplementation(() => {});
  // Checks if the button print is rendered correctly
  const buttonPrint = screen.getByRole("button", { name: /print/i });
  expect(buttonPrint).toBeInTheDocument();
  // Simulate a click event on the button
  fireEvent.click(buttonPrint);
  // Checks if the onClick function was called
  expect(window.print).toHaveBeenCalledTimes(0);
  // Clean up mock after test
  window.print.mockRestore();

  // Checks if the button download is rendered correctly
  const buttonDownload = screen.getByRole("button", { name: /download/i });
  expect(buttonDownload).toBeInTheDocument();

  // // Check if the button with the name "restart-button" is rendered
  const buttonRestart = screen.getByTestId("restart");
  expect(buttonRestart).toBeInTheDocument();

  // Check if the button with the name "email" is rendered
  const buttonEmail = screen.getByRole("button", { name: /email/i });
  expect(buttonEmail).toBeInTheDocument();
});
