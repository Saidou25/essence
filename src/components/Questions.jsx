import React, { useEffect, useState } from "react";
import { questionsData } from "../questionsData";
import Finish from "./Finish";
import { MdArrowForwardIos } from "react-icons/md";
import { GrPrevious } from "react-icons/gr";
import "./Questions.css";

export default function Questions() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [pass, setPass] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [forwardDisabled, setForwardDisabled] = useState(true);
  const [userAnswers, setUserAnswers] = useState([]);
  const [end, setEnd] = useState(false);
  const [isSelected, setIsSelected] = useState("");
  const [storedUserSelfRating, setStoredUserSelfRating] = useState("");
  const [formState, setFormState] = useState({
    questionNumber: questionsData[0].questionNumber,
    questionStatment: questionsData[0].questionStatment,
    userSelfRating: "",
    noResponse: "",
  });
  // console.log(forwardDisabled);

  const buttons = [1, 2, 3, 4, 5];
  const currentQuestion = questionsData[currentQuestionIndex];
  const scales = [
    "Strongly Disagree",
    "Somewhat Disagree",
    "Neutral",
    "Somewhat Agree",
    "Strongly agree",
  ];
  // const currentScale = scales[currentScaleIndex];
  // console.log(currentScale)

  // console.log("user answers", userAnswers);
  // console.log("form state", formState);

  const resetFormState = () => {
    setFormState((prevState) => ({
      ...prevState,
      noResponse: "No response",
      userSelfRating: 0,
    }));
  };

  const handleRatingClick = (value) => {
    console.log(value);
    setPass(false);
    setIsSelected(value - 1);
    if (value === 0) {
      setIsSelected("");
      setPass(true);
      resetFormState();
      setButtonDisabled(false); // Enable the submit button for "No Response"
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
    if (currentQuestionIndex > 0) {
      const previousQuestionIndex = currentQuestionIndex - 1;
      const previousAnswer = userAnswers.find(
        (userAnswer) => userAnswer.questionNumber === previousQuestionIndex + 1
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

      setCurrentQuestionIndex(previousQuestionIndex);
      setButtonDisabled(true);
      setPass(false);
    }
  };
  const handleNextQuestion = () => {
    if (forwardDisabled) return; // Prevent navigation if forwardDisabled is true
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setFormState({
        questionNumber: questionsData[currentQuestionIndex + 1].questionNumber,
        questionStatment:
          questionsData[currentQuestionIndex + 1].questionStatment,
        userSelfRating: storedUserSelfRating,
        noResponse: "",
      });
      setButtonDisabled(true);
      setPass(false);
      setIsSelected("");
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

    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setFormState({
        questionNumber: questionsData[currentQuestionIndex + 1].questionNumber,
        questionStatment:
          questionsData[currentQuestionIndex + 1].questionStatment,
        userSelfRating: "",
        noResponse: "",
      });
      setButtonDisabled(true);
      setPass(false);
      setIsSelected("");
    } else {
      setEnd(true);
    }
  };

  useEffect(() => {
    console.log(userAnswers);
    if (userAnswers.length === 0) {
      return;
    }
    // console.log("user answers", userAnswers);
    const answeredQuestion = userAnswers.find(
      (userAnswer) => userAnswer.questionNumber - 1 === currentQuestionIndex
    );
    // console.log(answeredQuestion);
    if (answeredQuestion) {
      console.log(answeredQuestion.userSelfRating);
      setStoredUserSelfRating(answeredQuestion.userSelfRating);
      setIsSelected(answeredQuestion.userSelfRating - 1);
    } else {
      setForwardDisabled(true);
    }
  }, [userAnswers, currentQuestionIndex]);
  console.log("forward disabled", forwardDisabled);

  if (end === true) {
    return <Finish userAnswers={userAnswers} />;
  }

  return (
    <>
      <br />
      <div
        className="card"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div className="card-title">
          <h2 style={{ textAlign: "center" }}>
            Question {currentQuestion.questionNumber} of 44
          </h2>
        </div>
        <div className="navigation-icons">
          <GrPrevious onClick={handleGoBack} />
          <MdArrowForwardIos
            disabled={forwardDisabled}
            onClick={() => {
              if (!forwardDisabled) {
                handleNextQuestion();
              }
            }}
            style={{ cursor: forwardDisabled ? "not-allowed" : "pointer" }}
          />
        </div>
        <br />
        <div className="card-body" style={{ textAlign: "center" }}>
          <h2>{currentQuestion.questionStatment}</h2>
          <div
            className="container"
            style={{ maxWidth: "30%", margin: "auto" }}
          >
            <img
              alt="illustration"
              src={currentQuestion.illustration}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <br />
          <div>
            <br />
            <span>
              Please rate how much you agree with the above statement:
            </span>
            <br />
            <br />
            <br />
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
                  </div>
                  <p className="scale-text">
                    {index < scales.length ? scales[index] : null}
                  </p>
                  <p style={{ visibility: "hidden" }}>
                    {/* create empty space needed to keep homogene display with other buttons */}
                    {scales[index] === "Neutral" ? "Neutral" : ""}
                  </p>
                </div>
              ))}

              <div className="button-rating">
                <button
                  className={
                    isSelected === -1 || pass
                      ? "no-response-selected"
                      : "no-response"
                  }
                  type="button"
                  onClick={() => handleRatingClick(0)}
                  style={{ marginLeft: "15%" }}
                ></button>
                <p className="scale-text" style={{ display: "flex", flexDirection: "column" }}>
                  No<span></span>
                  {/* create empty space needed to keep homogene display with other buttons */}
                  <span></span> Response
                </p>
                <p style={{ visibility: "hidden" }}></p>
              </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <button
              className="btn-submit"
              type="button"
              disabled={buttonDisabled}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>{" "}
          <br />
        </div>
      </div>
    </>
  );
}
