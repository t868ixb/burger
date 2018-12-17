// Import Node Dependencies
var connection = require('./connection.js');


// Connect to MySQL database
connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  };
  console.log('connected as id ' + connection.threadId);
});




// Methods for MySQL commands
var orm = {

  //  
  selectAll: function(callback) {

    // Run MySQL Query
    //this burger db is on the heroku side
    connection.query('SELECT * FROM burgers', function (err, result) {
      if (err) throw err;
      callback(result);
    });

  },

  // insertOne()
  insertOne: function(burger, callback){
    var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
    // Run MySQL Query
    connection.query(queryString,[burger],function (err, result)  {
      if (err) {
        throw err;
    }
    callback(result);
    })

  },

  // updateOne()
  updateOne: function(burgerID, callback){

    // Run MySQL Query
    connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}], function (err, result) {
        if (err) throw err;
        callback(result);
      });

  },

   //delete evidence()
   //did not finish this section!!!!!
    delete: function(burgerID, callback){

   //Run MySQL Query to delete the burger
  connection.query('DELETE FROM burgers WHERE ?', [{{id: burgerID}], function (err, result) {
        if (err) throw err;
        callback(result);
       });

   }
}; //end of the orm object


// Export the ORM object in module.exports.
module.exports = orm;