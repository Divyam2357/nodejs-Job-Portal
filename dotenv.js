// Loads environment variables from .env.

const dotenv = require("dotenv");

module.exports = () => {
  dotenv.config();
};
