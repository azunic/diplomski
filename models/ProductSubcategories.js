const mongoose = require('mongoose');
const constants = require('../constants/database');

const productSubCategorySchema = new mongoose.Schema(
  {
    productCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductCategory' },
    name: { type: String, enum: Object.values(constants.PRODUCT_SUBCATEGORIES) },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  },
  { timestamps: true },
);

const ProductSubCategory = mongoose.model('ProductSubCategory', productSubCategorySchema);

module.exports = ProductSubCategory;
