const mongoose = require('mongoose');
const constants = require('../constants/database');

const notificationSchema = new mongoose.Schema(
  {
    notificationType: { type: String, enum: Object.values(constants.NOTIFICATION_TYPES) },
    notificationTitle: { type: String },
  },
  { timestamps: true },
);

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
