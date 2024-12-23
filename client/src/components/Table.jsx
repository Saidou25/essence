import React from "react";
import PropTypes from 'prop-types';

import "./Table.css";

export default function Table({ resultsData, totalAssessment }) {
  return (
    <table className="results-table" data-testid="table">
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
        <tbody data-testid="tbody1">
          {resultsData &&
            resultsData.map((result, index) => (
              <React.Fragment key={index}>
                {totalAssessment >= result.minPercentage &&
                  totalAssessment <= result.maxPercentage && (
                    <tr className="class-bottom">
                      <td className="class-td" data-testid="total-assessment">{totalAssessment + "%"}</td>
                      <td className="class-td" data-testid="result-awakeness">{result.awakeness}</td>
                      <td className="class-td" data-testid="result-perspective">{result.perspective}</td>
                    </tr>
                  )}
              </React.Fragment>
            ))}
        </tbody>
      ) : (
        <tbody data-testid="tbody2">
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
};

Table.propTypes = {
  resultsData: PropTypes.arrayOf(
    PropTypes.shape({
      minPercentage: PropTypes.number.isRequired,
      maxPercentage: PropTypes.number.isRequired,
      percentage: PropTypes.number.isRequired,
      awakeness: PropTypes.string.isRequired,
      perspective: PropTypes.string.isRequired,
    })
  ).isRequired,
  totalAssessment: PropTypes.number.isRequired,
};
