import React ,{forwardRef} from "react";
import styles from './producto.module.css'



const Producto = forwardRef((
    { dato }, ref)=> {

    return(
        <div className={styles.stock} ref={ref}>
             <img src={dato.imgProducto}/>
             <a href={dato.linkDeProducto}>{dato.titulo}</a>
             <p className={styles.precioAnterior}>${dato.precioAnterior}</p>
             <div className={styles.precio}>
                 <h3>{dato.precioActual}</h3>
                 <h3 style={{color:"green"}}>{dato.rebaja}% OFF</h3>
             </div>
             {dato.cantidadCuotas &&<p>en {dato.cantidadCuotas} cuotas de ${dato.precioXCuota}</p>}
    
             {dato.EnvioGratis === true && <p><span style={{color:"green"}}>Envio Gratis</span> por ser tu primera compra</p>}
            
             
            
        </div>
       


    );
});

export default Producto;