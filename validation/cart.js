const Validator = require('validator');
const isEmpty = require('is-empty');
const validationMessages = require('../constants/validation');

function validateCart(data) {

    const errors = {};
    data.expiratonDate = !isEmpty(expirationDate;

    if (Validator.isEmpty(data.expirationDate)) {
        errors.expirationDate = validationMessages.dateIsInvalid;
    }

    return {
        errors: errors,
        isValid: isEmpty(errors),
    };


}

module.exports = validateCart;
