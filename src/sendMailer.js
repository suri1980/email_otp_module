// sendMailer.js

const nodemailer = require('nodemailer');

async function sendEmail(user_email, emailBody) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    // port: 465,
    // secure: true,
    auth: {
      user: 'Your Gmail Account',
      pass: 'Your Gmail App Password', // Generate here, - https://security.google.com/settings/security/apppasswords
    },
  });

  const mailOptions = {
    from: 'your_email@dso.org.sg',
    to: user_email,
    subject: 'Your OTP Code',
    text: emailBody,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error(error);
    throw new Error('Error sending email');
  }
}

module.exports = { sendEmail };
