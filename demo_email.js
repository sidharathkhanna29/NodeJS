var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'khannasidharath29@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'khannasidharath29@gmail.com',
  to: 'khannasidharath29@gmail.com,khannasidharath@gmail.com, khanna_sidharath@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});