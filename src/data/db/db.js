const mysql = require('mysql2');
const pool = mysql.createPool({
    connectionLimit: 5,
    host: process.env.HOST,// 'containers-us-west-82.railway.app',
    user: process.env.USER, // 'root',
    password: process.env.PASSWORD, //'rorKaofVhR3NVviPJReI',
    database: process.env.DATABASE,//'railway',
    port: process.env.PORT //'7439'
})

module.exports = pool


