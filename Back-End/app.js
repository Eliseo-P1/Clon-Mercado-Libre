import express from 'express';
import pool from "./src/configuracion/db.js";
import dotenv from "dotenv";

dotenv.config();

export const puerto = process.env.PORT || 3000;
const app = express();

async function testDB() {
  try {
    const [result] = await pool.query('SELECT * FROM usuario');
    console.log('Conexión exitosa a la base de datos:', result);
  } catch (error) {
    console.error('Error en la conexión a MySQL:', error);
  }
}

testDB();


app.listen(puerto, () => {
  console.log('Servidor escuchando en el puerto', puerto);
});
