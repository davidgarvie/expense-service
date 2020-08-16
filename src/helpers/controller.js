function controllerHelper(controller) {
  return async function (req, res, next) {
    try {
      const [code, result] = await controller(req.body, req.locals.model);
      if (code) {
        res.statusCode = code;
      }
      res.send(result);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = controllerHelper;
