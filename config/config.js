const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  mongoURI: process.env.MONGODB_URI,
  secret: process.env.SECRET,
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT || 5000,
};
