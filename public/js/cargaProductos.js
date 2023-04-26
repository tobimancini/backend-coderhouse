const socket = io();

const formProd = document.getElementById('formCargarProd');
// const formFiltro = document.getElementById('formFiltro');


if (formProd instanceof HTMLFormElement) {
    formProd.addEventListener('submit', (evt) => {
        evt.preventDefault();
        const formData = new FormData(formProd);
        const data = {};
        
        for (const campo in formData) {
            data[campo] = formData[campo];
        }
        console.log(data);

        formData.forEach((value, key) => (data[key] = value))

        fetch('/api/productos', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
    })
}

// if (formFiltro instanceof HTMLFormElement) {
//     formFiltro.addEventListener('submit', (evt) => {
//         evt.preventDefault();
//         const formData = new FormData(formFiltro);
//         const data = {};

//         for (const campo in formData) {
//             data[campo] = formData[campo];
//         }

//         formData.forEach((value, key) => (data[key] = value));

//         fetch('/api/productos', {
//             method: 'GET',
//             query: JSON.stringify(data),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//     })
// }

const plantillaListado = `
{{#if hayProductos}}
<ul>
    {{#each productos}}
    <li> Nombre: {{this.nombre}} || Descripcion: {{this.descripcion}} || Categoria: {{this.categoria}} </li>
    {{/each}}
</ul>
{{else}}
<p>No hay productos</p>
{{/if}}
`
const armarListado = Handlebars.compile(plantillaListado)

socket.on('productos', productos => {
    const hayProductos = productos.length > 0
    const divLlistado = document.querySelector('#listado')
    if (divLlistado instanceof HTMLDivElement) {
        divLlistado.innerHTML = armarListado({
            productos,
            hayProductos
        })
    }
})