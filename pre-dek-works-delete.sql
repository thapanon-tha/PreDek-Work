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
