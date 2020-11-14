const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema(
  {
    streetNumber: Number,
    street: String,
    zip: Number,
    city: String,
    country: String,
    isPrimary: Boolean,
  },
  { timestamps: true },
);

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;
