// const btnGuardarJuego = document.getElementById('btnGuardarJuego');
const formProd = document.getElementById('formCargarProd');

console.log("hola");

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