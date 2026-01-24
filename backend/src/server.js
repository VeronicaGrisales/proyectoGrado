//  Carga las variables de entorno (.env)
import 'dotenv/config';

// Importa la configuración principal de la aplicación
import app from './app.js';

// Define el puerto donde correrá el backend
const PORT = 3001;

// Inicia el servidor y lo deja escuchando peticiones HTTP
app.listen(PORT, () => {

     // Mensaje en consola para confirmar que el servidor funciona
    console.log(`Servidor backend activo en puerto ${PORT}`);
});
