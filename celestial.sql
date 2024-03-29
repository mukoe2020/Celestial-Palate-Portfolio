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
INSERT INTO `customers` VALUES ('2444b80e-506a-4994-8897-50bcc7f636f7','Habie','Doe','habie.doe@example.com','0224567890','2024-01-30 17:07:36','2024-01-30 17:07:36'),('2ad0b4ef-ef0d-496e-aa26-99944be6cff3','Astro','Doe','astro.doe@example.com','7724567890','2024-01-30 17:07:36','2024-01-30 17:07:36'),('2c16bf1a-1e65-46a8-80c8-c4b02f8ff7b4','thunder','conquered','thunderclient@trial.com','057372352737','2024-03-29 11:53:48','2024-03-29 11:57:56'),('30d7cdd8-517c-4d03-8c0d-fd8ecae75b29','Jung','Kook','jungkook@gmail.com','0549812345','2024-02-08 17:52:42','2024-02-08 17:52:42'),('3ef50b4f-7833-4d8d-b5c7-ad86f3c948c5','final ','testing','finaltesting@gmail.com','476576576254762','2024-02-08 14:59:58','2024-02-08 14:59:58'),('4b5239e5-f67d-457a-8ee0-ba759744ce15','Jung','Kook','jungkook@gmail.com','0549812345','2024-02-08 17:50:01','2024-02-08 17:50:01'),('5aaaf8fd-07f5-471d-885c-89589c9bad2e','Joe','Goldberg','joe.goldberg@example.com','123-456-7890','2024-02-03 15:29:21','2024-02-03 15:29:21'),('6116388f-b0e6-4fa4-82a1-574e913c0dce','Prissy','Goldberg','prissy.goldberg@example.com','045-456-7890','2024-02-03 17:27:54','2024-02-03 17:27:54'),('6bb7e87d-b68d-4f0c-a9c0-ad548f9226db','Amor','Quinn','amorquinn@example.com','0554567890','2024-01-30 21:51:02','2024-01-30 21:51:02'),('85a6ea15-2dd0-49b8-b6e8-d18f69e925b1','Master','Check up','mastercheckup@gmail.com','275723728993','2024-02-10 16:49:46','2024-02-10 16:49:46'),('a745f1fe-caa2-402c-b8bb-701e3db6f7fe','James','Gold','jamie.goldberg@example.com','099-456-7890','2024-02-05 13:01:59','2024-02-05 13:08:07'),('ae9abba3-b05d-415b-8989-0a3b1184b4f1','Baby','M','babym@gmail.com','05677777777','2024-02-08 17:59:34','2024-02-08 17:59:34'),('b01292e0-34e6-4ce8-906c-a9a658708fa0','Sensei','Crazy','senseicrazy@gmail.com','023456789','2024-02-06 10:54:00','2024-02-06 10:54:00'),('b608b303-3a0d-42b9-af9d-089298f7d3c9','Memory','Doe','john.doe@example.com','1234567890','2024-01-30 16:48:54','2024-01-30 16:48:54'),('d638e7c3-b50d-4122-9272-700d57c777be','netlify','test','netlifytest@gmail.com','25362853823','2024-02-13 13:32:30','2024-02-13 13:32:30'),('d8cc43ac-d5ea-434c-a544-2de77fb44df2','Jung','Kook','jungkook@gmail.com','0549812345','2024-02-08 17:49:29','2024-02-08 17:49:29'),('dde7c028-ce8f-4c06-a0f6-48016d3005af','Habiba','Book','habibabook@gmail.com','0507126659','2024-02-17 12:17:33','2024-02-17 12:17:33'),('e0cd6c8c-de62-46f6-acde-eb02b7cc68b1','Habiba','Adam Salisu','habiepalmer@gmail.com','0507126659','2024-02-17 14:34:22','2024-02-17 14:34:22'),('ecd647c5-7662-4631-80a4-d266ddf470b5','Manny','Quans','mannyquinn@example.com','0334567890','2024-01-30 17:07:36','2024-02-03 17:35:20'),('fc40576c-97c0-479a-a076-aee1c17d4e5a','Habiba','Adam Salisu','habibaadamsalisu@gmail.com','0507126659','2024-02-07 18:07:51','2024-02-07 18:07:51'),('ffaa3b1c-8ebf-45e2-abb3-84677f44e3c2','sgdd','de','sdjsdg@gmail.com','0507126659','2024-02-17 12:34:52','2024-02-17 12:34:52');
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
INSERT INTO `payments` VALUES ('123b0aba-176a-450d-91f7-2ec9e8e3ff29','85a6ea15-2dd0-49b8-b6e8-d18f69e925b1',100,'completed','2024-02-10 16:49:47','2024-02-10 16:49:47'),('20ba779b-8878-4a17-a9f1-cbfbc3494232','ffaa3b1c-8ebf-45e2-abb3-84677f44e3c2',100,'completed','2024-02-17 12:34:53','2024-02-17 12:34:53'),('296353d3-3832-47d3-9795-6b7e7542a85e','dde7c028-ce8f-4c06-a0f6-48016d3005af',100,'completed','2024-02-17 12:17:34','2024-02-17 12:17:34'),('2cc998d8-a1d1-48e5-b10c-75d422e58f95','d8cc43ac-d5ea-434c-a544-2de77fb44df2',100,'completed','2024-02-08 17:49:29','2024-02-08 17:49:29'),('52ff6cde-cdfd-4f71-b232-48a073e213bd','3ef50b4f-7833-4d8d-b5c7-ad86f3c948c5',100,'completed','2024-02-08 14:59:58','2024-02-08 14:59:58'),('55000444-daa3-40d1-ac3a-5ee04abef10d','2444b80e-506a-4994-8897-50bcc7f636f7',100,'completed','2024-01-30 17:47:23','2024-01-30 17:47:23'),('55d0da22-1200-4f49-8305-1d096c87a841','2444b80e-506a-4994-8897-50bcc7f636f7',100,'completed','2024-01-30 17:20:51','2024-01-30 17:20:51'),('5d9012cf-6e2a-473a-8442-ff9402c783d3','ae9abba3-b05d-415b-8989-0a3b1184b4f1',100,'completed','2024-02-08 17:59:34','2024-02-08 17:59:34'),('7339d109-a3a0-4ac3-8ac2-b02ae161d881','4b5239e5-f67d-457a-8ee0-ba759744ce15',100,'completed','2024-02-08 17:50:01','2024-02-08 17:50:01'),('78af3869-ef22-4fdf-9e8f-ab48f0013cb6','b01292e0-34e6-4ce8-906c-a9a658708fa0',100,'completed','2024-02-07 18:38:49','2024-02-07 18:38:49'),('844c37d2-17ad-4916-9e7b-b9c8bcfb61fa','b01292e0-34e6-4ce8-906c-a9a658708fa0',100,'completed','2024-02-07 18:50:29','2024-02-07 18:50:29'),('85649e5b-ed10-4b45-a137-c14af1d701ac','30d7cdd8-517c-4d03-8c0d-fd8ecae75b29',100,'completed','2024-02-08 17:52:42','2024-02-08 17:52:42'),('d2fa05f0-1fea-4031-9801-80345ac85135','6bb7e87d-b68d-4f0c-a9c0-ad548f9226db',100,'complete','2024-01-30 21:55:28','2024-01-30 21:55:28'),('d854d989-2f3b-41aa-9d9e-8222d5107271','e0cd6c8c-de62-46f6-acde-eb02b7cc68b1',100,'completed','2024-02-17 14:34:23','2024-02-17 14:34:23'),('e692fa2e-1533-4f7d-a386-5bd48ce3da01','b01292e0-34e6-4ce8-906c-a9a658708fa0',100,'complete','2024-02-06 11:24:11','2024-02-06 11:24:11'),('f7a984d4-3be7-46ea-ab23-b0219425918e','d638e7c3-b50d-4122-9272-700d57c777be',100,'completed','2024-02-13 13:32:30','2024-02-13 13:32:30');
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
INSERT INTO `reservations` VALUES ('0ca85be4-1042-449c-91a4-88f2cf6faccc','d638e7c3-b50d-4122-9272-700d57c777be','f7a984d4-3be7-46ea-ab23-b0219425918e',5,'2024-02-13 13:32:30','2024-02-13 13:32:30'),('19a9b317-5a80-41d1-8206-936585def8b7','3ef50b4f-7833-4d8d-b5c7-ad86f3c948c5','52ff6cde-cdfd-4f71-b232-48a073e213bd',2,'2024-02-08 14:59:58','2024-02-08 14:59:58'),('42159ae0-2e18-40a5-a97c-bbfd9e497d8a','d8cc43ac-d5ea-434c-a544-2de77fb44df2','2cc998d8-a1d1-48e5-b10c-75d422e58f95',7,'2024-02-08 17:49:29','2024-02-08 17:49:29'),('549f9576-a311-4cab-a09e-3af602673818','30d7cdd8-517c-4d03-8c0d-fd8ecae75b29','85649e5b-ed10-4b45-a137-c14af1d701ac',7,'2024-02-08 17:52:42','2024-02-08 17:52:42'),('592bf641-ca59-46ae-939f-827d30e1ec3b','dde7c028-ce8f-4c06-a0f6-48016d3005af','296353d3-3832-47d3-9795-6b7e7542a85e',2,'2024-02-17 12:17:34','2024-02-17 12:17:34'),('8be4c932-88f0-4a25-8861-e55cc5601a29','e0cd6c8c-de62-46f6-acde-eb02b7cc68b1','d854d989-2f3b-41aa-9d9e-8222d5107271',5,'2024-02-17 14:34:23','2024-02-17 14:34:23'),('95a983bd-3918-44ca-bbc1-bed56fd5be02','b01292e0-34e6-4ce8-906c-a9a658708fa0','844c37d2-17ad-4916-9e7b-b9c8bcfb61fa',3,'2024-02-07 19:26:36','2024-02-07 19:26:36'),('997dc899-2706-4fd3-b319-332b0f8f30db','2444b80e-506a-4994-8897-50bcc7f636f7','55d0da22-1200-4f49-8305-1d096c87a841',2,'2024-01-30 17:50:19','2024-01-30 17:50:19'),('a8bffd2d-6a11-4ddc-b9b2-22d4db3174c2','ffaa3b1c-8ebf-45e2-abb3-84677f44e3c2','20ba779b-8878-4a17-a9f1-cbfbc3494232',3,'2024-02-17 12:34:53','2024-02-17 12:34:53'),('adebfa54-1c73-4f3f-bbca-5a4231d92869','4b5239e5-f67d-457a-8ee0-ba759744ce15','7339d109-a3a0-4ac3-8ac2-b02ae161d881',7,'2024-02-08 17:50:01','2024-02-08 17:50:01'),('badfc4b9-e1ee-4484-9cc4-4cfb52a8e9a8','2444b80e-506a-4994-8897-50bcc7f636f7','55d0da22-1200-4f49-8305-1d096c87a841',2,'2024-01-30 17:31:44','2024-01-30 17:31:44'),('e3c64590-9b0d-4ed8-87c0-3b226895b570','ae9abba3-b05d-415b-8989-0a3b1184b4f1','5d9012cf-6e2a-473a-8442-ff9402c783d3',2,'2024-02-08 17:59:34','2024-02-08 17:59:34'),('f90072d9-1d65-40e3-88ee-bb25867f2d25','85a6ea15-2dd0-49b8-b6e8-d18f69e925b1','123b0aba-176a-450d-91f7-2ec9e8e3ff29',5,'2024-02-10 16:49:47','2024-02-10 16:49:47');
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

-- Dump completed on 2024-03-29 12:55:46
