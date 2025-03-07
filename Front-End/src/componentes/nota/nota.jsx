import React from "react";
import './nota.css'


export default function Nota({imgNota,urlNota,titulo,informacionNota,tags}){

    return(
        <div className="nota">
            <img src={imgNota}/>

           <div className="box-texto"> 
            <a href={urlNota}>{titulo}</a>
            <p>{informacionNota}</p>
        
            </div><div className="box-tag">

        
        {tags.map((tag)=>(
            <a>{tag}</a>
        ))}
            </div>
        </div>
    );
}