const mysql = require("mysql");

const digiKalaDB = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12643846",
  password: "XTWzvWiiNw",
  database: "sql12643846",
});

module.exports = digiKalaDB;
