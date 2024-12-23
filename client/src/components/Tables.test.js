import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "./Table";

const resultsData = [
  {
    tile: "",
    minPercentage: 96,
    maxPercentage: 100,
    percentage: "96-100%",
    awakeness: "Awake",
    perspective: "Awakened",
    illustration:
      "https://assets.zyrosite.com/mP47Mwo0WQhVBkl5/esa44-awareness-YlevljgyZ8ig1rbN.jpg",
  },
  {
    tile: "",
    minPercentage: 81,
    maxPercentage: 95.999999999999999999999,
    percentage: "81-95%",
    awakeness: "Almost Awake",
    perspective: "Seeker",
    illustration:
      "https://assets.zyrosite.com/mP47Mwo0WQhVBkl5/esa44-infinite-being-AzGeL9grl5cVnGJO.jpg",
  },
];

test("renders the table", () => {
  const totalAssessment = 85;
  render(<Table totalAssessment={totalAssessment} resultsData={resultsData} />);
  const table = screen.getByTestId("table");
  expect(table).toBeInTheDocument();
});

// Checks if props are rendered in the table
test("renders the table", () => {
    const totalAssessment = 85;
  render(<Table totalAssessment={totalAssessment} resultsData={resultsData} />);
  const totalAssessmentCell = screen.getByTestId("total-assessment");
  expect(totalAssessmentCell).toHaveTextContent(`${totalAssessment}`);
});

test("renders result.awakeness", () => {
    const totalAssessment = 85;
  render(<Table totalAssessment={totalAssessment} resultsData={resultsData} />);
  const awakeness = "Almost Awake";
  const awakenessCell = screen.getByTestId("result-awakeness");
  expect(awakenessCell).toHaveTextContent(awakeness);
});

test("renders result.perspective in the table", () => {
    const totalAssessment = 85;
  render(<Table totalAssessment={totalAssessment} resultsData={resultsData} />);
  const perspective = "Seeker";
  const perspectiveCell = screen.getByTestId("result-perspective");
  expect(perspectiveCell).toHaveTextContent(perspective);
});

// Checks if tbody is conditionally rendered
test("Checks if tbody2 renders in the table when totalAssessment is in the range of minPercentage and maxPercentage", () => {
  const totalAssessment = 85;
  render(<Table totalAssessment={totalAssessment} resultsData={resultsData} />);
  const tbody1 = screen.getByTestId("tbody1");
  expect(tbody1).toBeInTheDocument();
});

test("Checks if tbody2 renders in the table when totalAssessment is in not the range of minPercentage and maxPercentage", () => {
  const totalAssessment = undefined;
  render(<Table totalAssessment={totalAssessment} resultsData={resultsData} />);
  const tbody2 = screen.getByTestId("tbody2");
  expect(tbody2).toBeInTheDocument();
});
