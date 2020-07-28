const express = require('express');
const router = express.Router();
const validateMainCategories = require('../../validation/mainCategories');
const MainCategories = require('../../models/MainCategories');


//dohvati sve kategorije
router.get('/', async (req, res) => {

    try {
        const allCategories = await MainCategories.find({});
        res.send(allCategories);
    } catch (err) {
        console.error("An error occurred on main categories get all", err);
        res.status(500).send(err);
    }

});


//GET /:id - dohvati jednog kategoriju
router.get('/:id', async (req, res) => {
    try {
        const mainCategory = await MainCategories.findById(req.params.id);
        res.send(mainCategory);
    } catch (err) {
        console.error("An error occurred on main categories get one", err);
        res.status(500).send(err);
    }
});

//POST / - kreiraj novu kategoriju
router.post('/', async (req, res) => {
    try {
        const { errors, isValid } = validateMainCategories(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newCategory = MainCategories({ name: req.body.name });
        await newCategory.save();
        res.send(newCategory);

    } catch (err) {
        console.error("An error occurred on new category create", err);
        res.status(500).send(err);
    }

});

//PUT /:id - edit kategorije
router.put('/:id', async (req, res) => {
    try {
        const editMainCategory = await MainCategories.findByIdAndUpdate(req.params.id, req.body, { new: true });
        await editMainCategory.save();
        res.send(editMainCategory);

    } catch (err) {
        console.error("An error occurred on main categories edit", err);
        res.status(500).send(err);
    }

});

//DELETE /:id - brisanje kategorije
router.delete('/:id', async (req, res) => {

    try {

        const deleteMainCategory = await MainCategories.findByIdAndDelete(req.params.id)
        res.send(deleteMainCategory);

    } catch (err) {
        console.log("An error occurred on main categories delete", err);
        res.status(500).send(err);
    }

});

module.exports = router;