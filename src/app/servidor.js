import express from 'express';
import { PORT } from '../config/servidor.config.js';
import { engine } from 'express-handlebars';
import { routerApi } from '../routers/routerApi.js';
import { routerVistas } from '../routers/routerVistas.js';

const app = express()

app.engine('handlebars', engine())
app.set('views', './views')
app.set('view engine', 'handlebars')
app.use(express.static('./public'))
app.use(express.json());

app.use('/api', routerApi);
app.use('/', routerVistas);


app.listen(PORT, () =>{
    console.log(`Escuchando en puerto ${PORT}`);
});