<?php
    $servername = "185.185.40.33";
    $username = "root";
    $password = "root";
    $database = "esdm_db";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $database);

    date_default_timezone_set('Asia/Kuala_Lumpur');

    // Check connection
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }

    echo json_encode("{'message':'Connected successfully'}");
?>

