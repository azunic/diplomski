const mongoose = require('mongoose');

const couponCodeSchema = new mongoose.Schema(
  {
    code: { type: String, required: true },
    expirationDate: { type: Date },
    percentageOff: { type: Number, required: true }
  },
  { timestamps: true },
);

const CouponCode = mongoose.model('CouponCode', couponCodeSchema);
module.exports = CouponCode;
