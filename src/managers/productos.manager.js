import { mongoose, Schema, model} from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2'

const schemaProductos = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    categoria: { type: String, required: true }
}, { versionKey: false });

schemaProductos.plugin(mongoosePaginate);

export const productsModel = model('productos', schemaProductos)

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