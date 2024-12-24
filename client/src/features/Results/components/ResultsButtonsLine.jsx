import React from "react";
import { resultsButtons } from "../data/ResultsButtonsData"; // Importing the buttons to be displayed
import PropTypes from "prop-types";

import "./ResultsButtonsLine.css";

export default function FourButtonForResults({
  handlePrint,
  handleRetake,
  downloadAssessmentResults,
  showForm
}) {
  return (
    <div className="email-print-container no-print">
      {resultsButtons &&
        resultsButtons.map((resultButton) => (
          <div key={resultButton.pText} className="email-print-texts">
            <p className="button-text-title">{resultButton.pText}</p>
            <button
              role="button"
              className={resultButton.buttonClassName}
              type="button"
              onClick={() => {
                if (resultButton.pText === "Print Results") {
                  handlePrint();
                } else if (resultButton.pText === "Download PDF") {
                  downloadAssessmentResults();
                } else if (resultButton.pText === "E-mail Results") {
                  showForm(true);
                } else if (resultButton.pText === "Restart Assessment") {
                  handleRetake();
                }
              }}
              aria-label={resultButton.buttonAria}
            >
              {resultButton.buttonLogo}
            </button>
          </div>
        ))}
    </div>
  );
}

FourButtonForResults.propTypes = {
  handlePrint: PropTypes.func.isRequired,
  handleRetake: PropTypes.func.isRequired,
  downloadAssessmentResults: PropTypes.func.isRequired,
  showForm: PropTypes.func.isRequired,
};