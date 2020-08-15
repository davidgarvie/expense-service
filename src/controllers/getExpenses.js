const { Expense } = require("../models");

async function getExpenses() {
  const result = await Expense.find();
  return [200, result];
}

module.exports = getExpenses;
