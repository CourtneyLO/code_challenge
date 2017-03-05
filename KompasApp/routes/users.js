var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var bodyParser = require('body-parser');

router.route('/')
    .get(function(req, res, next) {
        mongoose.model('User').find({}, function (err, users) {
              if (err) {
                  return console.error(err);
              } else {
                // var userObj = {allUser: users}
                  res.json(users);
              }
        });
    })

  // router.post("/user", function(req, res, next) {
  //   res.send("status": "Success", "message": "a simple post request", "body": req.body)
  // });

    .post(function(req, res) {
            var firstName = req.body.firstName;
            var lastName = req.body.lastName;
            var age = req.body.age;
            var city = req.body.city;

            //call the create function for our database
            mongoose.model('User').create({
                firstName : firstName,
                lastName: lastName,
                age : age,
                city : city
            }, function (err, user) {
                  if (err) {
                      res.send("There was a problem adding the information to the database.");
                  } else {

                      console.log('POST creating new user: ' + user);
                      res.format({
                        html: function(){
                            // If it worked, set the header so the address bar doesn't still say /adduser
                            res.location("users");
                            // And forward to success page
                            res.redirect("/users");
                        },
                        json: function(){
                            res.json(user);
                        }
                    });
                  }
            })
        });

        router.get('/new', function(req, res) {
        res.render('users/new', { title: 'Add New user' });
    });



module.exports = router;
