import React, { useRef, useState ,useEffect} from "react";
import mostrador from './mostrador.module.css';
import Punto from "./punto/punto.jsx";

export default function Carrusel({titulo,componente: Componente, datosComponente =[]}){

const componenteRef = useRef(null);
const [anchoComponente, setAncho] = useState(null);
const [hijosVisibles,setHijos] = useState(null);
const [indice,setIndice] = useState(0)
const [visibleIzquierda,setVisibleIzquierda] = useState(false);
const [visibleDerecha,setVisibleDerecha] = useState(true);




useEffect(() => {
  if (componenteRef.current) {
    setAncho(componenteRef.current.offsetWidth);
    setHijos(datosComponente[0].length);
     
  }
    
}, []);

useEffect(() => {
  if (indice === 0) {
    setVisibleIzquierda(false);
    setVisibleDerecha(true);
  } else if (indice === datosComponente.length - 1) {
    setVisibleDerecha(false);
    setVisibleIzquierda(true);
  } else {
    setVisibleDerecha(true);
    setVisibleIzquierda(true);
  }
}, [indice]);




function anterior() {
  if (indice !== 0) {
    setIndice(indice-1)
    console.log(indice)
  }
  
}
function siguiente() {
  if (indice !== datosComponente.length-1) {
    setIndice(indice+1)
  }
}



  return(
    <div className={mostrador.carrusel} style={{width: titulo ? `${anchoComponente * hijosVisibles}px`:'100vw'}}>
    <div className={mostrador.boxIntento} style={{width: titulo ? `${anchoComponente * hijosVisibles}px`:'100vw'}}>

     { titulo ? <div className={mostrador.titulos}>
      <h1>{titulo}</h1>

      <div className={mostrador.indice}>

    {Array.from({ length: datosComponente.length}, (_, i) => <Punto isActivate={i===indice}/>)}
    
    </div>

    </div> : null }
    <div className={mostrador.carril} style={{ transform: titulo ? `translateX(${indice * anchoComponente * -hijosVisibles -1}px)` : `translateX(${indice * -100}vw)` }}>
       
      {datosComponente.map(datos => (

      <div className={mostrador.boxVisibleMomentaneo} style={{width: titulo ? `${anchoComponente * hijosVisibles}px`:'100vw',height:'400px'}}>
      {titulo ? null : <div className="indice2">

      {Array.from({ length: datosComponente.length}, (_, i) => <Punto isActivate={i===indice}/>)}


      </div>}
      {datos.map(dato1 =>(
    <Componente ref={componenteRef} dato={dato1}/>
      ))} 
                                        
      </div>
    ))}
    
    </div>
    

           <div className={mostrador.btnIzquierdo} onClick={anterior} style={{ display: visibleIzquierda ? "block" : "none" }}>
         
           </div>
                  
            <div className={mostrador.btnDerecho}  onClick={siguiente} style={{ display: visibleDerecha? "block" : "none" }}>
            
            </div>                    
    </div>
    </div>
  )
}
