const path = require("path");
require("dotenv").config();

const rootPath = path.resolve(__dirname, "..");
const serverHost = process.env.SERVER_HOST;
const serverPort = process.env.SERVER_PORT;
const serviceName = process.env.SERVICE_NAME;
const secretkey = process.env.SECRET_KEY;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbName = process.env.DB_NAME;

module.exports = {
  rootPath,
  serverHost,
  serverPort,
  serviceName,
  secretkey,
  dbHost,
  dbPort,
  dbUser,
  dbPass,
  dbName,
};
