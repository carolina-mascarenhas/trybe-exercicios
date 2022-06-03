const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'docker',
  database: process.env.MYSQL_DATABASE || 'cep_lookup',
});

module.exports = connection;