import React from "react";
import "./Table.css";

export default function Table({ resultsData, totalAssessment }) {
  return (
    <table className="results-table">
      <thead>
        <tr className="class-top">
          <th className="class-th">
            <span className="th-spans">ESA44 </span>
            <span className="th-spans">Awakening</span>
          </th>
          <th className="class-th">
            <span className="th-spans">State of </span>
            <span className="th-spans">Awareness</span>
          </th>
          <th className="class-th">
            <span className="th-spans">Current </span>
            <span className="th-spans">Perspective</span>
          </th>
        </tr>
      </thead>
      {totalAssessment || totalAssessment === 0 ? (
        <tbody>
          {resultsData &&
            resultsData.map((result, index) => (
              <React.Fragment key={index}>
                {totalAssessment >= result.minPercentage &&
                  totalAssessment <= result.maxPercentage && (
                    <tr className="class-bottom">
                      <td className="class-td">{totalAssessment + "%"}</td>
                      <td className="class-td">{result.awakeness}</td>
                      <td className="class-td">{result.perspective}</td>
                    </tr>
                  )}
              </React.Fragment>
            ))}
        </tbody>
      ) : (
        <tbody>
          {resultsData &&
            resultsData.map((result, index) => (
              <React.Fragment key={index}>
                <tr className="class-bottom">
                  <td className="class-td">{result.percentage}</td>
                  <td className="class-td">{result.awakeness}</td>
                  <td className="class-td">{result.perspective}</td>
                </tr>
              </React.Fragment>
            ))}
        </tbody>
      )}
    </table>
  );
}
