import express from 'express';
import cors from 'cors';
import { loginUsuarioPrimero ,testeo} from './src/controllers/usuario.js';
import dotenv from "dotenv";

dotenv.config(); 

const puerto = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.get('/prueba',testeo);

app.listen(puerto, () => {
  console.log('Servidor escuchando en el puerto', puerto);
});
