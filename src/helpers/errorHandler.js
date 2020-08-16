const Mongoose = require("mongoose");

function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  if (err instanceof Mongoose.Error.ValidationError) {
    return res.sendStatus(400);
  }
  switch (err.status) {
    case 404:
      return res.sendStatus(404);
    default:
      return res.sendStatus(500);
  }
}

module.exports = errorHandler;
