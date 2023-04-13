import { Router } from 'express';
import { postProductController } from '../controllers/videojuegos.post.controller.js';

export const routerApi = Router();

// routerApi.post('/videojuegos', postVJController);
routerApi.post('/productos', postProductController);

