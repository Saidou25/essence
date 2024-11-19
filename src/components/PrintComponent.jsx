import React, { useRef } from "react";

const PrintComponent = () => {
  const printRef = useRef(null); // Create a ref for the content to print
  console.log("print component");

  const handlePrint = () => {
    const printContent = printRef.current.innerHTML; // Get content via the ref

    // Get the styles from all stylesheets
    const printStyles = Array.from(document.styleSheets)
      .map((sheet) => {
        try {
          return Array.from(sheet.cssRules || [])
            .map((rule) => rule.cssText)
            .join("\n");
        } catch (error) {
          console.warn("Could not load stylesheet:", error);
          return "";
        }
      })
      .join("\n");

    // Open a new window and write the content and styles to it
    const printWindow = window.open("", "_blank", "width=800,height=600");

    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Print</title>
            <style>${printStyles}</style>
          </head>
          <body>
            <div>${printContent}</div>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    } else {
      alert("Unable to open print window. Please allow pop-ups for this site.");
    }
  };

  return (
    <div>
      <div id="print-results-content" ref={printRef}>
        {/* Content to print */}
        <h1 className="finish-titles">ESA44 Assessment Results</h1>
        <h2 className="score-today">Your Score for Today is: 75%</h2>
        {/* Add other content here */}
      </div>

      <button onClick={handlePrint}>Print Results</button>
    </div>
  );
};

export default PrintComponent;
