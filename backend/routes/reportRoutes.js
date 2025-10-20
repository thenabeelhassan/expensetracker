const express = require('express');
const router = express.Router();
const { generatePdfReport } = require('../controllers/reportController');
const protect = require('../middleware/auth'); // if you have JWT auth

router.get('/pdf', protect, generatePdfReport);

module.exports = router;
