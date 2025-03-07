import React ,{forwardRef} from "react";
import sur from'./sugerencia.module.css'


const Sugerencia= forwardRef((
    { dato }, ref)=>{

    return(
        <div className={sur.sugerencia} ref={ref}>
            <h1>{dato.titulo}</h1>
            <img src={dato.imgSugerencia} alt={dato.nombreSugerencia} />
            <p>{dato.texto}</p>
            <button>{dato.opcion}</button>
        </div>
    );
});

export default Sugerencia;