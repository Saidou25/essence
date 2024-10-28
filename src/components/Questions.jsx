import React, { useState } from "react";
import questionsData from "../questionsData";
import Finish from "./Finish";

export default function Questions() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [pass, setPass] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [userAnswers, setUserAnswers] = useState([]);
  const [end, setEnd] = useState("");
  const [formState, setFormState] = useState({
    questionNumber: questionsData[0].questionNumber,
    questionStatment: questionsData[0].questionStatment,
    userSelfRating: "",
    noResponse: "",
  });

  const currentQuestion = questionsData[currentQuestionIndex];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setButtonDisabled(!value); // Disable if no value
  };

  const handleNoResponse = () => {
    setPass(true);
    console.log("pass on that one");

    setFormState((prevState) => ({
      ...prevState,
      noResponse: "No response",
      userSelfRating: 0, // Reset userSelfRating if no response is given
    }));
    setButtonDisabled(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pass) {
      setFormState((prevState) => ({
        ...prevState,
        noResponse: "No response",
        userSelfRating: 0, // Reset userSelfRating if no response is given
      }));
      userAnswers.push(formState);
    } else if (!pass) {
      userAnswers.push(formState);
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
      setEnd("All questions answered");
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
      <div className="card">
        <div className="card-title">
          <h2>Question {currentQuestion.questionNumber}</h2>
        </div>
        <div className="card-body">
          <span>{currentQuestion.questionStatment}</span>
          <div>{formState.noResponse}</div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="userInput">Your rating: </label>
            <input
              id="userInput"
              onChange={handleChange}
              name="userSelfRating"
              value={formState.userSelfRating}
            />
            <button type="submit" disabled={buttonDisabled}>
              Submit
            </button>
            <button type="button" onClick={handleNoResponse}>
              No Response
            </button>
          </form>
        </div>
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
