import express from 'express';
import pool from "./src/configuracion/db.js";
import dotenv from "dotenv";
const puerto = process.env.PORT || 3000;

dotenv.config();


const app = express();


app.get('./prueba',async (req,res)=>{

  const [respuesta] = await pool.query('SELECT * FROM usuario');

  const usuarios = respuesta[0];
 console.log(usuarios)
  return res.json({respuesta:usuarios})
 

})



app.listen(puerto, () => {
  console.log('Servidor escuchando en el puerto', puerto);
});
