const mysql = require('mysql2');
const pool = mysql.createPool({
    connectionLimit: 5,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD, 
    database: process.env.DATABASE,
    port: process.env.PORT
})

module.exports = pool


