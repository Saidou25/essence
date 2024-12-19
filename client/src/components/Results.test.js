import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Results from "./Results";

// Mocks the `resultsData` import
jest.mock("../questionsData", () => ({
  resultsData: [
    {
      minPercentage: 0,
      maxPercentage: 100,
      awakeness: "Awake",
      perspective: "Positive",
      percentage: 50,
    },
    {
      minPercentage: 101,
      maxPercentage: 200,
      awakeness: "Neutral",
      perspective: "Neutral",
      percentage: 100,
    },
  ],
}));

test("renders the correct content", () => {
  render(
    <Results
      userAnswers={[
        {
          questionNumber: 1,
          questionStatment:
            "I Know myself… Spirit, Heart, Body, Mind, and Soul.",
          userSelfRating: 5,
        },
        {
          questionNumber: 2,
          questionStatment:
            "I accept myself. I accept the infinite. I accept that I am infinite.",
          userSelfRating: 5,
        },
      ]}
      resetApp={() => {}}
      resetQuestions={() => {}}
    />
  );
  const scoreToday = screen.getByTestId("score-today");
  const evaluate = screen.getByTestId("evaluate");
  const printer = screen.getByTestId("printer");
  const download = screen.getByTestId("download");
  const email = screen.getByTestId("email");
  const restart = screen.getByTestId("restart");
  const beSure = screen.getByTestId("be-sure");
  const princetonLink = screen.getByTestId("princeton-link");
  const redirected = screen.getByTestId("redirected");
 
  // Testing if all texts and logo are rendered
  expect(screen.getByText(/ESA44 Assessment Results/i)).toBeInTheDocument();
  expect(scoreToday).toBeInTheDocument();
  expect(evaluate).toBeInTheDocument();
  expect(screen.getByText(/Print Results/i)).toBeInTheDocument();
  expect(printer).toBeInTheDocument();
  expect(screen.getByText(/Download PDF/i)).toBeInTheDocument();
  expect(download).toBeInTheDocument();
  expect(screen.getByText(/E-mail Results/i)).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(screen.getByText(/Restart Assessment/i)).toBeInTheDocument();
  expect(restart).toBeInTheDocument();
  expect(beSure).toBeInTheDocument();
  expect(princetonLink).toBeInTheDocument();
  expect(redirected).toBeInTheDocument();
});

// Checks if all buttons from button-line are rendered
test("renders buttons", () => {
  render(
    <Results
      userAnswers={[
        {
          questionNumber: 1,
          questionStatment:
            "I Know myself… Spirit, Heart, Body, Mind, and Soul.",
          userSelfRating: 5,
        },
        {
          questionNumber: 2,
          questionStatment:
            "I accept myself. I accept the infinite. I accept that I am infinite.",
          userSelfRating: 5,
        },
      ]}
      resetApp={() => {}}
      resetQuestions={() => {}}
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
  expect(window.print).toHaveBeenCalledTimes(1);
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

  // Simulate a click event on the email button to set `showEmailForm` to true
  fireEvent.click(buttonEmail);

  // Check if the email form is rendered
  const emailForm = screen.getByTestId("email-form");
  expect(emailForm).toBeInTheDocument();
});
