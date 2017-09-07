// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

//Connect to Database
const db = require('mysql');
const con = db.createConnection({
  host: "localhost",
  user: "root",
  password: "Cjsthddl7!",
  database: "wizards"
});
// con.connect(function(err){
//   if(err) {console.log(err.message);}
//   else{console.log("Database Connected!");}
//   //db creation
//   // con.query("CREATE DATABASE wizards", function(error, result){
//   //   if(err){console.log(err.message);}
//   //   console.log("Database created");
//   // })

//   //db table creation
//   var sql = "CREATE TABLE mydbtable1 (name VARCHAR(255), password VARCHAR(255))";
//   con.query(sql, function(err, result){
//     if(err){console.log(err.message);}
//     else{console.log("table created!");}
//   })
// });

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));