const mongoose = require("mongoose");
const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB,
} = require("./config");
const { logger } = require("./helpers");

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000,
};

function createDBConnection() {
  mongoose
    .connect(url, options)
    .then(() => {
      logger.info("Succesfully connected to MongoDB");
    })
    .catch((err) => {
      logger.warn("Unable to connect to MongoDB", err);
    });
}

exports.createDBConnection = createDBConnection;
