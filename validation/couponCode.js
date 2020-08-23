const Validator = require('validator');
const isEmpty = require('is-empty');
const validationMessages = require('../constants/validation');


function validateCouponCode(data) {

    const errors = {};
    data.code = !isEmpty(data.code) ? data.code : '';

    if (Validator.isEmpty(data.code)) {
        errors.code = validationMessages.codeIsInvalid;
    }

    return {
        errors: errors,
        isValid: isEmpty(errors),
    };


}

module.exports = validateCouponCode;
