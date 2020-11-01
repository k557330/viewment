const mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '3025',
    database: 'viewment'
});

module.exports = db