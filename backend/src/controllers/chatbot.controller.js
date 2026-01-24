import pool from "../config/db.js";
import { responderConIA } from "../services/ia.service.js";

export const chatBotResponse = async (req, res) => {
    const { mensaje } = req.body;

    if (!mensaje) {
    return res.json({ respuesta: "Escribe una pregunta válida" });
    }

    // Normalizamos el texto
    const texto = mensaje.toLowerCase();

    try {
    // 1️ PREGUNTAS FRECUENTES (mayúsculas y minúsculas)
    const [faq] = await pool.query(
        `
        SELECT respuesta
        FROM preguntas_frecuentes
        WHERE LOWER(pregunta) LIKE ?
        `,
        [`%${texto}%`]
    );

    if (faq.length > 0) {
        return res.json({ respuesta: faq[0].respuesta });
    }

    // 2️ PRODUCTOS (nombre y descripción)
    const [productos] = await pool.query(
        `
        SELECT nombre, descripcion, precio
        FROM productos
        WHERE LOWER(nombre) LIKE ?
        OR LOWER(descripcion) LIKE ?
        LIMIT 3
        `,
        [`%${texto}%`, `%${texto}%`]
    );

    if (productos.length > 0) {
        let respuesta = "Encontré estos productos:\n\n";

        productos.forEach(p => {
        respuesta += `${p.nombre}\n${p.descripcion}\n$${p.precio}\n\n`;
        });

        return res.json({ respuesta });
    }

    // 3️ IA (solo si no hay coincidencias)
    const respuestaIA = await responderConIA(mensaje);
    return res.json({ respuesta: respuestaIA });

    } catch (error) {
    console.error("Error chatbot:", error);
    res.status(500).json({ respuesta: "Error en el chatbot" });
    }
};
