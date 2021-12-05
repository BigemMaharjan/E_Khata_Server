const mysql = require("mysql");

/* Database Connection */
var connectDB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "e_khata_server",
  port: "3306",
});

connectDB.connect(function (err) {
  if (err) {
    throw err;
  } else {
    console.log("Database Connected");
  }
});

module.exports = connectDB;
