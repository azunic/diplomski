const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
    details: { type: String },
    ingredients: { type: String },
    soldtimes: { type: Number, required: false },
    reviews: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    },
    productSubCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductSubCategory', required: false },
    productVariant: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ProductVariant' }],
    },
    brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand', required: false },
  },
  { timestamps: true },
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
