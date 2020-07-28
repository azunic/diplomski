const mongoose = require('mongoose');
const constants = require('../constants/database');

const productVariant = new mongoose.Schema({
  name: String,
  price: Number,
  unit: { type: String, enum: Object.values(constants.UNIT_CATEGORIES) },
  unitValue: Number,
});


const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    reviews: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    },
    productSubcategory: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductSubcategory' },
    productVariants: [productVariant],
    brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand', required: false },
  },
  { timestamps: true },
);

const Product = mongoose.model('Product', productSchema);

export default Product;




