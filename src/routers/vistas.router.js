import { Router } from 'express';
import { productManager } from '../managers/productos.manager.js';

export const routerVistas = Router();

// routerVistas.get('/', (req, res, next) => {
//     res.redirect('/videojuegos');
// });

// routerVistas.get('/videojuegos', async(req, res, next) => {
    
//     const videojuegos = await videojuegosManager.obtenerTodos();

//     res.render('videojuegos', { 
//         pageTitle: 'Videojuegos',
//         hayVideojuegos: videojuegos.length > 0,
//         videojuegos
//     });
// });

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



