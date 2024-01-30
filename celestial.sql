-- MySQL dump 10.13  Distrib 8.0.24, for macos11 (x86_64)
--
-- Host: localhost    Database: celestial
-- ------------------------------------------------------
-- Server version	8.0.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone_number` varchar(50) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES ('2444b80e-506a-4994-8897-50bcc7f636f7','Habie','Doe','habie.doe@example.com','0224567890','2024-01-30 17:07:36','2024-01-30 17:07:36'),('2ad0b4ef-ef0d-496e-aa26-99944be6cff3','Astro','Doe','astro.doe@example.com','7724567890','2024-01-30 17:07:36','2024-01-30 17:07:36'),('b608b303-3a0d-42b9-af9d-089298f7d3c9','Memory','Doe','john.doe@example.com','1234567890','2024-01-30 16:48:54','2024-01-30 16:48:54'),('ecd647c5-7662-4631-80a4-d266ddf470b5','Manny','Quinn','mannyquinn@example.com','0334567890','2024-01-30 17:07:36','2024-01-30 17:07:36');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments` (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `customer_id` varchar(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `amount` int NOT NULL,
  `status` varchar(20) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `customer_id` (`customer_id`),
  CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
INSERT INTO `payments` VALUES ('372e1ca3-485a-464a-9052-480e4f9c72ae','b608b303-3a0d-42b9-af9d-089298f7d3c9',100,'incomplete','2024-01-30 18:06:36','2024-01-30 18:06:36'),('55000444-daa3-40d1-ac3a-5ee04abef10d','2444b80e-506a-4994-8897-50bcc7f636f7',100,'completed','2024-01-30 17:47:23','2024-01-30 17:47:23'),('55d0da22-1200-4f49-8305-1d096c87a841','2444b80e-506a-4994-8897-50bcc7f636f7',100,'completed','2024-01-30 17:20:51','2024-01-30 17:20:51'),('e8b1beee-e66f-475a-89e0-3a65d41b6639','ecd647c5-7662-4631-80a4-d266ddf470b5',100,'completed','2024-01-30 17:52:28','2024-01-30 17:52:28'),('ea0cfc93-d917-4f0e-8e4e-e143e39a7409','2ad0b4ef-ef0d-496e-aa26-99944be6cff3',50,'incomplete','2024-01-30 18:05:26','2024-01-30 18:05:26');
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservations`
--

DROP TABLE IF EXISTS `reservations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservations` (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `customer_id` varchar(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `payment_id` varchar(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `num_of_guests` int NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `customer_id` (`customer_id`),
  KEY `payment_id` (`payment_id`),
  CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE CASCADE,
  CONSTRAINT `reservations_ibfk_2` FOREIGN KEY (`payment_id`) REFERENCES `payments` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservations`
--

LOCK TABLES `reservations` WRITE;
/*!40000 ALTER TABLE `reservations` DISABLE KEYS */;
INSERT INTO `reservations` VALUES ('12cda5e3-0c82-418d-9378-d7a560faebb2','ecd647c5-7662-4631-80a4-d266ddf470b5','e8b1beee-e66f-475a-89e0-3a65d41b6639',2,'2024-01-30 17:54:19','2024-01-30 17:54:19'),('303fe072-be35-4591-8f3a-a8ca2dea9161','b608b303-3a0d-42b9-af9d-089298f7d3c9','372e1ca3-485a-464a-9052-480e4f9c72ae',4,'2024-01-30 18:09:23','2024-01-30 18:09:23'),('997dc899-2706-4fd3-b319-332b0f8f30db','2444b80e-506a-4994-8897-50bcc7f636f7','55d0da22-1200-4f49-8305-1d096c87a841',2,'2024-01-30 17:50:19','2024-01-30 17:50:19'),('badfc4b9-e1ee-4484-9cc4-4cfb52a8e9a8','2444b80e-506a-4994-8897-50bcc7f636f7','55d0da22-1200-4f49-8305-1d096c87a841',2,'2024-01-30 17:31:44','2024-01-30 17:31:44');
/*!40000 ALTER TABLE `reservations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-30 18:20:51
