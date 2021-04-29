const mongoose = require('mongoose');
const constants = require('../constants/database');

const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    emailConfirmationToken: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date },
    role: { type: String },
    gender: { type: String, enum: Object.values(constants.GENDERS) },
    username: { type: String, required: true },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    cart: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' },

    wishListedProducts: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    },
    ownedProducts: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    },
    WardrobeProducts: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Wardrobe' }],
    },

    orderedProducts: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    },
    purchasedProducts: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    },
  },
  { timestamps: true },
);

const User = mongoose.model('User', userSchema);

module.exports = User;
