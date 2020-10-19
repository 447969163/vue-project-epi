const mysql =require('mysql')
let pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'xing125112',
    port: 3306,
    database: 'epi',
    connectionLimit: 50
})
module.exports = pool