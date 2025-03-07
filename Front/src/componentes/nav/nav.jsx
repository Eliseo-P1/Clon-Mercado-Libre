import React from "react";
import Input from "../Input/input.jsx";
import nav from'./nav.module.css'



export default function Nav(){

    return(
            <div className={nav.nav}>
                <div className={nav.subNav}>
                    <a className={nav.navLogo}></a>
                    <Input/>
                    <img className={nav.segundoLogo} src="https://http2.mlstatic.com/D_NQ_913160-MLA82004618940_022025-OO.webp" alt="" />


                    <div className={nav.ubicacion}>
                    <a href="nose"><p>Enviar a</p>
                    <p>Capital Federal</p></a>
                </div>

                
                    <ul className={nav.menu}>
                        <li><a href=".">Categorias</a></li>
                        <li><a href=".">Ofertas</a></li>
                        <li><a href=".">Cupones</a></li>
                        <li><a href=".">Supermercado</a></li>
                        <li><a href=".">Moda</a></li>
                        <li><a href=".">Mercado Play</a></li>
                        <li><a href=".">Vender</a></li>
                        <li><a href=".">Ayuda</a></li>
                        </ul>


                    <ul className={nav.menu} style={{width:"301px" }}>
                        <li><a href=".">Crea tu cuenta</a></li>
                        <li><a href=".">ingresa</a></li>
                        <li><a href=".">Mis compras</a></li>
                    </ul>
                
                </div>
                
            </div>
    );
}