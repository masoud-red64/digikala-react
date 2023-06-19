const mysql = require('mysql');

const digiKalaDB = mysql.createConnection({
    host: 'sql12.freesqldatabase.com',
    user: 'sql12627305',
    password:'VaB8mwTVEf',
    database: 'sql12627305'
})

module.exports = digiKalaDB