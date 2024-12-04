import React, { useEffect, useState } from "react";
import Questions from "./components/Questions";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Success from "./components/Success";
import Results from "./components/Results";

import "./components/Questions.css";
import "./components/Results.css";
import "./components/Footer.css";
import "./App.css";

const App = () => {
  const [showQuestions, setShowQuestions] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [allanswers, setAllAnswers] = useState("");

  const showQuestionsComponent = (data) => {
    if (data) {
      setShowQuestions(true);
    }
  };

  const showSuccessComponent = (data, userAnswers) => {
    if (data && userAnswers) {
      setAllAnswers(userAnswers);
      setShowQuestions(false);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setShowResults(true);
      }, 6000);
    }
  };

  return (
    <>
      {!showQuestions && !showSuccess && !showResults ? (
        <LandingPage showQuestionsFunc={showQuestionsComponent} />
      ) : (
        <div className="fade-in-div">
          <Header />
          {showQuestions && (
            <Questions showSuccessFunc={showSuccessComponent} />
          )}
          {showSuccess && <Success />}
          {showResults && (
            <div className="fade-in-div">
              <Results userAnswers={allanswers} />
            </div>
          )}
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
