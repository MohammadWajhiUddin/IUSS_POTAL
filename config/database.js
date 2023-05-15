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
host:'168.235.81.84',
  user:"iuss_db",
  database:"iuss_db",
  password:"iuss123",
  connectTimeout: 100000,
  acquireTimeout: 60000,
  connectionLimit: 100,
  queueLimit: 10,
  waitForConnection: true

  host:'172.16.17.30',
    user:"rabbia_tariq_iu",
    password:"rabbia_tariq_iu",
    database:"Iuss@123$",
    connectTimeout: 100000,
    acquireTimeout: 60000,
    connectionLimit: 100,
    queueLimit: 10,
    waitForConnection: true
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

*/

module.exports = pool;
