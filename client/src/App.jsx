import React from "react";
import Questions from "./components/Questions";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./components/Questions.css";
import "./components/Results.css";
import "./components/Footer.css";

const App = () => {
  return (
    <div>
      <Header />
      <Questions />
      <Footer />
    </div>
  );
};

export default App;
