const express =  require("express");
const router = express.Router();

const TodoController = require("../controllers/todoController");

router.post("/", TodoController.createTodo);

module.exports = router;