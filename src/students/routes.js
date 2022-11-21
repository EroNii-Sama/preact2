const { Router } = require("express");

const controller = require("./controller");
const router = Router();
router.get("/", controller.getStudents);
router.post("/", controller.createStudent);
router.get("/:id", controller.getStudentsById);
router.delete("/:id", controller.removeStudent);
module.exports = router;
