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
                  res.json(users);
              }
        });
    })


module.exports = router;
