const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  seat: {
    type: String,
    // regular expression being assigned to the match validator:
    match: /[A-F][1-9]\d?/,
  },
  price: {
    type: Number,
    min: 0
  },
  // We are referencing the flights here. 
  flight: {type: Schema.Types.ObjectId, ref: 'Flight'}
});


module.exports = mongoose.model('Ticket', ticketSchema);