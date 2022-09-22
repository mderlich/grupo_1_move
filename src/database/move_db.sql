-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-09-2022 a las 21:52:58
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `move_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `brands`
--

INSERT INTO `brands` (`id`, `name`) VALUES
(1, 'adidas'),
(2, 'converse'),
(3, 'nike'),
(4, 'puma'),
(5, 'reebok'),
(6, 'topper'),
(7, 'vans');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `id_brand` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(600) NOT NULL,
  `image` varchar(50) NOT NULL,
  `price` int(11) NOT NULL,
  `discount` int(11) NOT NULL,
  `gender` varchar(20) NOT NULL,
  `origin` varchar(20) NOT NULL,
  `observations` varchar(500) NOT NULL,
  `create_at` date DEFAULT NULL,
  `update_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `id_brand`, `name`, `description`, `image`, `price`, `discount`, `gender`, `origin`, `observations`, `create_at`, `update_at`) VALUES
(1, 4, 'Suede Classic XXI', 'Mostrá tu estilo clásico y urbano con las Zapatillas Puma Suede Classic XXI su diseño emblemático desde 1968 y que son recordadas por varias generaciones icónicas, su capellada en gamuza te da un look sofisticado, su entresuela y suela de goma te dará pisadas amortiguadas y con mejor reacción en cualquier superficie. Además, la etiqueta puma archive en la lengüeta le da un toque moderno para que las combines con tus outfits preferidos.', 'zapatillas_puma_SuedeClassicXXI.jpg', 14999, 10, 'hombre', 'importado', 'https://www.moov.com.ar/zapatillas-puma-suede-classic-xxi/PU_374915%2F01.html', NULL, NULL),
(2, 1, 'Forum Mid', 'Las Zapatillas adidas Forum Mid muestran toda la versatilidad y estilo de adidas. Su capellada en cuero es resistente y fácil de combinar. La suela de caucho aporta tracción a cada una de tus pisadas y mejora la estabilidad, al igual que el doble sistema de atado de cordones y una tira de velcro en el tobillo. Mejora la calidad de tu día a día con ayuda de un calzado pensado para acompañarte a donde sea que vayas. Además, su fabricación colabora a tener un mundo más sustentable ya que está confeccionado con cuero sintético.', 'zapatillas_adidas_ForumMid.jpg', 32999, 20, 'hombre', 'importado', 'https://www.moov.com.ar/zapatillas-adidas-forum-mid/AD_FY7939.html', NULL, NULL),
(3, 1, 'Multix', 'Las zapatillas adidas Multix confeccionadas en exterior deportivo de malla mantiene tus pies cómodos sin importar lo que te depare del día. La suela de caucho ofrece el agarre que necesitás, mientras que el diseño deportivo con colores impactantes te dan el estilo ideal para la vida urbana.', 'zapatillas_adidas_Multix.jpg', 19999, 0, 'hombre', 'nacional', 'https://www.moov.com.ar/zapatillas-adidas-multix/AD_H04471.html', NULL, NULL),
(4, 3, 'Blazer Low 77 Suede', 'Para vos que siempre estas buscando retos y desafíos que requieren fortaleza, Las Zapatillas Nike Blazer Low \'77 Suede son perfectas. Están construidas en materiales duraderos incorporando una amortiguación suave para combinar con cualquier outfit y brindarte un ajuste cómodo durante todo el día. Su diseño moderno y el estilo propio de la marca hacen de ella un calzado que deben tener en el guarda ropa. Combinalas con tus prendas favoritas y resaltá entre la multitud.', 'zapatillas_nike_BlazerLow77Suede.jpg', 21499, 0, 'hombre', 'importado', 'https://www.moov.com.ar/zapatillas-nike-blazer-low-%2777-suede/NI_DA7254-600.html', NULL, NULL),
(5, 3, 'Crater Impact', 'Para vos que recorrés las calles de la ciudad, las Zapatillas Nike Crater Impact son ideales por su diseño inspirado en las pistas de atletismo, su construcción en malla y swooosh cosido te da un estilo salvaje tipo cebra, su ojal de red mezcla lo urbano con lo artesanal. La entresuela elevada de espuma cráter con aspecto moteado te brinda la amortiguación y reacción necesaria para tus días agitados. Además de lucir a la moda, estas contribuyendo a la sustentabilidad del planeta con estas zapatillas fabricadas en un 25% de material reciclado.', 'zapatillas_nike_CraterImpact.jpg', 22499, 0, 'mujer', 'importado', 'https://www.moov.com.ar/zapatillas-nike-crater-impact/NI_CW2386-101.html', NULL, NULL),
(6, 4, 'Mayze Leather S', 'Roba todas las miradas cada vez que salgas a la calle con las Zapatillas Puma Mayze Leather S Adp. Este modelo está pensado para adaptarse a toda tu rutina; podes lucirlas en el trabajo, camino a la facultad y en cada salida con amigos. Combinalas como más te guste y aprovecha su versatilidad siempre. Cuentan con detalles en gamuza y el logo de Puma a lo largo de la capellada para darte el toque de originalidad que buscabas. Nunca fue tan fácil mejorar un look casual y darle un extra de elegancia.', 'zapatillas_puma_MayzeLeatherS.jpg', 19999, 0, 'mujer', 'nacional', 'https://www.moov.com.ar/zapatillas-puma-mayze-leather-s/PU_388265%2F01.html', NULL, NULL),
(7, 3, 'Blazer Mid 77', 'Las zapatillas Nike Blazer Mid 77 son una renovación de la vieja escuela. Mantiene un look Blazer que ahora agrega modernidad gracias a su talón elástico, con textura tipo pana y grandes presillas de agarre que además suma facilidad al momento de ponértelas y sacarlas. El estilo se completa con el diseño Swoosh oversized y los cordones Jumbo que agregan un toque divertido. Del otro lado, la lengüeta de espuma suave y las costuras más gruesas son un homenaje al icónico look tan elogiado en las calles del 77. Sumate al estilo retro y dejá tu estilo en todo el camino.', 'zapatillas_nike_BlazerMid77.jpg', 26999, 0, 'mujer', 'importado', 'https://www.moov.com.ar/zapatillas-nike-blazer-mid-77/NI_DQ1471-100.html', NULL, NULL),
(8, 7, 'Era', 'Si amas la moda y la comodidad, no dudes en llevar las Zapatillas Vans Era. La calidad que ofrece Vans es digna de un calzado que podes llevar todos los días, adonde sea que vayas. Su diseño clásico en negro es fácil de combinar con todas tus prendas y para usar en cualquier lugar.', 'zapatillas_vans_Era.jpg', 10900, 0, 'unisex', 'importado', 'https://www.moov.com.ar/zapatillas-vans-era/VA_VN000EWZBLK.html', NULL, NULL),
(9, 3, 'Air Force 1', 'Este modelo le da un toque fresco a las características más recordadas: revestimientos cosidos, colores audaces y la cantidad perfecta de estilo para que te destaques. Las Zapatillas Nike Air Force 1 \'07 Essential fueron diseñadas originalmente para el básquetbol de alto rendimiento ya que su amortiguación Nike Air agrega comodidad ligera durante todo el día. Además, la suela de goma de largo completo asegura tracción y durabilidad. Un calzado para que te muevas cómoda y eficazmente sin perder tu peculiar estilo.', 'zapatillas_nike_AirForce1.jpg', 25999, 0, 'mujer', 'importado', 'https://www.moov.com.ar/zapatillas-nike-air-force-1-%2707-essential/NI_DH4406-101.html', NULL, NULL),
(10, 2, 'Net Star Ox', 'Las Zapatillas Converse Net Star Ox cuentan con un diseño renovado del clásico estilo Converse. Una capellada de lona y gamuza se combina con detalles de la marca y una suela de goma que mejora la tracción, ofreciéndote un calzado para tu día a día que aporta comodidad y un look superior.', 'zapatillas_converse_NetStarOx.jpg', 13299, 0, 'hombre', 'importado', 'https://www.moov.com.ar/zapatillas-converse-net-star-ox/CO_169993C.html', NULL, NULL),
(11, 7, 'U Authentic', 'Las zapatillas Vans U Authentic es el modelo fundamental y clásico de la marca. Lanzada en el año 1966, ahora es un modelo icónico. Es un modelo simple, con cordones, parte superior de lona duradera, ojales de metal, etiqueta de la bandera de Vans y suela original Waffle de Vans.', 'zapatillas_vans_UAuthentic.jpg', 9500, 0, 'unisex', 'importado', 'https://www.moov.com.ar/zapatillas-vans-u-authentic/VA_VN000EE3RED.html', NULL, NULL),
(12, 7, 'Authentic Platform 2.0', 'Vans es sinónimo de duración, y las Zapatillas Vans Authentic Platform 2.0 no pueden dar menos. Son un calzado pensado para resistirlo todo y acompañarte a todos lados gracias a su diseño que te permite combinarlas con todos tus looks diarios y sacarles el máximo provecho. La capellada de lona es fresca y resistente y la suela de caucho con plataforma aporta tracción a tus pisadas para que te muevas por cualquier superficie.', 'zapatillas_vans_AuthenticPlatform20.jpg', 15900, 0, 'unisex', 'nacional', 'https://www.moov.com.ar/zapatillas-vans-authentic-platform-2.0/VA_VN0A3AV8QXH.html', NULL, NULL),
(13, 7, 'Classic Slip-On', 'Las zapatillas Vans Classic Slip-On son un clásico de la marca. Inspiradas y creadas para la cultura skate, este modelo relajado sin cordones y con colores combinables está confeccionado en poliéster, lo que las vuelve más livianas y cómodas. Ideales para todos los días, su suela vulcanizada te garantiza una excelente adherencia en múltiples superficies y mayor resistencia.', 'zapatillas_vans_ClassicSlipOn.jpg', 10900, 0, 'unisex', 'importado', 'https://www.moov.com.ar/zapatillas-vans-classic-slip-on/VA_VN000EYEBLK.html', NULL, NULL),
(14, 5, 'Classic Legacy', 'Sus bordes serrados, franjas laterales en contraste y el diseño audaz de su mediasuela crean un look ganador. Los toques de color y el exterior de nylon de dos tonos que cambia de color completan el look. Cuenta con un exterior de nylon con revestimientos de gamuza, amortiguación con ligereza, mediasuela de EVA troquelada, suela de caucho', 'zapatillas_reebok_ClassicLegacy.jpg', 16499, 0, 'mujer', 'nacional', 'https://www.moov.com.ar/zapatillas-reebok-classic-legacy/RE_GZ7396.html', NULL, NULL),
(15, 3, 'Air Max 90', 'Las zapatillas Nike Air Max 90 SE son la nueva generación del ícono. Diseñada con líneas impecables, versátiles y atemporales, mantienen la misma suela icónica, revestimientos cosidos y detalles clásicos que iniciaron la revolución. No es una nueva versión, es un recordatorio.', 'zapatillas_nike_AirMax90.jpg', 32499, 0, 'mujer', 'importado', 'https://www.moov.com.ar/zapatillas-nike-air-max-90-se/NI_DD0384-800.html', NULL, NULL),
(16, 6, 'Yucca', 'Las Zapatillas Topper Yucca se van a transformar en tu calzado más amigable una vez que las pruebes. Su capellada de textil tejida se adapta totalmente a la forma de tu pie para un andar más cómodo y flexible. La suela de EVA termoformada se integra fácilmente con la parte superior para que descubras el verdadero significado de la palabra confort.', 'zapatillas_topper_Yucca.jpg', 8999, 0, '', 'importado', 'https://www.moov.com.ar/zapatillas-topper-yucca/TO_52181.html', NULL, '2022-09-20');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stock`
--

CREATE TABLE `stock` (
  `id` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `number` int(11) NOT NULL,
  `quant_total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(200) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `image` varchar(50) NOT NULL,
  `role` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `gender`, `image`, `role`) VALUES
(1, 'Gizmo', '(Admin)', 'admin@move.com', '$2a$10$l8fTcHXgp5KUJ6enGYJqoepE9o91y225REqadDVU6gLoz7y6WwYSi', 'masculino', 'admin.jpg', 'admin'),
(2, 'Ewok', '(User)', 'user@move.com', '$2a$10$l8fTcHXgp5KUJ6enGYJqoepE9o91y225REqadDVU6gLoz7y6WwYSi', 'masculino', 'user.jpg', 'user');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_brand` (`id_brand`);

--
-- Indices de la tabla `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_product` (`id_product`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `stock`
--
ALTER TABLE `stock`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`id_brand`) REFERENCES `brands` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `stock`
--
ALTER TABLE `stock`
  ADD CONSTRAINT `stock_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
