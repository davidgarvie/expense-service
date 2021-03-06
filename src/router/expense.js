const { Router } = require("express");
const {
  create,
  findOne,
  getAll,
  getOne,
  remove,
  update,
} = require("../controllers/expense");

const router = new Router();

router.param("id", findOne);
router.get("/", getAll);
router.post("/", create);
router.get("/:id", getOne);
router.delete("/:id", remove);
router.put("/:id", update);

module.exports = router;
