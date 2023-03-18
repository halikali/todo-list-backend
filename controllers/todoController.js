const TodoService = require("../services/todoService");

class TodoController {
    static async createTodo(req, res) {
        try {
            const createdTodo = await TodoService.addTodo(req.body);
            res.status(201).json({ createdTodo });
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }

    static async getTodos(req, res) {
        try {
            const findedTodos = await TodoService.findTodoByUserId(req.body.userId);

            if (findedTodos.length > 0) {
                return res.status(200).json({ findedTodos });
            }

            return res.status(404).json({ error: "Todo not found" });

        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }

    static async updateTodo(req, res) {
        try {
            const updatedTodo = await TodoService.updateTodoById(req.body.id, req.body.completed);

            if (updatedTodo) {
                return res.status(200).json({ updatedTodo });
            }

            return res.status(404).json({ error: "Todo not found" });
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }
}

module.exports = TodoController;