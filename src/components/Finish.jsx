import React from "react";

export default function Finish({ end, userAnswers }) {
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
      )
    </>
  );
}
