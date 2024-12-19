import React, { useRef, useState } from "react";
import { resultsData } from "../questionsData";
import { LuDownload } from "react-icons/lu";
import { VscDebugRestart } from "react-icons/vsc";
import { ImPrinter } from "react-icons/im";
import { GoMail } from "react-icons/go";
// import { app } from "../firebase.config";
// import {
//   arrayUnion,
//   doc,
//   getDoc,
//   getFirestore,
//   setDoc,
//   updateDoc,
// } from "firebase/firestore";
import html2pdf from "html2pdf.js";
import EmailResultsForm from "./EmailResultsForm";

import "./Results.css";

export default function Results({ userAnswers, resetApp, resetQuestions }) {
  const [showEmailForm, setShowEmailForm] = useState(false);
  // Create a ref for the content you want to convert to PDF
  const printContentRef = useRef(null);

  let totalRating = 0;
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const formattedDate = `${month + 1}/${day}/${year}`;

  for (let userAnswer of userAnswers) {
    totalRating += Number(userAnswer.userSelfRating); // Convert to number to avoid string concatenation
  }
  const totalAssessment = Math.round((totalRating / 220) * 100 * 100) / 100;

  // const db = getFirestore(app);

  // const docRef = doc(db, "esa44", "choo@fun");
  // const userResult = {
  //   name: "Sy",
  //   email: "Sy@fun",
  //   result: totalAssessment,
  //   date: formattedDate,
  // };

  // const saveUserResult = async () => {
  //   if (!userResult) {
  //     console.log("no user result yet");
  //     return;
  //   }
  //   try {
  //     // Check if the document exists
  //     const docSnap = await getDoc(docRef);

  //     if (docSnap.exists()) {
  //       // Document exists, add to the 'results' array
  //       await updateDoc(docRef, {
  //         results: arrayUnion(userResult), // Add new result to the array
  //       });
  //       console.log("User result added to existing document!");
  //     } else {
  //       // Document does not exist, create it with 'results' array
  //       await setDoc(docRef, {
  //         email: "Lillamb@fun",
  //         results: [userResult], // Initialize with the first result
  //         date: formattedDate,
  //       });
  //       console.log("Document created with initial user result!");
  //     }
  //   } catch (error) {
  //     console.error("Error saving user result:", error.message);
  //   }
  // };

  const handleRetake = () => {
    setShowEmailForm(false);
    resetApp("resetApp");
    resetQuestions("resetQuestions");
  };

  const showEmail = (data) => {
    setShowEmailForm(data);
  };

  const handlePrint = () => {
    window.print();
  };

  // Function to generate the PDF
  const downloadAssessmentResults = () => {
    // Define options for the html2pdf library
    const options = {
      margin: 1,
      filename: "assessment_results.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 4, useCORS: true }, // Optional, higher scale for better image quality
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    // Generate the PDF from the HTML content
    html2pdf()
      .from(printContentRef.current) // Pass the ref to the html2pdf method
      .set(options)
      .save(); // Trigger the PDF download
  };

  return (
    <>
      <div className="finish-main-container" ref={printContentRef} data-testid="results">
        {/* <button onClick={saveUserResult}>save</button> */}
        <h1 className="finish-titles">ESA44 Assessment Results</h1>
        <div className="score-today" data-testid="score-today">
          <span>Your</span>
          <span data-testid="esa44" className="esa44">
            {" "}
            ESA44{" "}
          </span>
          <span>results for today: {formattedDate}</span>
        </div>
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
        </table>
        <div className="please-evaluate" data-testid="evaluate">
          <span>Please compare your</span>
          <span className="esa44"> ESA44 </span>
          <span>results with the following table.</span>
        </div>
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
        </table>
        <br />
        {showEmailForm ? (
          <EmailResultsForm
          data-testid="email-form"
            formattedDate={formattedDate}
            totalAssessment={totalAssessment}
            hideEmail={showEmail}
          />
        ) : (
          <div className="email-print-container no-print">
            <div className="email-print-texts">
              <p className="button-text-title">Print Results</p>
              <button
                role="button"
                className="button-print"
                type="button"
                onClick={handlePrint}
                aria-label="print"
              >
                <ImPrinter
                  data-testid="printer"
                  style={{
                    color: "white",
                    height: "25px",
                    width: "25px",
                    cursor: "pointer",
                  }}
                />
              </button>
            </div>
            <div className="email-print-texts">
              <p className="button-text-title">Download PDF</p>
              <button
                role="button"
                className="button-download"
                type="button"
                onClick={downloadAssessmentResults}
                aria-label="download"
              >
                <LuDownload
                  data-testid="download"
                  style={{
                    color: "white",
                    height: "25px",
                    width: "25px",
                    cursor: "pointer",
                  }}
                />
              </button>
            </div>
            <div className="email-print-texts">
              <p className="button-text-title">E-mail Results</p>
              <button
                role="button"
                className="button-email"
                type="button"
                onClick={() => setShowEmailForm(true)}
                aria-label="email"
              >
                <GoMail
                  data-testid="email"
                  style={{
                    color: "white",
                    height: "25px",
                    width: "25px",
                    cursor: "pointer",
                  }}
                />
              </button>
            </div>
            <div className="email-print-texts">
              <p className="button-text-title">Restart Assessment</p>
              <button
                role="button"
                className="button-retake"
                type="button"
                onClick={handleRetake}
                aria-label="restart"
              >
                <VscDebugRestart
                  data-testid="restart"
                  style={{
                    color: "white",
                    height: "25px",
                    width: "25px",
                    cursor: "pointer",
                  }}
                />
              </button>
            </div>
          </div>
        )}
        <p className="bottom-text no-print" data-testid="be-sure">
          <span>Please record your</span>
          <span className="esa44"> ESA44 </span>
          <span>results on page 11 or 303 of </span>
          <span
            className="link-text"
            onClick={() =>
              window.open("https://princetongreen.org/essence-trilogy-book-1")
            }
            style={{
              cursor: "pointer",
              color: "blue",
              textDecoration: "underline",
            }}
          >
            ESSENCE Book #1.
          </span>
        </p>{" "}
        <div className="split" data-testid="princeton-link">
          <span className="princetone-link1">princeton</span>
          <span className="princetone-link2">green</span>
          <span className="princetone-link3">.org</span>
        </div>
      </div>
      <br />
      <p className="tab-text-impact no-print" data-testid="redirected">
        <span className="note">Note: </span>
        <span>You were redirected to 21stcenturyparadigm.org for your </span>
        <span className="esa44">ESA44 </span>
        <span>assessment, to return to</span>
        <span className="princetone-link1"> princeton</span>
        <span className="princetone-link2">green</span>
        <span className="princetone-link3">.org</span>
        <span> please close this tab.</span>
      </p>
    </>
  );
}
