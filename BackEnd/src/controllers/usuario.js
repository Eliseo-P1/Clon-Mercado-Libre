import pool from '../configuracion/db.js'
import { localizador } from '../helpers/ubicacion.js';


export const loginUsuarioPrimero = async (req,res) =>{
    const {email} = req.body
    try{
        const [resultado] = await pool.query('SELECT * FROM usuario WHERE email = ? ',[email]);
        if(resultado.length === 0){
            return res.status(404).json({mensaje:'Revisa el dato que ingresaste'})
        }
        const paisActual = await localizador();
        const usuario = resultado[0];

        if(usuario.pais === paisActual){
            return res.status(202)
        }
    
        return res.status(404).json( {ubicacion : paisActual})

    }catch(err){
        console.error('hubo un problema interno',err)
        return res.status(502).json({mensaje:err})
    }
}

const loginUsuarioSegundo = async(req,res) =>{
    const {email,contraseña} = req.body;

    const [respuesta]  = 
                pool.query('SELECT email,constraseña,id_usuario FROM usuario WHERE email=? AND contraseña=?',[email,contraseña]);

    const usuario = respuesta[0];

    console.log(usuario)
}