const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config/config');

const router = express.Router();

// Load input validation and token middleware
const validateRegisterInput = require('../../validation/signup');
const validateLoginInput = require('../../validation/login');
const verifyToken = require('../../middleware/verifyToken');
const validationMessages = require('../../constants/validation');


// Load User model
const User = require('../../models/User');

router.post('/signup', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({
    email: req.body.email,
  }, { password: 0 }).then((user) => {
    if (user) {
      return res.status(400).json({
        email: validationMessages.emailAlreadyExist,
      });
    }
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dateOfBirth: new Date(),
      email: req.body.email,
      password: req.body.password,
      username: req.body.username
    });

    // Hash password before saving in database
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then((user) => res.json(user))
          .catch((err) => console.log(err));
      });
    });
  });
});

router.post('/login', (req, res) => {

  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { email, password } = req.body;

  User.findOne({
    email,
  }).then((user) => {
    if (!user) {
      return res.status(404).json({
        emailnotfound: validationMessages.emailNotFound,
      });
    }

    console.log(config);

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user.id,
          name: user.firstName,
        };

        jwt.sign(
          payload,
          config.secret,
          {
            expiresIn: 86400 // expires in 24 hours
          },
          (err, token) => {
            res.json({
              success: true,
              token: `Bearer ${token}`,
            });
          },
        );
      } else {
        return res.status(400).json({
          passwordIncorrect: validationMessages.passwordIncorrect,
        });
      }
    });
  });
});

router.get('/me', verifyToken, (req, res) => {
  User.findById(req.userId, { password: 0 }, (err, user) => {
    if (err) return res.status(500).send(validationMessages.userErrorOcurred);
    if (!user) return res.status(404).send(validationMessages.userNotFound);

    res.status(200).send(user);
  });
});



//CRUD FOR USERS

//GET / - dohvati sve korisnike
router.get('/', async (req, res) => {

  try {
    const allUsers = await User.find({});
    res.send(allUsers);
  } catch (err) {
    console.error("An error occurred on users get all", err);
    res.status(500).send(err);
  }

});


//GET /:id - dohvati jednog korisnika 
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send(user);
  } catch (err) {
    console.error("An error occurred on users get one", err);
    res.status(500).send(err);
  }
});

//PUT /:id - edit korisnika
router.put('/:id', async (req, res) => {
  try {
    //todo obrisati iz body-ija password i email
    const editUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    await editUser.save();
    res.send(editUser);
  } catch (err) {
    console.error("An error occurred on users edit", err);
    res.status(500).send(err);
  }

});


//DELETE /:id - delete korisnika
router.delete('/:id', async (req, res) => {

  try {

    const deleteUser = await User.findByIdAndDelete(req.params.id)
    res.send(deleteUser);

  } catch (err) {
    console.log("An error occurred on users delete", err);
    res.status(500).send(err);
  }

});

module.exports = router;
