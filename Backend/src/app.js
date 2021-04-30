import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import pkg from '../package.json';
import './dataBase';
import storeRoutes from './routes/store.routes';


const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.set('pkg', pkg);
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.json({
        version: app.get('pkg').version,
        author: app.get('pkg').author,
        name: app.get('pkg').name
    })
})
app.use('/api', storeRoutes)
app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto', PORT)
})