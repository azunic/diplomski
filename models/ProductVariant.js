const mongoose = require('mongoose');
const constants = require('../constants/database');

const productVariantSchema = new mongoose.Schema({
  name: String,
  price: Number,
  unit: { type: String, enum: Object.values(constants.UNIT_CATEGORIES) },
  unitValue: Number,
});

const ProductVariant = mongoose.model('ProductVariant', productVariantSchema);

module.exports = ProductVariant;
