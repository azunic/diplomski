const Validator = require('validator');
const isEmpty = require('is-empty');
const validationMessages = require('../constants/validation');

function validateProducts(data) {
  const errors = {};
  data.name = !isEmpty(data.name) ? data.name : '';
  data.image = !isEmpty(data.image) ? data.image : '';
  data.productVariants = !isEmpty(data.productVariants) ? data.productVariants : '';

  if (Validator.isEmpty(data.name)) {
    errors.text = validationMessages.nameIsInvalid;
  }
  //image check
  if (Validator.isEmpty(data.image)) {
    errors.title = validationMessages.imageisInvalid;
  }

  // products variant check
  if (Validator.isEmpty(data.productVariants)) {
    errors.isReview = validationMessages.productsVariantsiIsInvalid;
  }

  return {
    errors: errors,
    isValid: isEmpty(errors),
  };
}

module.exports = validateProducts;
