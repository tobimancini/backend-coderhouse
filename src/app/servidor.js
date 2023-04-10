import express from 'express';
import { PORT } from '../config/servidor.config.js';
import { engine } from 'express-handlebars';

const app = express()

app.engine('handlebars', engine())

app.set('views', './views')

app.set('view engine', 'handlebars')

app.use(express.static('./public'))

app.use(express.json());

app.get('/', (req, res, next) => {
    res.redirect('/videojuegos')
})

app.get('/videojuegos', (req, res, next)=>{
    res.render('cargaProductos', { pageTitle: 'Videojuegos' })
});

app.listen(PORT, () =>{
    console.log(`Escuchando en puerto ${PORT}`);
});