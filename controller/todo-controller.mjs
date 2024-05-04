import { todoStore } from "../services/todo_store.mjs";

export class TodoController {
    showIndex = (req, res) => {
        res.render("index");
    };

    createTodo = (req, res) => {
        res.render("todocreation");
    };

    createTask = async (req,res) => {
        res.render("todocreated", await todoStore.add(req.body.title, req.body.dueDate, req.body.importance, req.body.description));
    };

    showTask = async(req, res) => {
        res.render("showTodo", await todoStore.get(req.params.id));
    };

    deleteTask = async (req, res) => {
        res.render("showTodo", await todoStore.delete(req.params.id));
    };
}

export const todoController = new TodoController();