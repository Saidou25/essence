import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

import "./EmailResultsForm.css";

export default function EmailResultsForm({ hideEmail }) {
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState({
    email: "",
    username: "",
  });

  const handleChange = (e) => {
    setErrorMessage("");
    const { name, value } = e.target;
    // Update the form state
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // Enable/disable submit button based on email and username values
    const isFormValid =
      (name === "email" ? value : formState.email) &&
      (name === "username" ? value : formState.username);
    setSubmitButtonDisabled(!isFormValid);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email);
    if (!isValidEmail) {
      setErrorMessage("Invalid email format");
      return;
    }
    try {
      console.log("Email submitted", formState.username, formState.email);
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
            To receive your ESA44 result via email, then please fill out your
            first name and email address.
          </p>
        </div>
        <form className="email-form" onSubmit={handleFormSubmit}>
          <label htmlFor="username-input" className="form-label">
          First Name
          </label>
          <br />
          <input
            className="form-input"
            id="username-input"
            type="text"
            placeholder="enter your username"
            autoComplete="on"
            name="username"
            value={formState.username || ""}
            onChange={handleChange}
            aria-invalid={!!errorMessage}
          />
          <br />
          <label htmlFor="email-input" className="form-label">
            Email Address
          </label>
          <br />
          <input
            className="form-input"
            id="email-input"
            type="email"
            placeholder="enter your email address"
            autoComplete="on"
            name="email"
            value={formState.email || ""}
            onChange={handleChange}
            aria-invalid={!!errorMessage}
          />
          <br />
          <br />
          {errorMessage && (
            <p aria-live="polite" className="error-message">
              {errorMessage}
            </p>
          )}
          <br />
          <button
            className="form-button"
            type="submit"
            disabled={submitButtonDisabled}
            style={{
              cursor: submitButtonDisabled ? "not-allowed" : "pointer",
              backgroundColor: submitButtonDisabled ? "#c7cec9" : "#e37d37",
              color: submitButtonDisabled ? "black" : "white",
            }}
          >
            SUBMIT
          </button>
          <br />
        </form>
      </div>
    </div>
  );
}
