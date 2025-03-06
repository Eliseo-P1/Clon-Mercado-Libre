import express from 'express'

const app = express()
const puerto = 8080;










app.listen(puerto,()=>{
    console.log('Servidor escuchando en el puerto', puerto);
});