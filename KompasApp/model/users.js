var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  city: String
});

mongoose.model("User", userSchema);
