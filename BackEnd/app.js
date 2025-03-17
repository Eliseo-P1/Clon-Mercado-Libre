import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {loginUsuarioPrimero , loginUsuarioSegundo} from './src/controllers/usuario.js'
const puerto = process.env.PORT || 3000;
import { localizador } from './src/helpers/ubicacion.js';
dotenv.config();

const app = express();


app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(express.json());


app.post('/login',loginUsuarioPrimero);
app.post('/login2',loginUsuarioSegundo);


app.get('/pais',localizador)

app.listen(puerto, () => {
  console.log('Servidor escuchando en el puerto', puerto);
});
