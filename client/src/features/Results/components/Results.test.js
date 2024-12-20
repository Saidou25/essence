import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Results from "./Results";

// Mocks the `resultsData` import
jest.mock("../data/resultsData", () => ({
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
  const beSure = screen.getByTestId("be-sure");
  const princetonLink = screen.getByTestId("princeton-link");
  const note = screen.getByTestId("note");
 
  // Testing if all texts and logo are rendered
  expect(screen.getByText(/ESA44 Assessment Results/i)).toBeInTheDocument();
  expect(scoreToday).toBeInTheDocument();
  expect(evaluate).toBeInTheDocument();
  expect(beSure).toBeInTheDocument();
  expect(princetonLink).toBeInTheDocument();
  expect(note).toBeInTheDocument();
});


