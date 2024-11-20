import React, { useState } from "react";
import { resultsData } from "../questionsData";
import { GoMail } from "react-icons/go";
import { ImPrinter } from "react-icons/im";
import { VscDebugRestart } from "react-icons/vsc";
import { jsPDF } from 'jspdf';
import EmailResultsForm from "./EmailResultsForm";
import retake from "../assets/images/retake.png";

import "./Results.css";

export default function Finish({ userAnswers }) {
  const [showEmailForm, setShowEmailForm] = useState(false);

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
    // Gather assessment results (this would be dynamic in a real app)
    const results = {
      name: 'John Doe',
      score: 85,
      date: '2024-11-20',
      answers: [
        { question: 'Question 1', answer: 'Answer A' },
        { question: 'Question 2', answer: 'Answer C' },
        // more results...
      ],
    };

    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Add a title to the PDF
    doc.setFontSize(16);
    doc.text('Assessment Results', 20, 20);

    // Add user-specific information (e.g., name, score)
    doc.setFontSize(12);
    doc.text(`Name: ${results.name}`, 20, 30);
    doc.text(`Score: ${results.score}`, 20, 40);
    doc.text(`Date: ${results.date}`, 20, 50);

    // Add answers to the PDF
    doc.text('Answers:', 20, 60);
    let yOffset = 70;
    results.answers.forEach((item) => {
      doc.text(`${item.question}: ${item.answer}`, 20, yOffset);
      yOffset += 10; // Increment y offset to avoid overlapping
    });

    // Trigger the PDF download
    doc.save('assessment_results.pdf');
  };


  return (
    <div className="finish-main-container" id="print-results-content">
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
      {showEmailForm ? (
        <EmailResultsForm hideEmail={showEmail} />
      ) : (
        <div className="email-print-container no-print">
          <div className="email-print-texts no-print">
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
          </div>
          <div className="email-print-texts no-print">
            <p className="button-text-title">Print results</p>
            <button
              className="button-print"
              type="button"
              onClick={downloadAssessmentResults}
            >
              <ImPrinter
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
      )}
    </div>
  );
}
