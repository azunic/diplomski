const express = require('express');
const router = express.Router();
const validateproductVariant = require('../../validation/productVariant');
const ProductVariant = require('../../models/ProductVariant');

//GET / - dohvati sve produktVariante
router.get('/', async (req, res) => {
  try {
    const allproductVariant = await ProductVariant.find({});
    res.send(allproductVariant);
  } catch (err) {
    console.error('An error occurred on productvariant get all', err);
    res.status(500).send(err);
  }
});

//GET /:id - dohvati jedan product variant
router.get('/:id', async (req, res) => {
  try {
    const productVariantone = await Products.findById(req.params.id);
    res.send(productVariantone);
  } catch (err) {
    console.error('An error occurred on productvariant get one', err);
    res.status(500).send(err);
  }
});
//POST / - kreiraj novi product variant
router.post('/', async (req, res) => {
  try {
    const { errors, isValid } = validateproductVariant(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newProductVariant = ProductVariant({
      name: req.body.name,
      price: req.body.price,
      unit: req.body.unit,
      unitValue: req.body.unitValue,
    });
    await newProductVariant.save();
    res.send(newProductVariant);
  } catch (err) {
    console.error('An error occurred on new product variant create', err);
    res.status(500).send(err);
  }
});

//PUT /:id - edit product varianta
router.put('/:id', async (req, res) => {
  try {
    const editproductVariant = await ProductVariant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    await editproductVariant.save();
    res.send(editproductVariant);
  } catch (err) {
    console.error('An error occurred on productvarainat edit', err);
    res.status(500).send(err);
  }
});

//DELETE /:id - brisanje notifikacije
router.delete('/:id', async (req, res) => {
  try {
    const deleteproductVariant = await ProductVariant.findByIdAndDelete(req.params.id);
    res.send(deleteproductVariant);
  } catch (err) {
    console.log('An error occurred on product Variant delete', err);
    res.status(500).send(err);
  }
});

module.exports = router;
