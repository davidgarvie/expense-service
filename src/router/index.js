const { Router } = require("express");
const { expenseRouter } = require("./expense");

const router = new Router();

router.use("/ping", (req, res) => res.send("pong"));
router.use("/expenses", expenseRouter);

exports.router = router;
