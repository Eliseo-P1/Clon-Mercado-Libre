import React, { useEffect, useState } from "react";
import './filtro.css';
import BtnDesplegable from "../btnDesplegable/btnDesplegable.jsx";


export default function Filtro({ primerFiltro, opcionesPrimerFiltro, segundoFiltro, opcionesSegundoFiltro, tercerFiltro, opcionesTercerFiltro, opcion }) {
 
    const [open1,setOpen1]=useState(false)
    const [open2,setOpen2]=useState(false)
    const [open3,setOpen3]=useState(false)
 


    return (
        <>
    <div className="filtro">
      <ul onClick={() =>setOpen1(!open1)}>
        <li>
          <span>{primerFiltro}</span>
          <ul className="submenu" style={{display:open1? 'block':'none'}} >
            {opcionesPrimerFiltro.map((opcion1, index) => {
              return (
                <li key={index}>
                  <a href={opcion1.link}>{opcion1.titulo}</a>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>

      <ul onClick={()=>setOpen2(!open2)}>
        <li>
          <span>{segundoFiltro}</span>
          <ul className="submenu" style={{display:open2? 'block':'none'}} >
            <div className="box-input">
                <input type="text" placeholder="Buscar"/>
            </div>
            
            {opcionesSegundoFiltro.map((opcion2, index) => {
              return (
                <li key={index}>
                  <a href={opcion2.link}>{opcion2.titulo}</a>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>

      <ul onClick={()=>setOpen3(!open3)}>
        <li>
          <span>{tercerFiltro}</span>
          <ul className="submenu" style={{display:open3? 'block':'none'}} >
            {opcionesTercerFiltro.map((opcion3, index) => {
              return (
                <li key={index}>
                  <a href={opcion3.link}>{opcion3.titulo}</a>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>

      <div className="btn2">
        <BtnDesplegable opcion='Es financiable'/>
        </div>
      <button >Buscar</button>
    </div>
     
     </>
  );
}
