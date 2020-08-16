const express = require("express");
const bodyParser = require("body-parser");
const pino = require("pino-http");
const { errorHandler, logger } = require("./src/helpers");
const { PORT } = require("./src/config");
const app = express();
const { createDBConnection } = require("./src/db");
const { router } = require("./src/router");

createDBConnection();

app.use(
  pino({
    logger,
  })
);
app.use(bodyParser.json());

app.use((req, res, next) => {
  if (!req.locals) {
    req.locals = {};
  }
  next();
});

app.use(router);

app.use(errorHandler);

app.listen(PORT, () => {
  logger.info(`App running on ${PORT}`);
});
