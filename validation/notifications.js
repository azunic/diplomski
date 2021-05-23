const Validator = require('validator');
const isEmpty = require('is-empty');
const validationMessages = require('../constants/validation');

function validateNotifications(data) {
  const errors = {};

  if (Validator.isEmpty(data.notificationType)) {
    errors.notificationType = validationMessages.notificationsTypeIsInvalid;
  }

  //data.notificationsTitle = !isEmpty(data.notificationsTitle) ? data.notificationsTitle : '';
  if (Validator.isEmpty(data.notificationTitle)) {
    errors.notificationTitle = validationMessages.notificationTitleisInvalid;
  }

  return {
    errors: errors,
    isValid: isEmpty(errors),
  };
}

module.exports = validateNotifications;
