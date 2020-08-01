const Validator = require('validator');
const isEmpty = require('is-empty');
const validationMessages = require('../constants/validation');


function validateProductCategories(data) {

    const errors = {};
    data.name = !isEmpty(data.name) ? data.name : '';

    if (Validator.isEmpty(data.name)) {
        errors.name = validationMessages.nameIsInvalid;
    }

    return {
        errors: errors,
        isValid: isEmpty(errors),
    };


}

module.exports = validateProductCategories;
