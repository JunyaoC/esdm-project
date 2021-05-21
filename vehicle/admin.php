<?php

include('../php-folder/connect.php');


$sqln = "SELECT * FROM tb_sticker
         LEFT JOIN tb_vehicle ON tb_vehicle.vehicleID = tb_sticker.vehiclePlateNo
         ";
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

<!-- <main id="main">

<div class="container">
      <h2>Sticker Application</h2> 
      


  </div>
  
 
   </main>
 -->
<section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>ADMIN</h2>
          <p>Admin menu</p>
        </div>

      <div class="row icon-boxes">
        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="200">
          <div class="icon-box">
            <div class="icon"><i class="ri-stack-line"></i></div>
            <h4 class="title"><a href="adminSticker.php">Approve Sticker</a></h4>
            <p class="description">Approve Sticker Application that been submitted by the student</p>
          </div>
        </div>

        

        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="400">
          <div class="icon-box">
            <div class="icon"><i class="ri-command-line"></i></div>
            <h4 class="title"><a href="adminTix.php">Add Ticket</a></h4>
            <p class="description">Add ticket that the student get</p>
          </div>
        </div>
      </div>
    </div>
    </section>


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


<!--   MODAL for Register -->
  <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
      <!-- Modal Header -->
        <div class="modal-header">
          <h4 style="align-self: "> Update Application </h4>
          <button type="button btn-primary" class="close" data-dismiss="modal">×</button>
        </div>
        <!-- Modal body -->
        <div class="modal-body">
        <form method="POST" action="stickerprocess.php">


        <div class="form-group">
        <label for="Role">Role</label> <br>
        
        <select class="form-control" id="status" name="status">
               
               <option value= 'Activate'>Activate</option>
               <option value= 'Rejected'>Rejected</option>
               <option value= 'Payment Pending'>Payment Pending</option>
        
                </div>

        <input type="hidden"  id="sid" name="sid" value= "<?php echo $a; ?>'">
        <br><br>
        
        </div>
           <!-- Modal footer -->
        <div class="modal-footer">
        <button type="submit" class="button btn-info">Update</button>
        </form>
        </select>

        <button type="button" class="button btn-danger" data-dismiss="modal">Close</button>
        </div>         
            </div>
            </div>
        </div>



</body>

</html>