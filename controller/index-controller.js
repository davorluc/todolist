import { todoStore } from "../services/todo_store.mjs";

export class IndexController {
    async index(req, res) {
        const data = await todoStore.all();
        res.render("index", {data: data});
    };
}

export const indexController = new IndexController();
