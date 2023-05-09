<?php 
require_once('database.php');
$db = $conn;
$register = $valid = $fnameErr = $lnameErr = $emailErr = $passErr = $cpassErr='';

$set_firstName= $set_lastName =$set_email='';


extract($_POST);
if(isset($_POST['Submit'])){


    $validName = "";
    $validEmail = "";
    $validcasePassword = "";
}
