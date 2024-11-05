import React from "react";
import { resultsData } from "../questionsData";

import "./Finish.css";

export default function Finish({ userAnswers }) {
  console.log(userAnswers);
  let totalRating = 0;
  // let totalRating = 34;
  const totalAssessment = (totalRating / 220) * 100;
  console.log(totalAssessment);
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const formattedDate = `${month + 1}/${day}/${year}`;

  for (let userAnswer of userAnswers) {
    totalRating += Number(userAnswer.userSelfRating); // Convert to number to avoid string concatenation
  }

  return (
    <div className="finish-main-container">
      <h1 className="finish-titles">ESSA44 Test Results</h1>
      <h2 className="score-today">
        Your Score for Today is:{" "}
        {Math.round((44 / totalRating) * 100 * 100) / 100}%
      </h2>
      <table className="results-table">
        <thead>
          <tr>
            <th className="class-tr">Date of Round</th>
            <th className="class-tr">ESSA44 Awakening %</th>
            <th className="class-tr">State of Awareness</th>
            <th className="class-tr">Current Perspective</th>
          </tr>
        </thead>
        <tbody>
          {resultsData &&
            resultsData.map((result, index) => (
              <React.Fragment key={index}>
                {totalAssessment >= result.minPercentage &&
                  totalAssessment <= result.maxPercentage && (
                    <tr>
                      <td className="class-td">{formattedDate}</td>
                      <td className="class-td">{result.percentage}</td>
                      <td className="class-td">{result.awakeness}</td>
                      <td className="class-td">{result.perspective}</td>
                    </tr>
                  )}
              </React.Fragment>
            ))}
        </tbody>
      </table>
      <h2 className="thank-you">Thank you for completing our assessment.</h2>
    </div>
  );
}
