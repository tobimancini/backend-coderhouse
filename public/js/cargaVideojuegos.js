// const btnGuardarJuego = document.getElementById('btnGuardarJuego');
const formVJ = document.getElementById('formCargarVJ');

if (formVJ instanceof HTMLFormElement) {
    formVJ.addEventListener('submit', (evt) => {
        evt.preventDefault();
        const formData = new FormData(formVJ);
        const data = {};
        for (const campo in formData) {
            data[campo] = formData[campo];
        }

        formData.forEach((value, key) => (data[key] = value))

        fetch('/api/videojuegos', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
    })
}