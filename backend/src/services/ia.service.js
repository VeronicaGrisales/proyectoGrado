//Importa la libreria oficial de google generative AI que permite interactuar con los modelos gemini
import { GoogleGenerativeAI } from "@google/generative-ai";

// 1. Inicializamos la IA fuera de la función para que sea más rápido
//Se crea una instancia del cliente de Gemini utilizando la API KEY almacenada en variables de entorno (.env).
//Esto se hace fuera de la función para evitar recrear la conexión en cada solicitud y mejorar el rendimiento.
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); 

//Se empleo alternativamente para realizar pruebas locales, NO RECOMENDABLE.
//const API_KEY = 'AIzaSyCgC6EkTWD_khbrmUsYYKWiRdaTKNReYn0';
//const genAI =new GoogleGenerativeAI(API_KEY)


//Función principal que responde con IA
//Recibe una pregunta del usuario y devuelve una respuesta generada por el modelo Gemini.
export async function responderConIA(pregunta) {

    //Verificamos la llave de API
    //Verifica que la API KEY exista en el entorno,
    //si no existe, devuelve un mensaje indicando que la IA no está configurada.
    if (!process.env.GEMINI_API_KEY) {
    return "La inteligencia artificial no está configurada aún";
    }

    try {
    // 2. Configuramos el modelo
    //Se selecciona el modelo "gemini-3-flash-preview" para generar la respuesta.
    //Este modelo es rápido y adecuado para tareas de conversación.

    //const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" })-->este esta funcionando

    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" })


    // 3. Preparamos el prompt con tu personalidad de Café Nazareth
    //Se define el contexto y el comportamineto del asistente virtual.
    //Esto limita las respuestas a temas relacionados con el café.
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

    // 4. Ejecutamos la solicitud 
    //se envia el prompt al modelo de IA para generaruna respuesta basada en lenguaje natural.
    const result = await model.generateContent(prompt);

    //Obtenemos el texto de la respuesta generada por el modelo.
    //NOTA: await hace que el código espere a que se genere la respuesta antes de continuar, esto es importante para asegurar que se obtiene el resultado correcto.
    const response = await result.response;

    //Extrae el texto final de la respuesta
    const text = response.text();

    //Mensaje en consola para confirmar que la respuesta de Gemini fue exitosa.
    console.log("RESPUESTA GEMINI EXITOSA");
    return text;

  } catch (error) {
    // Si hay un error de "model not found", aquí verás el detalle real
    console.error("Error detallado de Gemini:", error.message);
    return "Error al consultar la inteligencia artificial";
  }
}