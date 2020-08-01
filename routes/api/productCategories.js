const express = require('express');
const router = express.Router();
const validateProductCategories = require('../../validation/productCategories');
const ProductCategories = require('../../models/ProductCategories');


//dohvati sve product kategorije
router.get('/', async (req, res) => {

    try {
        const allproductCategories = await ProductCategories.find({});
        res.send(allproductCategories);
    } catch (err) {
        console.error("An error occurred on product categories get all", err);
        res.status(500).send(err);
    }

});

//GET /:id - dohvati jednu product kategoriju 
router.get('/:id', async (req, res) => {
    try {
        const productCategory = await ProductCategories.findById(req.params.id);
        res.send(productCategory);
    } catch (err) {
        console.error("An error occurred on producet categories get one", err);
        res.status(500).send(err);
    }
});

//POST / - kreiraj novu  product kategoriju
router.post('/', async (req, res) => {
    try {
        const { errors, isValid } = validateProductCategories(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newCategory = ProductCategories({ name: req.body.name, mainCategory: req.body.mainCategory });
        await newCategory.save();
        res.send(newCategory);

    } catch (err) {
        console.error("An error occurred on new category create", err);
        res.status(500).send(err);
    }

});

//PUT /:id - edit produkt kategorije
router.put('/:id', async (req, res) => {
    try {
        const editProductCategory = await ProductCategories.findByIdAndUpdate(req.params.id, req.body, { new: true });
        await editProductCategory.save();
        res.send(editProductCategory);

    } catch (err) {
        console.error("An error occurred on product categories edit", err);
        res.status(500).send(err);
    }

});

//DELETE /:id - brisanje product kategorije
router.delete('/:id', async (req, res) => {

    try {

        const deleteProductCategory = await ProductCategories.findByIdAndDelete(req.params.id)
        res.send(deleteProductCategory);

    } catch (err) {
        console.log("An error occurred on product categories delete", err);
        res.status(500).send(err);
    }

});

module.exports = router;