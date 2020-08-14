const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
  {
    expirationDate: { type: Date },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  },
  { timestamps: true },
);

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
