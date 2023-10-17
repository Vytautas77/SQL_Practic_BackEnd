const pg = require("pg");
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DB_CONNECT,
});

module.exports = pool;
