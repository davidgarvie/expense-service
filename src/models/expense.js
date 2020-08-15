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
});

const Expense = model("Expense", expenseSchema);

module.exports = Expense;
