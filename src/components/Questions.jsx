import React, { useState } from "react";
import questionsData from "../questionsData";
import Finish from "./Finish";

export default function Questions() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [pass, setPass] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [userAnswers, setUserAnswers] = useState([]);
  const [end, setEnd] = useState(false);
  const [formState, setFormState] = useState({
    questionNumber: questionsData[0].questionNumber,
    questionStatment: questionsData[0].questionStatment,
    userSelfRating: "",
    noResponse: "",
  });

  const buttons = [1, 2, 3, 4, 5];
  const currentQuestion = questionsData[currentQuestionIndex];

  const resetFormState = () => {
    setFormState((prevState) => ({
      ...prevState,
      noResponse: "No response",
      userSelfRating: 0, // Reset userSelfRating if no response is given
    }));
  };
  const handleRatingClick = (value) => {
    setFormState((prevState) => ({
      ...prevState,
      userSelfRating: value,
    }));
    setButtonDisabled(!value); // Disable if no value
  };

  const handleGoBack = () => {
    if (currentQuestionIndex > 0) {
      setUserAnswers((prev) => prev.slice(0, -1));
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setFormState({
        questionNumber: questionsData[currentQuestionIndex - 1].questionNumber,
        questionStatment:
          questionsData[currentQuestionIndex - 1].questionStatment,
        userSelfRating: "",
        noResponse: "",
      });
      setButtonDisabled(true); // Reset button state
      setPass(false); // Reset pass state
    }
  };

  const handleNoResponse = () => {
    setPass(true);
    console.log("pass on that one");

    resetFormState();
    setButtonDisabled(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pass) {
      resetFormState();
      setUserAnswers((prev) => [...prev, formState]);
    } else if (!pass) {
      setUserAnswers((prev) => [...prev, formState]);
    }

    // Move to the next question
    if (currentQuestionIndex < questionsData.length - 1) {
      // Update the form state with the current question's data
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setFormState({
        questionNumber: questionsData[currentQuestionIndex + 1].questionNumber,
        questionStatment:
          questionsData[currentQuestionIndex + 1].questionStatment,
        userSelfRating: "",
        noResponse: "",
      });
      setButtonDisabled(true); // Reset button state
      setPass(false); // Reset pass state
    } else {
      setEnd(true);
      // handle end of questions
    }
  };

  if (end) {
    return <Finish end={end} userAnswers={userAnswers} />;
  }
  return (
    <>
      <div>Please rate how much you agree with the statement:</div>
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
            Question {currentQuestion.questionNumber}
          </h2>
        </div>
        <button
          type="button"
          onClick={handleGoBack}
          style={{ width: "40%", margin: "auto" }}
        >
          go back
        </button>
        <br />
        <br />
        <br />
        <br />
        <div className="card-body" style={{ textAlign: "center" }}>
          <span>{currentQuestion.questionStatment}</span>
          <br />
          <br />
          <div>
            <div>Your rating: </div>
            <br />
            {buttons &&
              buttons.map((button, index) => (
                <div
                  key={index}
                  style={{ display: "inline-block", marginRight: "10px" }}
                >
                  <button onClick={() => handleRatingClick(index + 1)}>
                    {index + 1}
                  </button>
                </div>
              ))}
            <button
              type="button"
              onClick={handleNoResponse}
              style={{ marginLeft: "15%" }}
            >
              No Response
            </button>
            <br />
            <br />
            <br />
            <button
              type="submit"
              disabled={buttonDisabled}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
