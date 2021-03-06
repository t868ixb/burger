const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require('path');

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(express.static("public"));
app.use("/assets", express.static("assets"));

// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//routes via controller
var router = require("./controllers/burgercontroller.js");
app.use('/', router);

// Start listening
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });