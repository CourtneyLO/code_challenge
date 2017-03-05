var mongoose = require("mongoose");

var user1 = mongoose.model('User').create(
  { firstName: "Amanda", lastName: "Bater", age: 28, city: "London"},
  { firstName: "Dan", lastName: "Pelensky", age: 31, city: "California"},
  { firstName: "Chris", lastName: "Mariott", age: 23, city: "New York"},
  { firstName: "Jack", lastName: "Northall", age: 21, city: "London"},
  { firstName: "James", lastName: "Turner", age: 24, city: "London"},
  { firstName: "Kim", lastName: "Wilson", age: 28, city: "London"},
  { firstName: "Chris", lastName: "Cooper", age: 30, city: "London"},
  { firstName: "Asuka", lastName: "Ochi", age: 35, city: "Tokyo"},
  { firstName: "George", lastName: "Eaton", age: 28, city: "London"},
  { firstName: "Elizabeth", lastName: "Atkin", age: 29, city: "London"},
  { firstName: "Amanda", lastName: "Bater", age: 28, city: "London"},
  { firstName: "Jack", lastName: "Kelly", age: 21, city: "Cardiff"},
  { firstName: "Mike", lastName: "Hurl", age: 35, city: "London"},
  { firstName: "Rob", lastName: "Adams", age: 34, city: "Barcelona"},
  { firstName: "Russel", lastName: "Yeo", age: 24, city: "London"}
)
