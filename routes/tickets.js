var express = require('express');
router = express.Router();
const ticketsCtrl = require('../controller/tickets');

// Paths are not prefixed

// GET "/flights/:id/tickets/new" - New Ticket Route
router.get('/flights/:id/tickets/new', ticketsCtrl.new);

// POST "/flights/:flightId/tickets" - Create Ticket Route
router.post('/flights/:flightId/tickets', ticketsCtrl.create);

// DELETE "/tickets/:id" - Delete Ticket Route
router.delete('/tickets/:id', ticketsCtrl.delete);


module.exports = router;
