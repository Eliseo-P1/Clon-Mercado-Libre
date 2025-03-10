import express from 'express';
import cors from 'cors';
import { loginUsuarioPrimero ,testeo} from './src/controllers/usuario.js';
import dotenv from "dotenv";

dotenv.config(); 

const puerto = process.env.PORT || 3000;

const app = express();

app.use(cors({
  origin: 'http://localhost:3000', // Permitir solo este origen (o usa '*' para permitir todos)
  methods: ['GET', 'POST'], // Métodos HTTP permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Headers permitidos
}));


app.post('/prueba',loginUsuarioPrimero);

app.listen(puerto, () => {
  console.log('Servidor escuchando en el puerto', puerto);
});
