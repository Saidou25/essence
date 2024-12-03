import React, { useEffect, useState } from "react";
import Questions from "./components/Questions";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";

import "./components/Questions.css";
import "./components/Results.css";
import "./components/Footer.css";

const App = () => {
  const [start, setStart] = useState(false);

  const startAssessment = (data) => {
    if (data) {
      setStart(true);
    }
  };

  return (
    <>
      {start ? (
        <div>
          <Header />
          <Questions />
          <Footer />
        </div>
      ) : (
        <LandingPage landingStart={startAssessment} />
      )}
    </>
  );
};

export default App;
