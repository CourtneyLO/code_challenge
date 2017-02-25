var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var bodyParser = require('body-parser');


router.route('/')
  .get(function(req, res, next) {
    mongoose.model("Place").find({}, function(err, places){
      if (err) {
        return console.error(err)
      } else {
        res.json(places)
      }
    });
  });

module.exports = router;
