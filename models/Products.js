const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    reviews: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    },
    productSubcategory: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductSubcategory' },
    productVariant: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ProductVariant' }],
    },
    brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand', required: false },
  },
  { timestamps: true },
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
