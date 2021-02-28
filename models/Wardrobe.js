const mongoose = require('mongoose');

const wardrobeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    ingredients: { type: String },
    category: { type: String },
    descriptions: { type: String },
    email: { type: String },
    mobilephone: { type: String, required: true },
    price: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true },
);

const Wardrobe = mongoose.model('Wardrobe', wardrobeSchema);

module.exports = Wardrobe;
