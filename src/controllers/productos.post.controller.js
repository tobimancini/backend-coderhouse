import { Producto } from "../entidades/producto.js";
import { productManager } from "../managers/productos.manager.js";

export const postProductController = async (req, res, next) => {
    const producto = new Producto(req.body);
    const result = await productManager.addProduct(producto.datos());
    req['io'].sockets.emit('productos', await productManager.getProducts());
    res.json(result);
    console.log(result);
};