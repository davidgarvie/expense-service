const express = require("express");
const pino = require('pino-http')
const { logger } = require('./src/helpers')
const app = express();

app.use(pino({
  logger,
}));

app.use("/", (req, res) => res.send("hello"));

app.listen("8080", () => {
  logger.info("App running on 8080");
});
