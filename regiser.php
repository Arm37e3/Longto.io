<?php
 define('server','localhost');
 define('name','root');
 define('password','');
 define('db','lognto');
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">


</head>

<body>
    <div class="container">
        <?php
         // connect to the MySQL database
            $conn = mysqli_connect(server, name, password,db);

            // check for form submission
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // retrieve the user's information from the form
            $username = mysqli_real_escape_string($conn, $_POST["username"]);
            $email = mysqli_real_escape_string($conn, $_POST["email"]);
            $password = mysqli_real_escape_string($conn, $_POST["password"]);
            $confirm_password = mysqli_real_escape_string($conn, $_POST["confirm_password"]);
            $address = mysqli_real_escape_string($conn, $_POST["address"]);

            // validate the user's input
            if (empty($username) || empty($password) || empty($confirm_password) || empty($address)) {
                // handle empty fields
            } else if ($password != $confirm_password) {
                // handle password mismatch
            } else {
                // insert the user's information into the database
                $hashed_password = password_hash($password, PASSWORD_DEFAULT);
                $query = "INSERT INTO user (username,email,password,address) VALUES ('$username','$email','$hashed_password','$address')";
                mysqli_query($conn, $query);

                // redirect the user to the login page
                // header("Location: login.php");
                echo"<script>window.location.href='index.html'</script>";
      }
    }
    ?>

        <form action="" method="post">
            <H1 style="text-align: center;">Register</H1>
            <div class="form-group">
                <input type="text" class="form-control" name="username" placeholder="Username:">
            </div>
            <div class="form-group">
                <input type="email" class="form-control" name="email" placeholder="Email:">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" name="password" placeholder="Password:">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" name="confirm_password" placeholder="Repeat Passwords">
            </div>
            <div class="form-group">
                <input type="address" class="form-control" name="address" placeholder="Address">
            </div>
            <div class="form-btn">
                <input type="submit" class="btn btn-primary" value="Register" name="submit">
            </div>
            <a href="login.php"class="link-secondary" >Login</a>
        </form>
    </div>
</body>

</html>