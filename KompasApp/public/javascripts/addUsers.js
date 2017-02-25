var mongoose = require("mongoose");

var user1 = mongoose.model('User').create({
  firstName: "Amanda",
  lastName: "Bater",
  age: 28,
  city: "London"
})

var user2 = mongoose.model('User').create({
  firstName: "Dan",
  lastName: "Pelensky",
  age: 31,
  city: "London"
})
