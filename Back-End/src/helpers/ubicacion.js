import { response } from "express";


export const localizador = () => {
    return fetch('https://ip-api.com/json/')
        .then(response => response.json()) // Convertimos la respuesta a JSON
        .then(data => data.country) // Retornamos solo el país
        .catch(err => {
            console.log('Error al obtener el país:', err);
            return 'Desconocido'; // Devolvemos 'Desconocido' en caso de error
        });
};
