const Validator = require('validator');
const isEmpty = require('is-empty');
const validationMessages = require('../constants/validation');

module.exports = function validateRegisterInput(data) {
  const errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.repeatPassword = !isEmpty(data.repeatPassword) ? data.repeatPassword : '';

  // firstName checks
  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = validationMessages.firstNameIsRequired;
  }
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = validationMessages.lastNameIsRequired;
  }

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

  if (Validator.isEmpty(data.repeatPassword)) {
    errors.repeatPassword = validationMessages.confirmPasswordIsRequired;
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = validationMessages.weakPassword;
  }

  if (!Validator.equals(data.password, data.repeatPassword)) {
    errors.repeatPassword = validationMessages.passwordNoMatch;
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
