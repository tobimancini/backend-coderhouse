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
