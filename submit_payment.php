<?php // Database connection
$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "celestia_funs"; 

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$fullName = $_POST['fullName'];
$collegeId = $_POST['collegeId'];
$amount = $_POST['amount'];
$upiRefNo = $_POST['upiRefNo'];

// Prepare the SQL query to insert data into the 'reddy' table
$sql = "INSERT INTO reddy (full_name, college_id, amount, upi_ref_no) 
        VALUES ('$fullName', '$collegeId', '$amount', '$upiRefNo')";

// Execute the query
if ($conn->query($sql) === TRUE) {
    echo "Payment details saved successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the connection
$conn->close();
?>
