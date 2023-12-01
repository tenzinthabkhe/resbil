<?php
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$gender = $_POST['gender'];
$email = $_POST['email'];
$password = $_POST['password'];
$number = $_POST['number'];

// Database connection
$conn = new mysqli('localhost', 'root', 'Slimshady@03', 'test');
if ($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection Failed : " . $conn->connect_error);
} else {
    // Check if the email already exists in the database
    $check_stmt = $conn->prepare("SELECT email FROM resbil WHERE email = ?");
    $check_stmt->bind_param("s", $email);
    $check_stmt->execute();
    $check_stmt->store_result();

    if ($check_stmt->num_rows > 0) {
        // Email already exists, show an error or handle it as needed
        echo "Email already registered. Please choose another email.";
    } else {
        // Email is unique, proceed with registration
        $stmt = $conn->prepare("INSERT INTO resbil (firstName, lastName, gender, email, password, number) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sssssi", $firstName, $lastName, $gender, $email, $password, $number);
        $stmt->execute();
        $stmt->close();
        $conn->close();

        header("Location: login.php");
        exit();
    }

    $check_stmt->close();
}
?>
