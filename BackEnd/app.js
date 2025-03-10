import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {loginUsuarioPrimero} from './src/controllers/usuario.js'
const puerto = process.env.PORT || 3000;

dotenv.config();

const app = express();

// ✅ Habilita CORS para todas las solicitudes
app.use(cors({
    origin: '*', // Puedes cambiar '*' por 'http://localhost:3000' o tu dominio
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// 🔹 Ruta de prueba
app.post('/prueba',loginUsuarioPrimero)
app.listen(puerto, () => {
  console.log('Servidor escuchando en el puerto', puerto);
});
