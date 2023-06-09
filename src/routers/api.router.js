import { Router } from 'express';
import { postMessageController } from '../controllers/mensajes.post.controller.js';
import { postProductController } from '../controllers/productos.post.controller.js';

export const routerApi = Router();

routerApi.post('/productos', postProductController);
// routerApi.post('/productosFiltrados', postProductController);
routerApi.post('/chat', postMessageController);

