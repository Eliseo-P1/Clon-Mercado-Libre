
import express from 'express';
import pool from "./src/configuracion/db.js";
import dotenv from "dotenv";

dotenv.config(); 

const puerto = process.env.PORT || 3000;

const app = express();

app.get('/prueba', async (req, res) => {
  try {
    const [usuarios] = await pool.query('SELECT * FROM usuario');  
    console.log(usuarios);
    return res.json({ respuesta: usuarios });
  } catch (error) {
    console.error("Error en la consulta:", error);
    return res.status(500).json({ error: "Error en el servidor" });
  }
});

app.listen(puerto, () => {
  console.log('Servidor escuchando en el puerto', puerto);
});
