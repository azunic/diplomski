const Validator = require('validator');
const isEmpty = require('is-empty');
const validationMessages = require('../constants/validation');

function validateProducts(data) {
  const errors = {};
  data.name = !isEmpty(data.name) ? data.name : '';
  data.image = !isEmpty(data.image) ? data.image : '';

  if (Validator.isEmpty(data.name)) {
    errors.text = validationMessages.nameIsInvalid;
  }
  //image check
  if (Validator.isEmpty(data.image)) {
    errors.title = validationMessages.imageisInvalid;
  }

  return {
    errors: errors,
    isValid: isEmpty(errors),
  };
}

module.exports = validateProducts;
