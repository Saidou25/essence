import React, { useEffect, useState } from "react";
import { statmentsData } from "../data/statmentsData";
import { IoCaretBackSharp, IoCaretForwardSharp } from "react-icons/io5";
import useMonitorWidth from "../hooks/useWindowWidth";
import Button from "../../../components/Button";

import "./Assessment.css";

export default function Assessment({ showSuccessFunc, resetQuestionsComp }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [backwordDisabled, setBackwordDisabled] = useState(false);
  const [forwardDisabled, setForwardDisabled] = useState(true);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isSelected, setIsSelected] = useState("");
  const [storedUserSelfRating, setStoredUserSelfRating] = useState("");
  const [submissionReminder, setSubmissionReminder] = useState("");
  const [animationFade, setAnimationFade] = useState(false);
  const [formState, setFormState] = useState({
    questionNumber: statmentsData[0].questionNumber,
    questionStatment: statmentsData[0].questionStatment,
    userSelfRating: "",
    noResponse: "",
  });

  const { vw } = useMonitorWidth();

  const buttons = [1, 2, 3, 4, 5, 6];
  const currentQuestion = statmentsData[currentQuestionIndex];
  const scales = [
    "Strongly Disagree",
    "Somewhat Disagree",
    "Neutral",
    "Somewhat Agree",
    "Strongly agree",
    "No Response",
  ];

  let animationTimeout;
  // Aim to clear timeOut each time it is used
  const handleAnimationFade = () => {
    setAnimationFade(true);
    clearTimeout(animationTimeout); // Clear any existing timeout
    animationTimeout = setTimeout(() => {
      setAnimationFade(false);
    }, 1000);
  };

  const resetStates = () => {
    setCurrentQuestionIndex(0);
    setButtonDisabled(true);
    setBackwordDisabled(false);
    setForwardDisabled(true);
    setUserAnswers([]);
    setIsSelected("");
    setStoredUserSelfRating("");
    setSubmissionReminder("");
    setAnimationFade(false);
    setFormState({
      questionNumber: statmentsData[0].questionNumber,
      questionStatment: statmentsData[0].questionStatment,
      userSelfRating: "",
      noResponse: "",
    });
  };

  const handleRatingClick = (value) => {
    setIsSelected(value - 1);
    if (storedUserSelfRating) {
      setSubmissionReminder("Please submit your change...");
    }
    if (value === 6) {
      // Update formState only with 0 is no response selected
      setFormState((prevState) => ({
        ...prevState,
        userSelfRating: 0,
        noResponse: "",
      }));
    } else {
      // otherwise update formstate with value
      setFormState((prevState) => ({
        ...prevState,
        userSelfRating: value,
        noResponse: "",
      }));
    }
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
          setAnimationFade(true);
          handleAnimationFade();
          setFormState({
            questionNumber: previousAnswer.questionNumber,
            questionStatment: previousAnswer.questionStatment,
            userSelfRating: previousAnswer.userSelfRating,
            noResponse: previousAnswer.noResponse,
          });
          setIsSelected(previousAnswer.userSelfRating - 1);
        }
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
      if (currentQuestionIndex < statmentsData.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setFormState({
          questionNumber:
            statmentsData[currentQuestionIndex + 1].questionNumber,
          questionStatment:
            statmentsData[currentQuestionIndex + 1].questionStatment,
          userSelfRating: storedUserSelfRating ?? "",
          noResponse: "",
        });
        setAnimationFade(true);
        handleAnimationFade();
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

    if (currentQuestionIndex < statmentsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setFormState({
        questionNumber: statmentsData[currentQuestionIndex + 1].questionNumber,
        questionStatment:
          statmentsData[currentQuestionIndex + 1].questionStatment,
        userSelfRating: "",
        noResponse: "",
      });
      setIsSelected("");
      setSubmissionReminder("");
      setAnimationFade(true);
      setStoredUserSelfRating("");
      setButtonDisabled(true);
      setTimeout(() => {
        setAnimationFade(false);
      }, 1000);
    } else {
      // console.log(userAnswers);
      // showSuccessFunc(true, userAnswers);
    }
  };

  useEffect(() => {
    // Managing navigation buttons
    if (currentQuestionIndex === 0) {
      setBackwordDisabled(true);
    } else {
      setBackwordDisabled(false);
    }
  }, [currentQuestionIndex, statmentsData.length]);

  useEffect(() => {
    // Restore previous answers when revisiting a question
    const answeredQuestion = userAnswers.find(
      (userAnswer) => userAnswer.questionNumber - 1 === currentQuestionIndex
    );

    if (answeredQuestion) {
      setStoredUserSelfRating(answeredQuestion.userSelfRating);
      setIsSelected(answeredQuestion.userSelfRating - 1);
      setForwardDisabled(false);
      setButtonDisabled(true); // Disable the submit button as the question is already answered
    } else {
      setStoredUserSelfRating("");
      setForwardDisabled(true);
      setIsSelected("");
    }
  }, [userAnswers, currentQuestionIndex]);

  useEffect(() => {
    // Trigger success when all questions are answered
    if (userAnswers.length === statmentsData.length) {
      showSuccessFunc(userAnswers);
    }
  }, [userAnswers, statmentsData.length]);

  useEffect(() => {
    if (resetQuestionsComp) {
      resetStates();
    }
  }, [resetQuestionsComp]);

  return (
    <div className="questions-main-container" data-testid="questions">
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
            {vw <= 830 && (
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
            {vw <= 830 && (
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
            <h2>
              <p
                className={animationFade ? "assest-animated" : "assest"}
                data-testid="assetst"
              >
                {currentQuestion.questionStatment}
              </p>
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
              {vw > 830 && (
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
              {vw > 830 && (
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
            <Button
              role="button"
              buttonDisabled={buttonDisabled}
              buttonType="button"
              handleSubmit={handleSubmit}
            >
              SUBMIT
            </Button>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
