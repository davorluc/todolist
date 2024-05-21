import { todoStore } from "../services/todo_store";
import { Response } from "express";

export class IndexController {
    async index(req: any, res: Response) {
        const data = await todoStore.all(req.userSettings.showCompleted, req.userSettings.orderBy, req.userSettings.orderDirection);
        res.render("index", {data: data});
    };
}

export const indexController = new IndexController();
