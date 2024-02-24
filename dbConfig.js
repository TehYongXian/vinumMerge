const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'vinum_excellence',
  password: 'Kalvin5391@project',
  port: 5432,
});

module.exports = pool;
