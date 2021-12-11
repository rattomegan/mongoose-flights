const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controller/destinations');

// Paths are NOT prefixed with "/flights"

// POST "/flights/:id/destinations" - Create Destination Route
router.post('/flights/:id/destinations', destinationsCtrl.create);




module.exports = router;