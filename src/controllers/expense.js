const { Expense } = require("../models");
const { createCRUD } = require("../utils");

const expenseController = createCRUD(Expense, {
  populate: "settlement",
});

module.exports = expenseController;
