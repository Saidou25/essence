import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

import "./EmailResultsForm.css";

export default function EmailResultsForm({ hideEmail }) {
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setErrorMessage("");
    const userEmail = e.target.value;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail);
    setFormState({
      email: userEmail,
    });
    if (!isValidEmail) {
      setSubmitButtonDisabled(true);
    } else {
      setSubmitButtonDisabled(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email);
    if (!isValidEmail) {
      setErrorMessage("Invalid email format");
      return;
    }
    try {
      console.log("Email submitted", formState.email);
    } catch (error) {
      console.log("there was an error", error);
    } finally {
      setErrorMessage("");
      setFormState({ email: "" });
      setSubmitButtonDisabled(true);
    }
  };

  return (
    <div className="allmailform-container">
      <div className="close-container">
        <RxCross2
          onClick={() => hideEmail(false)}
          style={{
            color: "white",
            width: "25px",
            height: "25px",
            cursor: "pointer",
          }}
        />
      </div>
      <div className="email-form-container">
        <div>
          <h2 className="form-message-title">Mailing Results Request</h2>
          <p className="form-message">
            To receive your ESA44 results directly in your inbox.
          </p>
        </div>
        <form className="email-form" onSubmit={handleFormSubmit}>
          <label htmlFor="form-input" className="form-label">
            Email Address
          </label>
          <br />
          <input
            className="form-input"
            id="form-input"
            type="email"
            placeholder="enter your email address"
            autoComplete="on"
            name="email"
            value={formState.email}
            onChange={handleChange}
            aria-invalid={!!errorMessage}
          />
          <br />
          {errorMessage && (
            <span aria-live="polite" className="error-message">
              {errorMessage}
            </span>
          )}

          <button
            className="form-button"
            type="submit"
            disabled={submitButtonDisabled}
            style={{
              cursor: submitButtonDisabled ? "not-allowed" : "pointer",
            }}
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}