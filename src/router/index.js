const { Router } = require("express");
const expenseRouter = require("./expense");
const settlementRouter = require("./settlement");

const router = new Router();

router.use("/ping", (req, res) => res.send("pong"));
router.use("/expenses", expenseRouter);
router.use("/settlements", settlementRouter);

exports.router = router;
