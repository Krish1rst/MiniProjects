const nodemailer = require('nodemailer');
require('dotenv').config();

// Create a transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: 'gmail', // Use 'gmail' if you're using a Gmail account, or configure your own SMTP service
  auth: {
    user: process.env.EMAIL, // Your email
    pass: process.env.PASSWORD, // Your email password or app-specific password
  },
});

// Define the email options
let mailOptions = {
  from: '"Sender Name" <your-email@gmail.com>', // Sender address
  to: 'recipient-email@example.com', // List of receivers
  subject: 'Hello from Node.js', // Subject line
  text: 'Hello world?', // Plain text body
  html: '<b>Hello world?</b>', // HTML body
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
});

