const Validator = require('validator');
const isEmpty = require('is-empty');
const validationMessages = require('../constants/validation');

module.exports = function validateLoginInput(data) {
  const errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = validationMessages.emailIsRequired;
  } else if (!Validator.isEmail(data.email)) {
    errors.email = validationMessages.emailIsInvalid;
  }
  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = validationMessages.passwordIsRequired;
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
