import React from "react";
import './cartel2.css'


export default function Cartel2({imgCartel2,titulo}){

    return(
            <div className="cartel2">
                <img src={imgCartel2}  />
                <div className="box-titulo">
                    <h3>{titulo}</h3>
                </div>
            </div>
    );
}