const express = require("express");
const pino = require("pino-http");
const { logger } = require("./src/helpers");
const { PORT } = require("./src/config");
const app = express();
const { createDBConnection } = require("./src/db");

createDBConnection();

app.use(
  pino({
    logger,
  })
);

app.use("/ping", (req, res) => res.send("pong"));

app.listen(PORT, () => {
  logger.info(`App running on ${PORT}`);
});
