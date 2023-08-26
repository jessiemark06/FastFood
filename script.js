

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["orcl"];
    $password = $_POST["orcl"];
    $email = $_POST["email"];
    
    // Validate data and perform any necessary sanitization
    
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT); // Hash the password
    
    // Using a prepared statement to insert data securely
    $stmt = mysqli_prepare($conn, "INSERT INTO users (username, password, email) VALUES (?, ?, ?)");
    mysqli_stmt_bind_param($stmt, "sss", $username, $hashedPassword, $email);
    
    mysqli_stmt_close($stmt);
}

// Close the database connection
mysqli_close($conn);
