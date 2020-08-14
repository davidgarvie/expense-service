const express = require("express");
const pino = require("pino-http");
const { logger } = require("./src/helpers");
const { PORT } = require("./src/config");
const app = express();

app.use(
  pino({
    logger,
  })
);

app.use("/ping", (req, res) => res.send("pong"));

app.listen(PORT, () => {
  logger.info(`App running on ${PORT}`);
});
