const nodemailer = require('nodemailer');
require('dotenv').config();

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    service:'gmail',
    host: "smtp.gmail.email",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

// Define the email options
let mailOptions = {
  from: {
    name : "Krishna",
    address:process.env.EMAIL,
  }, // Sender address
  to: 'krishnayadav2nd@gmail.com', // List of receivers
  subject: 'demo subject', // Subject line
  text: 'Hello world, ITS THIRD MAIL', // Plain text body
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

