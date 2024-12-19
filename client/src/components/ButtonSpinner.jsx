import React from "react";
import "./ButtonSpinner.css";

const ButtonSpinner = () => {
  return (
    <button className="spinner-button" data-testid="button-spinner">
      <span className="spinner"></span>
    </button>
  );
};

export default ButtonSpinner;
