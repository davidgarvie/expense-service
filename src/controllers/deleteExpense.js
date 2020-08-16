async function createExpense(body, expense) {
  await expense.delete();
  return [204, expense];
}

module.exports = createExpense;
