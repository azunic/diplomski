const mongoose = require('mongoose');
const constants = require('../constants/database');

const orderSchema = new mongoose.Schema(
  {
    paymentType: { type: String, enum: Object.values(constants.PAYMENT_TYPES) },
    couponCode: { type: mongoose.Schema.Types.ObjectId, ref: 'CouponCode' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true },
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
