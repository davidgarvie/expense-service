const { Router } = require("express");
const { getExpenses } = require("../controllers");
const { controllerHelper } = require("../helpers");

const router = new Router();

router.get("/", controllerHelper(getExpenses));

exports.expenseRouter = router;
