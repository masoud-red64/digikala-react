const mysql = require('mysql');

const digiKalaDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'digikala'
})

module.exports = digiKalaDB