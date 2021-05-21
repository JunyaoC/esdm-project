<?php

    include('../php-folder/connect.php');

    $sid = $_POST['sid'];
    $stats = $_POST['status'];
    $sidnum = (int)$sid;
   
     //UPDATE STATUS
    $sql = "UPDATE tb_sticker
            SET stickerStatus = '$stats'
            WHERE stickerID = '$sidnum' ";

  //var_dump($sql);     



    mysqli_query($conn,$sql);
    mysqli_close($conn);     

   header('Location:adminSticker.php');
