const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  dbaKey: process.env.DATABASE_URI,
};