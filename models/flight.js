const mongoose = require('mongoose');

// This is an optional shorcut to the mongoose.Schema
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN'
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    // not sure if I need this timestamp - i dnot think I do since my one year from now owrks.
    timestamps: true,
    default: function() {
      return new Date().getFullYear() + 1
    }
  },
});

module.exports = mongoose.model('Flight', flightSchema);