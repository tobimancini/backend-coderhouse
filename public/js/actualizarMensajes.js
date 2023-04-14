const socket = io();

const formMensajes = document.getElementById('formChat');

if (formMensajes instanceof HTMLFormElement) {
    formMensajes.addEventListener('submit', (evt) => {
        evt.preventDefault();
        const formData = new FormData(formMensajes);
        const data = {};

        for (const campo in formData) {
            data[campo] = formData[campo];
        }
        console.log(data);

        formData.forEach((value, key) => (data[key] = value))

        fetch('/api/chat', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
    })
}

const plantillaChat = `
{{#if hayMensajes}}
    {{#each mensajes}}
        <tr>
            <td>{{this.user}}</td>
            <td>{{this.message}}</td>
        </tr>
    {{/each}}

    {{else}}
        <tr>No hay mensajes</tr>
{{/if}}
`
const armarChat = Handlebars.compile(plantillaChat)

socket.on('chat', mensajes => {
    const hayMensajes = mensajes.length > 0
    const chat = document.getElementById('chatContainer')
    if (chat instanceof HTMLElement) {
        chat.innerHTML = armarChat({
            mensajes,
            hayMensajes
        })
    }
})