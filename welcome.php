<?php
// Start a session to maintain user login state
session_start();

// Check if the user is logged in
if (!isset($_SESSION["user"])) {
    // If not logged in, redirect to the login page
    header("Location: login.php");
    exit();
}

// You can access user information from the session like this:
$user = $_SESSION["user"];
?>

<!DOCTYPE html>
<html>
<head>
    <title>Resume Builder</title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    <!-- Add additional CSS styles here as needed -->
    <style>
        /* Custom CSS styles for the home page */
        body {
            display: flex;
            flex-direction: column;
            min-height: 100vh; /* Make the body at least the height of the viewport */
            margin: 0;
        }

        .jumbotron {
            background-image: url('images/background.jpg'); /* Replace with your background image */
            background-size: cover;
            color: black;
            text-align: center;
            padding: 150px 0; /* Add padding to center content vertically */
        }

        .btn-browse-templates {
            background-color: blue;
            border: none;
            color: white;
        }

        .btn-browse-templates:hover {
            background-color: #357ebd;
        }

        .container {
            flex: 1; /* Expand to fill available vertical space */
        }

        .footer {
            background-color: #f5f5f5;
            padding: 20px 0;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="jumbotron">
        <div class="container">
            <h1>Welcome to ResBil</h1>
            <p>Create a professional resume in minutes.</p>
            <p>
                <a href="/RESBIL/templates/templates.html" class="btn btn-lg btn-browse-templates">Browse Resume Templates</a>
            </p>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <h2>Build Your Resume</h2>
                <p>Create a customized resume tailored to your needs.</p>
            </div>
            <div class="col-md-4">
                <h2>Easy to Use</h2>
                <p>Our user-friendly interface makes resume building a breeze.</p>
            </div>
            <div class="col-md-4">
                <h2>Get Hired</h2>
                <p>Stand out from the crowd and land your dream job.</p>
            </div>
        </div>
    </div>

    <footer class="footer">
        <p>&copy; 2023 Resume Builder</p>
    </footer>
</body>
</html>
