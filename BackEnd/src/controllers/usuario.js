import pool from '../configuracion/db.js'



export const loginUsuarioPrimero = async (req,res) =>{
    const {email} = req.body
    console.log(email)
    try{
        const [resultado] = await pool.query('SELECT * FROM usuario WHERE email = ? ',[email]);
        if(resultado.length === 0){
             console.log(resultado.length)
             console.log(resultado)
            return res.status(404).json({mensaje:'Revisa el dato que ingresaste'})
           
        }
      
        const usuario = resultado[0];
        return res.status(200).json({mensaje:'usuario correcto'})

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

export const testeo = async (req,res)=>{

    try{
        const [respuesta] = await pool.query('SELECT * FROM usuario')
        
        return res.status(202).json(respuesta)
    }catch(err){
        return res.status(404).json(err)
    }
}