import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import Success from "./components/Success";
import Results from "./features/Results/components/Results";
import Assessment from "./features/Assessment/components/Assessment";

describe("App Component", () => {
  test("renders Header and Footer components", () => {
    render(<App />);
    expect(screen.getByRole("header")).toBeInTheDocument(); //  Header has a role 'header'
    expect(screen.getByRole("footer")).toBeInTheDocument(); // Footer has a role 'footer'
  });
});

const TestApp = ({ showSuccess, showResults, showQuestions }) => (
  <>
    {showSuccess && <Success data-testid="success" />}
    {showResults && (
      <Results
        data-testid="results"
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
    )}
    {showQuestions && (
      <Assessment
        data-testid="questions"
        showSuccessFunc={() => {}}
        resetQuestionsComp={() => {}}
      />
    )}
  </>
);

test("renders Success component when showSuccess is true", () => {
  // Render the TestApp component with showSuccess set to true
  render(
    <TestApp showSuccess={true} showResults={false} showQuestions={false} />
  );
  let successComp = screen.getByTestId("success");
  // Verify the Success component is rendered
  expect(successComp).toBeInTheDocument();
});

test("does not render Success component when showSuccess is false", () => {
  // Render the TestApp component with showSuccess set to true
  render(
    <TestApp showSuccess={false} showResults={false} showQuestions={false} />
  );
  let successComp = screen.queryByTestId("success");
  // Verify the Success component is rendered
  expect(successComp).not.toBeInTheDocument();
});

test("renders Results component when showResults is true", () => {
  // Render the TestApp component with showSuccess set to true
  render(
    <TestApp showSuccess={false} showResults={true} showQuestions={false} />
  );
  let resultsComp = screen.getByTestId("results");
  // Verify the Success component is rendered
  expect(resultsComp).toBeInTheDocument();
});

test("does not render Results component when showResults is false", () => {
  // Render the TestApp component with showSuccess set to true
  render(
    <TestApp showSuccess={false} showResults={false} showQuestions={false} />
  );
  let resultsComp = screen.queryByTestId("results");
  // Verify the Success component is rendered
  expect(resultsComp).not.toBeInTheDocument();
});

test("renders Questions component when showQuestions is true", () => {
  // Render the TestApp component with showSuccess set to true
  render(
    <TestApp showSuccess={false} showResults={false} showQuestions={true} />
  );
  let questionsComp = screen.getByTestId("questions");
  // Verify the Success component is rendered
  expect(questionsComp).toBeInTheDocument();
});

test("does not render Questions component when showQuestions is false", () => {
  // Render the TestApp component with showSuccess set to true
  render(
    <TestApp showSuccess={false} showResults={false} showQuestions={false} />
  );
  let questionsComp = screen.queryByTestId("questions");
  // Verify the Success component is rendered
  expect(questionsComp).not.toBeInTheDocument();
});
