const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    title: { type: String, required: true },
    isReview: { type: Boolean, required: true },
    reviewRating: { type: Number }, // number of stars
    imageUrl: { type: String },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: false },
  },
  { timestamps: true },
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
