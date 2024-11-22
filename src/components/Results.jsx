import React, { useRef } from "react";
import { resultsData } from "../questionsData";
import { LuDownload } from "react-icons/lu";
import { VscDebugRestart } from "react-icons/vsc";
import html2pdf from "html2pdf.js";

import "./Results.css";

export default function Finish({ userAnswers }) {
  // Create a ref for the content you want to convert to PDF
  const printContentRef = useRef(null);

  let totalRating = 0;
  const totalAssessment = (totalRating / 220) * 100;
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const formattedDate = `${month + 1}/${day}/${year}`;

  for (let userAnswer of userAnswers) {
    totalRating += Number(userAnswer.userSelfRating); // Convert to number to avoid string concatenation
  }

  const handleRetake = () => {
    window.location.reload();
  };

  // Function to generate the PDF
  const downloadAssessmentResults = () => {
    // Define options for the html2pdf library
    const options = {
      margin: 1,
      filename: "assessment_results.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 4, useCORS: true }, // Optional, higher scale for better image quality
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    // Generate the PDF from the HTML content
    html2pdf()
      .from(printContentRef.current) // Pass the ref to the html2pdf method
      .set(options)
      .save(); // Trigger the PDF download
  };

  return (
    <div
      className="finish-main-container"
      id="print-results-content"
      ref={printContentRef}
    >
      <span className="format-date">{formattedDate}</span>
      <h1 className="finish-titles">ESA44 Assessment Results</h1>
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
      <h2 className="please-evaluate">
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
      <br />
      {/* <p style={{ textAlign: "center" }}>
        Be sure to record your ESA44 Results on page 11 or page 303 of ESSENCE
        Book 1.
      </p> */}
      <div className="email-print-container">
        <div className="email-print-texts">
          <p className="button-text-title">Download PDF</p>
          <button
            className="button-download"
            type="button"
            onClick={downloadAssessmentResults}
          >
            <LuDownload
              style={{
                color: "white",
                height: "25px",
                width: "25px",
                cursor: "pointer",
              }}
            />
          </button>
        </div>
        <div className="email-print-texts">
          <p className="button-text-title">Restart Assessment</p>
          <button
            className="button-retake"
            type="button"
            onClick={handleRetake}
          >
            <VscDebugRestart
              style={{
                color: "white",
                height: "25px",
                width: "25px",
                cursor: "pointer",
              }}
            />
          </button>
        </div>
      </div>
      <br />
      <div
        style={{
          textAlign: "center",
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
        }}
      >
        <p style={{ padding: "0 3px 0 3px" }}>
          Be sure to record your ESA44 Results on page 11 or page 303 of ESSENCE
          Book 1.
        </p>
        <p>www.princetongreen.org</p>
      </div>
    </div>
  );
}
