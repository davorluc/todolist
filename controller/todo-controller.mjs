import { todoStore } from "../services/todo_store.mjs";

export class TodoController {
    showIndex = (req, res) => {
        res.render("index");
    };

    createTodo = (req, res) => {
        res.render("todocreation");
    };

    createdTodo = async (req,res) => {
        const doneBoolean = req.body.done === 'on'
        res.render("todocreated", await todoStore.add(req.body.title, req.body.dueDate, req.body.importance, req.body.description, doneBoolean));
    };

    showTask = async(req, res) => {
        res.render("edittodo", await todoStore.get(req.params.id));
    };

    deleteTask = async (req, res) => {
        res.render("showTodo", await todoStore.delete(req.params.id));
    };
}

export const todoController = new TodoController();