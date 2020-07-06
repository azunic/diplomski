const mongoose = require('mongoose');

const UNIT_CATEGORIES = ['ml', 'l', 'gr', 'kg', 'komad'];

const productVariant = new mongoose.Schema({
  name: String,
  price: Number,
  unit: { type: String, enum: Object.values(UNIT_CATEGORIES) },
  unitValue: Number,
});

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    reviews: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    },
    productCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductCategory' },
    productVariants: [productVariant],
    brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand', required: false },
  },
  { timestamps: true },
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
