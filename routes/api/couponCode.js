const express = require('express');
const router = express.Router();
const validateCouponCode = require('../../validation/couponCode');
const CouponCode = require('../../models/CouponCode');


//dohvati sve kupon kodove
router.get('/', async (req, res) => {

    try {
        const allCouponCode = await CouponCode.find({});
        res.send(allCouponCode);
    } catch (err) {
        console.error("An error occurred on coupon code get all", err);
        res.status(500).send(err);
    }

});


//GET /:id - dohvati jedan kupon
router.get('/:id', async (req, res) => {
    try {
        const CouponCode = await CouponCode.findById(req.params.id);
        res.send(CouponCode);
    } catch (err) {
        console.error("An error occurred on coupon code get one", err);
        res.status(500).send(err);
    }
});

//POST / - kreiraj novi kupon
router.post('/', async (req, res) => {
    try {
        const { errors, isValid } = validateCouponCode(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newCouponCode = CouponCode({ name: req.body.name });
        await newCouponCode.save();
        res.send(newCouponCode);

    } catch (err) {
        console.error("An error occurred on new coupon code create", err);
        res.status(500).send(err);
    }

});

//PUT /:id - edit kupona
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