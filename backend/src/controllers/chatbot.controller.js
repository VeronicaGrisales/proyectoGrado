//Importa el Pool de conexión a la base de datos MYSQL, la cual se configuro en config -->db.js
import pool from "../config/db.js";

//Importa el servicio de IA encargado de generar respuestas dinamicas cuando no hay 
//coincidencias en la base de datos. Este servicio se encuentra en services -->ia.service.js
import { responderConIA } from "../services/ia.service.js";


//Función principal del ChatBot 

//Esta función se encarga de recibir el mensaje del cliente, procesarlo y devolver una respuesta json.
export const chatBotResponse = async (req, res) => {

    //Extrae el mensaje enviado desde la petición.
    const { mensaje } = req.body;



    //Validación del mensaje 

    //Verifica si el susuario realizo una pregunta válida, si el mensaje esta vacio o no existe, devuelve una respuesta indicando que se escriba una pregunta válida.
    if (!mensaje) {
    return res.json({ respuesta: "Escribe una pregunta válida" });
    }
    

    // Normalizamos el texto
    //Convierte el mensaje en minúscula para evitar problemas con máyusculas y minúsculas al buscar.
    const texto = mensaje.toLowerCase();

    try {

    // 1️ PREGUNTAS FRECUENTES (mayúsculas y minúsculas)
    //Busca coincidencias dentro de la tabla preguntas_frecuentes usando LIKE
    const [faq] = await pool.query(
        `
        SELECT respuesta
        FROM preguntas_frecuentes
        WHERE LOWER(pregunta) LIKE ?
        `,
        [`%${texto}%`]  //Busqueda parcial, el % permite encontrar coincidencias que contengan el texto en cualquier parte de la pregunta
    );

    //Si encuentra una respuesta, la retorna inmediatamente, si no, continua con la siguiente búsqueda.
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

    //Si encuentra productos relacionados construye la respuesta. Si no, continua con la IA.
    if (productos.length > 0) {

        //Mensaje inicial de la respuesta indicando que se encontraron productos relacionados.
        let respuesta = "Encontré estos productos:\n\n";

        //Recorre los productos encontrados y agrega su nombre, descripción y precio a la respuesta.
        productos.forEach(p => {
        respuesta += `${p.nombre}\n${p.descripcion}\n$${p.precio}\n\n`;
        });

        //Envia la respuesta con los productos encontrados.
        return res.json({ respuesta });
    }

    // 3️ IA (solo si no hay coincidencias)
    //Si no hay coincidencias en preguntas frecuentes ni productos, se envía el mensaje a la IA para generar una respuesta dinámica.
    const respuestaIA = await responderConIA(mensaje);

    return res.json({ respuesta: respuestaIA });

    } catch (error) {

    //Captura cualquier error que ocurra durante el proceso.
    console.error("Error chatbot:", error);

    //Devuelve un error HTTP 500 con un mensaje genérico indicando que hubo un error en el chatbot.
    res.status(500).json({ respuesta: "Error en el chatbot" });
    }
};

