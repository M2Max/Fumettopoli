-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 30, 2022 at 06:24 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fumettopoli`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart_user`
--

CREATE TABLE `cart_user` (
  `UsersCart` varchar(16) NOT NULL,
  `ProductInCart` varchar(256) NOT NULL,
  `QuantityInCart` int(16) NOT NULL,
  `TotalPriceCart` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `Name` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `ID` varchar(32) NOT NULL,
  `Total` double NOT NULL,
  `OrderUser` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `Name` varchar(256) NOT NULL,
  `Description` text DEFAULT NULL,
  `Image` varchar(256) DEFAULT NULL,
  `QuantityAvailable` int(10) NOT NULL,
  `Price` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `products_ordered`
--

CREATE TABLE `products_ordered` (
  `ProductName` varchar(256) NOT NULL,
  `OrderID` varchar(32) NOT NULL,
  `QuantityOrdered` int(16) NOT NULL,
  `TotalProduct` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `product_category`
--

CREATE TABLE `product_category` (
  `ProductName` varchar(256) NOT NULL,
  `CategoryName` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `Username` varchar(16) NOT NULL,
  `Password` varchar(16) NOT NULL,
  `Firstname` varchar(16) NOT NULL,
  `Lastname` varchar(16) NOT NULL,
  `Address` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart_user`
--
ALTER TABLE `cart_user`
  ADD PRIMARY KEY (`UsersCart`,`ProductInCart`),
  ADD KEY `product_in_cart` (`ProductInCart`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`Name`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `user_order` (`OrderUser`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`Name`);

--
-- Indexes for table `products_ordered`
--
ALTER TABLE `products_ordered`
  ADD PRIMARY KEY (`ProductName`,`OrderID`),
  ADD KEY `Order_ID` (`OrderID`);

--
-- Indexes for table `product_category`
--
ALTER TABLE `product_category`
  ADD PRIMARY KEY (`ProductName`,`CategoryName`),
  ADD KEY `Category_name` (`CategoryName`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`Username`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart_user`
--
ALTER TABLE `cart_user`
  ADD CONSTRAINT `product_in_cart` FOREIGN KEY (`ProductInCart`) REFERENCES `product` (`Name`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `users_cart` FOREIGN KEY (`UsersCart`) REFERENCES `user` (`Username`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `user_order` FOREIGN KEY (`OrderUser`) REFERENCES `user` (`Username`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `products_ordered`
--
ALTER TABLE `products_ordered`
  ADD CONSTRAINT `Order_ID` FOREIGN KEY (`OrderID`) REFERENCES `orders` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Product_ordered_name` FOREIGN KEY (`ProductName`) REFERENCES `product` (`Name`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `product_category`
--
ALTER TABLE `product_category`
  ADD CONSTRAINT `Category_name` FOREIGN KEY (`CategoryName`) REFERENCES `category` (`Name`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `Product_name` FOREIGN KEY (`ProductName`) REFERENCES `product` (`Name`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
