const mongoose = require('mongoose');
const constants = require('../constants/database');

const mainCategoriesSchema = new mongoose.Schema(
  {
    name: { type: String, enum: Object.values(constants.MAIN_CATEGORIES) },
    productCategories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ProductCategory' }],
  },
  { timestamps: true },
);

const MainCategory = mongoose.model('MainCategory', mainCategoriesSchema);

module.exports = MainCategory;
