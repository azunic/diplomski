const jwt = require('jsonwebtoken');
const config = require('../config/config');
const validationMessages = require('../constants/validation');

function verifyToken(req, res, next) {
  console.log(req.headers);
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).send({ auth: false, message: validationMessages.noTokenProvided });
  }

  const cleanToken = token.replace('Bearer ', '');
  jwt.verify(cleanToken, config.secret, (err, decoded) => {
    console.log('decoded', decoded);
    if (err) {
      console.error('verifyToken error', err);
      return res.status(500).send({ auth: false, message: validationMessages.tokenFailAuth });
    }
    console.log('decoded', decoded);
    // if everything good, save to request for use in other routes
    req.userId = decoded.id;
    next();
  });
}

module.exports = verifyToken;
