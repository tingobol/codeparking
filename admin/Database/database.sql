-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 03, 2015 at 11:48 AM
-- Server version: 5.5.41-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `DBLetsMeet`
--

-- --------------------------------------------------------

--
-- Table structure for table `LMLoginUsers`
--

CREATE TABLE IF NOT EXISTS `LMLoginUsers` (
  `LMLoginId` int(11) NOT NULL AUTO_INCREMENT,
  `LMUserid` varchar(100) NOT NULL,
  `LMPassword` varchar(50) NOT NULL,
  `LMEmailAddress` varchar(150) NOT NULL,
  `LMRole` enum('0','1') NOT NULL COMMENT '0-LMSuperAdmin,1-CompanyAdmin',
  `LMLoginEnabled` tinyint(1) NOT NULL,
  `LMCreatedOn` datetime NOT NULL,
  `LMCreatedBy` varchar(100) NOT NULL,
  PRIMARY KEY (`LMLoginId`),
  UNIQUE KEY `Userid` (`LMUserid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

-- --------------------------------------------------------

--
-- Table structure for table `LMUserProfile`
--

CREATE TABLE IF NOT EXISTS `LMUserProfile` (
  `LMLoginId` int(11) NOT NULL,
  `ClientId` varchar(25) DEFAULT NULL COMMENT 'Client Id of user',
  `FirstName` varchar(50) DEFAULT NULL COMMENT 'First name of user',
  `LastName` varchar(50) DEFAULT NULL COMMENT 'Last name of user',
  `CountryName` varchar(150) DEFAULT NULL COMMENT 'Country name of user from country_details table',
  `Timezones` varchar(100) DEFAULT NULL COMMENT 'Timezones of user',
  `gmt` varchar(20) DEFAULT NULL COMMENT 'GMT hrs on the basis of timezones',
  `LMCreatedOn` datetime DEFAULT NULL,
  `Mobilenumber` varchar(255) DEFAULT NULL,
  `AlternateMobileNumber` varchar(255) DEFAULT NULL,
  `Photo` blob,
  `DOB` date DEFAULT NULL,
  `Gender` enum('M','F','O') DEFAULT NULL COMMENT 'M-Male,F-Female,O-Others',
  `Occupation` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`LMLoginId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
