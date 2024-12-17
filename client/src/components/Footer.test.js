import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
  beforeEach(() => {
    // Mock window.open to prevent actual navigation during testing
    global.open = jest.fn();
  });

  test("renders all links", () => {
    render(<Footer />);
    const iconElement = screen.getByTestId("linkedIn-logo");
    const xLogo = screen.getByTestId("X");

    // Check that all link texts and logos are present in the document
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(screen.getByText("NEW EARTH BOOKS")).toBeInTheDocument();
    expect(screen.getByText("VISIONARY AUTHORS")).toBeInTheDocument();
    expect(screen.getByText("FREE RESOURCES")).toBeInTheDocument();
    expect(screen.getByText("Terms & Conditions")).toBeInTheDocument();
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
    expect(
      screen.getByText("© 2008-2025 Princeton Green LLC")
    ).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
    expect(xLogo).toBeInTheDocument();
  });

  test('clicking on "Contact Us" opens the correct URL', () => {
    render(<Footer />);

    const contactUsLink = screen.getByText("Contact Us");

    // Simulate a click event on the "Contact Us" link
    fireEvent.click(contactUsLink);

    // Check that window.open was called with the correct URL
    expect(global.open).toHaveBeenCalledWith(
      "https://princetongreen.org/contact-us"
    );
  });

  test("clicking on the LinkedIn logo opens the correct URL", () => {
    render(<Footer />);

    const linkedInLogo = screen.getByTestId("linkedIn-logo"); // Using alt text to find the image

    // Simulate a click on the linkedIn logo
    fireEvent.click(linkedInLogo);

    // Check the URL it opens
    expect(global.open).toHaveBeenCalledWith(
      "https://www.linkedin.com/company/princetongreen-org/"
    );
  });

  test("clicking on the X logo opens the correct URL", () => {
    render(<Footer />);

    const xLogo = screen.getByAltText("X"); // Using alt text to find the image

    // Simulate a click on the X logo
    fireEvent.click(xLogo);

    // Check the URL it opens
    expect(global.open).toHaveBeenCalledWith("https://x.com/Always_Be_BOLD");
  });

  test('clicking on "NEW EARTH BOOKS" opens the correct URL', () => {
    render(<Footer />);

    const newEarthBooksLink = screen.getByText("NEW EARTH BOOKS");

    // Simulate a click event
    fireEvent.click(newEarthBooksLink);

    // Check the call to window.open
    expect(global.open).toHaveBeenCalledWith(
      "https://princetongreen.org/new-earth-books"
    );
  });

  test('clicking on "VISIONARY AUTHORS" opens the correct URL', () => {
    render(<Footer />);

    const visionaryAuthors = screen.getByText("VISIONARY AUTHORS");

    // Simulate a click event
    fireEvent.click(visionaryAuthors);

    // Check the call to window.open
    expect(global.open).toHaveBeenCalledWith(
      "https://princetongreen.org/visionary-authors"
    );
  });

  test('clicking on "FREE RESOURCES" opens the correct URL', () => {
    render(<Footer />);

    const freeResources = screen.getByText("FREE RESOURCES");

    // Simulate a click event
    fireEvent.click(freeResources);

    // Check the call to window.open
    expect(global.open).toHaveBeenCalledWith(
      "https://princetongreen.org/free-resources"
    );
  });

  test('clicking on "Terms & Conditions" opens the correct URL', () => {
    render(<Footer />);

    const termsAndConditions = screen.getByText("Terms & Conditions");

    // Simulate a click event
    fireEvent.click(termsAndConditions);

    // Check the call to window.open
    expect(global.open).toHaveBeenCalledWith(
      "https://princetongreen.org/terms-and-conditions"
    );
  });

  test('clicking on "Privacy Policy" opens the correct URL', () => {
    render(<Footer />);

    const privacyPolicy = screen.getByText("Privacy Policy");

    // Simulate a click event
    fireEvent.click(privacyPolicy);

    // Check the call to window.open
    expect(global.open).toHaveBeenCalledWith(
      "https://princetongreen.org/privacy-policy"
    );
  });
});
