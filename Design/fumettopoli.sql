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
-- Table structure for table `banners`
--

DROP TABLE IF EXISTS `banners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `banners` (
  `ProductName` varchar(256) NOT NULL,
  `Image` varchar(256) NOT NULL,
  PRIMARY KEY (`ProductName`),
  CONSTRAINT `product_name` FOREIGN KEY (`ProductName`) REFERENCES `product` (`Name`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banners`
--

LOCK TABLES `banners` WRITE;
/*!40000 ALTER TABLE `banners` DISABLE KEYS */;
INSERT INTO `banners` VALUES ('Boruto - Naruto Next Generations 16','https://www.otaquest.com/wp-content/uploads/2019/06/5793-SeriesHeader_Boruto_2000x800.jpg'),('Death Note 1','https://img1.ak.crunchyroll.com/i/spire3/8a0aa2b36b98d603ccceafac770a64331657131401_main.jpg'),('Jujustu Kaisen 1','https://i.pinimg.com/originals/b2/5c/25/b25c254fdf35de6a28a00cab792df7d4.jpg'),('Spy x Family Special Pack (Vol. 1-3) - Edizione Giapponese','https://dw9to29mmj727.cloudfront.net/promo/2016/6087-632_SJ_SpyFamily_2000x800_jpg_jpeg_wm');
/*!40000 ALTER TABLE `banners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cards`
--

DROP TABLE IF EXISTS `cards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cards` (
  `OwnerName` varchar(32) NOT NULL,
  `CardName` varchar(32) NOT NULL,
  `CardNumber` int(32) NOT NULL,
  `CardExpiration` date NOT NULL,
  `CardCVV` int(3) NOT NULL,
  `UserCard` int(32) NOT NULL,
  PRIMARY KEY (`CardNumber`,`UserCard`),
  KEY `user_card` (`UserCard`),
  CONSTRAINT `user_card` FOREIGN KEY (`UserCard`) REFERENCES `user` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cards`
--

LOCK TABLES `cards` WRITE;
/*!40000 ALTER TABLE `cards` DISABLE KEYS */;
INSERT INTO `cards` VALUES ('Maximiliano Mamone','Carta di credito 1',1234567890,'2023-12-14',312,30);
/*!40000 ALTER TABLE `cards` ENABLE KEYS */;
UNLOCK TABLES;

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
  `ID` int(32) NOT NULL AUTO_INCREMENT,
  `Total` double NOT NULL,
  `CardUsed` int(32) NOT NULL,
  `OrderUser` int(32) NOT NULL,
  `Status` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`ID`),
  KEY `user_order_id` (`OrderUser`),
  KEY `card_used` (`CardUsed`),
  CONSTRAINT `card_used` FOREIGN KEY (`CardUsed`) REFERENCES `cards` (`CardNumber`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_order_id` FOREIGN KEY (`OrderUser`) REFERENCES `user` (`ID`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (56,30,1234567890,30,0);
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
  `QuantityAvailable` int(10) unsigned NOT NULL,
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
INSERT INTO `product` VALUES ('Boruto - Naruto Next Generations 16','Boruto ├¿ figlio di Naruto, il settimo Hokage. Il ragazzo rifiuta completamente il padre ma nonostante questo sentimento, lo rispetta come eroe e vorrebbe sorpassarne le capacit├á. Boruto incontra Sasuke, padre di una sua amica, e gli chiede di diventare il suo apprendista! Si alza cos├¼ il sipario sulla storia di una nuova generazione! ','Fumetto','https://mangayo.it/13893-large_default/boruto-naruto-next-generations-16.jpg',81,5.2),('Death Note 1','Light Yagami ├¿ un geniale quanto cinico liceale diciassettenne. La vita lo tedia e il mondo, con la sua ingiustizia, lo disgusta profondamente. Ryuk ├¿ un dio della morte, che come tutti i suoi ÔÇ£colleghiÔÇØ conduce da tempo immemorabile unÔÇÖesistenza vuota e minata dalla noia. In cerca di distrazioni, Ryuk decide di abbandonare nel mondo degli uomini il suo Quaderno Della Morte, allÔÇÖapparenza un semplice block notes, ma dotato di un tremendo potere, perch├® scrivere il nome di una persona sul Quaderno significa decretarne la morte. Dopo aver per caso trovato il Quaderno Della Morte, e averne compreso le potenzialit├á, Light decide di servirsene per cambiare il mondo, mentre Ryuk lo osserva divertito.','Fumetto','https://mangayo.it/188-large_default/death-note-1.jpg',100,4.9),('Demon Slayer 20','Tanjiro ├¿ il primogenito di una famiglia che ha perso il padre. Un giorno, visita un\'altra citt├á per vendere carbone ma finisce col passare la notte l├¼, invece di tornare a casa, per via di una voce riguardante un demone che di notte vaga per una montagna l├¼ vicino. Quando torna a casa il giorno seguente, ad attenderlo ci sar├á una tragedia.','Fumetto','https://mangayo.it/13701-large_default/demon-slayer-20.jpg',100,4.5),('Dr. Stone 11','\r\n\r\n Anno 5738: da migliaia di anni l\'intera umanit├á si ritrova tramutata in pietra a causa di una catastrofe naturale. Ooki Taiju riesce inspiegabilmente a risvegliarsi, trovandosi cos├¼ di fronte ad una realt├á completamente diversa da quanto ricordava, dove la natura ha ripreso il sopravvento sulla civilt├á umana. Al suo risveglio il ragazzo si ricongiunge con il suo amico Senkuu, un giovane e geniale scienziato anche lui risvegliatosi qualche mese prima. Insieme i ragazzi sperano di scoprire la causa dietro all\'improvvisa tramutazione in pietra - e, nel frattempo, di trovare una cura. Non tutto, per├▓, va come previsto...\r\n','Fumetto','https://mangayo.it/215-large_default/dr-stone-11.jpg',100,4.5),('Dragon Ball Ultimate Edition2',' Goku ├¿ un bambino fuori dal comune, ha un forza straordinaria ed una lunga coda da scimmia. Il nostro eroe ├¿ orfano e non ha mai conosciuto i suoi genitori, ha sempre vissuto con il nonno. Inizia la nostra storia, Goku ormai solo, custodisce gelosamente lÔÇÖunico ricordo del nonno recentemente morto, una sfera sulla quale sono disegnate quattro stelle. La vita di Goku cambia quando una ragazza di nome Bulma gli chiede di aiutarlo a ritrovare le sette sfere del drago (quando le sette sfere si riuniscono appare un drago che esaudir├á qualsiasi desiderio), una delle quali ├¿ proprio il ricordo del nonno, la quarta sfera. Il nostro protagonista accetta di aiutare Bulma, e lÔÇÖepopea di Dragonball ha inizioÔÇª ','Fumetto','https://mangayo.it/12701-large_default/dragon-ball-ultimate-edition-2.jpg',98,15),('Fullmetal Alchemist 23','Ambientato in un mondo alternativo simile all\'Europa di inizio 1900, narra i viaggi e la maturazione fisica e spirituale di due fratelli, Edward e Alphonse Elric. Abbandonati dal padre alchimista in tenera et├á e cresciuti quindi dalla sola madre Trisha, i due bambini manifestano fin da subito grandi attitudini nello studio delle scienze alchemiche. Questo li porta, anni dopo, a tentare una trasmutazione umana, il massimo dei tab├╣ dell\'alchimia, al fine di riportare in vita la madre, morta di malattia. UnÔÇÖazione che pagheranno a caro prezzo, dando cos├¼ inizio a una fantastica avventura che li porter├á sulle tracce delle leggendaria Pietra Filosofale al fine di riparare all\'errore commesso. ','Fumetto','https://mangayo.it/6449-large_default/fullmetal-alchemist-23.jpg',19,4.9),('Inosuke Hashibira Demon Slayer Grandista - Banpresto Figure','Action figure di Inosuke da Demon Slayer','Action Figure','https://mangayo.it/12828-large_default/inosuke-hashibira-demon-slayer-grandista-banpresto-figure.jpg',100,44.9),('Izuku Midoriya My Hero Academia Bravegraph Vol.1 - Banpresto Figure','Action figure di Izuku da My Hero Academia','Action Figure','https://mangayo.it/15643-large_default/izuku-midoriya-my-hero-academia-bravegraph-vol1-banpresto-figure.jpg',100,34.9),('Jujustu Kaisen 1','Itadori Y┼½ji ├¿ uno studente all\'apparenza normale, che di normale non ha nulla, che frequenta il Club dell\'Occulto. I suoi compagni si troveranno nei guai dopo aver trovato il dito mummificato di Ryomen Sukuna, la pi├╣ feroce divinit├á demoniaca, e per salvarli cos├¼ da diventare pi├╣ forte sar├á costretto a ingoiarlo. Y┼½ji diventa tutt\'uno con il demone e sotto la guida del pi├╣ potente degli stregoni, Satoru Goj┼ì, entra nell\'Istituto di Arti Occulte di Tokyo, un\'organizzazione che combatte le Maledizioni; il suo destino ├¿ gi├á scritto: dovr├á cercare tutte le 20 dita di Sukuna, ingerirle per poi essere ucciso, cos├¼ da porre fine una volta per tutte alla minaccia che alberga dentro di lui.','Fumetto','https://mangayo.it/1729-large_default/jujutsu-kaisen-1.jpg',100,4.9),('La Leggenda Del Re Lupo',' La storia ├¿ quella di Iba, giovane e solerte storico giapponese che scomparve misteriosamente durante un viaggio in Cina, dove si era recato per svolgere una ricerca sulla cosiddetta Via della seta. Dopo un anno, la fidanzata Kyoko, certa del fatto che il giovane amato sia ancora in vita, decide di mettersi anche lei in viaggio e, una volta giunta in quelle terre, si trova al centro di un enigma: terrificanti nuvole nere, infatti, la circondano facendole perdere conoscenza e catapultandolaÔÇª nellÔÇÖanno 1212 e nella regione cinese di Seika, a quel tempo sotto il controllo dellÔÇÖImpero Mongolo.','Fumetto','https://mangayo.it/16007-large_default/la-leggenda-del-re-lupo.jpg',100,7),('Minato Namikaze Naruto Shippuden Vibration Stars - Banpresto Figure','Action figure di Minato da Naruto','Action Figure','https://mangayo.it/14258-large_default/minato-namikaze-naruto-shippuden-vibration-stars-banpresto-figure.jpg',100,34.9),('Monkey D. Luffy (Third Act) One Piece Wano Kuni Ichibansho Ichiban Kuji - Banpresto Figure','Action figure di Luffy in modalit├á Gear Fourth da One Piece','Action Figure','https://mangayo.it/15035-large_default/monkey-d-luffy-third-act-one-piece-wano-kuni-ichibansho-ichiban-kuji-banpresto-figure.jpg',50,84.9),('One Piece Jump Remix Edition vol. 14','Rivista del manga One Piece contentente i capitoli dal 239 al 271.','Fumetto','https://mangayo.it/10920-large_default/one-piece-jump-remix-edition-vol-14.jpg',97,19.9),('Piccolo Daimaoh (Ex Mystical Adventure) Dragon Ball Ichibanso Ichiban Kuji - Banpresto Figure','Action figure di Piccolo Daimaoh dalla serie originale di Dragon Ball','Action Figure','https://mangayo.it/15072-large_default/piccolo-daimaoh-ex-mystical-adventure-dragon-ball-ichibanso-ichiban-kuji-banpresto-figure.jpg',100,64.9),('Slam Dunk 1','Hanamichi Sakuragi ├¿ una matricola del liceo Shohoku ed ├¿ sostanzialmente un attaccabrighe che non passa certo inosservato con i suoi capelli rossi fuori dal comune e con la sua altezza. Entrer├á nel mondo del basket dopo essersi innamorato di una ragazza che si chiama Haruko, alla quale questo sport piace molto... quindi per conquistarla decide di entrare nella squadra di basket della sua scuola... anche se ├¿ totalmente a digiuno di questo sport, di cui non conosce nemmeno le regole! Gli inizi non saranno quindi certo dei pi├╣ semplici, ma sotto sotto si potr├á pian piano scoprire in lui un talento innato per questo sport! \r\n','Fumetto','https://mangayo.it/1447-large_default/slam-dunk-1.jpg',0,7),('Solo Leveling 1','Il ÔÇ£GateÔÇØ, un misterioso portale che collega il mondo umano a quello di terribili mostri, mette a rischio la vita degli esseri umani. Delle persone con particolari poteri, gli ÔÇ£hunterÔÇØ, combattono per contrastarli. Sung Jinwoo ├¿ molto debole, senza particolari abilit├á, ed ├¿ schedato come hunter di ÔÇ£livello EÔÇØ. Nonostante questo, cerca di fare del suo meglio per portare avanti il suo compito e pagare le spese mediche della madreÔÇª Ma un giorno, a seguito di un inspiegabile evento, Jinwoo comincia a sviluppare i suoi poteriÔÇª Che possa diventare un imbattibile hunter di \"livello S\"?','Fumetto','https://mangayo.it/2340-large_default/solo-leveling-1.jpg',100,8.9),('Spy x Family Special Pack (Vol. 1-3) - Edizione Giapponese','Twilight, una delle migliori spie al mondo, ha trascorso la vita ad affrontare missioni sotto copertura per rendere il mondo un posto migliore. Un giorno per├▓ riceve un compito particolarmente difficile, per riuscire nella sua nuova missione dovr├á formare una famiglia temporanea e iniziare una nuova vita! ','Fumetto','https://mangayo.it/10048-large_default/spy-x-family-special-pack-vol-1-3-3-segnalibri-esclusivi-edizione-giapponese.jpg',100,34.9),('The Tanjiro Kamado II Demon Slayer Maximatic - Banpresto Figure','Action figure di Tanjiro da Demon Slayer','Action Figure','https://mangayo.it/14242-large_default/the-tanjiro-kamado-ii-demon-slayer-maximatic-banpresto-figure.jpg',100,34.9);
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
  `OrderID` int(32) NOT NULL,
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
INSERT INTO `products_ordered` VALUES ('Dragon Ball Ultimate Edition2',56,2,30);
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
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (30,'Mamo','$2a$08$CuhqEfAH9.PywPlQEIEjGutj.8HbRXj2zE/7dXEQ5vNeMJbg/eDem','Maximiliano','Mamone','Via garibaldi 20, Fidenza');
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

-- Dump completed on 2022-10-10  9:16:28
