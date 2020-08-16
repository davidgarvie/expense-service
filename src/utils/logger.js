const { isProduction } = require("../config");

const logger = require("pino")({
  prettyPrint: !isProduction,
});

module.exports = logger;
