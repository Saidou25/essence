import React from "react";
import { render, screen } from "@testing-library/react";
import PrincetonGreenLogo from "./PrincetonGreenLogo";


// Checks if text is in the component
test("princetongreen.org is in the document", () => {
  render(<PrincetonGreenLogo />);
  const princetonGreenOrg = screen.getByTestId("princetonGreen-org");
  expect(princetonGreenOrg).toBeInTheDocument();
});


