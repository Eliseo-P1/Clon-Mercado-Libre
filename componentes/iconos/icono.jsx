import React from "react";
import './icono.css'


export default function Icono({imgIcono,link,titulo}){

    return(
        <div className="icono">
            <img src={imgIcono} />
            <a href={link}>{titulo}</a>
        </div>
    );
}