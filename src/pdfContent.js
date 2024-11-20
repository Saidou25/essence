const pdfContent = `
<html>
  <head>
    <style>
 
.finish-main-container {
  background-color: #fefefe;
  width: 100%;
  max-width: none;
  box-sizing: border-box;
  padding-top: 2%;
  padding-bottom: 2%;
}

.finish-titles {
  letter-spacing: 1px;
  color: black;
  text-align: center;
  font-size: 38px;
   font-family: "Arial Black", "Bebas Neue", "Helvetica", sans-serif;
  padding-top: 3%;
}

.retake {
  position: absolute;
  top: 0;
  right: 0;
  max-width: 15%;
  height: auto;
  margin-right: 2%;
  margin-top: 2%;
  cursor: pointer;
}

.title-results {
  letter-spacing: 1px;
  color: black;
  text-align: center;
  font-size: 38px;
 font-family: "Arial Black", "Bebas Neue", "Helvetica", sans-serif;
}

.score-today {
  text-align: center;
  padding: 2% 3%;
  color: black;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.results-div {
  padding-bottom: 5%;
}

.results-table {
  margin: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 9px solid black;
  width: 66%;
}

.class-top {
  background-color: #c7cec9;
}

.class-bottom {
  background-color: #fefefe;
}

.class-th {
  border-bottom: 1px solid grey;
  border-color: grey;
   font-family: "Arial Black", "Bebas Neue", "Helvetica", sans-serif;
  text-rendering: optimizeLegibility;
  font-size: 22px;
  color: black;
  text-align: center;
  padding: 1% 7% 1% 7%;
  width: 22%;
}

.class-td {
  border-right: 2px solid #c3c2c2;
  border-bottom: 1px solid #c3c2c2;
  text-align: center;
  width: 22%;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 22px;
  height: 42px;
  color: black;
}

.class-td-perspective {
  border-bottom: 1px solid #c3c2c2;
  height: 100px;
  text-align: center;
  width: 22%;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 22px;
  height: 42px;
  color: black;
}

.please-evaluate {
  text-align: center;
  margin: 3% 3%;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.email-print-container {
  display: flex;
  justify-content: center;
  padding-bottom: 3%;
  padding-top: 4%;
}
.email-print-texts {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: 1%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 60px;
}
.button-text-title {
  text-align: center;
}
.button-email,
.button-print,
.button-retake {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e37d37;
  padding: 10px;
  border-radius: 50px;
  border: none;
  margin-right: 1%;
}
.button-email:hover {
  background-color: #267b7d;
  cursor: pointer;
}
@media print {
  .print-content {
    display: block;
    visibility: visible;
    width: 100%;
    margin: auto;
  }
  .finish-titles {
    font-family: "Arial Black", "Bebas Neue", "Helvetica", sans-serif;
  }
  .no-print {
    display: none;
  }
  .results-table {
    width: 99%;
    margin: auto;
    table-layout: fixed;
    border-collapse: separate;
    page-break-inside: avoid;
    border-spacing: 0;
    border: 9px solid black;
  }
  .class-th {
    width: 33%;
    border-bottom: 1px solid grey;
    border-color: grey;
    font-family: "Arial Black", "Bebas Neue", "Helvetica", sans-serif;
    text-rendering: optimizeLegibility;
    font-size: 22px;
    padding: 1% 7% 1% 7%;
  }
  .class-td {
    width: 33%;
    font-size: 22px;
    height: 42px;
  }
  .class-td-perspective {
    width: 33%;
    font-size: 22px;
    height: 42px;
  }
  .class-tr {
    page-break-inside: avoid;
  }
}
@media screen and (max-width: 414px) {
  .finish-titles {
    font-size: 28px;
    padding-top: 7%;
  }

  .score-today {
    text-align: center;
    padding: 2% 3%;
    color: black;
    font-size: 22px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .results-div {
    padding-bottom: 5%;
  }

  .results-table {
    border: 6px solid black;
    width: 100%;
  }

  .class-th {
    font-family: "Arial Black", "Bebas Neue", "Helvetica", sans-serif;
    font-size: 18px;
    padding: 1% 1% 1% 1%;
    width: 33%;
  }

  .class-td {
    width: 33%;
    font-size: 18px;
    height: 32px;
  }

  .class-td-perspective {
    width: 22%;
    font-size: 18px;
    height: 42px;
  }

  .please-evaluate {
    text-align: center;
    margin: 3% 3%;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 22px;
  }

  .email-print-texts {
    margin: 3%;
  }
}

    </style>
  </head>
  <body>
    <div className="finish-main-container" id="print-results-content">
      <h1 className="finish-titles">ESA44 Assessment Results</h1>
      <h2 className="score-today">
        Your Score for Today is:{" "}
        {Math.round((totalRating / 220) * 100 * 100) / 100}%
      </h2>
      <table className="results-table">
        <thead>
          <tr className="class-top">
            <th className="class-th">ESA44 Awakening %</th>
            <th className="class-th">State of Awareness</th>
            <th className="class-th">Current Perspective</th>
          </tr>
        </thead>
        <tbody>
          {resultsData &&
            resultsData.map((result, index) => (
              <React.Fragment key={index}>
                {totalAssessment >= result.minPercentage &&
                  totalAssessment <= result.maxPercentage && (
                    <tr className="class-bottom">
                      <td className="class-td">
                        {Math.round((totalRating / 220) * 100 * 100) / 100 +
                          "%"}
                      </td>
                      <td className="class-td">{result.awakeness}</td>
                      <td className="class-td-perspective">
                        {result.perspective}
                      </td>
                    </tr>
                  )}
              </React.Fragment>
            ))}
        </tbody>
      </table>
      <h2 className="please-evaluate">
        Please evaluate your ESA44 results with the following table.
      </h2>
      <table className="results-table">
        <thead>
          <tr className="class-top">
            <th className="class-th">ESA44 Awakening %</th>
            <th className="class-th">State of Awareness</th>
            <th className="class-th">Current Perspective</th>
          </tr>
        </thead>
        <tbody>
          {resultsData &&
            resultsData.map((result, index) => (
              <React.Fragment key={index}>
                <tr className="class-bottom">
                  <td className="class-td">{result.percentage}</td>
                  <td className="class-td">{result.awakeness}</td>
                  <td className="class-td-perspective">{result.perspective}</td>
                </tr>
              </React.Fragment>
            ))}
        </tbody>
      </table>
    </div>

  </body>
</html>
`;
export default pdfContent;