function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  const errorType = Object.getPrototypeOf(err);

  switch (errorType.name) {
    case "ValidationError":
    case "CastError":
      return res.sendStatus(400);
    default:
      return res.sendStatus(500);
  }
}

module.exports = errorHandler;
