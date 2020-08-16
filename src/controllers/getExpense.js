const { Expense } = require("../models");

function getExpense(id) {
  return Expense.findById(id).exec();
}

module.exports = getExpense;
