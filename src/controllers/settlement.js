const { Expense, Settlement } = require("../models");
const { asyncHelper, createCRUD } = require("../utils");

const settlementController = createCRUD(Settlement);

settlementController.getExpenses = asyncHelper(async (req, res) => {
  const { _id: id } = req.locals.model;
  const expenses = await Expense.find({ settlement: id });
  res.json(expenses);
});

module.exports = settlementController;
