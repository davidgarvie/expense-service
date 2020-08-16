const { logger } = require("./src/utils");
const { PORT } = require("./src/config");
const { app } = require("./src/server");

app.listen(PORT, () => {
  logger.info(`App running on ${PORT}`);
});
