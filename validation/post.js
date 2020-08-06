const Validator = require('validator');
const isEmpty = require('is-empty');
const validationMessages = require('../constants/validation');

function validatePost(data) {

    const errors = {};
    data.text = !isEmpty(data.text) ? data.text : '';
    data.title = !isEmpty(data.title) ? data.title : '';
    data.isReview = !isEmpty(data.isReview) ? data.isReview : '';

    if (Validator.isEmpty(data.text)) {
        errors.text = validationMessages.textIsInvalid;
    }
    //title check
    if (Validator.isEmpty(data.title)) {
        errors.title = validationMessages.titleisInvalid;
    }

    // is Review check
    if (Validator.isEmpty(data.isReview)) {
        errors.isReview = validationMessages.isReviewiIsInvalid;
    }

    return {
        errors: errors,
        isValid: isEmpty(errors),
    };




}

module.exports = validatePost;
