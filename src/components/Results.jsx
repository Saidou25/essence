import React, { useRef, useState } from "react";
import { resultsData } from "../questionsData";
import { GoMail } from "react-icons/go";
import { VscDebugRestart } from "react-icons/vsc";
import html2pdf from "html2pdf.js";
import EmailResultsForm from "./EmailResultsForm";
import retake from "../assets/images/retake.png";

import "./Results.css";
import { FaFilePdf } from "react-icons/fa";

export default function Finish({ userAnswers }) {
  const [showEmailForm, setShowEmailForm] = useState(false);
  
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

  const showEmail = (data) => {
    setShowEmailForm(data);
  };

  // Function to generate the PDF
  const downloadAssessmentResults = () => {
    console.log("in downloadAssessmentResults");
    
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
    <div className="finish-main-container" id="print-results-content" ref={printContentRef}>
      <h1 className="finish-titles">ESA44 Assessment Results</h1>
      <img
        alt="Retake image"
        className="retake no-print"
        src={retake}
        onClick={handleRetake}
      />
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
                        {Math.round((totalRating / 220) * 100 * 100) / 100 + "%"}
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
      {/* {showEmailForm ? (
        <EmailResultsForm hideEmail={showEmail} />
      ) : ( */}
       <div className="email-print-container no-print">
          {/* <div className="email-print-texts no-print">
            <p className="button-text-title">E-mail results</p>
            <button
              className="button-email"
              type="button"
              onClick={() => setShowEmailForm(true)}
            >
              <GoMail
                style={{ color: "white", height: "25px", width: "25px" }}
              />
            </button>
          </div>  */}
          <div className="email-print-texts no-print">
            <p className="button-text-title">Download PDF</p>
            <button
              className="button-print"
              type="button"
              onClick={downloadAssessmentResults}
            >
              <FaFilePdf
                style={{
                  color: "white",
                  height: "25px",
                  width: "25px",
                  cursor: "pointer",
                }}
              />
            </button>
          </div>
          <div className="email-print-texts no-print">
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
      {/* )} */}
    </div>
  );
}
