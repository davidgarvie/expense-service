const { Router } = require("express");
const {
  createExpense,
  deleteExpense,
  getExpense,
  getExpenses,
} = require("../controllers");
const { controllerHelper, paramHelper } = require("../helpers");

const router = new Router();

router.param(":id", paramHelper(getExpense));

router.get("/", controllerHelper(getExpenses));
router.post("/", controllerHelper(createExpense));
router.get("/:id", (req, res) => res.send(req.locals.model));
router.delete("/:id", controllerHelper(deleteExpense));

exports.expenseRouter = router;
