const bodyParser = require("body-parser");
const morgan = require("morgan");
const errorHandler = require("./errorHandler");
const { router } = require("../router");
const { isProduction } = require("../config");

function configureMiddleware(app) {
  app.disable("x-powered-by");
  app.use(bodyParser.json());
  app.use(morgan(isProduction ? "common" : "dev"));
  app.use(router);
  app.use(errorHandler);
}

module.exports = configureMiddleware;
