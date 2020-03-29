const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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");
const msg = {
  to: 'jaideep.choudary.3@gmail.com',
  from: 'deepbot777@gmail.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);