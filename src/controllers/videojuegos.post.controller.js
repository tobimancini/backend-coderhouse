import { Producto } from "../entidades/videojuego.js";
import { productManager } from "../managers/productos.manager.js";

// export const postVJController = async (req, res, next) => {
//     const videojuego = new Videojuego(req.body);
//     const result = await videojuegosManager.guardar(videojuego.datos());
//     res.json(result);
//     console.log(result);
// };

export const postProductController = async (req, res, next) => {
    const producto = new Producto(req.body);
    const result = await productManager.addProduct(producto.datos());
    res.json(result);
    console.log(result);
};