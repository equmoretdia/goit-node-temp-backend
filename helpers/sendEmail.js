const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY, MAIL_ADDRESS } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: MAIL_ADDRESS };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;
