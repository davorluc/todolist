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

    showTodo = async(req, res) => {
        res.render("todoupdate", await todoStore.get(req.params.id));
    };

    updateTodo = async(req, res) => {
        const updatedTodo = {
            todoName: req.body.todoName,
            dueDate: req.body.dueDate,
            importance: req.body.importance,
            description: req.body.description,
            done: req.body.done === 'on'
        }

        await todoStore.update(req.params.id, updatedTodo);

        res.render("todoupdated")
    }

    deleteTodo = async (req, res) => {
        res.render("showTodo", await todoStore.delete(req.params.id));
    };
}

export const todoController = new TodoController();