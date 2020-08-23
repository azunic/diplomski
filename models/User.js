const mongoose = require('mongoose');
const constants = require('../constants/database');

const addressSchema = new mongoose.Schema({
  streetNumber: Number,
  street: String,
  zip: Number,
  city: String,
  country: String,
});

const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    emailConfirmationToken: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date },
    gender: { type: String, enum: Object.values(constants.GENDERS) },
    username: { type: String, required: true },
    addresses: [addressSchema],
    wishListedProducts: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    },
    ownedProducts: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    },
  },
  { timestamps: true },
);

const User = mongoose.model('User', userSchema);

module.exports = User;
