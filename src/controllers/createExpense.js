const { Expense } = require("../models");

async function createExpense(data) {
  const expense = new Expense(data);
  await expense.save();
  return [201, expense];
}

module.exports = createExpense;
