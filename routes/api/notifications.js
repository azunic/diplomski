const express = require('express');
const router = express.Router();
const validateNotifications = require('../../validation/notifications');
const Notifications = require('../../models/notifications');

//GET / - dohvati sve notifikacije
router.get('/', async (req, res) => {
  try {
    const allNotifications = await Notifications.find({});
    res.send(allNotifications);
  } catch (err) {
    console.error('An error occurred on notifications get all', err);
    res.status(500).send(err);
  }
});

//GET /:id - dohvati jednu notifikaciju
router.get('/:id', async (req, res) => {
  try {
    const notifications = await Notifications.findById(req.params.id);
    res.send(Notifications);
  } catch (err) {
    console.error('An error occurred on notifications get one', err);
    res.status(500).send(err);
  }
});
//POST / - kreiraj novu notifikaciju
router.post('/', async (req, res) => {
  try {
    const { errors, isValid } = validateNotifications(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newNotifications = Notifications({
      notificationsType: req.body.notificationType,
      notificationTitle: req.body.notificationTitle,
    });
    await newNotifications.save();
    res.send(newNotifications);
  } catch (err) {
    console.error('An error occurred on new notifications create', err);
    res.status(500).send(err);
  }
});

//PUT /:id - edit notifikacije
router.put('/:id', async (req, res) => {
  try {
    const editNotifications = await Notifications.findByIdAndUpdate(req.params.id, req.body, { new: true });
    await editNotifications.save();
    res.send(editNotifications);
  } catch (err) {
    console.error('An error occurred on notifications edit', err);
    res.status(500).send(err);
  }
});

//DELETE /:id - brisanje notifikacije
router.delete('/:id', async (req, res) => {
  try {
    const deleteNotifications = await Notifications.findByIdAndDelete(req.params.id);
    res.send(deleteNotifications);
  } catch (err) {
    console.log('An error occurred on notifications delete', err);
    res.status(500).send(err);
  }
});

module.exports = router;
