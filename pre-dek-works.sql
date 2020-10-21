-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 02, 2020 at 06:11 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pre-dek-works`
--

-- --------------------------------------------------------

--
-- Table structure for table `invite`
--

CREATE TABLE `invite` (
  `u_id` int(11) DEFAULT NULL,
  `work_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `invite`
--

INSERT INTO `invite` (`u_id`, `work_id`) VALUES
(3, 11),
(3, 12),
(35, 12),
(36, 12),
(33, 11),
(36, 11),
(35, 11),
(37, 11),
(35, 14),
(33, 13),
(36, 13);

-- --------------------------------------------------------

--
-- Table structure for table `partner`
--

CREATE TABLE `partner` (
  `p_id` int(11) NOT NULL,
  `p_name` varchar(200) NOT NULL,
  `p_position` varchar(200) NOT NULL,
  `p_type` varchar(200) NOT NULL,
  `p_detail_req` text NOT NULL,
  `p_welfare` text NOT NULL,
  `p_where` varchar(200) NOT NULL,
  `p_imgName` varchar(200) NOT NULL DEFAULT 'none'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `partner`
--

INSERT INTO `partner` (`p_id`, `p_name`, `p_position`, `p_type`, `p_detail_req`, `p_welfare`, `p_where`, `p_imgName`) VALUES
(1, 'Example', 'Example', 'Example', 'Example\r\nExample\r\nExample\r\nExample\r\nExample\r\nExample', 'Example\r\nExample\r\nExample', 'Example', 'none'),
(2, 'Example2', 'Example3', 'Example4', 'Example5Example26Example24', 'Example25 Example24Example25Example26', 'Example25', 'ownerUserIs_2.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `predekdetail`
--

CREATE TABLE `predekdetail` (
  `bday` bigint(20) NOT NULL DEFAULT current_timestamp(),
  `fname` varchar(64) NOT NULL,
  `lname` varchar(64) NOT NULL,
  `status` varchar(30) NOT NULL,
  `nationality` varchar(64) NOT NULL,
  `race` varchar(64) NOT NULL,
  `religion` varchar(64) NOT NULL,
  `sex` varchar(64) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `address` varchar(300) NOT NULL,
  `eLevel` enum('ระดับปริญญาตรี','ระดับปริญญาโท','ระดับปริญญาเอก') NOT NULL,
  `Faculty` varchar(200) NOT NULL,
  `Department` varchar(200) NOT NULL,
  `GPAX` float NOT NULL,
  `University` varchar(128) NOT NULL,
  `imgName` varchar(128) NOT NULL DEFAULT 'none',
  `u_id` int(11) NOT NULL,
  `confirm_status` varchar(20) NOT NULL DEFAULT 'none'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `predekdetail`
--

INSERT INTO `predekdetail` (`bday`, `fname`, `lname`, `status`, `nationality`, `race`, `religion`, `sex`, `phone`, `address`, `eLevel`, `Faculty`, `Department`, `GPAX`, `University`, `imgName`, `u_id`, `confirm_status`) VALUES
(1589907600000, 'Thapanon', 'Sodngam', 'โสด', 'thai', 'thai ', 'พุทธ', 'Man', '0612843886', '44 Garden place', '', 'E', 'CPE', 2.91, 'KMUTT', 'ownerUserIs_3.jpg', 3, 'confirm_pic_3.jpg'),
(1598012379912, 'aaa', 'aaaa', 'โสด', 'aaa', 'aaa', 'aaa', 'หญิง', 'aaa', 'aaaa', '', 'aaaa', 'aaa', 123, 'aaa', 'ownerUserIs_3.jpg', 3, 'confirm_pic_3.jpg'),
(1598013619200, 'aaa', 'aaa', 'โสด', 'asd', 'asd', 'asd', 'ชาย', '061284444', 'aaaaaaaaa', 'ระดับปริญญาโท', 'asdasd', 'asdad', 2.04, 'asdadad', 'ownerUserIs_3.jpg', 3, 'confirm_pic_3.jpg'),
(1598013654300, 'asd', 'asd', 'แต่งงานแล้ว', 'sd', 'sd', 'sd', 'ชาย', 'sdsd', 'asd', 'ระดับปริญญาตรี', 'asd', 'asd', 1, 'asd', 'ownerUserIs_3.jpg', 3, 'confirm_pic_3.jpg'),
(1598013721418, 'asd', 'asd', 'แต่งงานแล้ว', 'asdad', 'adsasd', 'asdasd', 'หญิง', 'asdasd', 'asdasd', 'ระดับปริญญาเอก', 'adsada', 'asdad', 1.2, 'adsasd', 'ownerUserIs_3.jpg', 3, 'confirm_pic_3.jpg'),
(1598014059291, 'asd', 'asd', 'แต่งงานแล้ว', 'asdad', 'asdsad', 'adsad', 'หญิง', 'asdada', 'asdad', 'ระดับปริญญาตรี', 'asdad', 'asdad', 2.1, 'adasda', 'ownerUserIs_3.jpg', 3, 'confirm_pic_3.jpg'),
(1598014286729, 'asd', 'asd', 'แต่งงานแล้ว', 'asd', 'asd', 'asda', 'ชาย', '123456', 'asdadasd', 'ระดับปริญญาโท', 'adssad', 'asdasd', 2.5, 'asdad', 'ownerUserIs_3.jpg', 3, 'confirm_pic_3.jpg'),
(959101200, 'test', 'test', 'แต่งงานแล้ว', 'test', 'test', 'test', 'ชาย', 'test', 'test', 'ระดับปริญญาตรี', 'test', 'test', 4, 'test', 'ownerUserIs_33.jpg', 33, 'none'),
(959101200000, 'แต่งงานแล้ว', 'test', 'โสด', 'NationalityChange', 'RaceChange', 'ReligionChange', 'ชาย', '0000000000', 'AddressChange', 'ระดับปริญญาโท', 'facultyChange', 'departmentChange', 4, 'UniversityChange', 'ownerUserIs_35.jpg', 35, 'confirm_pic_35.jpg'),
(1598115600000, 'FULL', 'SKILL', 'โสด', 'FULL', 'FULL', 'FULL', 'ชาย', '0XXXXXXXXX', 'DULL STACK', 'ระดับปริญญาเอก', 'FULL', 'FULL', 4, 'FULL', 'ownerUserIs_36.jpg', 36, 'none'),
(1598335909179, '-', '-', 'โสด', '-', '-', '-', 'ชาย', '-', '--', 'ระดับปริญญาตรี', '-', '-', 0, '-', 'ownerUserIs_37.jpg', 37, 'none'),
(1598355358557, 'ohhohh@oono', 'ohhohh@oono', 'แต่งงานแล้ว', 'ohhohh@oono', 'ohhohh@oono', 'ohhohh@oono', 'หญิง', '123456789', 'ohhohh@oono', 'ระดับปริญญาเอก', 'ohhohh@oono', 'ohhohh@oono', 123, 'ohhohh@oono', 'ownerUserIs_38.jpg', 38, 'none'),
(1598536295508, 'test', 'stesyyy', 'โสด', 'asdsad', 'asdsad', 'adasdsa', 'หญิง', '0612843857', 'asdasdsad', 'ระดับปริญญาโท', 'asdasd', 'asdasd', 2.97, 'asdsad', 'none', 39, 'none');

-- --------------------------------------------------------

--
-- Table structure for table `skill`
--

CREATE TABLE `skill` (
  `skill_id` int(11) NOT NULL,
  `skill_name` char(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `skill`
--

INSERT INTO `skill` (`skill_id`, `skill_name`) VALUES
(2, 'การบริหารเวลา'),
(3, 'การเรียนรู้ตลอดชีวิต'),
(4, 'ความฉลาดทางอารมณ์'),
(5, 'ความสามารถในการปรับตัว'),
(6, 'การทำงานร่วมกับผู้อื่น'),
(7, 'การสื่อสาร'),
(8, 'การแก้ไขปัญหาที่มีความซับซ้อน'),
(9, 'การคิดเชิงวิเคราะห์และการตัดสินใจ'),
(10, 'ความคิดสร้างสรรค์');

-- --------------------------------------------------------

--
-- Table structure for table `skill_req`
--

CREATE TABLE `skill_req` (
  `work_id` int(11) DEFAULT NULL,
  `skill_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `skill_req`
--

INSERT INTO `skill_req` (`work_id`, `skill_id`) VALUES
(0, 2),
(0, 3),
(0, 4),
(0, 5),
(0, 6),
(0, 7),
(0, 2),
(0, 3),
(0, 4),
(0, 5),
(0, 6),
(0, 7),
(0, 4),
(0, 6),
(0, 7),
(0, 5),
(0, 4),
(0, 3),
(0, 6),
(0, 4),
(0, 3),
(0, 6),
(0, 4),
(0, 3),
(0, 6),
(0, 4),
(0, 3),
(0, 2),
(0, 4),
(0, 6),
(10, 3),
(10, 4),
(10, 5),
(10, 6),
(10, 7),
(11, 2),
(11, 10),
(12, 8),
(13, 5),
(14, 3),
(14, 2),
(14, 5),
(14, 9),
(15, 2),
(15, 3),
(15, 4),
(15, 5),
(15, 6);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `u_id` int(11) NOT NULL,
  `u_email` varchar(64) NOT NULL,
  `u_password` char(128) NOT NULL,
  `u_role` enum('admin','pre-dek','work','') NOT NULL,
  `activate_status` enum('unsuccess','success') NOT NULL DEFAULT 'unsuccess'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`u_id`, `u_email`, `u_password`, `u_role`, `activate_status`) VALUES
(1, 'admin@mail.com', '$2b$10$bSIZtJXJcDdsSEpZmHY0CO9hs0XSsdXuircyTbkDMt.Dpwna8DatS', 'admin', 'success'),
(3, 'test02@mail.com', '$2b$10$5DjyVfoTVBaj8Lecu5l./ugMAYZ4ZxhW9zAqQbRp1MKLUuKqJVI8a', 'pre-dek', 'success'),
(4, 'test3@mail.com', '$2b$10$ABCwdyajpMGf.Xmb6tJveOoekL0Xhh.n5RSeUdzwoqxfSIwZZ086a', 'work', 'success'),
(5, 'test04@mail.com', '$2b$10$2SOjzdq18BxopjnEPp2E2upI7DlxGTKq39HUT8HjkJ9eyW7lKemd2', 'pre-dek', 'success'),
(6, 'test05@mail.com', '$2b$10$2SOjzdq18BxopjnEPp2E2upI7DlxGTKq39HUT8HjkJ9eyW7lKemd2', 'work', 'success'),
(33, 'test@test', '$2b$10$gbjRE5CzK4RXFifALr/.mO1iQJmZ0JrGZ0M6h.CxmmsWCfYYXJyju', 'pre-dek', 'success'),
(34, 'test06@mail.com', '$2b$10$Ik/ThA8Y.S1civxPfqCbcOQ4BCafLk2OncolNSEDywQvLaiN7zAru', 'pre-dek', 'unsuccess'),
(35, 'admin01', '$2b$10$tpc5DgPOmP904BOYLq/f8eQFRDHyuXyxmhsYtE6m/E4zMkV3uCAzO', 'pre-dek', 'success'),
(36, 'fullskill@mail.com', '$2b$10$DBJkEQDIAm.ecKvhnyJN3ObniuNngtDKS5KVC3gLOcULFdxkc12k2', 'pre-dek', 'success'),
(37, '123@123.com', '$2b$10$SJs3.PpI./fP6VzSWZDOu./NafEs.5WpUGfzadTZmvKc/gT9qPR0a', 'pre-dek', 'success'),
(38, 'ohhohh@oono', '$2b$10$VvHSwKCv/IolCBxo32Xf0OxLelocxovn4JhGIEWYYzaaIiwW2mKUe', 'pre-dek', 'success'),
(39, 't', '$2b$10$xzX9ReM/k9KrGu1iRt3ec.ki96pFQduJ8/tkvnM.aTL4aeAcPbUHy', 'pre-dek', 'success');

-- --------------------------------------------------------

--
-- Table structure for table `user_skill`
--

CREATE TABLE `user_skill` (
  `u_id` int(11) NOT NULL,
  `skill_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_skill`
--

INSERT INTO `user_skill` (`u_id`, `skill_id`) VALUES
(3, 5),
(3, 6),
(3, 7),
(3, 2),
(3, 7),
(3, 4),
(3, 6),
(3, 5),
(33, 4),
(33, 6),
(33, 7),
(33, 5),
(33, 3),
(33, 2),
(1, 1),
(1, 10),
(1, 5),
(35, 2),
(35, 3),
(35, 4),
(35, 5),
(35, 6),
(35, 7),
(35, 8),
(35, 9),
(35, 10),
(3, 8),
(36, 2),
(36, 3),
(36, 4),
(36, 5),
(36, 6),
(36, 7),
(36, 8),
(36, 9),
(36, 10),
(37, 2),
(37, 3),
(37, 4),
(37, 5),
(38, 6),
(38, 5),
(38, 3),
(39, 7),
(39, 3),
(39, 8),
(39, 10);

-- --------------------------------------------------------

--
-- Table structure for table `work`
--

CREATE TABLE `work` (
  `com_id` int(11) NOT NULL,
  `com_name` varchar(128) NOT NULL,
  `com_address` varchar(300) NOT NULL,
  `com_phone` varchar(11) NOT NULL,
  `u_id` int(11) DEFAULT NULL,
  `imgName` varchar(128) NOT NULL DEFAULT 'none',
  `fname` varchar(128) NOT NULL,
  `lname` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `work`
--

INSERT INTO `work` (`com_id`, `com_name`, `com_address`, `com_phone`, `u_id`, `imgName`, `fname`, `lname`) VALUES
(1, 'sdsad', 'Example Address ', '0000000000', 4, 'ownerUserIs_4.jpg', 'test', 'test');

-- --------------------------------------------------------

--
-- Table structure for table `work_list`
--

CREATE TABLE `work_list` (
  `work_id` int(11) NOT NULL,
  `workname` varchar(64) DEFAULT NULL,
  `time` varchar(64) DEFAULT NULL,
  `countmax` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `timework` varchar(64) DEFAULT NULL,
  `freeday` varchar(64) DEFAULT NULL,
  `agemax` int(11) DEFAULT 100,
  `agemin` int(11) DEFAULT 0,
  `sex` varchar(64) DEFAULT NULL,
  `eLevel` enum('ระดับปริญญาตรี','ระดับปริญญาโท','ระดับปริญญาเอก') DEFAULT NULL,
  `com_id` int(11) DEFAULT NULL,
  `interviewDay` bigint(20) NOT NULL,
  `daykey` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `work_list`
--

INSERT INTO `work_list` (`work_id`, `workname`, `time`, `countmax`, `price`, `timework`, `freeday`, `agemax`, `agemin`, `sex`, `eLevel`, `com_id`, `interviewDay`, `daykey`) VALUES
(11, 'test', '4', 30, 50000, '8', 'ส.-อ.', 100, 15, 'ชาย', 'ระดับปริญญาโท', 1, 1600189200000, 1598177563218),
(12, 'test02', '8', 5, 2000, '15', 'ส.-อา.', 100, 16, 'ชาย', 'ระดับปริญญาตรี', 1, 1598547600000, 1598177665715),
(13, 'test03', 'asdsad', 10, 30000, '8', 'NO', 100, 15, 'หญิง', 'ระดับปริญญาโท', 1, 1598806800000, 1598193739460),
(14, 'FinalTest', '3', 12, 15000, '8', 'ส.-อา.', 35, 21, 'หญิง', 'ระดับปริญญาโท', 1, 1598365668033, 1598365733001),
(15, '555555', '5', 15, 15000, '7', '-', 100, 25, 'ชาย', 'ระดับปริญญาตรี', 1, 1598498857731, 1598498892325);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `partner`
--
ALTER TABLE `partner`
  ADD PRIMARY KEY (`p_id`);

--
-- Indexes for table `skill`
--
ALTER TABLE `skill`
  ADD PRIMARY KEY (`skill_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`u_id`);

--
-- Indexes for table `work`
--
ALTER TABLE `work`
  ADD PRIMARY KEY (`com_id`);

--
-- Indexes for table `work_list`
--
ALTER TABLE `work_list`
  ADD PRIMARY KEY (`work_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `partner`
--
ALTER TABLE `partner`
  MODIFY `p_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `skill`
--
ALTER TABLE `skill`
  MODIFY `skill_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `u_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `work`
--
ALTER TABLE `work`
  MODIFY `com_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `work_list`
--
ALTER TABLE `work_list`
  MODIFY `work_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
