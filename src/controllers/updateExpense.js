async function updateExpense(data, expense) {
  const updatedExpense = Object.assign(expense, data);
  await updatedExpense.save();
  return [200, updatedExpense];
}

module.exports = updateExpense;
