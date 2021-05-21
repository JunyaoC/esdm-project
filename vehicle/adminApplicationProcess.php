<?php

include('../php-folder/connect.php');


$eval = $_POST['eval'];
$prop = $_POST['prop'];

$fstatus = $_POST['fstatus'];

$sqly = "UPDATE  psm_proposal
        SET propStatus='$fstatus'
        WHERE propID='$prop'";  

$result = mysqli_query($con,$sqly);

	if($result)
	{
		echo '<script type="text/javascript"> alert("Data Updated") </script>';
	}
	else
	{
		echo '<script type="text/javascript"> alert("Data Not Updated") </script>';
	}

mysqli_close($con);

header('Location: evaluator.php?id='.$eval.'');

?>