const mongoose = require('mongoose');

const NOTIFICATION_TYPES = ['PRODUCT_BUY_REQUEST', 'WISHLISTED_PRODUCT_ON_SALE'];

const notificationSchema = new mongoose.Schema(
  {
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    recipientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    notificationType: { type: String, enum: Object.values(NOTIFICATION_TYPES) },
    entityId: { type: mongoose.Schema.Types.ObjectId },
    subEntityId: { type: mongoose.Schema.Types.ObjectId },
  },
  { timestamps: true },
);

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
