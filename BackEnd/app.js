import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {loginUsuarioPrimero} from './src/controllers/usuario.js'
const puerto = process.env.PORT || 3000;

dotenv.config();

const app = express();


app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());


app.post('/prueba',loginUsuarioPrimero)

app.listen(puerto, () => {
  console.log('Servidor escuchando en el puerto', puerto);
});
