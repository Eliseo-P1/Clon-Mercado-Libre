import React from "react";
import cartel from'./cartel.module.css'


export default function Cartel({dato}){

    return(
        <div className={cartel.cartel}>    
            <h1>{dato.titulo}</h1>   
            <img className={cartel.portada} src={dato.imgPrincipal} alt={dato.nombrePrincipal} />
            <div className={cartel.boxImg}>
            {dato.imagenes.map(imagen => (
                        <img className={cartel.imgSecundaria} src={imagen} />
                        ))}

            </div>
        </div>
    );
}