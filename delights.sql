-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 19-05-2023 a las 18:40:03
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `delights`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sabores`
--

DROP TABLE IF EXISTS `sabores`;
CREATE TABLE IF NOT EXISTS `sabores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` varchar(250) NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `sabores`
--

INSERT INTO `sabores` (`id`, `titulo`, `subtitulo`, `img_id`) VALUES
(22, 'Frutilla', 'Helado de Crema', 'm6nrfto6gp2am95svo9e'),
(19, 'Menta Granizada', 'Helado de Crema', 'ognjqxl21xa1b5s0ygko'),
(16, 'Sambayón', 'Helado de Crema', 'ddk3qvomfyfw7lmwldru'),
(28, 'Chocolate', 'Helado de Crema', 'janp8qfc1loxesu0zzla'),
(14, 'Vainilla', 'Helado de Crema', 'tic1srjmn2ldluhjfoys'),
(15, 'Granizado', 'Helado de Crema', 'u3bslwffh4tqv745rthi'),
(17, 'Tramontana', 'Helado de Crema', 'wwjvwn10us7jrvmhtzuc'),
(30, 'Dulce de Leche', 'Helado de Crema', 'g2rgkl7qtxew7bu1z2jy');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `user`, `password`) VALUES
(3, 'Gonzalo', 'caf1a3dfb505ffed0d024130f58c5cfa'),
(2, 'Alejo', 'c4ca4238a0b923820dcc509a6f75849b');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
