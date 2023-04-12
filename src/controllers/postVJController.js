import { videojuegosDb } from '../database/mongoose.js';

export const postVJController = async (req, res, next) => {
    const datosVJ = req.body;
    const result = await videojuegosDb.create(datosVJ);
    res.json(result);
    console.log(result);
};
