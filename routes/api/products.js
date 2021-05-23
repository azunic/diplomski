const express = require('express');
const router = express.Router();
const validateProducts = require('../../validation/products');
const Products = require('../../models/Products');
const Brands = require('../../models/Brand');
const ProductVariants = require('../../models/ProductVariant');
const Posts = require('../../models/Post');
const ProductSubCategory = require('../../models/ProductSubCategories');

//GET / - dohvati sve proizvode
router.get('/', async (req, res) => {
  try {
    const allProducts = await Products.find({}).populate('brand', '_id name imageUrl');
    res.send(allProducts);
  } catch (err) {
    console.error('An error occurred on products get all', err);
    res.status(500).send(err);
  }
});

//GET /:id - dohvati jedan proizvod
router.get('/:id', async (req, res) => {
  try {
    const product = await Products.findById(req.params.id).populate('productVariant', '_id name price unit unitValue');
    const productSubCategories = await ProductSubCategory.findOne({ products: product._id });
    console.log(productSubCategories);
    console.log('product', product);
    const productBrand = await Brands.findOne({ products: product._id });
    const reviews = await Posts.find({ product: product._id });
    const response = {
      _id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      details: product.details,
      ingredients: product.ingredients,
      soldtimes: product.soldtimes === null || product.soldtimes === undefined ? 0 : product.soldtimes,
      variants: [...product.productVariant],
      brand: {
        _id: productBrand._id,
        name: productBrand.name,
        imageUrl: productBrand.imageUrl,
      },
      reviews,
    };
    res.send(response);
  } catch (err) {
    console.error('An error occurred on product get one', err);
    res.status(500).send(err);
  }
});

//POST /- kreiraj novi proizvod
router.post('/', async (req, res) => {
  try {
    const { errors, isValid } = validateProducts(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const { name, image, productVariant, productSubCategory, brand, details, ingredients, price, soldtimes } = req.body;
    const newProducts = Products({
      name,
      image,
      details,
      ingredients,
      productVariant,
      productSubCategory,
      brand,
      price,
      soldtimes,
    });
    const newProduct = await newProducts.save();
    console.log('after save newProduct', newProduct);
    await Brands.findByIdAndUpdate(brand, { $addToSet: { products: [newProduct._id] } });

    res.send(newProducts);
  } catch (err) {
    console.error('An error occurred on products create', err);
    res.status(500).send(err);
  }
});

//PUT /:id - edit proizvoda
router.put('/:id', async (req, res) => {
  try {
    const editProducts = await Products.findByIdAndUpdate(req.params.id, req.body, { new: true });
    await editProducts.save();
    res.send(editProducts);
  } catch (err) {
    console.error('An error occurred on products edit', err);
    res.status(500).send(err);
  }
});

//DELETE /:id - brisanje prozvoda
router.delete('/:id', async (req, res) => {
  try {
    const deleteProducts = await Products.findByIdAndDelete(req.params.id);
    res.send(deleteProducts);
  } catch (err) {
    console.log('An error occurred on products delete', err);
    res.status(500).send(err);
  }
});

module.exports = router;
