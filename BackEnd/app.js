import express from 'express';
import cors from 'cors';
import { loginUsuarioPrimero } from './src/controllers/usuario.js';
import dotenv from "dotenv";





dotenv.config(); 

const puerto = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.post('/prueba',loginUsuarioPrimero);

app.listen(puerto, () => {
  console.log('Servidor escuchando en el puerto', puerto);
});
