import pool from '../configuracion/db.js'
import {localizador} from '../helpers/ubicacion.js'


export const loginUsuarioPrimero = async (req,res) =>{

    const {email} = req.body

    try{
        const [resultado] = await pool.query('SELECT * FROM usuario WHERE email = ? ',[email]);

        if(resultado.length === 0){
            return res.status(404).json({mensaje:'Revisa el dato que ingresaste'})  
        }
      
        const paisActual = await localizador();
        if(resultado.pais === paisActual){
            return res.status(200).json({mensaje:'usuario correcto'})
        }

        return res.status(404).json({ubicacion:paisActual});
    
    }catch(err){
        console.error('hubo un problema interno',err)
        return res.status(502).json({mensaje:err})
    }
}


export const loginUsuarioSegundo = async(req,res) =>{
    const {email,contraseña} = req.body;
try{


    const [respuesta]  = await
                pool.query('SELECT email,password,id_usuario FROM usuario WHERE email=? AND contraseña=?',[email,contraseña]);

    if(respuesta.length === 0){
        return res.status(404).json({mensaje: 'Revisa tu contraseña.'})
    }

    return res.status(202).json({mensaje:'iniciando sesion'});
}catch(err){
    console.log(err)
    return res.status(502).json(err)
}
}

