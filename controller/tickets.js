const Ticket = require('../models/ticket');

module.exports = {
  new: newTicket,
  create
};


function newTicket(req, res) {
  // we are passing down the id that we required in our route.
  res.render('tickets/new', { flightId: req.params.id });
};

function create(req, res) {
  console.log(req.body);
  req.body.flight = req.params.flightId
  const ticket = new Ticket(req.body);
  ticket.save(function (err) {
    if (err) {
      console.log(err);
      return res.redirect('/tickets/new');
    }
    res.redirect(`/flights/${req.params.flightId}`);
  })
};
