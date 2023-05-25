const { Pool } = require("pg");

const pool = new Pool();
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  query: (text, params) => pool.query(text, params),
};
