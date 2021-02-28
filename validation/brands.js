const Validator = require('validator');
const isEmpty = require('is-empty');
const validationMessages = require('../constants/validation');

function validateBrand(data) {
  const errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.image = !isEmpty(data.image) ? data.image : '';
  data.brand = !isEmpty(data.brand) ? data.brand : '';
  data.price = !isEmpty(data.price) ? data.price : '';
  data.mobilephone = !isEmpty(data.mobilephone) ? data.mobilephone : '';

  if (Validator.isEmpty(data.name)) {
    errors.name = validationMessages.nameIsInvalid;
  }

  if (Validator.isEmpty(data.image)) {
    errors.image = validationMessages.imageIsInvalid;
  }

  if (Validator.isEmpty(data.brand)) {
    errors.brand = validationMessages.brandIsInvalid;
  }

  if (data.price <= 0) {
    errors.price = validationMessages.priceisInvalid;
  }

  if (data.mobilephone <= 0) {
    errors.mobilephone = validationMessages.mobilephoneisInvalid;
  }

  return {
    errors: errors,
    isValid: isEmpty(errors),
  };
}

module.exports = validateBrand;
