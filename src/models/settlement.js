const { model, Schema } = require("mongoose");

const settlementSchema = new Schema({
  date: {
    type: Date,
    default: Date.now(),
  },
  description: {
    type: String,
    required: true,
  },
  paid: {
    type: Boolean,
    default: false,
  },
  totalAmount: {
    type: Number,
  },
  totalOwed: {
    type: Number,
  },
});

const Settlement = model("Settlement", settlementSchema);

exports.settlementSchema = settlementSchema;
module.exports = Settlement;
