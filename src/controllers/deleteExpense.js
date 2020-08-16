async function createExpense(data, expense) {
  await expense.delete();
  return [200, expense];
}

module.exports = createExpense;
