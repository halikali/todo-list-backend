const TodoService = require("../services/todoService");

class TodoController{
    static async createTodo (req, res) {
        try {
            const createdTodo = await TodoService.addTodo(req.body);
            res.status(201).json({createdTodo});
        }
        catch (error){
            res.status(500).json({error: error});
        }
    }
}

module.exports = TodoController;