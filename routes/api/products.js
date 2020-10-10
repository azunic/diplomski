const express = require('express');
const router = express.Router();
const validateProducts = require('../../validation/products');
const Products = require('../../models/Products');
const Brand = require('../../models/Brand');

//GET / - dohvati sve proizvode
router.get('/', async (req, res) => {
  try {
    const allProducts = await Products.find({});
    res.send(allProducts);
  } catch (err) {
    console.error('An error occurred on products get all', err);
    res.status(500).send(err);
  }
});

//GET /:id - dohvati jedan proizvod
router.get('/:id', async (req, res) => {
  try {
    const Products = await Products.findById(req.params.id);
    res.send(Products);
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
    const { name, image, productVariant, productSubCategory, brand } = req.body;
    const newProducts = Products({
      name,
      image,
      productVariant,
      productSubCategory,
      brand,
    });
    const newProduct = await newProducts.save();
    console.log('after save newProduct', newProduct);
    await Brand.findByIdAndUpdate(brand, { $addToSet: { products: [newProduct._id] } });

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
