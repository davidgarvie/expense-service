const mongoose = require("mongoose");
const {
  isProduction,
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB,
} = require("../config");
const logger = require("./logger");

const authSource = isProduction ? "user" : "admin";

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=${authSource}`;

const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000,
};

async function createDBConnection() {
  try {
    await mongoose.connect(url, options);
    logger.info("Succesfully connected to MongoDB");
  } catch (err) {
    logger.warn("Unable to connect to MongoDB", err);
  }
}

module.exports = createDBConnection;
