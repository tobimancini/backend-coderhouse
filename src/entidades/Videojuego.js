// export class Videojuego {
//     #nombre
//     #genero
//     #plataforma
//     constructor ( {nombre, genero, plataforma } ) {
//         this.#nombre = nombre,
//         this.#genero = genero,
//         this.#plataforma = plataforma
//     }

//     get nombre(){return this.#nombre}
//     get genero(){return this.#genero}
//     get plataforma(){return this.#plataforma}

//     datos(){
//         return {
//             nombre: this.#nombre,
//             genero: this.#genero,
//             plataforma: this.#plataforma
//         }
//     }
// }
export class Producto {
    #nombre
    #descripcion
    // #price
    // #stock
    #categoria
    
    constructor ( {nombre, descripcion, categoria } ) {
        this.#nombre = nombre,
        this.#descripcion = descripcion,
        // this.#price = price,
        // this.#stock = stock,
        this.#categoria = categoria
    }

    get nombre(){return this.#nombre}
    get descripcion(){return this.#descripcion}
    // get price(){return this.#price}
    // get stock(){return this.#stock}
    get categoria(){return this.#categoria}

    datos(){
        return {
            nombre: this.#nombre,
            descripcion: this.#descripcion,
            categoria: this.#categoria
        }
    }
}
