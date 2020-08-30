const Mailgun = require('mailgun-js');
const config = require('../config/config');

const mailgun = new Mailgun({ apiKey: config.mailgun_api_key, domain: config.mailgun_domain });

class EmailService {
  static sendConfirmationEmail(recipientEmail, confirmationToken) {
    const fromWho = 'ana@beautyspot.com';
    const data = {
      // Specify email data
      from: fromWho,
      // The email to contact
      to: recipientEmail,
      // Subject and text data
      subject: 'Hello from BeautySpot',
      html: `Hello, this is your confirmation email! <a href="http://localhost:5000/api/users/confirm-email?email=${recipientEmail}&emailConfirmationToken=${confirmationToken}">Click here to confirm your email address!</a>`,
    };

    mailgun.messages().send(data, (err, body) => {
      if (err) {
        console.log('got an error: ', err);
      } else {
        console.log(body);
      }
    });
  }
}

module.exports = EmailService;
