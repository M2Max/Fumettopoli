-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 09, 2022 at 03:54 PM
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
-- Table structure for table `banners`
--

CREATE TABLE `banners` (
  `ProductName` varchar(256) NOT NULL,
  `Image` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(12, 'Dragon Ball Ultimate Edition2', 1, 15);

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
  `ID` int(32) NOT NULL,
  `Total` double NOT NULL,
  `CardUsed` int(32) NOT NULL,
  `OrderUser` int(32) NOT NULL,
  `Status` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`ID`, `Total`, `CardUsed`, `OrderUser`, `Status`) VALUES
(45, 90, 123456, 12, 0),
(46, 4.9, 123456, 12, 0),
(47, 628.2, 123456, 12, 0);

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
('Boruto - Naruto Next Generations 16', 'Boruto è figlio di Naruto, il settimo Hokage. Il ragazzo rifiuta completamente il padre ma nonostante questo sentimento, lo rispetta come eroe e vorrebbe sorpassarne le capacità. Boruto incontra Sasuke, padre di una sua amica, e gli chiede di diventare il suo apprendista! Si alza così il sipario sulla storia di una nuova generazione! ', 'Fumetto', 'https://mangayo.it/13893-large_default/boruto-naruto-next-generations-16.jpg', 100, 5.2),
('Demon Slayer 20', 'Tanjiro è il primogenito di una famiglia che ha perso il padre. Un giorno, visita un\'altra città per vendere carbone ma finisce col passare la notte lì, invece di tornare a casa, per via di una voce riguardante un demone che di notte vaga per una montagna lì vicino. Quando torna a casa il giorno seguente, ad attenderlo ci sarà una tragedia.', 'Fumetto', 'https://mangayo.it/13701-large_default/demon-slayer-20.jpg', 100, 4.5),
('Dr. Stone 11', '\r\n\r\n Anno 5738: da migliaia di anni l\'intera umanità si ritrova tramutata in pietra a causa di una catastrofe naturale. Ooki Taiju riesce inspiegabilmente a risvegliarsi, trovandosi così di fronte ad una realtà completamente diversa da quanto ricordava, dove la natura ha ripreso il sopravvento sulla civiltà umana. Al suo risveglio il ragazzo si ricongiunge con il suo amico Senkuu, un giovane e geniale scienziato anche lui risvegliatosi qualche mese prima. Insieme i ragazzi sperano di scoprire la causa dietro all\'improvvisa tramutazione in pietra - e, nel frattempo, di trovare una cura. Non tutto, però, va come previsto...\r\n', 'Fumetto', 'https://mangayo.it/215-large_default/dr-stone-11.jpg', 100, 4.5),
('Dragon Ball Ultimate Edition2', ' Goku è un bambino fuori dal comune, ha un forza straordinaria ed una lunga coda da scimmia. Il nostro eroe è orfano e non ha mai conosciuto i suoi genitori, ha sempre vissuto con il nonno. Inizia la nostra storia, Goku ormai solo, custodisce gelosamente l’unico ricordo del nonno recentemente morto, una sfera sulla quale sono disegnate quattro stelle. La vita di Goku cambia quando una ragazza di nome Bulma gli chiede di aiutarlo a ritrovare le sette sfere del drago (quando le sette sfere si riuniscono appare un drago che esaudirà qualsiasi desiderio), una delle quali è proprio il ricordo del nonno, la quarta sfera. Il nostro protagonista accetta di aiutare Bulma, e l’epopea di Dragonball ha inizio… ', 'Fumetto', 'https://mangayo.it/12701-large_default/dragon-ball-ultimate-edition-2.jpg', 100, 15),
('Fullmetal Alchemist 23', 'Ambientato in un mondo alternativo simile all\'Europa di inizio 1900, narra i viaggi e la maturazione fisica e spirituale di due fratelli, Edward e Alphonse Elric. Abbandonati dal padre alchimista in tenera età e cresciuti quindi dalla sola madre Trisha, i due bambini manifestano fin da subito grandi attitudini nello studio delle scienze alchemiche. Questo li porta, anni dopo, a tentare una trasmutazione umana, il massimo dei tabù dell\'alchimia, al fine di riportare in vita la madre, morta di malattia. Un’azione che pagheranno a caro prezzo, dando così inizio a una fantastica avventura che li porterà sulle tracce delle leggendaria Pietra Filosofale al fine di riparare all\'errore commesso. ', 'Fumetto', 'https://mangayo.it/6449-large_default/fullmetal-alchemist-23.jpg', 100, 4.9),
('Izuku Midoriya My Hero Academia Bravegraph Vol.1 - Banpresto Figure', 'Action figure di Izuku da My Hero Academia', 'Action Figure', 'https://mangayo.it/15643-large_default/izuku-midoriya-my-hero-academia-bravegraph-vol1-banpresto-figure.jpg', 100, 34.9),
('La Leggenda Del Re Lupo', ' La storia è quella di Iba, giovane e solerte storico giapponese che scomparve misteriosamente durante un viaggio in Cina, dove si era recato per svolgere una ricerca sulla cosiddetta Via della seta. Dopo un anno, la fidanzata Kyoko, certa del fatto che il giovane amato sia ancora in vita, decide di mettersi anche lei in viaggio e, una volta giunta in quelle terre, si trova al centro di un enigma: terrificanti nuvole nere, infatti, la circondano facendole perdere conoscenza e catapultandola… nell’anno 1212 e nella regione cinese di Seika, a quel tempo sotto il controllo dell’Impero Mongolo.', 'Fumetto', 'https://mangayo.it/16007-large_default/la-leggenda-del-re-lupo.jpg', 100, 7),
('Minato Namikaze Naruto Shippuden Vibration Stars - Banpresto Figure', 'Action figure di Minato da Naruto', 'Action Figure', 'https://mangayo.it/14258-large_default/minato-namikaze-naruto-shippuden-vibration-stars-banpresto-figure.jpg', 100, 34.9),
('One Piece Jump Remix Edition vol. 14', 'Rivista del manga One Piece contentente i capitoli dal 239 al 271.', 'Fumetto', 'https://mangayo.it/10920-large_default/one-piece-jump-remix-edition-vol-14.jpg', 100, 19.9),
('Slam Dunk 1', 'Hanamichi Sakuragi è una matricola del liceo Shohoku ed è sostanzialmente un attaccabrighe che non passa certo inosservato con i suoi capelli rossi fuori dal comune e con la sua altezza. Entrerà nel mondo del basket dopo essersi innamorato di una ragazza che si chiama Haruko, alla quale questo sport piace molto... quindi per conquistarla decide di entrare nella squadra di basket della sua scuola... anche se è totalmente a digiuno di questo sport, di cui non conosce nemmeno le regole! Gli inizi non saranno quindi certo dei più semplici, ma sotto sotto si potrà pian piano scoprire in lui un talento innato per questo sport! \r\n', 'Fumetto', 'https://mangayo.it/1447-large_default/slam-dunk-1.jpg', 100, 7),
('Solo Leveling 1', 'Il “Gate”, un misterioso portale che collega il mondo umano a quello di terribili mostri, mette a rischio la vita degli esseri umani. Delle persone con particolari poteri, gli “hunter”, combattono per contrastarli. Sung Jinwoo è molto debole, senza particolari abilità, ed è schedato come hunter di “livello E”. Nonostante questo, cerca di fare del suo meglio per portare avanti il suo compito e pagare le spese mediche della madre… Ma un giorno, a seguito di un inspiegabile evento, Jinwoo comincia a sviluppare i suoi poteri… Che possa diventare un imbattibile hunter di \"livello S\"?', 'Fumetto', 'https://mangayo.it/2340-large_default/solo-leveling-1.jpg', 100, 8.9),
('Spy x Family Special Pack (Vol. 1-3) - Edizione Giapponese', 'Twilight, una delle migliori spie al mondo, ha trascorso la vita ad affrontare missioni sotto copertura per rendere il mondo un posto migliore. Un giorno però riceve un compito particolarmente difficile, per riuscire nella sua nuova missione dovrà formare una famiglia temporanea e iniziare una nuova vita! ', 'Fumetto', 'https://mangayo.it/10048-large_default/spy-x-family-special-pack-vol-1-3-3-segnalibri-esclusivi-edizione-giapponese.jpg', 100, 34.9),
('The Tanjiro Kamado II Demon Slayer Maximatic - Banpresto Figure', 'Action figure di Tanjiro da Demon Slayer', 'Action Figure', 'https://mangayo.it/14242-large_default/the-tanjiro-kamado-ii-demon-slayer-maximatic-banpresto-figure.jpg', 100, 34.9);

