import React from "react";
import { LuDownload } from "react-icons/lu";
import { VscDebugRestart } from "react-icons/vsc";
import { ImPrinter } from "react-icons/im";
import { GoMail } from "react-icons/go";

// This is to lighten the code and avoid redundencies in the Results component.
// We are using this data file to map over and display four buttons.
export const resultsButtons = [
  {
    pText: "Print Results",
    buttonClassName: "button-print",
    buttonAria: "print",
    buttonLogo: (
      <ImPrinter data-testid="printer" className="button-logo-style" />
    ),
  },
  {
    pText: "Download PDF",
    buttonClassName: "button-download",
    buttonAria: "download",
    buttonLogo: (
      <LuDownload data-testid="download" className="button-logo-style" />
    ),
  },
  {
    pText: "E-mail Results",
    buttonClassName: "button-email",
    buttonAria: "email",
    buttonLogo: <GoMail data-testid="email" className="button-logo-style" />,
  },
  {
    pText: "Restart Assessment",
    buttonClassName: "button-retake",
    buttonAria: "restart",
    buttonLogo: (
      <VscDebugRestart data-testid="restart" className="button-logo-style" />
    ),
  },
];
