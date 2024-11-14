import React, { useState } from "react";
import { resultsData } from "../questionsData";

import "./Results.css";
import EmailResultsForm from "./EmailResultsForm";
import { GoMail } from "react-icons/go";
import { ImPrinter } from "react-icons/im";

export default function Finish({ userAnswers }) {
  const [showEmailForm, setShowEmailForm] = useState(false);
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

const showEmail = (data) => { setShowEmailForm(data)}

  return (
    <div className="finish-main-container">
      <h1 className="finish-titles">ESSA44 Test Results</h1>
      <h2 className="score-today">
        Your Score for Today is:{" "}
        {Math.round((totalRating / 220) * 100 * 100) / 100}%
      </h2>
      <table className="results-table">
        <thead>
          <tr className="class-top">
            <th className="class-th">ESA44 Awakening %</th>
            <th className="class-th">State of Awareness</th>
            <th className="class-th">Current Perspective</th>
          </tr>
        </thead>
        <tbody>
          {resultsData &&
            resultsData.map((result, index) => (
              <React.Fragment key={index}>
                {totalAssessment >= result.minPercentage &&
                  totalAssessment <= result.maxPercentage && (
                    <tr className="class-bottom">
                      <td className="class-td">
                        {Math.round((totalRating / 220) * 100 * 100) / 100 +
                          "%"}
                      </td>
                      <td className="class-td">{result.awakeness}</td>
                      <td className="class-td-perspective">
                        {result.perspective}
                      </td>
                    </tr>
                  )}
              </React.Fragment>
            ))}
        </tbody>
      </table>
      <h2 className="thank-you">
        Please evaluate your ESA44 results with the following table.
      </h2>
      <table className="results-table">
        <thead>
          <tr className="class-top">
            <th className="class-th">ESA44 Awakening %</th>
            <th className="class-th">State of Awareness</th>
            <th className="class-th">Current Perspective</th>
          </tr>
        </thead>
        <tbody>
          {resultsData &&
            resultsData.map((result, index) => (
              <React.Fragment key={index}>
                <tr className="class-bottom">
                  <td className="class-td">{result.percentage}</td>
                  <td className="class-td">{result.awakeness}</td>
                  <td className="class-td-perspective">{result.perspective}</td>
                </tr>
              </React.Fragment>
            ))}
        </tbody>
      </table>
      <div className="email-print-container no-print">
        <button
          className="button-email"
          type="button"
          onClick={() => setShowEmailForm(true)}
        >
          <GoMail style={{ color: "white", height: "25px", width: "25px" }} />
        </button>
        <button className="button-print" type="button">
          <ImPrinter
            style={{ color: "white", height: "25px", width: "25px" }}
          />
        </button>
      </div>
      {showEmailForm && <EmailResultsForm hideEmail={showEmail}/>}
    </div>
  );
}
