import { response } from "express";


export const localizador = async () => {
    try {
        const response = await fetch('https://geolocation-db.com/json/');
        if (!response.ok) throw new Error('Error en la respuesta del servidor');

        const data = await response.json();
        console.log('País:', data.country_name); 
        return data.country; // Devuelve el país
    } catch (err) {
        console.error('Error al obtener el país:', err);
        return 'Desconocido'; 
    }
};
