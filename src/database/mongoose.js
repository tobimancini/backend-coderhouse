import mongoose, { mongo } from "mongoose";
import { MONGODB_CNX_STR } from "../config/database.js";

await mongoose.connect(MONGODB_CNX_STR)

const schemaVJ = new mongoose.Schema({
    nombre: { type: String, required: true }, 
    genero: { type: String, required: true }, 
    plataforma: { type: String, required: true }
}, { versionKey: false });

export const videojuegosDb = mongoose.model('videojuegos', schemaVJ);