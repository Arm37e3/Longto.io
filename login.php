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
        <meta name="viewport" content="width=device, initial-scale=1.0">
        <title>Login</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <?php
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Connect to the database
  $conn = mysqli_connect(server, name, password,db);

  // Check if username and password match
  $query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
  $result = mysqli_query($conn, $query);

  if (mysqli_num_rows($result) == 1) {
    // User found, set session variable and redirect to homepage
    $_SESSION['username'] = $username;
    header('Location: index.php');
  } else {
    // Invalid username or password, show error message
    $error = 'Invalid username or password';
  }
}
?>

        <div class="container">
            <form action="login.php" method="post">
                <h1 style="text-align: center;">Login</h1><br>
                <div class="form-group">
                    <input type="email" placeholder="Email:"name="email" class="form-control">
                </div>
                <div class="form-group">
                    <input type="password" placeholder="Password:"name="password" class="form-control">
                </div>
                <div class="from-btn">
                    <input type="submit" value="Login" class="btn btn-primary">
                </div>
            </form>
        </div>
    </body>
</html>