var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var bodyParser = require('body-parser');


router.route('/')
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
                  //Blob has been created
                  // console.log('POST creating new blob: ' + user);
                  // res.format({
                  //     //HTML response will set the location and redirect back to the home page. You could also create a 'success' page if that's your thing
                  //   html: function(){
                  //       // If it worked, set the header so the address bar doesn't still say /adduser
                  //       res.location("users");
                  //       // And forward to success page
                  //       res.redirect("/users");
                  //   },
                  //   //JSON response will show the newly created blob
                  //   json: function(){
                        res.json(users);
                    // }
                // });
              }
        })
    });

    router.get('/new', function(req, res) {
    res.render('user/new', { title: 'Add New user' });
});
