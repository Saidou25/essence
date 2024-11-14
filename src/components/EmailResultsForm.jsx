import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

import "./EmailResultsForm.css";

export default function EmailResultsForm({ hideEmail }) {
  const [emailFormDisabled, setEmailFormDisabled] = useState(true);
  const handleFormSubmit = () => {
    console.log("Email selected");
  };

  return (
    <div className="allmailform-container no-print">
      <div className="close-container">
        <RxCross2
          onClick={() => hideEmail(false)}
          style={{ color: "white", width: "25px", height: "25px" }}
        />
      </div>
      <div className="email-form-container">
        <div>
          <h2 className="form-message-title">Mailing Results Request</h2>
          <p className="form-message">
            To receive you ESA44 results directly in your inbox.
          </p>
        </div>
        <div className="email-form">
          <label htmlFor="form-input">Email Address</label>
          <input
            className="form-input"
            id="form-input"
            type="email"
            placeholder="Your email address"
            autoComplete="on"
          />
          <button
            className="form-button"
            type="button"
            onClick={handleFormSubmit}
            disabled={emailFormDisabled ? true : false}
            style={{
              cursor: emailFormDisabled ? "not-allowed" : "pointer",
            }}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}
