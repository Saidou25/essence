import React from "react";

export default function Finish({ end, userAnswers }) {
  const renderTotal = () => {
    let totalRating = 0;

    for (let userAnswer of userAnswers) {
      totalRating += Number(userAnswer.userSelfRating); // Convert to number to avoid string concatenation
    }
    return (
      <>
        <span>Your total for the assessment is: {3 / totalRating * 100}%</span>
      </>
    );
  };
  return (
    <>
      <h2>{end}</h2>
      <div className="card-footer">
        {userAnswers &&
          userAnswers.map((userAnswer) => (
            <div key={userAnswer.questionNumber}>
              <div className="card" style={{ border: "solid" }}>
                <div className="card-title">{userAnswer.questionNumber}</div>
                <div className="card-body">{userAnswer.questionStatment}</div>
                <div className="card-footer">{userAnswer.userSelfRating}</div>
              </div>
              <br />
            </div>
          ))}
      </div>
      {renderTotal()}
    </>
  );
}
