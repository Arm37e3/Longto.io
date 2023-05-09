<?php
    $hostName = "localhost";
    $dbName = "root";
    $dbPassword = "";
    $dbAddress = "";
    $dbName ="1ognto";   
     
    $conn = mysqli_connect($hostName, $dbUser, $dbPassword, $dbName, $dbAddress);
    $this->conn = $conn;
    
    if (!$conn){
        die("Something went wrong;");
    }

?>L=