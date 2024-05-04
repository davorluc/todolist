import express from 'express';

const router = express.Router();
import { indexController } from '../controller/index-controller.js';
import { todoController } from '../controller/todo-controller.mjs';

router.get('/', indexController.index);
router.get('/todos', todoController.createTodo);
router.get('/todo/:id', todoController.showTask);
router.post('/todos', todoController.createdTodo);

export const indexRoutes = router;
