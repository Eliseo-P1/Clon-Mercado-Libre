import React, { useState } from "react";
import './btnDesplegable.css'

export default function BtnDesplegable({opcion}){


    const [mov,setMov] = useState(true)
    
    return(
        <div className="box" onClick={()=>setMov(!mov)}>
            <div className="btn" >
                    <div className="movimiento"  style={{ transform:`translateX(${mov ? 0 : 70}%)`}}>

                    </div>
            </div>
               <p>{opcion}</p> 
            </div>
    );

}