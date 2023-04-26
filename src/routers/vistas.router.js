import { Router } from 'express';
import { productManager, productsModel } from '../managers/productos.manager.js';
import { chatManager } from '../managers/chat.manager.js';

export const routerVistas = Router();

routerVistas.get('/', (req, res, next) => {
    res.redirect('/productos');
});


routerVistas.get('/productos', async (req, res, next) => {

    const productos = await productManager.getProducts();
    const campos = [];

    if (productos.length) {
        const camposYValores = Object.entries(productos[0]).slice(1);
    
        camposYValores.forEach(el => {
            campos.push(el[0])
        });
    }

    const opcionesDePaginacion = {
        limit: req.query.limit || 5, 
        page: req.query.page || 1, 
        lean: true 
    }

    let result;
    if (req.query.categoria) {
        result = await productsModel.paginate({categoria: req.query.categoria}, opcionesDePaginacion)
    } else {
        result = await productsModel.paginate({}, opcionesDePaginacion)
    }


    const hayFiltro = req.query.categoria === "Tecnologia" || req.query.categoria === "Deportes" || req.query.categoria === "Alimentos" || req.query.categoria === "Otros" ? true : false;
    const noHayFiltro = req.query.categoria === undefined ? true : false;


    const context = {
        pageTitle: 'Productos',
        hayProductos: result.docs.length > 0,
        productos: result.docs,
        limit: result.limit,
        totalDocs: result.totalDocs,
        page: result.page,
        totalPages: result.totalPages,
        hasNextPage: result.hasNextPage,
        nextPage: result.nextPage,
        hasPrevPage: result.hasPrevPage,
        prevPage: result.prevPage,
        pagingCounter: result.pagingCounter,
        categoria: req.query.categoria,
        hayFiltro : hayFiltro,
        noHayFiltro: noHayFiltro
    }

    res.render('productos', context)

});

routerVistas.get('/chat', async (req, res, next) => {

    const mensajes = await chatManager.getMessages();

    res.render('chat', {
        pageTitle: 'Chat',
        hayMensajes: mensajes.length > 0,
        mensajes
    });
});



