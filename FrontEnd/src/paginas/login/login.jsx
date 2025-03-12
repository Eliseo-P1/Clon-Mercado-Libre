import React, { useEffect, useRef, useState } from 'react';
import loginStyle from './login.module.css';


export default function Login(){
const [etapa,setEtapa] = useState(1);
const [error,setError] = useState();
const emailValor = useRef()
const input1 = useRef()
const input2 = useRef() 



const primerSiguiente = async ()=>{

    const email = input1.current.value;
    emailValor.current = email;

    try{
        const respuesta = await fetch('https://clon-mercado-libre-production.up.railway.app/login', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email})
        })
        const informacion = await respuesta.json()

        if(respuesta.ok){
            setEtapa(2)
        }
        setError(informacion.mensaje);

    }catch(err){
        console.error('hubo un error',err)
    }

}

const entrarLogin = async ()=>{

    try{
        const response = await fetch('https://clon-mercado-libre-production.up.railway.app/login2',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({email:emailValor.current,
                                 password: input2.current.value})
        });

        const informacion = await response.json()

        if(response.ok){
            console.log('iniciando sesion... espere porfavor');
        }
        setError(informacion);

    }catch(err){    
        console.log('hubo un error :', err);
    }
}

useEffect(() => {
    setError(null);
}, [etapa]);


    return(
            <>
                <div className={loginStyle.login}>
                    <div className={loginStyle.nav} style={{width:'100vw',height:'56px', backgroundColor:'#ffe600'}}></div>
                        <div className={loginStyle.boxMid}>
                            
                            

                        { etapa === 1 && 
                                    <>
                                    <div className={loginStyle.izquierda}>
                                    <h1>Ingresa tu e-mail o telefono para iniciar sesion</h1> 
                                    <div className={loginStyle.boxAyuda}>
                                                <button>Tengo un problema de seguridad</button>
                                                <a href="">Necesito ayuda</a>
                                        
                                    </div>  
                                    </div>

                            <div className={loginStyle.boxInput}>

                                <div className={loginStyle.botones}>
                                <label >E-mail o telefono</label>
                                <input type="text" ref={input1}/>
                                {error && <p style={{color:'red'}}>{error.mensaje}</p>}
                                </div>
                                
                                <button onClick={primerSiguiente}>Continuar</button>
                                <button style={{backgroundColor:'white'}}><a href="/crearCuenta">Crear cuenta</a></button>
                                <div className={loginStyle.google}>
                                    <p>iniciar sesion con google</p>
                                </div>
                            </div>
                            </>
                        }{etapa === 2 && 

<>
                            <div className={loginStyle.izquierda}>
                                    <h1>Ingresa tu Contraseña de Mercado libre</h1> 
                                    <div className={loginStyle.boxAyuda}>
                                                <button>Tengo un problema de seguridad</button>
                                                <a href="">Necesito ayuda</a>
                                        
                                    </div>  
                                    </div>
                            <div className={loginStyle.boxInput}>

                            <div >
                            <label >Contraseña</label>
                            <input type="password" ref={input2}/>
                            {error && <p style={{color:'red'}}>{error.mensaje}</p>}
                            </div>

                            <div className="botones" style={{display:'flex' ,gap:'10px'}}>
                                <button onClick={entrarLogin}>Iniciar Sesion</button>
                            <button><a href="/crearCuenta">Olvidaste tu contraseña?</a></button>
                            </div>
                            
                           </div>
                           </>
                         }

                        </div>

                    <div className={loginStyle.navBot}>
                        <p><span style={{color:'var(--andes-color-blue-500,var(--andes-color-blue-500,#3483fa))'}}>
                            Como cuidamos tu privacidad </span> - Copyright © 1999-2025 MercadoLibre S.R.L.</p>
                        <p> Protegido por reCAPTCHA-Privacidad-Condiciones</p>
                    </div>
                </div>

            </>
    )

}

