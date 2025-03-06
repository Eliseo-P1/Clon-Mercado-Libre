import db from './configuracion/db.js'
import { localizador } from '../helpers/ubicacion.js';
import { json } from 'express';



const obtenerProducto = async (req,res) =>{

    const {limite,busqueda} = req.params;
    try{
    const [respuesta] = await db.query(`SELECT * FROM productos WHERE ${busqueda} = titulo LIMIT ${limite}`);
    return res.status(202).json(respuesta);
    }catch(err){
        
        console.error('Error al obtener los productos',err)
        return res.status(500).json({mensaje:'error interno',err})
    }
}
const eliminarProducto = async(req,res)=>{

    const {id} = req.params;
    try{
        
        const [resultado] = db.query(`DELETE FROM productos WHERE id = ? `, [id]);

        if(resultado.affectedRows === 0){
            return res.status(404).json('no se pudo borrar el producto')
        }else{
            return res.status(202).json({mensaje:'producto eliminado correctamente'})
        }
    }catch(err){
            console.error('error interno',err)
        return  res.status(505).json({mensaje:'se produjo un error interno'})
        
    }
}
const agregarProducto = async(req,res)=>{
}
const loginUsuario =async (req,res) =>{
    const {email} = req.params
    try{
        const [resultado] = await db.query('SELECT * FROM usuario WHERE email = ? ',[email]);
        if(resultado.length === 0){
            return res.status(404).json({mensaje:'Revisa el dato que ingresaste'})
        }
        const paisActual = await localicalizador();
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

