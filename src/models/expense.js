const { model, Schema } = require("mongoose");

const expenseSchema = new Schema({
  amount: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  isSettled: Boolean,
});

const Expense = model("Expense", expenseSchema);

module.exports = Expense;
