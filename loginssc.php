<?php
// Replace these values with your actual database credentials
$servername = "localhost";
$username = "root";
$database = "test";

// Create a connection to the database
$conn = new mysqli($servername, $username, 'Slimshady@03', $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get user input from the form
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Perform SQL query to check user credentials
    $sql = "SELECT * FROM resbil WHERE email = '$email' AND password = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        // User authentication successful
        // Start a session to maintain user login state
        session_start();

        // Store user information in the session (you may fetch additional data as needed)
        $_SESSION["user"] = $result->fetch_assoc();

        // Redirect to the welcome page
        header("Location: welcome.php");
        exit();
    } else {
        // User authentication failed
        // Set the error message in a session variable
        session_start();
        $_SESSION["error_message"] = "Invalid email or password. Please try again.";
        header("Location: login.php");
    }
}

// Close the database connection
$conn->close();
?>
