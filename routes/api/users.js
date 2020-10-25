const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { nanoid } = require('nanoid');

const EmailService = require('../../services/emailService');
const config = require('../../config/config');

const router = express.Router();

// Load input validation and token middleware
const validateRegisterInput = require('../../validation/signup');
const validateLoginInput = require('../../validation/login');
const verifyToken = require('../../middleware/verifyToken');
const validationMessages = require('../../constants/validation');

// Load User model
const User = require('../../models/User');
const Notification = require('../../models/notifications');

router.post('/signup', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne(
    {
      email: req.body.email,
    },
    { password: 0 },
  ).then((user) => {
    if (user) {
      return res.status(400).json({
        email: validationMessages.emailAlreadyExist,
      });
    }
    const emailConfirmationToken = nanoid();
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dateOfBirth: null,
      email: req.body.email,
      password: req.body.password,
      username: req.body.username,
      emailConfirmationToken,
    });

    // Hash password before saving in database
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then((user) => {
            EmailService.sendConfirmationEmail(req.body.email, emailConfirmationToken);
            return res.json(user);
          })
          .catch((err) => console.log(err));
      });
    });
  });
});

router.get('/confirm-email', async (req, res) => {
  const { emailConfirmationToken, email } = req.query;
  console.log('email', email);
  console.log('emailConfirmationToken', emailConfirmationToken);
  const user = await User.findOne({ email, emailConfirmationToken });

  if (!user) {
    return res.status(404).json({
      reason: validationMessages.emailConfirmationTokenNotFound,
    });
  }

  await User.findOneAndUpdate({ emailConfirmationToken }, { emailConfirmationToken: '' });

  res.json({
    success: true,
    message: 'Email confirmed!',
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
        reason: validationMessages.emailNotFound,
      });
    }

    console.log(config);

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          user_id: user.id,
          name: user.firstName,
        };

        jwt.sign(
          payload,
          config.secret,
          {
            expiresIn: 86400, // expires in 24 hours
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

router.get('/me', verifyToken, async (req, res) => {
  console.log('inside /me', req.userId);
  try {
    const user = await User.findById(req.userId, { password: 0 });

    const notificationCount = await Notification.countDocuments({ recipientId: req.userId, seen: false });

    if (!user) {
      return res.status(404).send(validationMessages.userNotFound);
    }

    const response = {
      notificationCount: 5,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      dateOfBirth: user.dateOfBirth,
      gender: user.gender,
      username: user.username,
      wishListedProducts: user.wishListedProducts,
      ownedProducts: user.ownedProducts,
      //...user.toObject(),
    };

    res.send(response);
  } catch (err) {
    console.error('An error occurred on users get all', err);
    res.status(500).send(err);
  }
});

//CRUD FOR USERS

//GET / - dohvati sve korisnike
router.get('/', async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.send(allUsers);
  } catch (err) {
    console.error('An error occurred on users get all', err);
    res.status(500).send(err);
  }
});

//GET /:id - dohvati jednog korisnika
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send(user);
  } catch (err) {
    console.error('An error occurred on users get one', err);
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
    console.error('An error occurred on users edit', err);
    res.status(500).send(err);
  }
});

//DELETE /:id - delete korisnika
router.delete('/:id', async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    res.send(deleteUser);
  } catch (err) {
    console.log('An error occurred on users delete', err);
    res.status(500).send(err);
  }
});

module.exports = router;
