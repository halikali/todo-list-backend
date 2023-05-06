const express = require("express");
const router = express.Router();

const TodoController = require("../controllers/todoController");
const authenticateToken = require("../middleware/auth");

router.post("/create-todo", authenticateToken, TodoController.createTodo);
router.post("/get-todos", authenticateToken, TodoController.getTodos);
router.post("/update-todo", authenticateToken, TodoController.updateTodo);

module.exports = router;
