const Validator = require('validator');
const isEmpty = require('is-empty');
const validationMessages = require('../constants/validation');
const constants = require('../constants/database');

function validateproductVariant(data) {
  const errors = {};
  data.name = !isEmpty(data.name) ? data.name : '';

  if (Validator.isEmpty(data.name)) {
    errors.name = validationMessages.nameIsInvalid;
  }
  //image check
  if (data.price <= 0) {
    errors.price = validationMessages.priceisInvalid;
  }

  // products variant check
  if (Validator.isEmpty(data.unit) || !constants.UNIT_CATEGORIES.includes(data.unit)) {
    errors.unit = validationMessages.unitiIsInvalid;
  }

  if (data.value <= 0) {
    errors.value = validationMessages.valueisInvalid;
  }

  return {
    errors: errors,
    isValid: isEmpty(errors),
  };
}

module.exports = validateproductVariant;
