import { Router } from 'express';
import { postVJController } from '../controllers/postVJController.js';

export const routerApi = Router();

routerApi.post('/videojuegos', postVJController);
