const mysql = require('mysql2');
const pool = mysql.createPool({
    connectionLimit: 5,
    host: 'containers-us-west-82.railway.app',
    user: 'root',
    password: 'rorKaofVhR3NVviPJReI',
    database: 'railway',
    port: '7439'

})


module.exports = pool


