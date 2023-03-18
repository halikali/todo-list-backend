const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    completedAt: {
        type: Date,
        default: null
    }
})

const Todo = mongoose.model("todo", todoSchema);

module.exports = Todo;