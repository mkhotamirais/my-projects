require("dotenv").config();

module.exports = {
  serverPort: process.env.SERVER_PORT,
  serverHost: process.env.SERVER_HOST,
  serviceName: process.env.SERVICE_NAME,
  secretKey: process.env.SECRET_KEY,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASS,
  dbName: process.env.DB_NAME,
};
