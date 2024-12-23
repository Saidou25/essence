import React, { useState } from "react";
import Assessment from "./features/Assessment/components/Assessment";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Success from "./components/Success";
import Results from "./features/Results/components/Results";

import "./features/Assessment/components/Assessment.css";
import "./features/Results/components/Results.css";
import "./components/Footer.css";
import "./App.css";

export default function App() {
  const [showQuestions, setShowQuestions] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showResults, setShowResults] = useState(false);
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
          <Assessment
            data-testid="questions"
            showSuccessFunc={showSuccessComponent}
            resetQuestionsComp={resetQuestionsComp}
          />
        )}
        {showSuccess && <Success data-testid="success" />}
        {showResults && (
          <div className="fade-in-div">
            <Results
              data-testid="results"
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
