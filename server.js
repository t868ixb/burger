const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require('path');

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));
app.use("/public/assets/css", express.static(__dirname + '/public/assets/css'));
app.use("/public/assets/img", express.static(__dirname + '/public/assets/img'));
app.use("/public/assets/javascript", express.static(__dirname + '/public/assets/javascript'));

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