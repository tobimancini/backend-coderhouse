import { Router } from 'express';
import { productManager } from '../managers/productos.manager.js';
import { chatManager } from '../managers/chat.manager.js';

export const routerVistas = Router();

routerVistas.get('/', (req, res, next) => {
    res.redirect('/productos');
});

routerVistas.get('/productos', async(req, res, next) => {
    
    const productos = await productManager.getProducts();

    res.render('productos', { 
        pageTitle: 'Productos',
        hayProductos: productos.length > 0,
        productos
    });
});

routerVistas.get('/chat', async(req, res, next) => {
    
    const mensajes = await chatManager.getMessages();

    res.render('chat', { 
        pageTitle: 'Chat',
        hayMensajes: mensajes.length > 0,
        mensajes
    });
});



