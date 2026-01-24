// Importa mysql2 (permite promesas)
import mysql from 'mysql2/promise';

// Crea el pool de conexiones
const pool = mysql.createPool({
    host: 'localhost',      // servidor MySQL
    user: 'root',           // usuario (XAMPP casi siempre es root)
    password: '',           // contraseña (vacía por defecto en XAMPP)
    database: 'cafe_nazareth', // nombre de la base de datos
    port: 3307, // puerto de MySQL en XAMPP
    waitForConnections: true, // Espera si no hay conexiones disponibles
    connectionLimit: 10,   // Máximo de conexiones simultáneas
    queueLimit: 0        // 0 = sin límite de espera
});


// Prueba la conexión
try {
    const connection = await pool.getConnection();
    console.log('Conectado a MySQL - Café Nazareth');
    connection.release();
} catch (error) {
    console.error(' Error conectando a MySQL:', error);
}

export default pool;
