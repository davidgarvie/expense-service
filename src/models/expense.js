const { model, Schema } = require("mongoose");

const expenseSchema = new Schema({
  amount: Number,
  date: Date,
});

const Expense = model("Expense", expenseSchema);

module.exports = Expense;
