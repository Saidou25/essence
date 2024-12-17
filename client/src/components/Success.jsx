import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import "./Success.css";

export default function Success() {
  return (
    <div className="success-container">
      <div className="card-success-container">
        <div className="card success-card">
          <div className="check">
            <IoMdCheckmarkCircleOutline className="check-logo" data-testid="success-icon" />
          </div>
          <div className="text-container">
            <div className="completion-text">
              <span>You have completed the </span>
              <span className="esa44">ESA44</span>
              <span>, now lets head to your results. </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
