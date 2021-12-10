var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controller/flights');

// All paths in this router start have "/flights" prefixed to them

// GET "/flights" - Index Route
router.get('/', flightsCtrl.index);

// Get "/flights/new" - New Route
router.get('/new', flightsCtrl.new);

// POST "/flights" - Create Route
router.post('/', flightsCtrl.create);

// GET "/flights/:id" - Show Route
router.get('/:id', flightsCtrl.show);


module.exports = router;
