<?php

include('../php-folder/connect.php');


$sqln = "SELECT * FROM tb_sticker";
$resultn=mysqli_query($conn,$sqln);
//$rown = mysqli_fetch_array($resultn);

  ?>
  
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>UTMSMART</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="assets/img/favicon.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/icofont/icofont.min.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
  <link href="assets/vendor/venobox/venobox.css" rel="stylesheet">
  <link href="assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/style.css" rel="stylesheet">

  <!-- =======================================================
  * Template Name: OnePage - v2.2.2
  * Template URL: https://bootstrapmade.com/onepage-multipurpose-bootstrap-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
</head>

<body>

  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

      <h1 class="logo mr-auto"><a href="index.html">UTMSmart</a></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li class="active"><a href="index.html">Home</a></li>
          <li><a href="#about">Sticker</a></li>
          <li><a href="#services">Application</a></li>
          <li><a href="#portfolio">Traffic Ticket</a></li>
          

        </ul>
      </nav><!-- .nav-menu -->

      <a href="#about" class="get-started-btn scrollto">Logout</a>

    </div>
  </header><!-- End Header -->

<main id="main">

<div class="container">
      <h2>Sticker Application</h2> 
      <div class="table-responsive">         
      <table class="table table-hover">
 
        <thead>
            <tr>
              <th>Student Name</th>
              <th>Student Matric</th>              
              <th>Vehicle Plate</th>
              <th>Sticker Date</th>
              <th>Status</th>
              <th>Operation</th>
            </tr>
        </thead>

        <tbody>

    
        <?php
            while ($rown=mysqli_fetch_array($resultn))
            {
              echo "<tr>";
              echo "<td>".$rown['student_name']."</td>";
              echo "<td>".$rown['student_matric']."</td>";
              echo "<td>".$rown['vehiclePlateNo']."</td>";
              echo "<td>".$rown['stickerDate']."</td>";
              echo "<td>".$rown['stickerStatus']."</td>";
              //echo "<td>".$rown['']."</td>";              
              echo "</tr>";
            }
        ?>
        </tbody>

   
      </table>
    </div>
  </div>
  
 


   

  <a href="#" class="back-to-top"><i class="ri-arrow-up-line"></i></a>
  <div id="preloader"></div>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/jquery/jquery.min.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/jquery.easing/jquery.easing.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>
  <script src="assets/vendor/waypoints/jquery.waypoints.min.js"></script>
  <script src="assets/vendor/counterup/counterup.min.js"></script>
  <script src="assets/vendor/venobox/venobox.min.js"></script>
  <script src="assets/vendor/owl.carousel/owl.carousel.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>

</body>

</html>