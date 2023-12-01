<!DOCTYPE html>
<html>
  <head>
    <title>Login Page</title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
  </head>
  <body>
    <div class="container">
      <div class="row col-md-6 col-md-offset-3">
        <div class="panel panel-primary">
          <div class="panel-heading text-center">
            <h1>Login</h1>
          </div>
          <div class="panel-body">
            <form action="loginssc.php" method="post">
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  name="email"
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <div class="input-group">
                  <input
                      type="password"
                      class="form-control"
                      id="password"
                      name="password"
                      required
                  />
                  <div class="input-group-append">
                      <span class="input-group-text">
                          <i
                              id="togglePassword"
                              class="fa fa-eye-slash"
                              onclick="togglePasswordVisibility()"
                          ></i>
                      </span>
                  </div>
                </div>
              </div>
              <a href="forgot_password.php">Forgot Password?</a>
              <br/>
              <div class="text-center">
              <input type="submit" class="btn btn-primary" value="Login" />
              </div>
              <?php
              session_start();

              // Display error message if it exists
              if (isset($_SESSION["error_message"])) {
                  echo '<p class="text-danger">' . htmlspecialchars($_SESSION["error_message"]) . '</p>';
              // Clear the error message from the session
                  unset($_SESSION["error_message"]);
              }
              ?>
            </form>
          </div>
          <div class="panel-footer text-center">
            <small>&copy; ResBil</small>
          </div>
        </div>
      </div>
    </div>
    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    </div>

    <script>
    function togglePasswordVisibility() {
      var passwordField = document.getElementById("password");
      var toggleIcon = document.getElementById("togglePassword");

      if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.className = "fa fa-eye";
      } else {
        passwordField.type = "password";
        toggleIcon.className = "fa fa-eye-slash";
      }
    }
      </script>
  </body>
</html>