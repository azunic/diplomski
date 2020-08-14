const mongoose = require('mongoose');
const constants = require('../constants/database');

const productCategorySchema = new mongoose.Schema(
  {
    mainCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'MainCategory' },
    name: { type: String, enum: Object.values(constants.PRODUCT_CATEGORIES) },
  },
  { timestamps: true },
);

const ProductCategory = mongoose.model('ProductCategory', productCategorySchema);

module.exports = ProductCategory;
