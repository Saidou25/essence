import React from 'react'

import "./ResultsNote.css";

export default function ResultsNote() {
  return (
    <div className="tab-text-impact no-print" data-testid="note">
    <span className="note">Note: </span>
    <span>You were redirected to 21stcenturyparadigm.org for your </span>
    <span className="esa44">ESA44 </span>
    <span>assessment, to return to</span>
    <span className="princetone-link1"> princeton</span>
    <span className="princetone-link2">green</span>
    <span className="princetone-link3">.org</span>
    <span> please close this tab.</span>
  </div>
  )
}
