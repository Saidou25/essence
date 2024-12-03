import React from "react";

import "./LandingPage.css";

export default function LandingPage({ landingStart }) {
  return (
    <div className="landing-page-container">
      <div className="landing-image">
        <div className="image-content">
          <h1 className="image-text">
            You have been redirected to 21stcenturyparadigm.org for your
            Self-Awareness Assessment.
          </h1>
          <div className="landing-buttons">
            <button
              className="landing-button"
              onClick={() => landingStart(true)}
            >
             START ASSESSMENT
            </button>
          {/* <div className="landing-buttons">
            <button
              className="landing-button"
              onClick={() => landingChoice("save")}
            >
              SAVE MY RESULTS
            </button>
            <button
              className="landing-button"
              onClick={() => landingChoice("don't save")}
            >
              DON'T SAVE
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
