import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
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
app.post('/prueba', (req, res) => {
    res.json({ mensaje: "CORS funcionando correctamente" });
});
app.listen(puerto, () => {
  console.log('Servidor escuchando en el puerto', puerto);
});
