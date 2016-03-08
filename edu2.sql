-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Ноя 19 2015 г., 13:34
-- Версия сервера: 5.5.25
-- Версия PHP: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `edu`
--

-- --------------------------------------------------------

--
-- Структура таблицы `requests`
--

CREATE TABLE IF NOT EXISTS `requests` (
  `uid` mediumint(9) NOT NULL AUTO_INCREMENT,
  `reg` varchar(255) DEFAULT NULL,
  `ats` varchar(255) DEFAULT NULL,
  `eq_type` varchar(255) DEFAULT NULL,
  `eq` varchar(255) DEFAULT NULL,
  `spaces` tinyint(4) DEFAULT NULL,
  `ip_ad` varchar(255) DEFAULT NULL,
  `mac` varchar(255) DEFAULT NULL,
  `serial_e` varchar(255) DEFAULT NULL,
  `s_hostname` varchar(255) DEFAULT NULL,
  `ports` varchar(255) DEFAULT NULL,
  `checkin` date DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Дамп данных таблицы `requests`
--

INSERT INTO `requests` (`uid`, `reg`, `ats`, `eq_type`, `eq`, `spaces`, `ip_ad`, `mac`, `serial_e`, `s_hostname`, `ports`, `checkin`) VALUES
(3, 'Absheron', 'Absheron ATS', 'ADSL', 'TP Link Router', 1, 'test', 'test', 'test', 'test', 'test', '2015-11-15');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
