import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import EmailResultsForm from "./ResultsEmailForm";

// Mocks the fetch API call
beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: () => ({ success: true }),
  });
});

// Checks if texts are in the component
test("checking if Inbox Results is showing in the form", async () => {
  const totalAssessment = 85;
  const formattedDate = "12/22/2024";
  render(
    <EmailResultsForm
      totalAssessment={totalAssessment}
      formattedDate={formattedDate}
      hideEmail={() => {}}
    />
  );

  // Checks for texts to show in the form
  const emailTitle = screen.getByText(/Inbox Results/i);
  expect(emailTitle).toBeInTheDocument();

  const emailMessage = screen.getByText(
    /To receive your ESA44 results via email, please fill out the form./i
  );
  expect(emailMessage).toBeInTheDocument();

  // Checks for labels
  const label1 = screen.getByLabelText(/First Name/i);
  expect(label1).toBeInTheDocument();

  // Find input fields
  const emailInput = screen.getByPlaceholderText(/enter your email address/i);
  expect(emailInput).toBeInTheDocument();

  const usernameInput = screen.getByPlaceholderText(/enter your first name/i);
  expect(usernameInput).toBeInTheDocument();

  // Checks if the button is rendered correctly
  const submitButton = screen.getByRole("button");
  expect(submitButton).toBeInTheDocument();

  // Fill in username with valid data
  fireEvent.change(usernameInput, {
    target: { name: "username", value: "Sy" },
  });

  // Fill in an invalid email
  fireEvent.change(emailInput, {
    target: { name: "email", value: "invalidemail" },
  });

  // Click the submit button
  fireEvent.click(submitButton);

  // Checks if error message appears
  const errorMessage = await screen.findByText(/invalid email format/i);
  expect(errorMessage).toBeInTheDocument();

  // Fill in username with valid data
  fireEvent.change(usernameInput, {
    target: { name: "username", value: "Sy" },
  });

  // Fill in a valid email
  fireEvent.change(emailInput, {
    target: { name: "email", value: "Sy@fun.com" },
  });

  // Click the submit button again
  fireEvent.click(submitButton);

  // Wait for the success message
  await waitFor(() => screen.findByText(/Email sent successfully/i), { timeout: 5000 });

  // Checks if success message appears
  const successMessage = screen.getByText(/Email sent successfully/i);
  expect(successMessage).toBeInTheDocument();
});