-- --------------------------------------------------------

--
-- Table structure for table `products_ordered`
--

CREATE TABLE `products_ordered` (
  `ProductName` varchar(256) NOT NULL,
  `OrderID` int(32) NOT NULL,
  `QuantityOrdered` int(16) NOT NULL,
  `TotalProduct` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products_ordered`
--

INSERT INTO `products_ordered` (`ProductName`, `OrderID`, `QuantityOrdered`, `TotalProduct`) VALUES
('Dragon Ball Ultimate Edition2', 45, 6, 90),
('Fullmetal Alchemist 23', 46, 1, 4.9),
('Minato Namikaze Naruto Shippuden Vibration Stars - Banpresto Figure', 47, 18, 628.2);

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
-- Indexes for table `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`ProductName`);

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
  ADD KEY `user_order_id` (`OrderUser`),
  ADD KEY `card_used` (`CardUsed`);

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
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `ID` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `ID` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `banners`
--
ALTER TABLE `banners`
  ADD CONSTRAINT `product_name` FOREIGN KEY (`ProductName`) REFERENCES `product` (`Name`) ON DELETE CASCADE ON UPDATE CASCADE;

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
  ADD CONSTRAINT `card_used` FOREIGN KEY (`CardUsed`) REFERENCES `cards` (`CardNumber`) ON DELETE NO ACTION ON UPDATE NO ACTION,
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
