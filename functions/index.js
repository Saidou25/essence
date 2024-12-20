const functions = require("firebase-functions");
const sgMail = require("@sendgrid/mail");
require("dotenv").config(); // Load environment variables
const cors = require("cors");

const corsOptions = {
  origin: "*", // Explicitly allow your GitHub Pages domain
  methods: "GET, POST, OPTIONS",
  allowedHeaders: "Content-Type",
};
// Accessing the API key from environment variables
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
// Set the SendGrid API key to the SendGrid Mail object
sgMail.setApiKey(SENDGRID_API_KEY);

// Define the Cloud Function
exports.sendEmail = functions.https.onRequest((req, res) => {
  // Apply CORS middleware to allow cross-origin requests
  cors(corsOptions)(req, res, async () => {
    if (req.method === "OPTIONS") {
      res.set("Access-Control-Allow-Origin", "*");
      res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
      res.set("Access-Control-Allow-Headers", "Content-Type");
      res.set("Access-Control-Max-Age", "3600");
      res.status(204).send("");
      return;
    }

    // Extract email data from the request body
    const {to, subject, templateId, dynamicTemplateData} = req.body;

    // Check if all required fields are provided
    if (!to || !subject || !templateId) {
      return res.status(400).send("Missing fields: to, subject, or templateId");
    }

    // Build the SendGrid message object using extracted values
    const msg = {
      to,
      from: "assessment-results@21stcenturyparadigm.org",
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
});

