const functions = require("firebase-functions");
const sgMail = require("@sendgrid/mail");
require("dotenv").config(); // Load environment variables

// Accessing the API key from environment variables
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
// Set the SendGrid API key to the SendGrid Mail object
sgMail.setApiKey(SENDGRID_API_KEY);

// Define the Cloud Function
exports.sendEmail = functions.https.onRequest(async (req, res) => {
  // Extract email data from the request body
  const {to, subject, templateId, dynamicTemplateData} = req.body;
  // Check if all required fields are provided
  if (!to || !subject || !templateId) {
    return res.status(400).send("Missing fields: to, subject, or templateId");
  }

  // Build the SendGrid message object using extracted values
  const msg = {
    to,
    from: "mosaidou@gmail.com", // Use your verified sender email
    subject,
    templateId, // Include the template ID
    dynamicTemplateData, // Attach dynamic data for the template
  };

  // Send the email using SendGrid
  try {
    await sgMail.send(msg);
    res.status(200).json({message: "Email sent successfully."});
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({error: "Failed to send email: " + error.message});
  }
});