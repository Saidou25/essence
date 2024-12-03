import React from "react";

export default function Footer() {
  return (
    <div className="footer no-print">
      <div className="footer-text-div">
        <p
         className="link-text"
         onClick={() =>
           window.open("https://princetongreen.org")
         }
         style={{
           cursor: "pointer",
           color: "#f1f1f1",
           textDecoration: "underline",
         }}>www.princetongreen.org</p>
        <p>www.21stcenturyparadigm.org</p>
      </div>
    </div>
  );
}
