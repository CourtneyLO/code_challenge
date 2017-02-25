var mongoose = require('mongoose')

var placeSchema = new mongoose.Schema({
  name: String,
  city: String,
  address: String,
  type: String,
  rating: Number
});

mongoose.model('Place', placeSchema)
