const Mongoose = require("mongoose");

function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  if (err instanceof Mongoose.Error.ValidationError) {
    return res.sendStatus(400);
  }
  return res.status(500);
}

module.exports = errorHandler;
