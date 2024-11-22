import React, { useEffect, useState } from "react";
import { questionsData } from "../questionsData";
import { IoCaretBackSharp, IoCaretForwardSharp } from "react-icons/io5";
import useMonitorWidth from "../UsemonitorWidth";
import Results from "./Results";

import "./Questions.css";

export default function Questions() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [backwordDisabled, setBackwordDisabled] = useState(false);
  const [showFinishedPage, setShowFinishedPage] = useState(false);
  const [forwardDisabled, setForwardDisabled] = useState(true);
  const [userAnswers, setUserAnswers] = useState([]);
  const [end, setEnd] = useState(false);
  const [isSelected, setIsSelected] = useState("");
  const [storedUserSelfRating, setStoredUserSelfRating] = useState("");
  const [submissionReminder, setSubmissionReminder] = useState("");
  const [animationFade, setAnimationFade] = useState(false);
  const [formState, setFormState] = useState({
    questionNumber: questionsData[0].questionNumber,
    questionStatment: questionsData[0].questionStatment,
    userSelfRating: "",
    noResponse: "",
  });

  const { vw } = useMonitorWidth();

  const buttons = [1, 2, 3, 4, 5, 6];
  const currentQuestion = questionsData[currentQuestionIndex];
  const scales = [
    "Strongly Disagree",
    "Somewhat Disagree",
    "Neutral",
    "Somewhat Agree",
    "Strongly agree",
    "No Response",
  ];

  const handleRatingClick = (value) => {
    setIsSelected(value - 1);
    if (storedUserSelfRating) {
      setSubmissionReminder("Please submit your change...");
    }
    // Update formState only, not userAnswers
    setFormState((prevState) => ({
      ...prevState,
      userSelfRating: value,
      noResponse: "",
    }));
    setButtonDisabled(false); // Enable the submit button when a rating is selected
  };

  const handleGoBack = () => {
    try {
      if (currentQuestionIndex > 0) {
        const previousQuestionIndex = currentQuestionIndex - 1;
        const previousAnswer = userAnswers.find(
          (userAnswer) =>
            userAnswer.questionNumber === previousQuestionIndex + 1
        );

        if (previousAnswer) {
          setForwardDisabled(false);
          setFormState({
            questionNumber: previousAnswer.questionNumber,
            questionStatment: previousAnswer.questionStatment,
            userSelfRating: previousAnswer.userSelfRating,
            noResponse: previousAnswer.noResponse,
          });
          setIsSelected(previousAnswer.userSelfRating - 1);
        }
        setAnimationFade(true);
        setTimeout(() => {
          setAnimationFade(false);
        }, 1000);
        setCurrentQuestionIndex(previousQuestionIndex);
        setButtonDisabled(true);
        setSubmissionReminder("");
        setStoredUserSelfRating("");
      }
    } catch (error) {
      console.error("Error in handleGoBack: ", error);
    }
  };

  const handleNextQuestion = () => {
    try {
      if (forwardDisabled) return; // Prevent navigation if forwardDisabled is true
      if (currentQuestionIndex < questionsData.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setFormState({
          questionNumber:
            questionsData[currentQuestionIndex + 1].questionNumber,
          questionStatment:
            questionsData[currentQuestionIndex + 1].questionStatment,
          userSelfRating: storedUserSelfRating ?? "",
          noResponse: "",
        });
        setAnimationFade(true);
        setTimeout(() => {
          setAnimationFade(false);
        }, 1000);
        setButtonDisabled(true);
        setIsSelected("");
        setSubmissionReminder("");
        setStoredUserSelfRating("");
      }
    } catch (error) {
      console.error("Error in handleNextQuestion: ", error);
    }
  };

  const handleSubmit = () => {
    try {
      // Store formState in userAnswers only on submission
      setUserAnswers((prev) => {
        const existingAnswerIndex = prev.findIndex(
          (answer) => answer.questionNumber === formState.questionNumber
        );

        if (existingAnswerIndex !== -1) {
          const updatedAnswers = [...prev];
          updatedAnswers[existingAnswerIndex] = { ...formState };
          return updatedAnswers;
        } else {
          return [...prev, { ...formState }];
        }
      });

      if (currentQuestionIndex < questionsData.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setFormState({
          questionNumber:
            questionsData[currentQuestionIndex + 1].questionNumber,
          questionStatment:
            questionsData[currentQuestionIndex + 1].questionStatment,
          userSelfRating: "",
          noResponse: "",
        });
        setIsSelected("");
        setSubmissionReminder("");
        setAnimationFade(true);
        setStoredUserSelfRating("");
        setTimeout(() => {
          setAnimationFade(false);
        }, 1000);
      } else {
        setShowFinishedPage(true);
        setTimeout(() => {
          setShowFinishedPage(false);
        }, 3000);
        setEnd(true);
      }
    } catch (error) {
      console.error("Error in handleSubmit: ", error);
    }
  };

  useEffect(() => {
    try {
      if (currentQuestionIndex === 0) {
        setBackwordDisabled(true);
      } else {
        setBackwordDisabled(false);
      }
      setButtonDisabled(true);
      if (userAnswers.length === 0) {
        return;
      }
      const answeredQuestion = userAnswers.find(
        (userAnswer) => userAnswer.questionNumber - 1 === currentQuestionIndex
      );
      if (answeredQuestion) {
        setStoredUserSelfRating(answeredQuestion.userSelfRating);
        setIsSelected(answeredQuestion.userSelfRating - 1);
      } else {
        setForwardDisabled(true);
      }
    } catch (error) {
      console.error("Error in useEffect: ", error);
    }
  }, [userAnswers, currentQuestionIndex]);

  if (end === true) {
    return <Results userAnswers={userAnswers} />;
  }

  return (
    <div className="questions-main-container">
      <h1 className="card-title">ESSENCE Self-Awareness Assessment</h1>
      <div
        className="card"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h2 className="question-number">
          {currentQuestion.questionNumber} of 44
        </h2>
        <div className="card-body" style={{ textAlign: "center" }}>
          <div className="container-illustration">
            {vw <= 414 && (
              <div className="icon-div">
                <IoCaretBackSharp
                  style={{
                    cursor: backwordDisabled ? "not-allowed" : "pointer",
                    height: "30px",
                    width: "30px",
                  }}
                  onClick={handleGoBack}
                />
              </div>
            )}
            <img
              alt="illustration"
              src={currentQuestion.illustration}
              className={
                animationFade ? "illustration-animated" : "illustration"
              }
            />
            {vw <= 414 && (
              <div className="icon-div">
                <IoCaretForwardSharp
                  disabled={forwardDisabled}
                  onClick={() => {
                    if (!forwardDisabled) {
                      handleNextQuestion();
                    }
                  }}
                  style={{
                    cursor: forwardDisabled ? "not-allowed" : "pointer",
                    height: "30px",
                    width: "30px",
                  }}
                />
              </div>
            )}
          </div>
          <br />
          <div>
            <br />
            <p className="please-rate">
              Please rate how much you agree with the following statement:
            </p>
            {/* <br />
            <br /> */}
            <h2 className={animationFade ? "assest-animated" : "assest"}>
              <p>{currentQuestion.questionStatment}</p>
            </h2>
            <br />
            {submissionReminder ? (
              <p className="be-sure">Please submit your change...</p>
            ) : (
              <p className="be-sure" style={{ visibility: "hidden" }}>
                Please submit your change...
              </p>
            )}
            <div className="scale-line">
              {vw > 414 && (
                <div className="icon-div">
                  <IoCaretBackSharp
                    style={{
                      cursor: backwordDisabled ? "not-allowed" : "pointer",
                      height: "30px",
                      width: "30px",
                    }}
                    onClick={handleGoBack}
                  />
                </div>
              )}
              <div className="button-line-container">
                {buttons.map((button, index) => (
                  <div className="button-rating" key={index}>
                    <div className="button-wrapper">
                      <button
                        type="button"
                        className={
                          isSelected === index ? "button-selected" : "button"
                        }
                        onClick={() => handleRatingClick(index + 1)}
                      ></button>
                      {index === 0 && (
                        <div className="button-line button-line-start"></div>
                      )}
                      {index > 0 && index < 4 && (
                        <div className="button-line button-line-full"></div>
                      )}
                      {index === 4 && (
                        <div className="button-line button-line-end"></div>
                      )}
                      {index === 6 && (
                        <div
                          className="button-line"
                          onClick={() => handleRatingClick(0)}
                        ></div>
                      )}
                    </div>
                    <p className="scale-text">
                      {index < scales.length ? scales[index] : null}
                    </p>
                    <p className="scale-text" style={{ visibility: "hidden" }}>
                      {/* create empty space needed to keep homogene display with other buttons */}
                      {scales[index] === "Neutral" ? "Neutral" : ""}
                    </p>
                  </div>
                ))}
              </div>
              {vw > 414 && (
                <div className="icon-div">
                  <IoCaretForwardSharp
                    disabled={forwardDisabled}
                    onClick={() => {
                      if (!forwardDisabled) {
                        handleNextQuestion();
                      }
                    }}
                    style={{
                      cursor: forwardDisabled ? "not-allowed" : "pointer",
                      height: "30px",
                      width: "30px",
                    }}
                  />
                </div>
              )}
            </div>
            <button
              className="button-submit"
              type="button"
              disabled={buttonDisabled}
              style={{
                cursor: buttonDisabled ? "not-allowed" : "pointer",
                backgroundColor: buttonDisabled ? "#c7cec9" : "#e37d37",
                color: buttonDisabled ? "black" : "white",
              }}
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
