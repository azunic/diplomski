const express = require('express');
const router = express.Router();
const validatePost = require('../../validation/post');
const Post = require('../../models/Post');


//GET / - dohvati sve postove
router.get('/', async (req, res) => {

    try {
        const allPost = await Post.find({});
        res.send(allPost);
    } catch (err) {
        console.error("An error occurred on post get all", err);
        res.status(500).send(err);
    }

});


//GET /:id - dohvati jedan post
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.send(post);
    } catch (err) {
        console.error("An error occurred on post get one", err);
        res.status(500).send(err);
    }
});

//POST /- kreiraj novi post
router.post('/', async (req, res) => {
    try {
        const { errors, isValid } = validatePost(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }
        const { text, title, isReview, reviewRating, imageUrl, product } = req.body;
        const newPost = Post({
            text: text,
            title: title,
            isReview: isReview,
            reviewRating: reviewRating,
            imageUrl: imageUrl,
            product: product
        });
        await newPost.save();
        res.send(newPost);

    } catch (err) {
        console.error("An error occurred on post create", err);
        res.status(500).send(err);
    }

});

//PUT /:id - edit posta
router.put('/:id', async (req, res) => {
    try {
        const editPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        await editPost.save();
        res.send(editPost);

    } catch (err) {
        console.error("An error occurred on post edit", err);
        res.status(500).send(err);
    }

});


//DELETE /:id - delete posta
router.delete('/:id', async (req, res) => {

    try {

        const deletePost = await Post.findByIdAndDelete(req.params.id)
        res.send(deletePost);

    } catch (err) {
        console.log("An error occurred on post delete", err);
        res.status(500).send(err);
    }

});


module.exports = router;