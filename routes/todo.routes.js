const express =  require("express");
const router = express.Router();

const TodoController = require("../controllers/todoController");

router.post("/create-todo", TodoController.createTodo);
router.post("/get-todos", TodoController.getTodos);
router.post("/update-todo", TodoController.updateTodo);

module.exports = router;