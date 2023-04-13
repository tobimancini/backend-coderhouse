// import mongoose from "mongoose";

// const schemaVJ = new mongoose.Schema({
//     nombre: { type: String, required: true },
//     genero: { type: String, required: true },
//     plataforma: { type: String, required: true }
// }, { versionKey: false });

// class VideojuegosManager {
//     #videojuegosDb
//     constructor() {
//         this.#videojuegosDb = mongoose.model('videojuegos', schemaVJ);
//     }

//     async guardar(datosVj){
//         const vjGuardado = await this.#videojuegosDb.create(datosVj);
//         return vjGuardado;
//     }

//     async obtenerTodos(){
//         const vjGuardados = await this.#videojuegosDb.find().lean();
//         return vjGuardados;
//     }
//     async obtenerPorId(id){
//         const vj = await this.#videojuegosDb.findById(id).lean();
//         return vj
//     }
// }

// export const videojuegosManager = new VideojuegosManager();
import mongoose from 'mongoose';

const schemaProductos = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    categoria: { type: String, required: true }
}, { versionKey: false });

class ProductManager {
    #productosDb
    constructor() {
        this.#productosDb = mongoose.model('productos', schemaProductos)
    }

    async getProducts() {
        const productosGuardados = await this.#productosDb.find().lean();
        return productosGuardados
    }

    async getProductsById(id) {
        const producto = await this.#productosDb.findById(id).lean();
        if (producto) {
            return producto
        }else{
            console.log("no existen productos con el ID indicado");
        }  
    }

    async showProducts() {
        await this.getProducts()
        console.log(this.productos)
    }

    async addProduct(datos) {
        const producto = await this.#productosDb.create(datos);
        return producto;
    }

    // async deleteProduct(id) {
    //     const producto = await this.#productosDb.deleteOne({_id: id})
    // }

    // async updateProduct(id, campo, contenido) {
    //     await this.getProducts();
    //     for (let i = 0; i < this.productos.length; i++) {
    //         const el = this.productos[i];
    //         if (el.id === id) {
    //             this.productos[i][campo] = contenido
    //         }
    //     }
    //     this.saveProduct()
    // }
}

export const productManager = new ProductManager();

export default ProductManager; 