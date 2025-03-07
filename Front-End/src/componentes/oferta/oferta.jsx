import React from "react";
import oferta from'./oferta.module.css'


export default function Oferta({dato}){
    return(
        <div className={oferta.oferta}>
            <div className={oferta.box}>
               <p>{dato.titulo}</p>
            <h1>{dato.enunciado}</h1>
            <button>{dato.opcion}</button> 
            </div>
            

            <img className={oferta.img3}     src={dato.imgOferta} alt={dato.nombreOferta}/>
        </div>
    );
}