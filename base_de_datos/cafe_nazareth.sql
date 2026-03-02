-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3307
-- Tiempo de generación: 02-03-2026 a las 15:47:23
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cafe_nazareth`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas_frecuentes`
--

CREATE TABLE `preguntas_frecuentes` (
  `id` int(11) NOT NULL,
  `pregunta` text NOT NULL,
  `respuesta` text NOT NULL,
  `categoria` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `preguntas_frecuentes`
--

INSERT INTO `preguntas_frecuentes` (`id`, `pregunta`, `respuesta`, `categoria`) VALUES
(1, '¿Dónde están ubicados?', 'Estamos ubicados en la vereda Nazareth del municipio El Retiro, Antioquia, Colombia. 		Puedes encontrar nuestra ubicación en el mapa de la página, el cual se encuentra en la 		sección de contáctenos. ¡Te esperamos!', 'ubicacion'),
(2, '¿Qué es cafe nazareth?', 'Café Nazareth es un emprendimiento cafetero que nace del trabajo y la pasión de 			Robinsson Henao Morales, un joven caficultor que transformó la tradición familiar del 	café en una marca de identidad propia.', 'informacion'),
(3, '¿Quién está detrás de Café Nazareth?', 'Detrás de Café Nazareth está Robinson Henao Morales, un joven caficultor que 			cultiva, procesa y empaca su propio café, cuidando cada detalle del proceso de forma 	artesanal.', 'informacion'),
(4, '¿De dónde proviene el café de Café Nazareth?', 'Nuestro café proviene de las montañas de Antioquia, específicamente de la vereda Nazareth, 	 en el municipio de El Retiro, donde cada grano es cultivado con dedicación y amor por 		nuestra tierra.', 'origen'),
(5, '¿Qué tipos de café ofrecen?', 'Ofrecemos diferentes presentaciones como Variedad Caturra, blends especiales, drip coffee y ediciones especiales, pensadas para distintos gustos y momentos.', 'productos'),
(6, '¿Qué es la Variedad Caturra?', 'La Variedad Caturra es uno de nuestros cafés más sobresalientes, con notas aromáticas, acidez media y sabores afrutados, cultivado a 1.900 metros de altura.', 'productos'),
(7, '¿Qué es el café Blend?', 'Nuestro Blend es una mezcla armoniosa de variedades caturra, castillo y variedad colombiana, diseñada para ofrecer una taza equilibrada y llena de carácter.', 'productos'),
(8, '¿Qué es el Drip Coffee?', 'El Drip Coffee es una presentación individual práctica, ideal para disfrutar una buena taza de café donde estés, sin necesidad de equipos especiales.', 'productos'),
(9, '¿En qué presentaciones venden el café?', 'Contamos con presentaciones de 250 gramos, 500 gramos, 2.500 gramos, unidades individuales y una lata edición especial reutilizable.', 'productos'),
(10, '¿Puedo elegir el tipo de molienda?', 'Sí, todos nuestros cafés están disponibles en la molienda que prefieras: grano entero, espresso, filtro o prensa francesa..', 'molienda'),
(11, '¿El café es 100% natural?', 'Sí, nuestro café es 100% natural, sin mezclas ni aditivos, conservando su sabor auténtico y su aroma original.', 'Calidad'),
(12, '¿Cómo es el proceso de producción del café?', 'El proceso incluye siembra, cosecha manual, despulpado, secado natural, tostión controlada, selección, molienda y una presentación final cuidada para preservar la calidad.', 'procesos'),
(13, '¿La cosecha es manual?', 'Sí, la cosecha se realiza totalmente a mano, seleccionando solo las cerezas maduras para garantizar un mejor sabor en cada taza.', 'procesos'),
(14, '¿Cómo puedo comprar productos de Café Nazareth?', 'Puedes realizar tu compra a través de nuestra página web o contactarnos directamente por nuestros canales de atención.', 'compras'),
(15, '¿Hacen envíos a domicilio?', 'Sí, realizamos envíos a domicilio según la ubicación y disponibilidad del servicio.', 'compras'),
(16, '¿Qué métodos de pago aceptan?', 'Aceptamos como métodos de pago transferencias y efectivo.', 'pagos'),
(17, '¿Cómo puedo comunicarme con ustedes por WhatsApp?', 'Puedes escribirnos directamente por WhatsApp al 3136027315. Estaremos atentos para resolver tus dudas, brindarte información sobre nuestros productos y ayudarte a disfrutar mejor el Café Nazareth.', 'atencion'),
(18, '¿Cómo puedo comunicarme con ustedes?', 'Puedes contactarnos por WhatsApp, correo electrónico o a través de nuestra página web. Estaremos felices de atenderte.', 'atencion'),
(19, '¿Tienen un correo electrónico de contacto?', 'Sí, puedes enviarnos un correo a robinsonhenaomorales111@gmail.com. Con gusto atenderemos tus preguntas, comentarios o solicitudes sobre Café Nazareth.', 'atencion'),
(20, '¿El chatbot da información real?', 'Sí, el chatbot se basa en información real de Café Nazareth y utiliza inteligencia artificial para ofrecer respuestas claras y naturales.', 'chatbot'),
(21, '¿El chatbot puede ayudarme a elegir un café?', 'Claro que sí. El chatbot puede orientarte según tus gustos y recomendarte la opción que mejor se adapte a ti.', 'chatbot'),
(22, '¿Qué métodos de preparación recomiendan en Café Nazareth?', 'En Café Nazareth te acompañamos a preparar tu café de la forma que más te guste. Recomendamos métodos como prensa francesa, drip o filtro, cafetera italiana (moka), espresso y el colador tradicional. Cada método resalta aromas, sabores y sensaciones diferentes de nuestros granos seleccionados.', 'metodos de preparacion'),
(23, '¿Qué sabores resalta la prensa francesa y cómo se prepara?', 'La prensa francesa resalta un café con mucho cuerpo, sabores intensos y notas dulces y amaderadas. Para prepararlo, calienta agua sin que hierva, agrega café molido grueso (una cucharada por cada 150 ml), vierte el agua, mezcla suavemente, deja reposar 4 minutos y baja el émbolo lentamente antes de servir.', 'metodos de preparacion'),
(24, '¿Qué sabores se perciben en el método drip o filtro y cómo se prepara?', 'El método drip o filtro ofrece una taza suave, limpia y equilibrada, ideal para apreciar notas florales y frutales. Se prepara usando café molido medio, colocando un filtro húmedo, agregando el café y vertiendo el agua caliente poco a poco, comenzando con una preinfusión de 30 segundos y luego el resto del agua en movimientos circulares.', 'metodos de preparacion'),
(25, '¿Qué tipo de sabor ofrece la cafetera italiana (moka) y cómo se prepara?', 'La cafetera italiana o moka produce un café fuerte e intenso, con un sabor concentrado similar al espresso. Para prepararlo, llena la base con agua hasta la válvula, agrega café molido medio-fino sin presionar, arma la cafetera y ponla a fuego bajo hasta que el café suba por completo.', 'metodos de preparacion'),
(26, '¿Qué sabores tiene el café preparado en espresso y cómo se hace?', 'El espresso se caracteriza por un sabor intenso, concentrado y cremoso, con una crema dorada en la superficie. Se prepara usando café molido fino, compactándolo suavemente en el portafiltro y extrayéndolo durante 25 a 30 segundos con una máquina de espresso.', 'metodos de preparacion'),
(27, '¿Qué sabores se obtienen con el colador tradicional y cómo se prepara?', 'El colador tradicional o manga ofrece un café suave, cálido y hogareño, con sabores profundos y balanceados. Para prepararlo, hierve agua, agrega café molido medio, deja reposar de 2 a 3 minutos y luego cuela antes de servir.', 'metodos de preparacion');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `presentacion` varchar(50) DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `activo` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `presentacion`, `precio`, `imagen`, `stock`, `activo`) VALUES
(1, 'Variedad Caturra 500 gramos', 'Uno de nuestros Cafés mas sobresalientes en perfil de taza,con sus notas aromáticas, una 	acidez media, cultivada a 1.900 m, potenciando sus sabores afrutados. Dedicada para esos 	paladares exquisitos y exigentes.', '500 gramos', 35000.00, 'bolsa1.jpg', 12, 1),
(2, 'Variedad Caturra 250 gramos', 'Uno de nuestros Cafés mas sobresalientes en perfil de taza,con sus notas aromáticas, una 	acidez media, cultivada a 1.900 m, potenciando sus sabores afrutados. Dedicada para esos 	paladares exquisitos y exigentes.', '250 gramos', 25000.00, 'bolsa1.jpg', 11, 1),
(3, 'Presentación 2.500 gramos', 'Bolsa 2.500 gramos ideal para tu oficina, familia o negocio, con la mejor relación precio, 	cantidad y calidad.', '2.500 gramos', 170000.00, 'bolsa2.jpg', 5, 1),
(4, 'Blend 500 gramos', 'Presentación personal de una libra, para disfrutar al máximo de una mezcla maravillosa 		entre variedades caturra, castillo y variedad colombiana.', '500 gramos', 35000.00, 'bolsa4.jpg', 8, 1),
(5, 'Blend 250 gramos', 'Presentación personal de media libra, para disfrutar al maximo de una mezcla maravillosa 	entre variedades caturra, castillo y variedad colombiana.', '250 gramos', 25000.00, 'bolsa3.jpg', 10, 1),
(6, 'Drip Coffee', 'Presentación individual para disfritar una experiencia única. Una mezcla armoniosa de 		caturra, castillo y variedad colombia, en un práctico drip que te permite vivir el sabor 	del café a donde quiera que vayas.', 'Unidad', 8000.00, 'drip.jpg', 20, 1),
(7, 'Lata edición especial', 'Descubre la elegancia en cada sorbo: nuestra edición especial de café tostado no solo 		deleita tu paladar, sino que tambie preserva la frescura en su hermosa lata reutilizable. 	¡Un diseño que enamora y un sabor que perdura!', '200 gramos', 40000.00, 'lata.jpg', 15, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `preguntas_frecuentes`
--
ALTER TABLE `preguntas_frecuentes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `preguntas_frecuentes`
--
ALTER TABLE `preguntas_frecuentes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
