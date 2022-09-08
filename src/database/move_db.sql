-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-09-2022 a las 02:51:05
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

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
-- Estructura de tabla para la tabla `brand`
--

CREATE TABLE `brand` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colors`
--

CREATE TABLE `colors` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` text NOT NULL,
  `price` int(11) NOT NULL,
  `discount` int(11) NOT NULL,
  `gender` varchar(45) NOT NULL,
  `origin` varchar(45) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `observations` varchar(45) DEFAULT NULL,
  `id_category` int(11) NOT NULL,
  `id_brand` int(11) NOT NULL,
  `id_size` int(11) NOT NULL,
  `id_color` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sizes`
--

CREATE TABLE `sizes` (
  `id` int(11) NOT NULL,
  `size_number` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL,
  `gender` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `gender`) VALUES
(1, 'Anissa', 'Sipes', 'flangworth@example.net', '5640f34cfd1481bb889a158e13aceab66d9d62a7', 'Prof.'),
(2, 'Kennith', 'Schmeler', 'thiel.brice@example.org', 'dc3b91ba6d4e507b1fbfccd242e69725945a42dd', 'Ms.'),
(3, 'Bianka', 'Block', 'lyost@example.net', '2b2bfafcbc0880f24d0c3e06ff92d69a83e69056', 'Mrs.'),
(4, 'Nikita', 'Senger', 'calista04@example.org', '81d66d17afa98950dab8ea2c17b395ce1015a708', 'Prof.'),
(5, 'Price', 'Veum', 'wdurgan@example.net', 'ee66bf2a67467722b81f0dd1d91286b960597634', 'Mrs.'),
(6, 'Rowan', 'Hilpert', 'upfeffer@example.org', '6027fe752fd2292e7b5516d981a7d71c5baeb669', 'Dr.'),
(7, 'Tyrel', 'Kohler', 'maximillian.terry@example.net', 'b8cd888590ae530a2e970d4d23e0cbf90302a2d7', 'Dr.'),
(8, 'Adriana', 'Stroman', 'herdman@example.org', 'fb9ec2ea302b2c86aafb85f9b1c2e3ef7fe6b2ea', 'Dr.'),
(9, 'Deon', 'Schroeder', 'umayer@example.com', '94ea51c1927ff9d77eb438245a4fe6c5f3b707c3', 'Mr.'),
(10, 'Rosalia', 'Legros', 'obahringer@example.org', 'f818dbb5a702a99a5a152ff2465ea1f185e6e144', 'Mr.'),
(11, 'Spencer', 'Beer', 'dariana.thiel@example.net', '46f7652cc1f6c6c63eb9602b55a26a849c192d58', 'Dr.'),
(12, 'Vernice', 'Nikolaus', 'boyle.elfrieda@example.net', 'c204fa2c58da52aada778d60d962139e4542b58c', 'Prof.'),
(13, 'Cristobal', 'Kessler', 'nschmitt@example.org', '52bb16066a3fadefea22b95bc05f89b6358e10c3', 'Mrs.'),
(14, 'Davin', 'Weissnat', 'lehner.ervin@example.net', '35c46be05ac81ddcef91d963bc41a919ed808aae', 'Mrs.'),
(15, 'Carmen', 'Upton', 'verdie62@example.org', '4b060a5de8859d9ffc102d73e15609ba2119639c', 'Dr.'),
(16, 'Randal', 'Schuster', 'aileen.connelly@example.org', '5a48f94257fb05b356cc132061e29b111fd8af85', 'Prof.'),
(17, 'Gabe', 'Casper', 'lhermann@example.net', '283738359654838c7bb05c7afd1a4f2d342e1b58', 'Dr.'),
(18, 'Georgette', 'Runolfsson', 'mante.neil@example.com', 'db542c60863144589f6305c311410e88b8d22586', 'Dr.'),
(19, 'Laron', 'Bode', 'iheathcote@example.net', '9fceb361c496613b734ef5f1ea23c482daf4e0f1', 'Mr.'),
(20, 'Clementine', 'Little', 'ryleigh.gerlach@example.com', 'cf97d84b8792d4bfdd10952b1ce403da4aa81443', 'Dr.'),
(21, 'Peyton', 'Schultz', 'cordie97@example.com', '6f457298e28593595ab6fc4c174efa37a5c6eb9c', 'Prof.'),
(22, 'Jacklyn', 'Hilll', 'klein.marlene@example.com', '8291fc2afd0df1a4426b36c9897c2c75a4d7eec7', 'Dr.'),
(23, 'Marielle', 'Jenkins', 'sanford.gunnar@example.net', '45a3b6a06a5f7e438d325ce8b8d1a92a838d9a97', 'Dr.'),
(24, 'Electa', 'Willms', 'lizeth80@example.com', '058342547ce23c5c7857f97c5b286fdc753fef7a', 'Prof.'),
(25, 'Jo', 'Lehner', 'sauer.ellsworth@example.net', 'a73b1da8a72b41b7697caa25c0d8e580165c4fcc', 'Ms.'),
(26, 'Titus', 'Senger', 'rupert.greenfelder@example.org', '0447bca0cd8af017d3231d067e971815be8dbd65', 'Dr.'),
(27, 'Junior', 'West', 'santina88@example.net', '757f101188b1a3bc3429138876d3de5ba9081290', 'Prof.'),
(28, 'Dario', 'Johns', 'lucious.welch@example.com', 'd28098053052c07aa68b880900024bb83417443f', 'Dr.'),
(29, 'Eula', 'Hettinger', 'blair.dach@example.net', '6a161de65e2b703a9c35c5b3f363b01111f39bcd', 'Prof.'),
(30, 'Serena', 'Runte', 'blaze.crooks@example.org', '16eb4a594ff89f94143f63b86c173d0c8fed4fe6', 'Dr.'),
(31, 'Rosalind', 'Rodriguez', 'parisian.gwendolyn@example.com', 'abeb2f2220f2b5d867dcbb226694c34c49fafaaa', 'Prof.'),
(32, 'Shyanne', 'Boehm', 'grimes.karolann@example.org', 'a8e82e036a9f4ef1e4730b3f7e4d09855d439990', 'Ms.'),
(33, 'Kamryn', 'Adams', 'whalvorson@example.net', '428a9e89775301dee1fa5cad7550fc5e38192041', 'Mr.'),
(34, 'Astrid', 'Boyer', 'turner30@example.net', '7b613f8e8211d25712d26666b0f22ea594ee602c', 'Prof.'),
(35, 'Lawrence', 'Bogisich', 'wilhelm.dare@example.org', 'b3c1c5877f11a72d900c86ab0a2fe7e744f737d2', 'Prof.'),
(36, 'Isabella', 'Lesch', 'tmoen@example.com', 'f4fee05df1c8d8ce3cecd5aa4b1fe223d0a2631e', 'Prof.'),
(37, 'Buster', 'Beer', 'dulce29@example.org', '4073c3a21aa4198b84f695379ab59cd1b183902e', 'Dr.'),
(38, 'Arthur', 'Aufderhar', 'roslyn75@example.net', '54edfff0274c59369330514e31a63ffe786cecbb', 'Prof.'),
(39, 'Zackary', 'Brown', 'julia.walsh@example.com', '50769a45d6226770c1c583659a80201f193f404e', 'Mr.'),
(40, 'Anderson', 'Stracke', 'farrell.brielle@example.org', '84edfd50bd0aa9ebf0fd11e392f138900e4d2369', 'Mr.'),
(41, 'Emmy', 'O\'Conner', 'anya73@example.net', '667c2baa179c6d70f527b2bd8e77a8b980e3ad6c', 'Prof.'),
(42, 'Keaton', 'Orn', 'nicolas.oma@example.org', 'e82bcfc2fe0958299c8a98f85da0b5d15c3fb730', 'Prof.'),
(43, 'Oliver', 'Wisozk', 'luella87@example.com', '4547fbb9d4270bbb55ea572afecf3b885e6509ea', 'Dr.'),
(44, 'Rex', 'Turner', 'gabrielle.lehner@example.com', '7313f7a350138f1502ce95783f65920db908840e', 'Prof.'),
(45, 'Geoffrey', 'Torphy', 'alejandra.gaylord@example.org', '46deb4326882aee785295421f5f617a5ec0000c2', 'Ms.'),
(46, 'Wilber', 'Morar', 'cummerata.donny@example.org', 'dbc6071e98d96be8d67a1a91a9ff086de107990d', 'Prof.'),
(47, 'Princess', 'Botsford', 'bridie72@example.com', 'da5d4a3c4f97f4eb627037746bda4fba2976d618', 'Dr.'),
(48, 'Fletcher', 'Bailey', 'micaela.schumm@example.org', 'f10f2d442190304220760f058ea323f0c4f53d0f', 'Miss'),
(49, 'Odell', 'Greenholt', 'lesch.billy@example.com', 'c54c30eba1ba0674d4f4e9813d7c50dd64be3de6', 'Prof.'),
(50, 'Kaya', 'Leuschke', 'hahn.abby@example.net', 'bc6b002a34f30d4c092db14ed71f5f03ddde8310', 'Prof.'),
(51, 'Marco', 'Haley', 'nicolette.pagac@example.net', 'c7585857a0991131935236c413a0e58d08e23a42', 'Ms.'),
(52, 'Tyra', 'Rippin', 'klein.augusta@example.net', '28675e245de1dff5628dc96e8fecb19882b8fe62', 'Prof.'),
(53, 'Ignacio', 'O\'Kon', 'philll@example.com', 'bd26de9b81e0eda1bf1feada6200a2c6597ca150', 'Prof.'),
(54, 'Christop', 'Jenkins', 'schamberger.tristian@example.com', '23b493d2a7aba1374ac69843bd8c35d6cafc1eb3', 'Ms.'),
(55, 'Nestor', 'Trantow', 'rfadel@example.com', '0dc206c3a2658442d6c5d4f2a4980bd3bd57425c', 'Mr.'),
(56, 'Cassie', 'Hane', 'nlehner@example.net', '4352ffd6b46ec1b36f9c3919725a064250769ce0', 'Mr.'),
(57, 'Urban', 'Tillman', 'christiana.mcdermott@example.net', 'f326144c1069cdd12b8fb462259e53d9c061095f', 'Dr.'),
(58, 'Khalid', 'Feeney', 'maritza15@example.com', 'cd3b061b1c8fa42aa16c9a873e6ca5dd820f3ef6', 'Dr.'),
(59, 'Dangelo', 'Gottlieb', 'bethel24@example.net', 'f86d3ea0f983cbbb1a029797053a6f6f49f13c6f', 'Mr.'),
(60, 'Viviane', 'Yost', 'waters.maxie@example.com', 'f148789dd4951b50e342dba1a98a538d2446f68b', 'Prof.'),
(61, 'Lawson', 'Runolfsdottir', 'taufderhar@example.net', '2c0747a1c95ab50781cbfb1d5a2152addb9902c1', 'Mr.'),
(62, 'Retha', 'Hane', 'keeling.vivien@example.net', '0f9c28bf1c8f0fb807770e77c4e2883adf2b0c54', 'Prof.'),
(63, 'Ally', 'Ortiz', 'jacobson.susie@example.com', '7b858cde1d05b0ff69da8076c110413a2755397b', 'Prof.'),
(64, 'Narciso', 'Hettinger', 'nhilpert@example.net', '434b2acc0353b2bf07aa7576b5f6d09e7373e54a', 'Dr.'),
(65, 'Loren', 'Boehm', 'hans60@example.net', '9a349bbbf4a9c6d65563ffdab05837028e850e04', 'Mr.'),
(66, 'Katelynn', 'Conroy', 'zraynor@example.net', '9165d66f1ce0a2266f2d8ad3335fdec11b07da0e', 'Ms.'),
(67, 'Cedrick', 'Boehm', 'vinnie.schumm@example.org', '91812009ca43b476a8082eb0bb7f9833c671980e', 'Dr.'),
(68, 'Juliet', 'Quigley', 'koch.dakota@example.org', 'ded0183abbb5beafaa61414a3f8469e13c5c37f5', 'Ms.'),
(69, 'Sadye', 'Gerlach', 'larson.patsy@example.com', 'af54a8cac692cad5bcced1fb30d32976430d286f', 'Dr.'),
(70, 'Otilia', 'Rolfson', 'white.jewel@example.net', 'e63f767a6b364e37b0f331bdbae0c90a6b9eb32b', 'Prof.'),
(71, 'Rhoda', 'Considine', 'jreinger@example.org', '849e4494df229db009b9989a653a2617fb961f72', 'Dr.'),
(72, 'Anita', 'Crist', 'reinhold.fahey@example.com', '109ad783696cb95ebe6d9a543e7e57c2462a1bc1', 'Dr.'),
(73, 'Bryon', 'Kunde', 'ethelyn.durgan@example.net', '598f15ee5b1e82404c6892c9e4a3a3753cc0d443', 'Dr.'),
(74, 'Dale', 'Marks', 'xortiz@example.com', '3a7293040b73e4908b1b52b65df4a491854abe96', 'Dr.'),
(75, 'Gregoria', 'Jones', 'cody.parisian@example.org', '6c3c35748ecd58f8c2de9b79cc99b39885115787', 'Mr.'),
(76, 'Wilhelm', 'Hand', 'kayden69@example.org', '0b3c848f066e8e1be8d557d27a32d3d2f4a13ed8', 'Dr.'),
(77, 'Vern', 'Larkin', 'fadel.belle@example.com', '118d719c04235d7fcde0c53d33abaa140fe53020', 'Miss'),
(78, 'Guillermo', 'Reichert', 'zane66@example.net', 'd6fd74cfed90b974d2f22b036e5679fbe7de18e7', 'Mrs.'),
(79, 'Roosevelt', 'Tillman', 'collins.domenick@example.com', '9724a19f2ab32a66b6c784e49ffc6526058a3d2b', 'Dr.'),
(80, 'Moises', 'Balistreri', 'znitzsche@example.net', '9bf1553e60b4c6042fc01af761764903d26dfc9b', 'Miss'),
(81, 'Terrance', 'Bechtelar', 'blanda.michel@example.net', 'e3bb8adec7ce37b1730f520eb3850994319e8893', 'Dr.'),
(82, 'Abigayle', 'Miller', 'ara.boehm@example.org', 'ef276dbcb1584112e9f2844d259740f5a638d7cd', 'Ms.'),
(83, 'Albert', 'Rau', 'ettie67@example.org', '288889a0d06f33033709af5049a81322b2a8549a', 'Ms.'),
(84, 'Eldred', 'Mills', 'walsh.claud@example.net', '4a196fd190175405e76168a9a3de9e21efe05931', 'Ms.'),
(85, 'Kale', 'Rempel', 'hermann.lew@example.net', 'fafb65cfec2fdb3feca458a39c4797459ecd3599', 'Dr.'),
(86, 'Maxine', 'Kuhn', 'hettinger.miguel@example.com', '26de6d772d049bd46b4dc06b0810c0fb560221ff', 'Mr.'),
(87, 'Luciano', 'Stiedemann', 'istrosin@example.com', '77a8f31b3e005b70567f90cab2e3529daa406c94', 'Prof.'),
(88, 'Delores', 'Wiza', 'jerde.wiley@example.com', '00ae311a857fa9fe47eb2691e8afbf3d9984ac65', 'Mrs.'),
(89, 'Syble', 'Dare', 'rick82@example.org', '22bc7cde2fd3ad2f5d4e87c975decfd9e13299e0', 'Prof.'),
(90, 'Nedra', 'Simonis', 'gino.o\'hara@example.net', 'be4161a635f4ca61be585e6306b394125bd6f442', 'Dr.'),
(91, 'Yessenia', 'Bartoletti', 'paucek.elvis@example.com', '73cf83a47b0b169602fce41ad68ad2eb414e070a', 'Dr.'),
(92, 'Sabina', 'Osinski', 'lboyer@example.com', '778c5ce82c4c58a87500e6304a6e511d8001ad78', 'Dr.'),
(93, 'Maverick', 'Fay', 'zborer@example.net', 'e40bbeefc454708a7bc2af1bc6aec20cf729dacc', 'Prof.'),
(94, 'Dustin', 'Dickinson', 'taylor12@example.net', 'e354ef645fbe0a4d751c865316d8cc5ed6c41b20', 'Miss'),
(95, 'Justine', 'Blick', 'jodie.morar@example.com', 'd1c67e810f046d8a33a0503cf8d8efd382e14235', 'Mrs.'),
(96, 'Larue', 'West', 'phyllis26@example.net', 'f3d4a59b0af2aaddbbcfbbecd02e5fe4607e0067', 'Dr.'),
(97, 'Carmen', 'Langosh', 'aniyah.gutmann@example.net', '5ce6c8e010aadfb9396b1c936840f8fb35edd957', 'Mrs.'),
(98, 'Michel', 'Schaefer', 'rafael.lind@example.org', '7f43bff8e0e7d907393f63a18653a7cbff0d343f', 'Dr.'),
(99, 'Marian', 'Hamill', 'mariano.abernathy@example.net', 'b1d8388f73642a6f16d099bbbe20bcb0be0e3201', 'Ms.');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_products_brands_idx` (`id_brand`),
  ADD KEY `fk_products_categories_idx` (`id_category`),
  ADD KEY `fk_products_sizes_idx` (`id_size`),
  ADD KEY `fk_products_colors_idx` (`id_color`);

--
-- Indices de la tabla `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `brand`
--
ALTER TABLE `brand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `colors`
--
ALTER TABLE `colors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_products_brands` FOREIGN KEY (`id_brand`) REFERENCES `brand` (`id`),
  ADD CONSTRAINT `fk_products_categories` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `fk_products_colors` FOREIGN KEY (`id_color`) REFERENCES `colors` (`id`),
  ADD CONSTRAINT `fk_products_sizes` FOREIGN KEY (`id_size`) REFERENCES `sizes` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
