const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB,
  NODE_ENV,
  PORT,
} = process.env;

module.exports = {
  isProduction: NODE_ENV === "production",
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB,
  PORT: PORT || 8080,
};
