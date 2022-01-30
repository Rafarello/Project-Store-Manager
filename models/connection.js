require('dotenv').config();
const mysql = require('mysql2/promise');

// createpool é um gerenciador de conexões

const DATABASE_NAME = 'StoreManager';

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: DATABASE_NAME,
  });

module.exports = connection;
