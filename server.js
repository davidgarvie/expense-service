const express = require("express");
const pino = require("pino-http");
const { logger } = require("./src/helpers");
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

app.use(router);

app.listen(PORT, () => {
  logger.info(`App running on ${PORT}`);
});
