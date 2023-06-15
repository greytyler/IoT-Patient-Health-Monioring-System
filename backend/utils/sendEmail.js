const nodeMailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config();


const sendEmail = async (req,res,options) => {
  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure:true,
    secureConnection: false,
    service: "gmail",
    auth: {
      user: "taylorgoods@gmail.com",
      pass: "pfzykfxxtrncxntg",
    },
    
  });

  const mailOptions = {
    from: "taylorgoods@gmail.com",
    to: "saidiagibu100@gmail.com",
    subject: "reset password",
    text: "hello gladys",
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
