const Todo = require("../models/todo");

class TodoService {

    static async addTodo(newTodo) {
        try {
            const todo = {
                title: newTodo.title,
                userId: newTodo.userId,
                completed: newTodo.completed
            }

            const response = await new Todo(todo).save();
            return response;
        }
        catch (error) {
            throw error;
        }
    }
}

module.exports = TodoService;