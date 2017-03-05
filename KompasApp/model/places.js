var mongoose = require('mongoose')

var placeSchema = new mongoose.Schema({
  name: String,
  city: String,
  address: String,
  type: String,
  rating: String
});

mongoose.model('Place', placeSchema)
