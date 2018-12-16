//getting started with this HW
//setup the db connection and ensure you'r connecting to db
//setup the models
//setup the routes
//handlebars next
//go from foundation to the what the client needs.  server, db, then the views 
//which is what the client see's


var express = require("express");
//router middleware
var router = express.Router();

// Import the model - database functions
var burgers = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  //default page
  res.redirect('/index');
  });
//show all burgers
  router.get('/index', function (req, res) {
    burgers.selectAll(function(data) {
      var hbsObject = { burgers: data };
      //console.log(hbsObject);
      res.render('index', hbsObject);
    });
  });

// add new burger, then refresh the home page
router.post('/burger/create', function (req, res) {
  console.log("results are" + res)
  burgers.insertOne(req.body.burger_name, function() {
    res.redirect('/index');
  });
});

// Devour a Burger
router.post('/burger/eat/:id', function (req, res) {
  burgers.updateOne(req.params.id, function() {
    res.redirect('/index');
  });
});

// Delete a Burger: hide the evidence
router.delete('/burger/delete/:id', function (req, res) {
  burgers.delete(req.params.id, function() {
    res.redirect('/index');
  });
});


// Export routes
module.exports = router;




