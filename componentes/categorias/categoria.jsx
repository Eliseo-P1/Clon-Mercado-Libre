import React from 'react';
import './categoria.css'



export default function Categoria({imgCategoria,nombreCategoria,linkCategoria,tituloCategoria}){

    return(
        <div className="categoria">
            <div className="imgBox">
                <img src={imgCategoria} alt={nombreCategoria}/>
                </div>
            
            <a href={linkCategoria}>{tituloCategoria}</a>
        </div>
    );
}