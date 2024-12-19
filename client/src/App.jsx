import React, { useState } from "react";
import Questions from "./components/Questions";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Success from "./components/Success";
import Results from "./components/Results";

import "./components/Questions.css";
import "./components/Results.css";
import "./components/Footer.css";
import "./App.css";

const App = () => {
  const [showQuestions, setShowQuestions] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showResults, setShowResults] = useState(true);
  const [allanswers, setAllAnswers] = useState("");
  const [resetQuestionsComp, setResetQuestionsComp] = useState(false);

  const showSuccessComponent = (userAnswers) => {
    setAllAnswers(userAnswers);
    setShowQuestions(false);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setShowResults(true);
    }, 6000);
  };

  const resetQuestionsComponent = (data) => {
    if (data === "resetQuestions") {
      setResetQuestionsComp(true);
    }
  };

  const restartAssessment = (data) => {
    if (data === "resetApp") {
      setShowQuestions(true);
      setShowSuccess(false);
      setShowResults(false);
      setAllAnswers("");
    }
  };

  return (
    <>
      <div className="fade-in-div" role="app">
        <Header className="no-print" />
        {showQuestions && (
          <Questions
          data-testid="questions"
            showSuccessFunc={showSuccessComponent}
            resetQuestionsComp={resetQuestionsComp}
          />
        )}
        {showSuccess && <Success data-testid="success"/>}
        {showResults && (
          <div className="fade-in-div">
            <Results data-testid="results"
              userAnswers={allanswers}
              resetApp={restartAssessment}
              resetQuestions={resetQuestionsComponent}
            />
          </div>
        )}
        <Footer className="no-print" />
      </div>
    </>
  );
};

export default App;
