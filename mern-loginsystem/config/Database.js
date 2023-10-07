const mongoose = require("mongoose");
const {} = require("./Config.js");
const {
  dbUser,
  dbPass,
  dbHost,
  dbPort,
  dbName,
} = require("../../../eduwork/eduwork-be-studikasus2/app/config");

mongoose.connect(
  `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`
);
const db = mongoose.connection;
console.log("database connected");

module.exports = db;
