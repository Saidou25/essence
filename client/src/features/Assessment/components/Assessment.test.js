import React from "react";
import { render, screen } from "@testing-library/react";
import Assessment from "./Assessment";

// Checks if texts are in the component
test("checking if Inbox Results is showing in the form", () => {
  render(
    <Assessment showSuccessFunc={() => {}} resetQuestionsComp={() => {}} />
  );

  // Checks for texts to show in the page
  const assessmentTitle = screen.getByText(
    /ESSENCE Self-Awareness Assessment/i
  );
  expect(assessmentTitle).toBeInTheDocument();

  const pleaseRate = screen.getByText(
    /Please rate how much you agree with the following statement:/i
  );
  expect(pleaseRate).toBeInTheDocument();

});
