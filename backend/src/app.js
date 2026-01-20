// Importa Express, el framework para crear el servidor
import express from 'express';

// Importa CORS para permitir peticiones desde el frontend
import cors from 'cors';

// Crea una instancia de la aplicación Express
const app = express();

// Habilita CORS (permite conexión desde React)
app.use(cors());

// Permite que el backend reciba JSON en las peticiones
app.use(express.json());

// Ruta de prueba para verificar que el backend funciona
app.get('/', (req, res) => {
    res.send('Backend Café Nazareth funcionando correctamente');
});

// Exporta la app para que server.js la pueda usar
export default app;
