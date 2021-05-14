import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import SessionController from './app/controllers/SessionController';
import TaskController from './app/controllers/TaskController';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/tasks', TaskController.index);
routes.post('/tasks', TaskController.store);
routes.put('/tasks/:_id', TaskController.update);
routes.put('/tasks/:_id/done', TaskController.done);
routes.put('/tasks/:_id/undone', TaskController.undone);
routes.delete('/tasks/:_id', TaskController.delete);

export default routes;
