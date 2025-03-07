import React from "react";
import puntito from './punto.module.css'


export default function Punto({isActivate}){
    return(


        


        <div className={puntito.punto} style={{backgroundColor: isActivate ? 'var(--andes-color-blue-500,#3483fa)' : '#cecece'}}>

        </div>
    );
}