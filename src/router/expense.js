const { Router } = require("express");
const { createExpense, getExpenses } = require("../controllers");
const { controllerHelper } = require("../helpers");

const router = new Router();

router.get("/", controllerHelper(getExpenses));
router.post("/", controllerHelper(createExpense));

exports.expenseRouter = router;
