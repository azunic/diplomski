const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    imageUrl: { type: String },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    wardrobeProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Wardrobe' }],
  },
  { timestamps: true },
);

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;
