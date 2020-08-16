const { model, Schema } = require("mongoose");

const expenseSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  settlement: {
    type: Schema.Types.ObjectId,
    ref: "Settlement",
  },
});

const Expense = model("Expense", expenseSchema);

module.exports = Expense;
