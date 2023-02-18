<?php
    // getting all values from the HTML form
    if(isset($_POST['submit']))
    {
        $name = $_POST['name'];
        $email = $_POST['email'];
		$message = $_POST['message'];
    }

    // database details
    $host = "localhost";
    $username = "root";
    $password = "";
    $dbname = "ProAssemblage";

    // creating a connection
    $con = mysqli_connect($host, $username, $password, $dbname);

    // to ensure that the connection is made
    if (!$con)
    {
        die("Connection failed!" . mysqli_connect_error());
    }

    // using sql to create a data entry query
    $sql = "INSERT INTO test (id, name, email, message) VALUES ('0', '$name', '$email', '$message')";
  
    // send query to the database to add values and confirm if successful
    $rs = mysqli_query($con, $sql);
    if($rs)
    {
        
    }
    // close connection
    mysqli_close($con);
?>

