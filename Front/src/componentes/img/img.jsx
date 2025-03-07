import React from "react";
import img from'./img.module.css'


const Img = (({dato})=>{

    return(
        <img className={img.img2}src={dato.img} alt={dato.nombre} />
    );
});

export default Img;