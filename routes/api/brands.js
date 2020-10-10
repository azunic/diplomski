const express = require('express');
const router = express.Router();
const validateBrand = require('../../validation/brands');
const Brand = require('../../models/Brand');

//GET / - dohvati sve brandove
router.get('/', async (req, res) => {
  try {
    const allBrands = await Brand.find({});
    res.send(allBrands);
  } catch (err) {
    console.error('An error occurred on brands get all', err);
    res.status(500).send(err);
  }
});

//GET /:id - dohvati jednog branda
router.get('/:id', async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);
    res.send(brand);
  } catch (err) {
    console.error('An error occurred on brands get one', err);
    res.status(500).send(err);
  }
});

//POST / - kreiraj novog branda
router.post('/', async (req, res) => {
  try {
    const { errors, isValid } = validateBrand(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newBrand = Brand({ name: req.body.name, imageUrl: req.body.imageUrl });
    await newBrand.save();
    res.send(newBrand);
  } catch (err) {
    console.error('An error occurred on brands create', err);
    res.status(500).send(err);
  }
});

//PUT /:id - edit branda
router.put('/:id', async (req, res) => {
  try {
    const editBrand = await Brand.findByIdAndUpdate(req.params.id, req.body, { new: true });
    await editBrand.save();
    res.send(editBrand);
  } catch (err) {
    console.error('An error occurred on brands edit', err);
    res.status(500).send(err);
  }
});

//DELETE /:id - delete branda

router.delete('/:id', async (req, res) => {
  try {
    const deleteBrand = await Brand.findByIdAndDelete(req.params.id);
    res.send(deleteBrand);
  } catch (err) {
    console.log('An error occurred on brands delete', err);
    res.status(500).send(err);
  }
});

module.exports = router;
