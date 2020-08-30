const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  mongoURI: process.env.MONGODB_URI,
  secret: process.env.SECRET,
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT || 5000,
  mailgun_api_key: process.env.MAILGUN_API_KEY,
  mailgun_domain: process.env.MAILGUN_DOMAIN,
};
