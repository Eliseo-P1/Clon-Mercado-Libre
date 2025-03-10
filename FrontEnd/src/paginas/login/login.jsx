import React, { useRef, useState } from 'react';
import loginStyle from './login.module.css';


export default function Login(){
const [etapa,setEtapa] = useState(1);
const emailValor = useRef()
const input1 = useRef()
const input2 = useRef() 



const primerSiguiente = async ()=>{

    const valor = input1.current.value;
    emailValor.current = valor;

    try{
        const respuesta = await fetch('https://clon-mercado-libre-production.up.railway.app/prueba', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: valor })
        })
        const informacion = await respuesta.json()
        if(respuesta.ok){
            console.log(informacion.mensaje)
            setEtapa(2)
        }
    }catch(err){
        console.error('hubo un error',err)
    }

}
const primerSiguiente2 = async()=>{

    try{
        const respuesta = await fetch('https://clon-mercado-libre-production.up.railway.app/prueba');
        const datos = await respuesta.json();
        console.log(datos)
    }catch(err){
        console.log(err)
    }

}

const entrarLogin=()=>{

}
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

