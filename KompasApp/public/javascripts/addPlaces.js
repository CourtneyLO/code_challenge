var mongoose = require('mongoose');

var place1 = mongoose.model("Place").create(
  { name: "Makers Academy", city: "London", address: "50 Commercial Street", type: "Coding Academy", rating: "10/10"},
  { name: "Jar Kitchen", city: "London", address: "Covent Garden", type: "Restaurant", rating: "8/10"},
  { name: "Signapore Garden", city: "London", address: "Swiss Cottage", type: "Restaurant", rating: "6/10"},
  { name: "Baiwei", city: "London", address: "China Town", type: "Restaurant", rating: "8/10"},
  { name: "Twist", city: "London", address: "Marylebone", type: "Restaurant", rating: "4/10"},
  { name: "Grain Store", city: "London", address: "King's Cross", type: "Restaurant", rating: "5/10"},
  { name: "The Old Bull and Bush", city: "London", address: "50 Commercial Street", type: "Pub", rating: "3/10"},
  { name: "The Wandel", city: "London", address: "Earlsfield", type: "Pub", rating: "9/10"},
  { name: "The Slug", city: "London", address: "Wimbeldon", type: "Pub", rating: "8/10"},
  { name: "The Builders Arms", city: "London", address: "Chelsea", type: "Pub", rating: "2/10"},
  { name: "Pub on the Park", city: "London", address: "London Fields", type: "Pub", rating: "7/10"},
  { name: "Coffee Republic", city: "London", address: "Whitechapel", type: "Coffee Shop", rating: "7/10"},
  { name: "Workshop Coffee Co", city: "London", address: "75 Wigmore Street, W1U", type: "Coffee Shop", rating: "8/10"},
  { name: "Algerian Coffee Stores", city: "London", address: "52 Old Compton Street, W1V", type: "Coffee Shop", rating: "4/10"},
  { name: "Bar Termini", city: "London", address: "7 Old Compton Street, W1D 5JE", type: "Coffee Shop", rating: "8/10"}
)
