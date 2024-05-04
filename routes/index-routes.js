import express from 'express';

const router = express.Router();
import { indexController } from '../controller/index-controller.js';
import { todoController } from '../controller/todo-controller.mjs';

router.get("/", indexController.index);
router.get("/todos", todoController.createTodo);
router.post("/todos", todoController.createTask);

export const indexRoutes = router;
