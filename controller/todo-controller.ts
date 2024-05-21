import { todoStore } from "../services/todo_store";
import { Response } from "express";

export class TodoController {
    showIndex = (req: any, res: Response) => {
        res.render("index");
    };

    createTodo = (req: any, res: Response) => {
        res.render("todocreation");
    };

    createdTodo = async (req: any, res: Response) => {
        const doneBoolean = req.body.done === 'on'
        res.render("todocreated", await todoStore.add(req.body.title, req.body.dueDate, req.body.importance, req.body.description, doneBoolean));
    };

    showTodo = async(req: any, res: Response) => {
        res.render("todoupdate", await todoStore.get(req.params.id));
    };

    updateTodo = async(req: any, res: Response) => {
        const updatedTodo = {
            todoName: req.body.todoName,
            dueDate: req.body.dueDate,
            importance: req.body.importance,
            description: req.body.description,
            creationDate: new Date(),
            done: req.body.done === 'on'
        }

        await todoStore.update(req.params.id, updatedTodo);

        res.render("todoupdated")
    }

    updateDone = async(req: any, res: Response) => {
        
        await todoStore.updateDone(req.params.id, req.body.done === 'on');
        res.redirect('/');
    }

    deleteTodo = async (req: any, res: Response) => {
        
        await todoStore.delete(req.params.id)
        res.redirect('/');
    };
}

export const todoController = new TodoController();