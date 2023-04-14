import mongoose from 'mongoose';

const schemaMensaje = new mongoose.Schema({
    user: { type: String, required: true },
    message: { type: String, required: true }
}, { versionKey: false });

class ChatManager {
    #chatDb
    constructor() {
        this.#chatDb = mongoose.model('chat', schemaMensaje)
    }

    async getMessages() {
        const mensajesGuardados = await this.#chatDb.find().lean();
        return mensajesGuardados;
    }

    async getMessagesById(id) {
        const mensaje = await this.#chatDb.findById(id).lean();
        if (mensaje) {
            return mensaje
        }else{
            console.log("no existen mensajes con el ID indicado");
        }  
    }

    async sendMessage(datos) {
        const mensaje = await this.#chatDb.create(datos);
        return mensaje;
    }
}

export const chatManager = new ChatManager();

export default ChatManager; 