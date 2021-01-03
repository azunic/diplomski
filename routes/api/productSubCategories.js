const express = require('express');
const router = express.Router();
const validateProductSubCategories = require('../../validation/productSubCategories');
const ProductSubCategories = require('../../models/ProductSubCategories');
const ProductCategories = require('../../models/ProductCategories');
const Product = require('../../models/Products');

//dohvati sve  sub product kategorije
router.get('/', async (req, res) => {
  try {
    const allproductSubCategories = await ProductSubCategories.find({});
    const products = await Product.find({});
    allproductSubCategories.products = [...products];
    res.send(allproductSubCategories);
  } catch (err) {
    console.error('An error occurred on productsubcategories get all', err);
    res.status(500).send(err);
  }
});

//GET /:id - dohvati jednu sub product kategoriju
router.get('/:id', async (req, res) => {
  try {
    const productSubCategory = await ProductSubCategories.findById(req.params.id);
    res.send(productSubCategory);
  } catch (err) {
    console.error('An error occurred on product subcategories get one', err);
    res.status(500).send(err);
  }
});

//POST / - kreiraj novu sub product kategoriju
router.post('/', async (req, res) => {
  try {
    const { errors, isValid } = validateProductSubCategories(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    /*  const newCategory = ProductCategories({ name: req.body.name, mainCategory: req.body.mainCategory });
     const savedProductCategory = await newCategory.save();

     await MainCategory.findOneAndUpdate(
       { _id: req.body.mainCategory },
       { $addToSet: { productCategories: savedProductCategory._id } },
     ); */
    const newSubCategory = ProductSubCategories({
      name: req.body.name,
      productCategory: req.body.productCategory,
    });
    const savedProductSubCategory = await newSubCategory.save();
    await ProductCategories.findOneAndUpdate(
      { _id: req.body.productCategory },
      { $addToSet: { productSubCategories: savedProductSubCategory._id } },
    );

    res.send(savedProductSubCategory);
  } catch (err) {
    console.error('An error occurred on  product subcategory create', err);
    res.status(500).send(err);
  }
});

//PUT /:id - edit produkt sub kategorije
router.put('/:id', async (req, res) => {
  try {
    const editProductSubCategory = await ProductSubCategories.findByIdAndUpdate(req.params.id, req.body, { new: true });
    await editProductSubCategory.save();
    res.send(editProductSubCategory);
  } catch (err) {
    console.error('An error occurred on product sub categories edit', err);
    res.status(500).send(err);
  }
});

//DELETE /:id - brisanje product sub kategorije
router.delete('/:id', async (req, res) => {
  try {
    const deleteProductSubCategory = await ProductSubCategories.findByIdAndDelete(req.params.id);
    res.send(deleteProductSubCategory);
  } catch (err) {
    console.log('An error occurred on product sub categories delete', err);
    res.status(500).send(err);
  }
});

module.exports = router;
