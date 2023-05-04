const mysql = require('mysql')
require("dotenv").config();

const pool = mysql.createPool({
    host:'busytech.co',
    user:"busytech_asGsw",
    password:"nHU)Db4Dd27%",
    database:"busytech_ss_dash",
    connectTimeout: 100000,
    acquireTimeout: 60000,
    connectionLimit: 100,
    queueLimit: 10,
    waitForConnection: true
    
})

/*


const pool = mysql.createPool({
   host:'192.254.186.63',
    user:"qastco68_zabuser",
    password:"zabuser123",
    database:"qastco68_zabdb105",
    connectTimeout: 100000,
    acquireTimeout: 60000,
    connectionLimit: 100,
    queueLimit: 10,
    waitForConnection: true
    
})

*/

module.exports = pool;
