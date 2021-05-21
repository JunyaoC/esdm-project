<?php

include('../php-folder/connect.php');

$id = $_POST['id'];
$sidnum = (int)$id;

$plate = $_POST['plate'];
$ticket = $_POST['ticket'];
$tticket = (float)$ticket;

$comment_text = $_POST['comment_text'];

$sql = "INSERT INTO  tb_ticket(ticket_uID, vehiclePlateNo, ticketAmount, ticketDesc) 
		VALUES ( $sidnum , '$plate', $tticket ,  '$comment_text')"; 

$result = mysqli_query($conn,$sql);

	if (mysqli_query($conn, $sql)) {
  echo "Record updated successfully";
} else {
  echo "Error updating record: " . mysqli_error($conn);
}
var_dump($sql);

//mysqli_close($conn);

//header('Location: adminTicket.php');

?>