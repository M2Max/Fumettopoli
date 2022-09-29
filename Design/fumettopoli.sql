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
INSERT INTO `cart_user` VALUES (12,'Demon Slayer 20',12,54),(12,'Dr. Stone 11',1,4.5);
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
  `Price` float NOT NULL,
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
INSERT INTO `product` VALUES ('Boruto - Naruto Next Generations 16','Boruto, figlio di Naruto e Hinata, cerca disperatamente di attirare l\'attenzione del padre, impegnatissimo per via del suo ruolo di Hokage. Ribelle e insoddisfatto, diverr├á discepolo di Sasuke. L\'insolita coppia, nonostante il periodo di pace, dovr├á affrontare una minaccia immane...','Fumetto','https://mangayo.it/13893-large_default/boruto-naruto-next-generations-16.jpg',100,5.2),('Demon Slayer 20','Giappone, albori del ventesimo secolo. Il giovane Tanjiro, un gentile venditore di carbone, vede la sua quotidianit├á stravolta dallo sterminio della famiglia ad opera di un demone. L\'unica rimasta in vita ├¿ la sorella minore Nezuko, che tuttavia ├¿ stata trasformata in un demone a sua volta. Per farla tornare come prima e vendicarsi del mostro che ha ucciso la madre e i fratellini, Tanjiro si mette in viaggio con Nezuko. Ha cos├¼ inizio questa storia di sangue, spade e avventura!','Fumetto','https://mangayo.it/13701-large_default/demon-slayer-20.jpg',100,4.5),('Dr. Stone 11','\r\n\r\n├ê l\'anno 5738: da migliaia di anni l\'intera umanit├á si ritrova tramutata in pietra a causa di una catastrofe naturale. Ooki Taiju riesce inspiegabilmente a risvegliarsi, trovandosi cos├¼ di fronte ad una realt├á completamente diversa da quanto ricordava, una realt├á dove la natura ha ripreso il sopravvento sulla civilt├á umana. Al suo risveglio il ragazzo si ricongiunge con il suo amico Senkuu, un giovane e geniale scienziato anche lui risvegliatosi qualche mese prima. Insieme i ragazzi sperano di scoprire la causa dietro all\'improvvisa tramutazione in pietra e, nel frattempo, di trovare una cura. Non tutto, per├▓, va come previsto...\r\n\r\nDr.Stone si ├¿ aggiudicato il 64┬░ Shogakukan Manga Award nella categoria \"miglior manga shounen\".\r\n','Fumetto','https://mangayo.it/215-large_default/dr-stone-11.jpg',100,4.5),('Dragon Ball Ultimate Edition2','Un fumetto senza prePer la gioia di tutti gli amanti del fumetto, ecco finalmente la Dragon Ball Ultimate Edition, lussuosissima riedizione della fondamentale opera del maestro Toriyama che, con i testi recentemente aggiornati, riprende il formato e la grafica della ÔÇ£leggendariaÔÇØ Perfect Edition. Composta da 34 volumi, con copertina rigida di 15x21 cm e sovraccoperta, l\'edizione proporr├á anche le pagine a colori originali realizzate in occasione della prima pubblicazione in Giappone su rivista, per regalare a vecchi e nuovi lettori unÔÇÖesperienza di lettura il pi├╣ fedele possibile allÔÇÖoriginale giapponese!cedenti','Fumetto','https://mangayo.it/12701-large_default/dragon-ball-ultimate-edition-2.jpg',100,15),('Fullmetal Alchemist 23','Edward e Alphonse Elric sono due fratelli che fin da piccoli si dimostrano estremamente portati per lÔÇÖalchimia. Quella che nel nostro mondo ├¿ considerata una disciplina quasi magica, nel loro ├¿ una vera e propria scienza con tanto di libri su cui studiare ed esami da fare per poterla praticare. Purtroppo, Ed e Al commettono un tragico errore che segner├á per sempre le loro vite.\r\n','Fumetto','https://mangayo.it/6449-large_default/fullmetal-alchemist-23.jpg',100,4.9),('La Leggenda Del Re Lupo','\r\n\r\nLA CONCLUSIONE DELLA SAGA FANTASY CREATA DAGLI AUTORI DI BERSERK E KEN IL GUERRIERO!\r\n\r\nPer non dimenticare il corso della storia, uno studioso proveniente dal presente ha preso il posto di Gengis Khan, defunto prima del previsto. Riuscir├á a essere all\'altezza del condottiero mongolo?\r\n','Fumetto','https://mangayo.it/16007-large_default/la-leggenda-del-re-lupo.jpg',100,7),('One Piece Jump Remix Edition vol. 14','Rivista del manga One Piece contentente i capitoli dal 239 al 271.','Fumetto','https://mangayo.it/10920-large_default/one-piece-jump-remix-edition-vol-14.jpg',100,19.9),('Slam Dunk 1','\r\n\r\nHanamichi Sakuragi ├¿ una matricola del liceo Shohoku ed ├¿ sostanzialmente un attaccabrighe che non passa certo inosservato con i suoi capelli rossi fuori dal comune e con la sua altezza. Entrer├á nel mondo del basket dopo essersi innamorato di una ragazza che si chiama Haruko, alla quale questo sport piace molto... quindi per conquistarla decide di entrare nella squadra di basket della sua scuola, anche se di questo sport non conosce nemmeno le regole! Gli inizi non saranno quindi certo dei pi├╣ semplici, ma sotto sotto si potr├á pian piano scoprire in lui un talento innato!\r\n','Fumetto','https://mangayo.it/1447-large_default/slam-dunk-1.jpg',100,7),('Solo Leveling 1','Il \"Gate\", un misterioso portale che collega il mondo umano a quello di terribili mostri, mette a rischio la vita degli esseri umani. Delle persone con particolari poteri, gli \"hunter\", combattono per contrastarli. Sung Jinwoo ├¿ molto debole, senza particolari abilit├á, ed ├¿ schedato come hunter di \"livello E\". Nonostante questo, cerca di fare del suo meglio per portare avanti il suo compito e pagare le spese mediche della madre. Ma un giorno, a seguito di un inspiegabile evento, Jinwoo comincia a sviluppare i suoi poteri... che possa diventare un imbattibile hunter di \"livello S\"?','Fumetto','https://mangayo.it/2340-large_default/solo-leveling-1.jpg',100,8.9),('Spy x Family Special Pack (Vol. 1-3) + 3 Segnalibri Esclusivi - Edizione Giapponese','Ecco il manga che ha rivoluzionato il genere delle spy story! \r\n\r\nNome in codice: Twilight. Pu├▓ mutare il proprio volto in un secondo. Pu├▓ sventare il lancio di un missile un attimo prima dellÔÇÖirreparabile. Pu├▓ portare a compimento imprese impossibili. Niente per├▓ lÔÇÖha preparato alla prossima missione: trovare moglie (e figlio!) in una settimanaÔÇª\r\n\r\nUna speciale raccolta contenente i primi 3 volumi del manga di Spy x Family, con tre segnalibri esclusivi in omaggio!\r\n','Fumetto','https://mangayo.it/10048-large_default/spy-x-family-special-pack-vol-1-3-3-segnalibri-esclusivi-edizione-giapponese.jpg',100,34.9);
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

-- Dump completed on 2022-09-29 16:20:34
