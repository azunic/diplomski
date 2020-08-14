const mongoose = require('mongoose');
const constants = require('../constants/database');

const notificationSchema = new mongoose.Schema(
  {
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    recipientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    notificationType: { type: String, enum: Object.values(constants.NOTIFICATION_TYPES) },
    notificationTitle: { type: String, enum: Object.values(constants.NOTIFICATION_TITLES) },
    entityId: { type: mongoose.Schema.Types.ObjectId },
    subEntityId: { type: mongoose.Schema.Types.ObjectId },
  },
  { timestamps: true },
);

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
