const express = require('express');
const router = express.Router();
const validateCart = require('../../validation/cart');
const Cart = require('../../models/Cart');

//GET / - dohvati sve kosarice
router.get('/', async (req, res) => {
  try {
    const allCart = await Cart.find({});
    res.send(allCart);
  } catch (err) {
    console.error('An error occurred on cart get all', err);
    res.status(500).send(err);
  }
});

//GET /:id - dohvati jednu kosaricu
router.get('/:id', async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    res.send(cart);
  } catch (err) {
    console.error('An error occurred on cart get one', err);
    res.status(500).send(err);
  }
});

//POST / - kreiraj novu kosaricu
router.post('/', async (req, res) => {
  try {
    const { errors, isValid } = validateCart(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newCart = Cart({ expirationDate: req.body.expirationDate });
    await newCart.save();
    res.send(newcCart);
  } catch (err) {
    console.error('An error occurred on cart create', err);
    res.status(500).send(err);
  }
});

//PUT /:id - edit kosarice
router.put('/:id', async (req, res) => {
  try {
    const editCart = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
    await editCart.save();
    res.send(editCart);
  } catch (err) {
    console.error('An error occurred on cart edit', err);
    res.status(500).send(err);
  }
});

//DELETE /:id - delete kosarice

router.delete('/:id', async (req, res) => {
  try {
    const deleteCart = await Cart.findByIdAndDelete(req.params.id);
    res.send(deleteCart);
  } catch (err) {
    console.log('An error occurred on cart delete', err);
    res.status(500).send(err);
  }
});

module.exports = router;
