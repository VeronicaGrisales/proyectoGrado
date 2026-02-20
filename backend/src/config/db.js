// Importa mysql2
import mysql from 'mysql2/promise';

// Crea el pool de conexiones
const pool = mysql.createPool({
    host: 'localhost',      // servidor MySQL
    user: 'root',           // usuario (XAMPP casi siempre es root)
    password: '',           // contraseña (esta se encuentra vacía ya que por defecto en XAMPP)
    database: 'cafe_nazareth', // nombre de la base de datos
    port: 3307, // puerto de MySQL en XAMPP
    waitForConnections: true, // Espera si no hay conexiones disponibles
    connectionLimit: 10,   // Máximo de conexiones simultáneas
    queueLimit: 0        // 0 = sin límite de espera
});


// Prueba la conexión

//Se ejecuta al inicar el servidor para verificar que la conexión a la base de datos es exitosa. Si hay un error, se muestra en la consola.
try {

    //Obtiene una conexión con el pool, await detiene la ejecución hasta recibir la respuesta.
    const connection = await pool.getConnection();

    //Mensaje de confirmación en la consola indicando que la conexión fue exitosa.
    console.log('Conectado a MySQL - Café Nazareth');

    //Libera la conexión para que pueda reutilizarse.
    connection.release();

} catch (error) {

    //Captura y muestra cualquier error de conexión.
    console.error(' Error conectando a MySQL:', error);
}

export default pool;
