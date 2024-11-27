const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export function sendEmail({ to, from, subject, text, html }) {
  const msg = {
    to,
    from,
    subject,
    text,
    html,
  };

  return sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent successfully!');
      return { success: true };
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      return { success: false, error: error.message };
    });
}

