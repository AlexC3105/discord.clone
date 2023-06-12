const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create a new user
router.post('/users', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
});

module.exports = router;
