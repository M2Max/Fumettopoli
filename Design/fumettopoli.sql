-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 07, 2022 at 07:15 PM
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
-- Table structure for table `cards`
--

CREATE TABLE `cards` (
  `OwnerName` varchar(32) NOT NULL,
  `CardName` varchar(32) NOT NULL,
  `CardNumber` int(32) NOT NULL,
  `CardExpiration` date NOT NULL,
  `CardCVV` int(3) NOT NULL,
  `UserCard` int(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cards`
--

INSERT INTO `cards` (`OwnerName`, `CardName`, `CardNumber`, `CardExpiration`, `CardCVV`, `UserCard`) VALUES
('Maximiliano Mamone', 'La Carta', 123456, '2025-12-10', 123, 12);

-- --------------------------------------------------------

--
-- Table structure for table `cart_user`
--

CREATE TABLE `cart_user` (
  `UsersCart` int(32) NOT NULL,
  `ProductInCart` varchar(256) NOT NULL,
  `QuantityInCart` int(16) NOT NULL,
  `TotalPriceCart` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cart_user`
--

INSERT INTO `cart_user` (`UsersCart`, `ProductInCart`, `QuantityInCart`, `TotalPriceCart`) VALUES
(12, 'Demon Slayer 20', 17, 76.5),
(12, 'Dragon Ball Ultimate Edition2', 17, 255),
(12, 'One Piece Jump Remix Edition vol. 14', 1, 19.9),
(12, 'Slam Dunk 1', 1, 7);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `Name` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`Name`) VALUES
('Action Figure'),
('Fumetto');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `ID` varchar(32) NOT NULL,
  `Total` double NOT NULL,
  `OrderUser` int(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `Name` varchar(256) NOT NULL,
  `Description` text DEFAULT NULL,
  `CategoryName` varchar(256) NOT NULL,
  `Image` varchar(256) DEFAULT NULL,
  `QuantityAvailable` int(10) NOT NULL,
  `Price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`Name`, `Description`, `CategoryName`, `Image`, `QuantityAvailable`, `Price`) VALUES
('Boruto - Naruto Next Generations 16', 'Boruto, figlio di Naruto e Hinata, cerca disperatamente di attirare l\'attenzione del padre, impegnatissimo per via del suo ruolo di Hokage. Ribelle e insoddisfatto, diverrÔö£├í discepolo di Sasuke. L\'insolita coppia, nonostante il periodo di pace, dovrÔö£├í affrontare una minaccia immane...', 'Fumetto', 'https://mangayo.it/13893-large_default/boruto-naruto-next-generations-16.jpg', 100, 5.2),
('Demon Slayer 20', 'Giappone, albori del ventesimo secolo. Il giovane Tanjiro, un gentile venditore di carbone, vede la sua quotidianitÔö£├í stravolta dallo sterminio della famiglia ad opera di un demone. L\'unica rimasta in vita Ôö£┬┐ la sorella minore Nezuko, che tuttavia Ôö£┬┐ stata trasformata in un demone a sua volta. Per farla tornare come prima e vendicarsi del mostro che ha ucciso la madre e i fratellini, Tanjiro si mette in viaggio con Nezuko. Ha cosÔö£┬╝ inizio questa storia di sangue, spade e avventura!', 'Fumetto', 'https://mangayo.it/13701-large_default/demon-slayer-20.jpg', 100, 4.5),
('Dr. Stone 11', '\r\n\r\nÔö£├¬ l\'anno 5738: da migliaia di anni l\'intera umanitÔö£├í si ritrova tramutata in pietra a causa di una catastrofe naturale. Ooki Taiju riesce inspiegabilmente a risvegliarsi, trovandosi cosÔö£┬╝ di fronte ad una realtÔö£├í completamente diversa da quanto ricordava, una realtÔö£├í dove la natura ha ripreso il sopravvento sulla civiltÔö£├í umana. Al suo risveglio il ragazzo si ricongiunge con il suo amico Senkuu, un giovane e geniale scienziato anche lui risvegliatosi qualche mese prima. Insieme i ragazzi sperano di scoprire la causa dietro all\'improvvisa tramutazione in pietra e, nel frattempo, di trovare una cura. Non tutto, perÔö£Ôûô, va come previsto...\r\n\r\nDr.Stone si Ôö£┬┐ aggiudicato il 64Ôö¼Ôûæ Shogakukan Manga Award nella categoria \"miglior manga shounen\".\r\n', 'Fumetto', 'https://mangayo.it/215-large_default/dr-stone-11.jpg', 100, 4.5),
('Dragon Ball Ultimate Edition2', 'Un fumetto senza prePer la gioia di tutti gli amanti del fumetto, ecco finalmente la Dragon Ball Ultimate Edition, lussuosissima riedizione della fondamentale opera del maestro Toriyama che, con i testi recentemente aggiornati, riprende il formato e la grafica della ├ö├ç┬úleggendaria├ö├ç├ÿ Perfect Edition. Composta da 34 volumi, con copertina rigida di 15x21 cm e sovraccoperta, l\'edizione proporrÔö£├í anche le pagine a colori originali realizzate in occasione della prima pubblicazione in Giappone su rivista, per regalare a vecchi e nuovi lettori un├ö├ç├ûesperienza di lettura il piÔö£Ôòú fedele possibile all├ö├ç├ûoriginale giapponese!cedenti', 'Fumetto', 'https://mangayo.it/12701-large_default/dragon-ball-ultimate-edition-2.jpg', 100, 15),
('Fullmetal Alchemist 23', 'Edward e Alphonse Elric sono due fratelli che fin da piccoli si dimostrano estremamente portati per l├ö├ç├ûalchimia. Quella che nel nostro mondo Ôö£┬┐ considerata una disciplina quasi magica, nel loro Ôö£┬┐ una vera e propria scienza con tanto di libri su cui studiare ed esami da fare per poterla praticare. Purtroppo, Ed e Al commettono un tragico errore che segnerÔö£├í per sempre le loro vite.\r\n', 'Fumetto', 'https://mangayo.it/6449-large_default/fullmetal-alchemist-23.jpg', 100, 4.9),
('Izuku Midoriya My Hero Academia Bravegraph Vol.1 - Banpresto Figure', 'Action figure di Izuku da My Hero Academia', 'Action Figure', 'https://mangayo.it/15643-large_default/izuku-midoriya-my-hero-academia-bravegraph-vol1-banpresto-figure.jpg', 100, 34.9),
('La Leggenda Del Re Lupo', '\r\n\r\nLA CONCLUSIONE DELLA SAGA FANTASY CREATA DAGLI AUTORI DI BERSERK E KEN IL GUERRIERO!\r\n\r\nPer non dimenticare il corso della storia, uno studioso proveniente dal presente ha preso il posto di Gengis Khan, defunto prima del previsto. RiuscirÔö£├í a essere all\'altezza del condottiero mongolo?\r\n', 'Fumetto', 'https://mangayo.it/16007-large_default/la-leggenda-del-re-lupo.jpg', 100, 7),
('Minato Namikaze Naruto Shippuden Vibration Stars - Banpresto Figure', 'Action figure di Minato da Naruto', 'Action Figure', 'https://mangayo.it/14258-large_default/minato-namikaze-naruto-shippuden-vibration-stars-banpresto-figure.jpg', 100, 34.9),
('One Piece Jump Remix Edition vol. 14', 'Rivista del manga One Piece contentente i capitoli dal 239 al 271.', 'Fumetto', 'https://mangayo.it/10920-large_default/one-piece-jump-remix-edition-vol-14.jpg', 100, 19.9),
('Slam Dunk 1', '\r\n\r\nHanamichi Sakuragi Ôö£┬┐ una matricola del liceo Shohoku ed Ôö£┬┐ sostanzialmente un attaccabrighe che non passa certo inosservato con i suoi capelli rossi fuori dal comune e con la sua altezza. EntrerÔö£├í nel mondo del basket dopo essersi innamorato di una ragazza che si chiama Haruko, alla quale questo sport piace molto... quindi per conquistarla decide di entrare nella squadra di basket della sua scuola, anche se di questo sport non conosce nemmeno le regole! Gli inizi non saranno quindi certo dei piÔö£Ôòú semplici, ma sotto sotto si potrÔö£├í pian piano scoprire in lui un talento innato!\r\n', 'Fumetto', 'https://mangayo.it/1447-large_default/slam-dunk-1.jpg', 100, 7),
('Solo Leveling 1', 'Il \"Gate\", un misterioso portale che collega il mondo umano a quello di terribili mostri, mette a rischio la vita degli esseri umani. Delle persone con particolari poteri, gli \"hunter\", combattono per contrastarli. Sung Jinwoo Ôö£┬┐ molto debole, senza particolari abilitÔö£├í, ed Ôö£┬┐ schedato come hunter di \"livello E\". Nonostante questo, cerca di fare del suo meglio per portare avanti il suo compito e pagare le spese mediche della madre. Ma un giorno, a seguito di un inspiegabile evento, Jinwoo comincia a sviluppare i suoi poteri... che possa diventare un imbattibile hunter di \"livello S\"?', 'Fumetto', 'https://mangayo.it/2340-large_default/solo-leveling-1.jpg', 100, 8.9),
('Spy x Family Special Pack (Vol. 1-3) + 3 Segnalibri Esclusivi - Edizione Giapponese', 'Ecco il manga che ha rivoluzionato il genere delle spy story! \r\n\r\nNome in codice: Twilight. PuÔö£Ôûô mutare il proprio volto in un secondo. PuÔö£Ôûô sventare il lancio di un missile un attimo prima dell├ö├ç├ûirreparabile. PuÔö£Ôûô portare a compimento imprese impossibili. Niente perÔö£Ôûô l├ö├ç├ûha preparato alla prossima missione: trovare moglie (e figlio!) in una settimana├ö├ç┬¬\r\n\r\nUna speciale raccolta contenente i primi 3 volumi del manga di Spy x Family, con tre segnalibri esclusivi in omaggio!\r\n', 'Fumetto', 'https://mangayo.it/10048-large_default/spy-x-family-special-pack-vol-1-3-3-segnalibri-esclusivi-edizione-giapponese.jpg', 100, 34.9),
('The Tanjiro Kamado II Demon Slayer Maximatic - Banpresto Figure', 'Action figure di Tanjiro da Demon Slayer', 'Action Figure', 'https://mangayo.it/14242-large_default/the-tanjiro-kamado-ii-demon-slayer-maximatic-banpresto-figure.jpg', 100, 34.9);

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
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `ID` int(32) NOT NULL,
  `Username` varchar(16) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Firstname` varchar(16) NOT NULL,
  `Lastname` varchar(16) NOT NULL,
  `Address` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`ID`, `Username`, `Password`, `Firstname`, `Lastname`, `Address`) VALUES
(12, 'Mamox', '$2a$08$wekLJa.g3.xhm84W1j9sW.nudGVDTEwXOa3ZzjxDspSY/OLrtJ57q', 'Maximiliano', 'Mamone', 'Via Bargone Case Senni 17'),
(13, 'Miriano', '$2a$08$VhfE5JXIggncrmKjmNH6QeCebHhdFm5OfO3sOPu0tmQTdqWDO9PE2', 'Maximiliano', 'Mamone', 'Via Bargone Case Senni 17'),
(26, 'Giadina', '$2a$08$dgEQa9NCv6UoyfDbm2E90e7x720VjoNlbvVQR24HSTjGY2dEyw2Gm', 'Giada', 'Ghisoni', 'Via bargone lombasino 20'),
(27, 'lori', '$2a$08$74H2YfQvUQgTPJrgG3ANVOzE3VUNaWbyEEdOrfYinVULKGNLr5.KS', 'Lorenzo', 'Cipelli', 'Via del ritardo 104');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cards`
--
ALTER TABLE `cards`
  ADD PRIMARY KEY (`CardNumber`,`UserCard`),
  ADD KEY `user_card` (`UserCard`);

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
  ADD KEY `user_order_id` (`OrderUser`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`Name`),
  ADD KEY `category_product` (`CategoryName`);

--
-- Indexes for table `products_ordered`
--
ALTER TABLE `products_ordered`
  ADD PRIMARY KEY (`ProductName`,`OrderID`),
  ADD KEY `Order_ID` (`OrderID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`,`Username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `ID` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cards`
--
ALTER TABLE `cards`
  ADD CONSTRAINT `user_card` FOREIGN KEY (`UserCard`) REFERENCES `user` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `cart_user`
--
ALTER TABLE `cart_user`
  ADD CONSTRAINT `product_in_cart` FOREIGN KEY (`ProductInCart`) REFERENCES `product` (`Name`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_cart_id` FOREIGN KEY (`UsersCart`) REFERENCES `user` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `user_order_id` FOREIGN KEY (`OrderUser`) REFERENCES `user` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `category_product` FOREIGN KEY (`CategoryName`) REFERENCES `category` (`Name`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `products_ordered`
--
ALTER TABLE `products_ordered`
  ADD CONSTRAINT `Order_ID` FOREIGN KEY (`OrderID`) REFERENCES `orders` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Product_ordered_name` FOREIGN KEY (`ProductName`) REFERENCES `product` (`Name`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
