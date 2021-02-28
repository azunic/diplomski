const express = require('express');
const router = express.Router();
const validateWardrobe = require('../../validation/wardrobe');
const Wardrobe = require('../../models/Wardrobe');

//GET / - dohvati sve proizvode iz ormarica
router.get('/', async (req, res) => {
  try {
    const allWardrobe = await Wardrobe.find({});
    res.send(allWardrobe);
  } catch (err) {
    console.error('An error occurred on wardrobe get all', err);
    res.status(500).send(err);
  }
});

//GET dohvati samo jedan proizvod iz ormarica
router.get('/:id', async (req, res) => {
  try {
    const wardrobeone = await Wardrobe.findById(req.params.id);
    res.send(wardrobeone);
  } catch (err) {
    console.error('An error occurred on wardrobe get one', err);
    res.status(500).send(err);
  }
});

//POST /- kreiraj novi post u vezi ormarica
router.post('/', async (req, res) => {
  try {
    const { errors, isValid } = validateWardrobe(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const { name, image, brand, ingredients, category, descriptions, email, mobilephone, price } = req.body;
    const newWardrobe = Wardrobe({
      name: name,
      image: image,
      brand: brand,
      ingredients: ingredients,
      category: category,
      descriptions: descriptions,
      email: email,
      mobilephone: mobilephone,
      price: price,
    });
    await newWardrobe.save();
    res.send(newWardrobe);
  } catch (err) {
    console.error('An error occurred on wardrobe create', err);
    res.status(500).send(err);
  }
});

// update za moj ormaric
router.put('/:id', async (req, res) => {
  try {
    const editWardrobe = await Wardrobe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    await editWardrobe.save();
    res.send(editWardrobe);
  } catch (err) {
    console.error('An error occurred on wardobe edit', err);
    res.status(500).send(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleteWardobe = await Wardrobe.findByIdAndDelete(req.params.id);
    res.send(deleteWardobe);
  } catch (err) {
    console.log('An error occurred on wardobe delete', err);
    res.status(500).send(err);
  }
});

module.exports = router;
