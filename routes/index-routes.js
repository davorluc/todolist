import express from 'express';

const router = express.Router();
import { indexController } from '../controller/index-controller.js';
import { todoController } from '../controller/todo-controller.mjs';

router.get('/', indexController.index);
router.get('/todos', todoController.createTodo);
router.get('/todo/:id', todoController.showTodo);
router.post('/todos', todoController.createdTodo);
router.post('/todo/update/:id', todoController.updateTodo);
router.post('/todo/:id/done', todoController.updateDone);
router.post('/todo/:id/deleted', todoController.deleteTodo);

export const indexRoutes = router;
