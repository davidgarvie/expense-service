const { Router } = require("express");
const {
  create,
  findOne,
  getAll,
  getExpenses,
  getOne,
  remove,
  update,
} = require("../controllers/settlement");

const router = new Router();

router.param("id", findOne);
router.get("/", getAll);
router.post("/", create);
router.get("/:id", getOne);
router.delete("/:id", remove);
router.put("/:id", update);
router.get("/:id/expenses", getExpenses);

module.exports = router;
