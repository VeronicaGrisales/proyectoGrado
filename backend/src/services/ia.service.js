import { GoogleGenerativeAI } from "@google/generative-ai";

// 1. Inicializamos la IA fuera de la función para que sea más rápido
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); 

// const API_KEY = 'AIzaSyCgC6EkTWD_khbrmUsYYKWiRdaTKNReYn0';
// const genAI =new GoogleGenerativeAI(API_KEY)

export async function responderConIA(pregunta) {

    // Verificamos la llave de API
    if (!process.env.GEMINI_API_KEY) {
    return "La inteligencia artificial no está configurada aún";
    }

    try {
    // 2. Configuramos el modelo (usamos gemini-1.5-flash que es el actual)
    // const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" })-->este esta funcionando

    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" })


    // 3. Preparamos el prompt con tu personalidad de Café Nazareth
    const prompt = `Eres el asistente virtual de Café Nazareth.
      Respondes SOLO sobre:
      - café
      - productos
      - preparación
      - recomendaciones
      - cultura cafetera

      Si no es sobre café responde exactamente:
      "Solo puedo ayudarte con temas relacionados con café"

      Pregunta del cliente: ${pregunta}`;

    // 4. Ejecutamos la solicitud usando el SDK oficial
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    console.log("RESPUESTA GEMINI EXITOSA");
    return text;

  } catch (error) {
    // Si hay un error de "model not found", aquí verás el detalle real
    console.error("Error detallado de Gemini:", error.message);
    return "Error al consultar la inteligencia artificial";
  }
}