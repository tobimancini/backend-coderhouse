import { Mensaje } from "../entidades/Mensaje.js";
import { chatManager } from "../managers/chat.manager.js";

export const postMessageController = async (req, res, next) => {
    const mensaje = new Mensaje(req.body);
    const result = await chatManager.sendMessage(mensaje.datos());
    req['io'].sockets.emit('chat', await chatManager.getMessages());
    res.json(result);
    console.log(result);
};