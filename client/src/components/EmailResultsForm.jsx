import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { resultsData } from "../questionsData";
import ButtonSpinner from "./ButtonSpinner";

import "./EmailResultsForm.css";

export default function EmailResultsForm({
  hideEmail,
  totalAssessment,
  formattedDate,
}) {
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [formState, setFormState] = useState({
    email: "",
    username: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [templateAwakeness, setTemplateAwakeness] = useState("");
  const [templatePerspective, setTemplatePerspective] = useState("");

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

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email);
    if (!isValidEmail) {
      setErrorMessage("Invalid email format");
      return;
    }
    // Determine the correct API URL based on the environment (local or production)
    const apiUrl =
      process.env.NODE_ENV === "development"
        ? "http://127.0.0.1:5001/essence-9f702/us-central1/sendEmail"
        : "https://saidou25.github.io/essence/"; // Deployed URL
    // const apiUrl =
    //   process.env.NODE_ENV === "development"
    //     ? "http://127.0.0.1:5001/essence-9f702/us-central1/sendEmail"
    //     : "https://sendemail-yo7s25d5wq-uc.a.run.app"; // Deployed URL

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: formState.email,
          subject: "esa44",
          // html: `<p>Hello ${formState.username},</p><p>Your ESA44 results are:</p><ul><li>Awakeness: ${templateAwakeness}</li><li>Perspective: ${templatePerspective}</li><li>Assessment: ${totalAssessment}</li></ul>`,
          // text: `Hello ${formState.username} and thank you for taking the ESA44 self-awareness assessment.`,
          templateId: "d-36cc6833348d4da49c115d42b8033a6d",
          dynamicTemplateData: {
            username: formState.username,
            date: formattedDate,
            templateAssessment: totalAssessment,
            awakeness: templateAwakeness,
            perspective: templatePerspective,
          },
        }),
      });
      // Check if response is ok (status code between 200-299)
      if (!response.ok) {
        throw new Error(`Error sending email: ${response.statusText}`);
      }
      const data = await response.json();
      if (response.ok) {
        setSuccess("Email sent successfully");
        setSubmitButtonDisabled(true);
        setErrorMessage("");
        setFormState({
          email: "",
          username: "",
        });
      }
    } catch (error) {
      console.error("Error in sending email request", error);
      setErrorMessage("Failed to send email. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  useEffect(() => {
    if (resultsData) {
      resultsData.forEach((result, index) => {
        if (
          totalAssessment >= result.minPercentage &&
          totalAssessment <= result.maxPercentage
        ) {
          setTemplatePerspective(result.perspective);
          setTemplateAwakeness(result.awakeness);
        }
      });
    }
  }, [totalAssessment, resultsData]);

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
          <h2 className="form-message-title">Inbox Results</h2>
          <p className="form-message">
            To receive your ESA44 results via email, please fill out your first
            name and email address.
          </p>
        </div>
        <form className="email-form" onSubmit={sendEmail}>
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
          {success && (
            <p aria-live="polite" className="success">
              {success}
            </p>
          )}
          <br />
          {isSending ? (
            <ButtonSpinner />
          ) : (
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
          )}
          <br />
        </form>
      </div>
    </div>
  );
}
