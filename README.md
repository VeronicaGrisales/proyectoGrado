------------------------------------------------------------------------------------------------------------------------------------
Proyecto de grado "Café Nazareth"
------------------------------------------------------------------------------------------------------------------------------------

Este repositorio contiene el codigo fuente del sitio web del emprendimiento Café Nazareth el cual fue desarrollado como proyecto de grado, enfocado en aumentar el alcance del emprendimiento, fortalecer su precensia digital y mejorar la atención de los consumidores. 
Además, a este sitio web se le incorporo un chatbot basado en IA su flujo conversacional se basa en lo siguiente:
El consumidor realiza su pregunta y el busca inicialmente si la información se encuentra en la base de datos, si no se encuentra llama a la API para realizar la busqueda. Sin embargo, el chatbot unicamente se encuentra en la capacidad de responder preguntas asociadas al emprenimiento o en su efectó a café.
Asi mismo, este proyecto fue desarrollado bajo la métodologia agil de SCRUM, asegurando asi entregas constantes y funcionales.

---------------------------------------------------------------------------------------------------------------------------------------
Herramientas empleadas
----------------------------------------------------------------------------------------------------------------------------------------
Para el desarrollo de este sitio web se implementaron las siguientes herramientas:
- **React:** Se empleo para el frontend y su función principal es el desarrollo de las interfaces de usuarios basada en componentes reutilizables.
- **GitHub:** Se implemento para el control de versiones, es decir, para gestionar el código fuente y tener un respaldo o en su caso poderlo compartir. 
- **Gemini:** Se implemento para utilizar una API Key para el desarrollo del chatbot.
- **MYSQL:** Se empleo para el desarrollo de la b ase de datos.
- **Postman:** Se implemento para las pruebas de las APIS, donde se realizó la validación de los endpoints del backend antes de su integración.
- **Node.js:** Se empleo para el backend donde se preparo el entorno de ejecución, gestionando la lógica del negocio y API.
- **Figma:** Se empleo para el desarrollo visual de los mockups.

--------------------------------------------------------------------------------------------------------------------------------------------
Estructura del repositorio
--------------------------------------------------------------------------------------------------------------------------------------------
El proyecto se divide en dos modulos principales:
- **/backend:** Contiene la logica del sistema, modelado de datos y la configuración de la API.
- **/cafe:** Módulo del fronted desarrollado con React para las interfaces del usuario.

----------------------------------------------------------------------------------------------------------------------------------------------
Instalación y configuración 
----------------------------------------------------------------------------------------------------------------------------------------------
1. **Clonar el repositorio**
   https://github.com/VeronicaGrisales/proyectoGrado.git

2. **Configurar la base de datos**
   - Instalar mysql (con workbench o xampp)
   - Crear una base de datos llamda `cafe_nazareth`
   - Poner la base de datos por defecto si esta usando workbench
   - Copiar el código sql de la carpeta `/base_de_datos` y pegarlo en una nueva consulta sql
   - Ejecutarlo, si todo sale bien se debe crear las tablas con la información para poder probar la aplicación
   - En el archivo llamado `db.js` en la carpeta `/backend/config` configurar usuario, contraseña y puerto asignados a la instalación de mysql

3. **Configurar el backend:**
   - Entrar a la carpeta `/backend`.
   - Pegar el archivo `.env` con la api key de gemini proporcionada
   - Ejecutar `npm install` para instalar todas las depedencias instaladas.
   - iniciar con `node src/server.js`, para activar el entorno de ejecución, establecer la conexion con la base de datos y permitir la comunicación entre el frontend con el chatbot.

4. **Configurar el frontend:**
   - Entrar a la carpeta cafe.
   - Ejecutar `npm install` para instalar todas las depedencias instaladas.
   - Iniciar con `npm run dev`
