var mongoose = require('mongoose');

var place1 = mongoose.model("Place").create({
  name: "Makers Academy",
  city: "London",
  address: "50 Commercial Street",
  type: "Coding Academy",
  rating: 10
})
