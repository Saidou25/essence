import React from "react";
import ButtonSpinner from "./ButtonSpinner";
import PropTypes from "prop-types";

import "./Button.css";

export default function Button({
  children,
  buttonDisabled,
  buttonLoading,
  handleSubmit,
  buttonType,
  role,
}) {
  return (
    <div className="reusable-button-container">
      {!buttonLoading ? (
        <button
          role={role}
          className="button-submit"
          type={buttonType}
          disabled={buttonDisabled}
          style={{
            cursor: buttonDisabled ? "not-allowed" : "pointer",
            backgroundColor: buttonDisabled ? "#c7cec9" : "#e37d37",
            filter: buttonDisabled ? "blurr(5px)" : "",
          }}
          onClick={handleSubmit}
        >
          <>{children}</>
        </button>
      ) : (
        <ButtonSpinner />
      )}
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  buttonDisabled: PropTypes.bool.isRequired,
  buttonLoading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  buttonType: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};