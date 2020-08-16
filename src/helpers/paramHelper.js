const Mongoose = require("mongoose");

function paramHelper(controller) {
  return async function (req, res, next, id) {
    try {
      const model = await controller(id);
      if (model) {
        req.locals.model = model;
        next();
      } else {
        const error = new Error("failed to find item with specified ID");
        error.status = 404;
        next(error);
      }
    } catch (err) {
      if (err instanceof Mongoose.Error.CastError) {
        err.status = 404;
      }
      next(err);
    }
  };
}

module.exports = paramHelper;
