
const nodemailer = require('nodemailer')
const asyncHandler = require('express-async-handler')

const sendEmail = asyncHandler(async (data, req, res) => { //always pass data before req (data,req) otherwise it wont work

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.G_EMAIL,
      pass: process.env.G_PASSWORD,
    },
  });


  const info = await transporter.sendMail({
    from: '"Hi this is Billu👻" <abc@gmail.com>', // sender address
    to: data.to, // list of receivers
    subject: data.subject, // Subject line
    text: data.subject, // plain text body
    html: data.html, // html body
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", info.response);
})



const sendContactEmail = asyncHandler(async (data, req, res) => { //always pass data before req (data,req) otherwise it wont work

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.G_EMAIL,
      pass: process.env.G_PASSWORD,
    },
  });


  const info = await transporter.sendMail({
    from: data.from, // sender address
    to: '<bilalillahi25@gmail.com>', // list of receivers
    subject: data.subject, // Subject line
    text: data.subject, // plain text body
    html: data.html, // html body
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", info.response);
})

module.exports = { sendEmail, sendContactEmail }