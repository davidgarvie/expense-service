const { Router } = require("express");

const router = new Router();

router.use("/ping", (req, res) => res.send("pong"));

exports.router = router;
