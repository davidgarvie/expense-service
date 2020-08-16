const asyncHelper = require("./asyncHelper");
const { Types } = require("Mongoose");

function createCRUD(Model, { populate = null } = {}) {
  const modelController = {
    async create(req, res) {
      const model = new Model(req.body);
      await model.save();
      res.json(model);
    },
    async findOne(req, res, next) {
      if (!Types.ObjectId.isValid(req.params.id)) {
        return res.sendStatus(404);
      }
      const model = await Model.findById(req.params.id).exec();
      if (!model) {
        return res.sendStatus(404);
      }
      req.locals = req.locals || {};
      req.locals.model = model;
      return next();
    },
    async getOne(req, res) {
      const { model } = req.locals;
      if (!populate) {
        return res.send(model);
      }
      const populatedModel = await model.populate(populate).execPopulate();
      return res.send(populatedModel);
    },
    async getAll(req, res) {
      const models = await Model.find().exec();
      res.json(models);
    },
    async remove(req, res) {
      const result = await Model.deleteOne({ _id: req.params.id });
      if (result.deletedCount === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(200);
      }
    },
    async update(req, res) {
      const updatedModel = Object.assign(req.locals.model, req.body);
      await updatedModel.save();
      res.json(updatedModel);
    },
  };

  const updatedController = Object.keys(modelController).reduce(
    (obj, method) => ({
      ...obj,
      [method]: asyncHelper(modelController[method]),
    }),
    {}
  );

  return updatedController;
}

module.exports = createCRUD;
