import { Router } from 'express';

export const routerVistas = Router();

routerVistas.get('/', (req, res, next) => {
    res.redirect('/videojuegos');
});

routerVistas.get('/videojuegos', (req, res, next) => {
    res.render('cargaProductos', { pageTitle: 'Videojuegos' });
});
