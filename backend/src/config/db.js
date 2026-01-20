// Importa la librería mysql2
import mysql from 'mysql2';

// Crea la conexión con la base de datos MySQL
export const db = mysql.createConnection({
  host: 'localhost',        // Servidor de la BD
  user: 'root',             // Usuario MySQL
  password: '',             // Contraseña (XAMPP por defecto es vacía)
  database: 'cafe_nazareth' // Nombre de la base de datos
});

// Prueba la conexión
db.connect((err) => {
    if (err) {
        console.error('Error conectando a MySQL:', err);
    } else {
    console.log('Conectado a MySQL correctamente ☕');
    }
});
