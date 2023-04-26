import mongoose from "mongoose";
import { MONGODB_CNX_STR } from "../config/database.js";


export const conectar = async() =>{
    await mongoose.connect(MONGODB_CNX_STR)
}

export { productsModel } from '../managers/productos.manager.js'