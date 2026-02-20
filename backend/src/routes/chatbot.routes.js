//Importa el framework express para manejar las rutas HTTP
import express from 'express';

//Importa la función controladora que procesa las respuestas del chatbot.
import { chatBotResponse } from '../controllers/chatbot.controller.js';

//Router permite organizar las rutas en modulos separados.
const router = express.Router();

// Endpoint del chatbot
//Método: Post
//Ruta: /chatbot
//Esta ruta recibe las preguntas del cliente, las procesa y devuelve una respuesta en formato JSON.
router.post('/chatbot', chatBotResponse);

export default router;
