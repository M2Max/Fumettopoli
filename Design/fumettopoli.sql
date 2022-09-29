-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: fumettopoli
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart_user`
--

DROP TABLE IF EXISTS `cart_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart_user` (
  `UsersCart` int(32) NOT NULL,
  `ProductInCart` varchar(256) NOT NULL,
  `QuantityInCart` int(16) NOT NULL,
  `TotalPriceCart` double NOT NULL,
  PRIMARY KEY (`UsersCart`,`ProductInCart`),
  KEY `product_in_cart` (`ProductInCart`),
  CONSTRAINT `product_in_cart` FOREIGN KEY (`ProductInCart`) REFERENCES `product` (`Name`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_cart_id` FOREIGN KEY (`UsersCart`) REFERENCES `user` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_user`
--

LOCK TABLES `cart_user` WRITE;
/*!40000 ALTER TABLE `cart_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `Name` varchar(256) NOT NULL,
  PRIMARY KEY (`Name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES ('Action Figure'),('Fumetto');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `ID` varchar(32) NOT NULL,
  `Total` double NOT NULL,
  `OrderUser` int(32) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `user_order_id` (`OrderUser`),
  CONSTRAINT `user_order_id` FOREIGN KEY (`OrderUser`) REFERENCES `user` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `Name` varchar(256) NOT NULL,
  `Description` text DEFAULT NULL,
  `CategoryName` varchar(256) NOT NULL,
  `Image` varchar(256) DEFAULT NULL,
  `QuantityAvailable` int(10) NOT NULL,
  `Price` int(10) NOT NULL,
  PRIMARY KEY (`Name`),
  KEY `category_product` (`CategoryName`),
  CONSTRAINT `category_product` FOREIGN KEY (`CategoryName`) REFERENCES `category` (`Name`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES ('Fumetto 2','Un altro fumetto fantasmagorico','Fumetto','Immagine spaziale',40,23),('Fumetto incredibile','Un fumetto senza precedenti','Fumetto','https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F916nEGmO96L.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.it%2FCapire-reinventare-fumetto-Scott-McCloud%2Fdp%2F883273124X&tbnid=z1eNz5how8cYNM&vet=12ahUKEwjqnuftjKP6',10,7);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_ordered`
--

DROP TABLE IF EXISTS `products_ordered`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products_ordered` (
  `ProductName` varchar(256) NOT NULL,
  `OrderID` varchar(32) NOT NULL,
  `QuantityOrdered` int(16) NOT NULL,
  `TotalProduct` double NOT NULL,
  PRIMARY KEY (`ProductName`,`OrderID`),
  KEY `Order_ID` (`OrderID`),
  CONSTRAINT `Order_ID` FOREIGN KEY (`OrderID`) REFERENCES `orders` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Product_ordered_name` FOREIGN KEY (`ProductName`) REFERENCES `product` (`Name`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_ordered`
--

LOCK TABLES `products_ordered` WRITE;
/*!40000 ALTER TABLE `products_ordered` DISABLE KEYS */;
/*!40000 ALTER TABLE `products_ordered` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `ID` int(32) NOT NULL AUTO_INCREMENT,
  `Username` varchar(16) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Firstname` varchar(16) NOT NULL,
  `Lastname` varchar(16) NOT NULL,
  `Address` varchar(256) NOT NULL,
  PRIMARY KEY (`ID`,`Username`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (12,'Mamox','$2a$08$wekLJa.g3.xhm84W1j9sW.nudGVDTEwXOa3ZzjxDspSY/OLrtJ57q','Maximiliano','Mamone','Via Bargone Case Senni 17'),(13,'Miriano','$2a$08$VhfE5JXIggncrmKjmNH6QeCebHhdFm5OfO3sOPu0tmQTdqWDO9PE2','Maximiliano','Mamone','Via Bargone Case Senni 17'),(26,'Giadina','$2a$08$dgEQa9NCv6UoyfDbm2E90e7x720VjoNlbvVQR24HSTjGY2dEyw2Gm','Giada','Ghisoni','Via bargone lombasino 20'),(27,'lori','$2a$08$74H2YfQvUQgTPJrgG3ANVOzE3VUNaWbyEEdOrfYinVULKGNLr5.KS','Lorenzo','Cipelli','Via del ritardo 104');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-29 13:13:05
