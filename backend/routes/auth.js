// backend/routes/auth.js
const express = require('express');
const router = express.Router();

// Placeholder route for future authentication
router.post('/register', (req, res) => {
  res.json({ message: 'Registration endpoint (placeholder)' });
});

router.post('/login', (req, res) => {
  res.json({ message: 'Login endpoint (placeholder)' });
});

module.exports = router;