import express from 'express';
import tokenRouter from './presentation/tokenRoutes.js';
import morgan from 'morgan';
import { globalException } from './domain/globalException.js';
const app = express();

app.use(express.json());
app.use(morgan('dev'));

// Middleware para habilitar CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Agrega Content-Type aquí
    next();
  });

app.use('/tokenapi', tokenRouter)

app.use((err, req, res, next) => {
    const { status, message } = err;
    globalException(res, req, status, message);
})

app.listen(8010, ()=>{
    console.log('Server listen in port 8010');
});