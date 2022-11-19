const express = require('express');
const { Authenticate } = require('../middlewares/authMiddleware');
const { createStep } = require('../controllers/stepController');

const router = express.Router();

// Create a step
router.post("/create", Authenticate, createStep);

module.exports = router;
