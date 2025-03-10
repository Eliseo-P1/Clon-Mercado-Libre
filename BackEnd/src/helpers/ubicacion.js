import { response } from "express";


export const localizador = async () => {
    return fetch('https://ip-api.com/json/')
        .then(response => response.json()) 
        .then(data => {console.log(data.country)} ) 
        .catch(err => {
            console.log('Error al obtener el país:', err);
            return 'Desconocido'; 
        });
};
