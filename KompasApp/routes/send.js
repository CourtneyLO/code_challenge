var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var bodyParser = require('body-parser');

router.route('/')
    .post(function(req, res) {
            var firstName = req.body.firstName;
            var lastName = req.body.lastName;
            var age = req.body.age;
            var city = req.body.city;

            mongoose.model('User').create({
                firstName : firstName,
                lastName: lastName,
                age : age,
                city : city
            }, function (err, user) {
                  if (err) {
                      res.send("There was a problem adding the information to the database.");
                  } else {
                      res.json(user);
                  }
            })
        });

        router.get('/new', function(req, res) {
        res.render('users/new', { title: 'Add New user' });
    });



module.exports = router;
