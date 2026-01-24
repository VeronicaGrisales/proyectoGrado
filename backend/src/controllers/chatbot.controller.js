import pool from '../config/db.js';

export const chatBotResponse = async (req, res) => {
    const { mensaje } = req.body;
    console.log('Mensaje recibido:', mensaje);

    if (!mensaje) {
    return res.json({ respuesta: 'Escribe una consulta válida' });
    }

    const texto = mensaje.toLowerCase();

  // 1 Buscar en preguntas frecuentes
    const [faqs] = await pool.query(
    `
    SELECT respuesta
    FROM preguntas_frecuentes
    WHERE LOWER(pregunta) LIKE ?
    `,
    [`%${texto}%`]
    );

    if (faqs.length > 0) {
    return res.json({ respuesta: faqs[0].respuesta });
    }

  // 2️ Buscar en productos
    const [productos] = await pool.query(
    `
    SELECT nombre, descripcion, precio
    FROM productos
    WHERE LOWER(nombre) LIKE ?
    OR LOWER(descripcion) LIKE ?
    `,
    [`%${texto}%`, `%${texto}%`]
    );

    if (productos.length === 0) {
        return res.json({
        respuesta:
        'No encontré ese producto, pero contamos con café en grano y molido de excelente calidad',
    });
    }

    let respuesta = 'Encontré estos productos:\n\n';

    productos.forEach((p) => {
    respuesta += `${p.nombre}\n${p.descripcion}\n$${p.precio}\n\n`;
    });

    res.json({ respuesta });
};



// import pool from '../config/db.js';

// /*
//  Controlador del chatbot
//  Aquí va toda la lógica
// */

// export const chatBotResponse = async (req, res) => {
//     const { mensaje } = req.body;
//     console.log('Mensaje recibido:', mensaje);

//     try {
//         // Buscar productos relacionados con el mensaje

//         const [productos] = await pool.query(
//             `SELECT nombre, descripcion, precio 
//             FROM productos
//             WHERE nombre LIKE ? OR descripcion LIKE ?`,
//             [`%${mensaje}%`, `%${mensaje}%`]
//         );

//         // Si encuentra productos
//         if (productos.length > 0) {
//             let respuesta = ' Encontré estos productos:\n\n';

//             productos.forEach(p => {
//                 respuesta += ` ${p.nombre}\n${p.descripcion}\n $${p.precio}\n\n`;
//             });

//             return res.json({ respuesta });
//         }

//         // Si no encuentra nada
//         return res.json({
//             respuesta: ' No encontré ese producto, pero contamos con café en grano y molido de excelente calidad'
//         });

//     } catch (error) {
//         console.error('Error chatbot:', error);
//         res.status(500).json({
//             respuesta: 'Error al procesar tu solicitud'
//         });
//     }
// };


// //NOTA 
// // controllers = lógica de negocio
// // El chatbot piensa aquí, no en la ruta