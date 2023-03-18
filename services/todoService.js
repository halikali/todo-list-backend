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

    static async findTodoByUserId(id) {
        try {
            const findedTodo = await Todo.find({ userId: id });

            if (findedTodo) {
                return findedTodo;
            }

            return null;
        }
        catch (error) {
            throw error;
        }
    }

    static async updateTodoById(id, completed) {
        try {
            const findedTodo = await Todo.findById(id);

            if (findedTodo) {
                findedTodo.completed = completed;
                findedTodo.completedAt = completed ? Date.now() : null;
                const response = await findedTodo.save();
                return response;
            }

            throw new Error("Todo not found");

        }

        catch (error) {
            throw error;
        }
    }
}

module.exports = TodoService;